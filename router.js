var express = require('express');
var router = express.Router();
var controller = require('./controller');

module.exports = function() {
	router.get('/', controller.home);
	router.get('/forgot', controller.forgot);
	router.post('/signIn', controller.signIn);
	router.post('/signUp', controller.signUp);
	router.post('/checkUsername', controller.checkUsername);
	router.post('/updatePass', controller.updatePass);
	router.all('/*', controller.pageNotFound);

	return router;
};