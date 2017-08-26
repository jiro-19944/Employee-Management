var error = require('./error'),
    User = require('./user').User;

module.exports.home = function(req, res) {
    //TODO: find out if there is a user with the current sesssion id open signedId.html file
    //      with the corressponding datas or home.html file if there is not
    var sessionID = req.sessionID;
    
    User.findOne({sessionIDs: sessionID}, function(err, user) {
        if(err) {
            // TODO: pass file name and line number to print with error
            res.render('./templates/errorTemplate.ejs', error.databaseError());
        } else if(user) {
            res.render('./templates/signedIn.ejs'); // open signedIn.ejs with coressponding user data
        } else {
            res.render('./html/home.html');
        }
    });    
};

module.exports.pageNotFound = function(req, res) {
    res.render('./templates/errorTemplate.ejs', error.pageNotFound());
};