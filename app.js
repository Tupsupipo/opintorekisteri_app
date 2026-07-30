var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var opiskelijaRouter = require('./routes/opiskelijaRoute');
var opintojaksoRouter = require('./routes/opintojaksoRoute');
var arviointiRouter = require('./routes/arviointiRoute');
var userRouter = require('./routes/userRoute');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/opiskelija', opiskelijaRouter);
app.use('/opintojakso', opintojaksoRouter);
app.use('/arviointi', arviointiRouter);

module.exports = app;
