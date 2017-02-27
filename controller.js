var db = require("./db");
var myDb;
var isDbConnected = false;

var checkAndConnectToDb = function()
{
	if(!isDbConnected)
	{
		isDbConnected = db.connectToDB(isDbConnected);
	}
}

var checkAndGetDb = function()
{
	if(!myDb)
	{
		myDb = db.getDB();
	}
}

module.exports.home = function(req, res)
{
	res.render('./html/home.html');
	checkAndConnectToDb();
};

module.exports.signIn = function(req, res)
{
	var body = req.body;
	checkAndConnectToDb();
	checkAndGetDb();
	myDb.collection('userPass', function(err, collection)
	{
		collection.findOne({email: body.email}, function(err, item)
		{
			if(!item || body.password != item.password)
			{
				console.log("Wrong email or password: Please try again");
			}
			else
			{
				res.render('./html/signedIn.html');
			}
		});
	});
	
};

module.exports.signUp = function(req, res)
{
	var body = req.body;
	checkAndConnectToDb();
	checkAndGetDb();
	myDb.createCollection('userPass', function(err, collection)
    {
    	collection.insert(body);
    });
};