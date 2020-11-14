var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
// var logger = require('morgan');
var session = require("express-session");
const log4js = require("log4js");
const logConfig = require("./config/log4js");
var ect = require("ect");
var indexRouter = require("./routes/index");
var informationRouter = require("./routes/information");
var slideImageRouter = require("./routes/slide_image");
var bannerImageRouter = require("./routes/banner_image");
var adminAuthRouter = require("./routes/admin_auth");
var usersRouter = require("./routes/users");
var blogRouter = require("./routes/blog");
var addressRouter = require("./routes/address");
var actionRouter = require("./routes/action");
var passport = require("passport");
var bodyParser = require("body-parser");

//log4Js設定
log4js.configure(logConfig);

var app = express();
// logger の取得
var log = log4js.getLogger("app");

//セッションオプション
var sessionOpt = {
  secret: "ore-support",
  resave: false,
  saveUninitialized: false,
  cookie: {
    MaxAge: 60 * 60 * 1000, //1時間設定
  },
};

// クロスサイト処理
var crossopt = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://localhost:8080");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Origin, X-Csrftoken,x-xsrf-token, Content-Type, Accept,x-token"
  );
  res.set("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods: GET, POST");
  next();
};

// view engine setup
app.engine(
  "ect",
  ect({ watch: true, root: __dirname + "/views", ext: ".ect" }).render
);
app.set("view engine", "ect");
// crossアクセス許可
app.use(crossopt);
//ログ処理
// app.use(logger('dev'));
// json処理許可
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// cookie
app.use(cookieParser());
// 静的なファイル
app.use(express.static(path.join(__dirname, "public")));
//セッション設定
app.use(session(sessionOpt));
//　ログ出力設定
app.use(log4js.connectLogger(log4js.getLogger("http"), { level: "auto" }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());

app.use(passport.session());

app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/blog", blogRouter);
app.use("/information", informationRouter);
app.use("/slide_image", slideImageRouter);
app.use("/banner_image", bannerImageRouter);
app.use("/address", addressRouter);
app.use("/action", actionRouter);
app.use("/admin", adminAuthRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  log.error("アクセスエラー", err);
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
