var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require('jsonwebtoken');

var indexRouter = require('./routes/index');

var userRouter = require('./routes/userRoute');
var loginRouter = require('./routes/login');

var opiskelijaRouter = require('./routes/opiskelijaRoute');
var opintojaksoRouter = require('./routes/opintojaksoRoute');
var arviointiRouter = require('./routes/arviointiRoute');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', userRouter);

app.use('/login', loginRouter); //login is not protected 

app.use(authenticateToken); //all routes below this line are protected

app.use('/opiskelija', opiskelijaRouter);
app.use('/opintojakso', opintojaksoRouter);
app.use('/arviointi', arviointiRouter);

// Middleware function that verifies JWT token and blocks unauthorized requests
function authenticateToken(request, response, next) {
    const authHeader = request.headers['authorization'];

    if (!authHeader) {
      return response.sendStatus(401);
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      return response.sendStatus(401);
    }

    jwt.verify(token, process.env.MY_TOKEN, function(err, user) {
      if (err) {
        return response.sendStatus(403);
      }
      request.user = user;
      next();
    })
  }

module.exports = app;
