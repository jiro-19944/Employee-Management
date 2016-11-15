var router = require('./router');

module.exports = function (app) {
	console.log("indexxxxxxxxxxxxxx");
	app.use('/', router());
};