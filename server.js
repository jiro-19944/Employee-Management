var express = require('express');
var app = express();
var server = require('http').createServer(app);
app = require('./config')(app);
app = require('./index')(app);

server.listen(8080, 'localhost', function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});