var db = require("./db");
var myDb;

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
};

module.exports.signIn = function(req, res)
{
	var body = req.body;
	checkAndGetDb();
	myDb.collection('userPass', function(err, collection)
	{
		collection.findOne({username: body.username}, function(err, item)
		{
			if(!item || body.password != item.password)
			{
				console.log('Wrong email or password: Please try again');
				res.render('./html/wrong.html');
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
	if(Object.keys(body).length > 0)
	{
		checkAndGetDb();
		myDb.createCollection('userPass', function(err, collection)
	    {
			collection.insert(body);
			res.render('./html/signedIn.html');
	    });
	}
	else
	{
		res.render('./html/signUp.html');
	}
};

module.exports.checkUsername = function(req, res)
{
	var body = req.body;
	console.log("////////////////////////////  ", body);
	checkAndGetDb();
	myDb.collection('userPass', function(err, collection)
	{
		collection.findOne({username: body.username}, function(err, item)
		{
			if(!item)
			{
				console.log('Wrong email: Please try again');
				res.send("wrong username");
			}
			else
			{
				res.send({"question": item.question, "answer": item.answer});
			}
		});
	});
}

module.exports.forgot = function(req, res)
{
	checkAndGetDb();
	res.render('./html/forgotPass.html');
}