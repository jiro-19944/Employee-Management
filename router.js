var express = require('express'),
	homeRouter = express.Router(),
	userRouter = express.Router(),
	userController = require('./userController'),
	dataController = require('./dataController');

module.exports.user = function() {
	userRouter.get('/forgot', userController.forgot);
	userRouter.post('/signIn', userController.signIn);
	userRouter.post('/signUp', userController.signUp);
	userRouter.get('/signOut', userController.signOut);
	userRouter.post('/checkUsername', userController.checkUsername);
	userRouter.post('/updatePass', userController.updatePass);

	return userRouter;
};

module.exports.home = function() {
	homeRouter.get('/', dataController.home);
	homeRouter.all('/*', dataController.pageNotFound);

	return homeRouter;
};