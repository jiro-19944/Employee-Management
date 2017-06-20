var db = require('./db');
var fs = require('fs');
var error = require('./error');
var myDb;

var checkAndGetDb = function() {
    if(!myDb) {
        myDb = db.getDB();
    }
}

module.exports.home = function(req, res) {
    res.render('./html/home.html');
};

module.exports.signIn = function(req, res) {
    var body = req.body;
    checkAndGetDb();
    myDb.collection('userPass', function(err, collection) {
        if(err) {
            error.wrongDB('userPass');
        } else if(collection) {
	        collection.findOne({ username: body.username }, function(err, item) {
	            if(err || body.password != item.password) {
	                console.log('Wrong email or password: Please try again');
	                res.render('./html/wrong.html');
	            } else {
	                res.render('./html/signedIn.html');
	            }
	        });
	    } else {
            error.callbackError();
	    }
    });
};

module.exports.signUp = function(req, res) {
    var body = req.body;
    if(Object.keys(body).length > 0) {
        checkAndGetDb();
        myDb.createCollection('userPass', function(err, collection) {
            if(err) {
                error.wrongDB('userPass');
            } else if(collection) {
	            collection.insert(body);
	            res.render('./html/signedIn.html');
	        } else {
                error.callbackError();
	        }
        });
    } else {
        res.render('./html/signUp.html');
    }
};

module.exports.checkUsername = function(req, res) {
    var body = req.body;
    checkAndGetDb();
    myDb.collection('userPass', function(err, collection) {
        if(err) {
            error.wrongDB('userPass');
        } else if(collection) {
	        collection.findOne({ username: body.username }, function(err, item) {
	            if(err) {
	                console.log('Wrong email: Please try again');
	                res.send("wrong username");
	            } else if(item) {
	                if(!body.answer) {
	                    res.send({ "question": item.question });
	                } else if(body.answer === item.answer) {
	                    res.render('./html/changePassword.html');
	                } else {
	                    res.send("wrong answer");
	                }
	            } else {
                    error.callbackError();
                }
	        });
	    } else {
            error.callbackError();
	    }
    });
}

module.exports.forgot = function(req, res) {
    checkAndGetDb();
    res.render('./html/forgotPass.html');
}