var express = require('express');
var router = express.Router();
var controller = require('./controller');

module.exports = function() 
{
	router.get('/', controller.get);
	console.log("router1111111111111111");
	router.post('/post', controller.post);

	return router;
};
