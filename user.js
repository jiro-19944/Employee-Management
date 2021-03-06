var crypto = require('crypto'),
	dbSchemas = require('./dbSchemas'),
	mongoose = require('./db'),
	schema = mongoose.Schema(dbSchemas.user);

schema.statics.encryptPassword = function (password) {
	var algorithm = 'aes-256-ctr',
		key = '5gtLK87pOd',
		cipher = crypto.createCipher(algorithm,key),
		cryptedPassword = cipher.update(password,'utf8','hex');
	cryptedPassword += cipher.final('hex');
	return cryptedPassword;
};

schema.statics.checkPassword = function (password, correctPassowrd) {
	return this.encryptPassword(password) === correctPassowrd;
};

module.exports.User = mongoose.model('User', schema);