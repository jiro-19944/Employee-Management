var express = require('express');
var router = express.Router();
var controller = require('./controller');

module.exports = function() 
{
	router.get('/', controller.home);
	console.log("router1111111111111111");
	router.post('/signIn', controller.signIn);
	router.post('/signUp', controller.signUp);

	return router;
};