var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/employeeManagement";
var mongoDB = {};

module.exports = {
	connectToDB: function() {
		console.log("conecttttttttttttttttt");
		MongoClient.connect(url, function(err, db) {
		    if(err) {
		    	return console.dir(err);
		    }
			mongoDB = db;
	    });
		return true;
	},

	getDB: function() {
		console.log("get ------------------");
		return mongoDB;
	}
};