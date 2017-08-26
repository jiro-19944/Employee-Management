var router = require('./router');

module.exports = function (app) {
	app.use('/user', router.user());
	app.use('/', router.home());
};