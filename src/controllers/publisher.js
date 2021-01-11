const redis = require('redis');
const axios = require('axios');
const publisher = redis.createClient();


const publisherController = (req, res) => {
  
    const data = {
        topic: req.params.topic,
        msg: req.body.message 
    };

    publisher.hgetall(data.topic, (err, subs) => {
    
        if (subs) {
            const subscribers = JSON.parse(subs.url);
            (async () => {
                for (const subscriber of subscribers) {
                    try {
                        await axios.post(subscriber, { data: data });
                    } catch (error) {
                        console.log(error);
                    } 
                }
            })();
        }
    });
    
    return res.status(201).json({ 
        success: true, 
        message: "topic published successfully"
    });
    
}


 module.exports = { publisherController };