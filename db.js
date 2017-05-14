var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/employeeManagement";
var mongoDB = {};

module.exports = {
	connectToDB: function() {
		MongoClient.connect(url, function(err, db) {
		    if(err) {
		    	return console.dir(err);
		    }
			mongoDB = db;
	    });
		return true;
	},

	getDB: function() {
		return mongoDB;
	}
};