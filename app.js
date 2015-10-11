var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

var mongoose = require('mongoose');

var mongoURI = "mongodb://localhost:27017/todolists";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function (err) {
  console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
