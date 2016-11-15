module.exports.get = function(req, res)
{
	var body = req.body
	console.log("stacvec ------------  ");
	console.log(body);
	res.render('./html/signin.html');
};

module.exports.post = function(req, res)
{
	var body = req.body
	console.log("------------ post ------------  ");
	console.log(body.usermail);
	// res.render('./html/index.html');
	res.end("++++++++++++++++++++++++ " + body.password);
};