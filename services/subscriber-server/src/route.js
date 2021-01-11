const express = require('express');
const { subscriberController } = require('./controller');

const subscriber = express.Router();

subscriber.post('/subscribe/:topic', subscriberController);


module.exports = subscriber;