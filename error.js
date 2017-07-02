module.exports.databaseError = function(dbName) {
	console.log('database connecting error');
};

module.exports.collectionError = function() {
	console.log('database collection error');
}

module.exports.callbackError = function() {
	console.log('There is an issue related to nodejs callback function');
}