const express = require('express');
const { subscriberController } = require('../controllers/subscriber');

const subscriber = express.Router();

subscriber.post('/subscribe/:topic', subscriberController);


module.exports = subscriber;
