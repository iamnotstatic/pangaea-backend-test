const redis = require('redis');
const subscriber = redis.createClient();

const subscriberController = (req, res) => {

    subscriber.subscribe(req.params.topic);

    return res.status(201).json({url: req.body.url, topic: req.params.topic});
}



 module.exports = { subscriberController };