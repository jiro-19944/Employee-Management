var mongoose = require('mongoose'),
	url = "mongodb://localhost/employeeManagement";
mongoose.Promise = global.Promise;
mongoose.connect(url);

module.exports = mongoose;