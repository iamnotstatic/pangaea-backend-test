const express = require('express');
const { publisherController } = require('./controller');

const publisher = express.Router()

publisher.post('/publish/:topic', publisherController);


module.exports = publisher;