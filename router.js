var express = require('express');
var router = express.Router();
var controller = require('./controller');
var db = require("./db");
var isDbConnected;
if(!isDbConnected)
{
	isDbConnected = db.connectToDB(isDbConnected);
}

module.exports = function() 
{
	router.get('/', controller.home);
	router.get('/forgot', controller.forgot);
	router.post('/signIn', controller.signIn);
	router.post('/signUp', controller.signUp);
	router.post('/checkUsername', controller.checkUsername);

	return router;
};