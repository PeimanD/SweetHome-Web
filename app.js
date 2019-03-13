var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var scheduleRouter = require('./routes/schedule');
var thermostatRouter = require('./routes/thermostat');
var logRouter = require('./routes/log');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/schedule', scheduleRouter);
app.use('/thermostat', thermostatRouter);
app.use('/log', logRouter);
app.use('/', indexRouter);


module.exports = app;
