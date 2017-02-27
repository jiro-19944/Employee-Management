var router = require('./router');

module.exports = function (app) {
	app.use('/', router());
};