const redis = require('redis');
const axios = require('axios');
const client = redis.createClient();

const subscribeToTopic = (req, res, next) => {
	client.hgetall(req.params.topic, (err, subs) => {
		if (!subs) {
			const arr = [req.body.url];

			client.hmset(req.params.topic, ['url', JSON.stringify(arr)], (err, res) => {
					if (err) {
						console.log(err);
					}
				}
			);
		} else {
			let data = JSON.parse(subs.url);
			data.push(req.body.url);

			client.hmset(
				req.params.topic,
				['url', JSON.stringify(data)],
				(err, res) => {
					if (err) {
						console.log(err);
					}
				}
			);
		}
	});

	return res.status(201).json({ url: req.body.url, topic: req.params.topic });
};


const publishTopic = (req, res, next) => {
	const data = {
		topic: req.params.topic,
		data: req.body,
	};

	client.hgetall(data.topic, (err, subs) => {
		if (subs) {
			const subscribers = JSON.parse(subs.url);
			(async () => {
				for (const subscriber of subscribers) {
					try {
						await axios.post(subscriber, data);
					} catch (error) {
						console.log(error);
					}
				}
			})();
		}
	});

	return res.status(201).json({
		success: true,
		message: 'published successfully',
	});
};

module.exports = { publishTopic, subscribeToTopic };