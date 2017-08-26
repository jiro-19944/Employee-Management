var path = require('path'),
	bodyParser = require('body-parser'),
	express = require('express'),
	session = require('express-session'),
	multer = require('multer'),
	config = require('./config.json');

module.exports = function(server) {
		  // html renderer
		  server.set('views', path.join(__dirname, './public'));
		  server.set('view engine', 'ejs');
		  server.engine('html', require('ejs').renderFile);
		  // for rendering static file
		  server.use(express.static('./public'));

		  // for parsing multipart/form-data
		  var parser = multer();
		  // for parsing application/json
		  server.use(bodyParser.json());
		  // for parsing application/x-www-form-urlencoded
		  server.use(bodyParser.urlencoded({
					 extended: true
		  }));
		  server.use(parser.array());
		  server.use(session({
			  secret: config.session.secret,
			  key: config.session.key,
			  cookie: config.session.cookie,
			  resave: config.session.resave,
			  saveUninitialized: config.session.saveUninitialized
		  }));
		  return server;
};