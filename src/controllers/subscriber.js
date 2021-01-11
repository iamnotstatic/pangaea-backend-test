const redis = require('redis');
const subscriber = redis.createClient();

const subscriberController = (req, res) => {

    subscriber.hgetall(req.params.topic, (err, subs) => {
    
        if (!subs) {
            const arr = [req.body.url];

             subscriber.hmset(req.params.topic, ["url", JSON.stringify(arr)], (err, res) => {
                if (err) {
                    console.log(err);
                }
            });
        } else {
            
            let data = JSON.parse(subs.url);
            data.push(req.body.url);
            
            subscriber.hmset(req.params.topic, ["url", JSON.stringify(data)], (err, res) => {
                if (err) {
                    console.log(err);
                }
            }); 
        }
    });

    return res.status(201).json({url: req.body.url, topic: req.params.topic});
}



 module.exports = { subscriberController };