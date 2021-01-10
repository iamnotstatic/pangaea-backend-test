const express = require('express');
const { publisherController } = require('../controllers/publisher');

const publisher = express.Router()

publisher.post('/publish/:topic', publisherController);


module.exports = publisher;
