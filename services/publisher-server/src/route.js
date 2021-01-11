const express = require('express');
const { publishTopic, subscribeToTopic } = require('./controller');

const publisher = express.Router();

publisher.post('/publish/:topic', publishTopic);

publisher.post('/subscribe/:topic', subscribeToTopic);

module.exports = publisher;