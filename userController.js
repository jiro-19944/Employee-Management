var error = require('./error'),
    User = require('./user').User;

module.exports.signIn = function(req, res) {
    var username = req.body.username,
        password = req.body.password,
        sessionID = req.sessionID;

    User.findOne({username: username}, function (err, user) {
        if(err) {
            // TODO: pass file name and line number to print with error
            res.render('./templates/errorTemplate.ejs', error.databaseError());
        } else if(user && User.checkPassword(password, user.password) && sessionID) {
            user.sessionIDs.push(sessionID);
            user.save("done");
            res.render('./templates/signedIn.ejs');
        } else {
            res.render('./html/wrong.html');
        }
    });
};

module.exports.signUp = function(req, res) {
    if(Object.keys(req.body).length > 0) {
        var username = req.body.username,
            password = req.body.password,
            question = req.body.question,
            answer = req.body.answer,
            sessionId = req.sessionID,
            cryptedPassword = User.encryptPassword(password),
            newUser = new User({
                username: username,
                password: cryptedPassword,
                question: question,
                answer: answer,
                sessionIDs: [sessionId]
            });

        newUser.save(function (err, user) {
            if(err) {
                if(err.name === 'MongoError' && err.code === 11000) {
                    console.log('dublicateeeeeeeeeeee');
                    // TODO: There is already an user with that username
                } else {
                    // TODO: pass file name and line number to print with error
                    res.render('./templates/errorTemplate.ejs', error.databaseError());
                }
            } else if(user) {
                res.render('./templates/signedIn.ejs');
            } else {
                // TODO: pass file name and line number to print with error
                res.render('./templates/errorTemplate.ejs', error.databaseError());
            }
        });
    } else {
        res.render('./html/signUp.html');
    }
};

module.exports.signOut = function(req, res) {
    var sessionID = req.sessionID;

    User.findOneAndUpdate({sessionIDs: sessionID}, { $pull: {sessionIDs: sessionID} },
            {new: true}, function(err, user) {
        if(err) {
            // TODO: pass file name and line number to print with error
            res.render('./templates/errorTemplate.ejs', error.databaseError());
        } else if(user) {
            res.render('./html/home.html');
        } else {
            // TODO: pass file name and line number to print with error
            res.render('./templates/errorTemplate.ejs', error.databaseError());
        }
    });
};

module.exports.checkUsername = function(req, res) {
    var username = req.body.username,
        answer = req.body.answer;

    User.findOne({username: username}, function(err, user) {
        if(err) {
            // TODO: pass file name and line number to print with error
            res.render('./templates/errorTemplate.ejs', error.databaseError());
        } else if(user) {
            if(!answer) {
                res.send({"question": user.question});
            } else if(answer !== user.answer) {
                res.send("wrong answer");
            } else {
                res.render('./html/updatePass.html');
            }
        } else {
            res.send("wrong username");
        }
    });
};

module.exports.forgot = function(req, res) {
    res.render('./html/forgotPass.html');
};

module.exports.updatePass = function(req, res) {
    var username = req.body.username,
        newPassword = req.body.newPass;
        
    User.findOneAndUpdate({username: username}, {password: newPassword},
            {new: true}, function(err, user) {
        if(err) {
            // TODO: pass file name and line number to print with error
            res.render('./templates/errorTemplate.ejs', error.databaseError());
        } else if(user) {
            res.render('./templates/signedIn.ejs');
        } else {
            // TODO: pass file name and line number to print with error
            res.render('./templates/errorTemplate.ejs', error.wrongUsername());
        }
    });
};