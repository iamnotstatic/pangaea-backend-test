const express = require('express');

const subscriber = express.Router();

/**
 * Assume for the test that all requests to any route is from publisher server
 * Listening to all results to the server
 */
subscriber.post('*', (req, res, next) => {
	console.log(req.body);

	res.status(200).send({ message: 'Received Notification' });
});

module.exports = subscriber;