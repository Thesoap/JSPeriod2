var express = require('express');
//var path = require('path');
//var favicon = require('serve-favicon');
var app = express();

//app.use(favicon(path.join(__dirname, 'public','images','favicon.ico')));

app.get('/', function(req, res){
  res.send('hello world');
});

module.exports = app;
