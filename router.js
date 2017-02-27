var express = require('express');
var router = express.Router();
var controller = require('./controller');

module.exports = function() 
{
	router.get('/', controller.home);
	router.post('/signIn', controller.signIn);
	router.post('/signUp', controller.signUp);

	return router;
};