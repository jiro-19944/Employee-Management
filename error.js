module.exports.wrongDB = function(dbName) {
	console.log(dbName + ' database does not exist');
};

module.exports.callbackError = function() {
	console.log('There is an issue related to nodejs callback function');
}