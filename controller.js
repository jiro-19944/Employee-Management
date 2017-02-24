var db = require("./db");
var myDb;
var isDbConnected = false;

var checkAndConnectToDb = function()
{
	if(!isDbConnected)
	{
		isDbConnected = db.connectToDB(isDbConnected);
	}
	else
	{
		console.log("------------ DB is already conected -------------");
	}
}

var checkAndGetDb = function()
{
	if(!myDb)
	{
		myDb = db.getDB();
	}
	else
	{
		console.log("------------ DB is already got -------------");
	}
}

module.exports.home = function(req, res)
{
	res.render('./html/home.html');
	checkAndConnectToDb();
};

module.exports.signIn = function(req, res)
{
	checkAndConnectToDb();
	checkAndGetDb();
	var body = req.body;
	myDb.collection('userPass', function(err, collection)
	{
		collection.findOne({email: body.email}, function(err, item)
		{
			if(!item)
			{
				console.log("Wrong username: Please sign up");
			}
			else
			{
				if(body.password == item.password)
				{
					res.render('./html/signedIn.html');
				}
				else
				{
					console.log("The password is wrong");
				}
			}
		});
	});
	
};

module.exports.signUp = function(req, res)
{
	checkAndConnectToDb();
	checkAndGetDb();
	var body = req.body;
	myDb.createCollection('userPass', function(err, collection)
    {
    	collection.insert(body);
    	console.log("++++++++++++++++++++++++ greciiiiiiiiiiiiiii");
    });
};