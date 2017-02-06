var a = {};

module.exports.home = function(req, res)
{
	// var body = req.body
	// console.log("stacvec ------------  ");
	// console.log(body);
	res.render('./html/home.html');
};

module.exports.signIn = function(req, res)
{
	var body = req.body
	console.log("------------ post ------------  sign IN ----------------");
	if(body.Email === a.Email && body.Password === a.Password)
	{
		console.log("/////////////////////////////////  " + a.Email);
	}
	// res.render('./html/index.html');
	// res.end("++++++++++++++++++++++++ " + body.Password);
};

module.exports.signUp = function(req, res)
{
	var body = req.body
	console.log("------------ post ------------ sign UP -----------  ");
	a.Email = body.Email;
	a.Password = body.Password;
	// res.render('./html/index.html');
	console.log("++++++++++++++++++++++++ greciiiiiiiiiiiiiii" + a.Email);
};