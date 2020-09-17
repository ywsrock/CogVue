var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
// var logger = require('morgan');
var session = require("express-session")
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var blogRouter = require('./routes/blog');
const log4js = require('log4js');
const logConfig = require("./config/log4js")
//log4Js設定
log4js.configure(logConfig)

var app = express();
// logger の取得
var log = log4js.getLogger("app")

//セッションオプション
var sessionOpt = {
  secret:"ore-support",
  resave:false,
  saveUninitialized:false,
  cookie:{
    MaxAge:60*60*60
  }
}

// クロスサイト処理
var crossopt =(req,res,next) =>{
  res.header("Access-Control-Allow-Origin","https://localhost:8080");
  res.header("Access-Control-Allow-Headers","X-Requested-With, Origin, X-Csrftoken, Content-Type, Accept,x-token");
  res.set('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods: GET, POST');
  next();
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// crossアクセス許可
app.use(crossopt)
//ログ処理
// app.use(logger('dev'));
// json処理許可
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// cookie
app.use(cookieParser());
//セッション設定
app.use(session(sessionOpt))

// 静的なファイル
app.use(express.static(path.join(__dirname, 'public')));

//　ログ出力設定
app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));


app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/blog', blogRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  log.error("アクセスエラー", err);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
