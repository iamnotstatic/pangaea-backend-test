const redis = require('redis');
const publisher = redis.createClient();


const publisherController = (req, res) => {
  
    const data = {
        topic: req.params.topic,
        msg: req.body.message 
    };

    publisher.publish(req.params.topic, JSON.stringify(data));
    
    return res.status(201).json({ 
        success: true, 
        message: "topic published successfully"
    });
    
}


 module.exports = { publisherController };