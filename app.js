var jwt = require('jsonwebtoken');
var config = require('./config');

var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var addressRouter = require('./routes/address');
var statesRouter = require('./routes/states');
var citiesRouter = require('./routes/cities');
var authRouter = require('./routes/auth');

var serveIndex = require('serve-index');

var path = require('path');
var app = express();

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));


/* 
middleware check token
app.use(function(req, res, next){
	console.log('Check Token')
  var token = req.headers['x-access-token'];  
  if (!token){ 
    return res
          .status(401)
          .json({ 
            code: 401,
            auth: false, 
            message: 'No token provided.' 
          });
  }
  
  jwt
  .verify(token, config.secret, function(err, decoded) {
    if (err) {
      return res
      .status(500)
      .json({ 
        code: 500,
        message: 'Failed to authenticate token.' 
      });
    }
  })
	next()
})
*/


/*
if (app.get('env') === 'development') {
  var browserSync = require('browser-sync');
  var bs = browserSync.create().init({ logSnippet: false });
  app.use(require('connect-browser-sync')(bs));
}
*/

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(serveIndex((path.join(__dirname, 'public'))));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/address', addressRouter);
app.use('/states', statesRouter);
app.use('/cities', citiesRouter);
app.use('/auth', authRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  //next(createError(404));
  res.status(404),
  res.json({
    code: 404,
    message: 'Page not found'
  })
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render('error');


  res.json({
    code: 500,
    message: err.message
  })

});

module.exports = app;
