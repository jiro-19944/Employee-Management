module.exports.databaseError = function() {
	console.log('database error');
	return {
        errorCode: '500',
        errorMessage: 'Internal Server Error',
        message: 'Our service team is working to bring it back online.'
    };
};

module.exports.collectionError = function() {
	console.log('database collection error');
};

module.exports.callbackError = function() {
	console.log('There is an issue related to nodejs callback function');
};

module.exports.pageNotFound = function() {
    return {
        errorCode: '404',
        errorMessage: 'Page Not Found',
        message: 'The requested resource could not be found.'
    };
}