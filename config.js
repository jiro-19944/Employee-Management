var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var multer = require('multer');

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
		  return server;
};