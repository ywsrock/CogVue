<<<<<<< HEAD
var express = require("express");
var router = express.Router();
var usermodel = require("../model/user.model");
var checkuser = require("../common/check.token");
var bcrypt = require("bcryptjs");
const STATUS_MESSAGE = require("../common/const");
const config = require("../config/secret.config");
const jwtToken = require("jsonwebtoken");

/* GET users listing. */
router.get(
  "/",
  /* [checkuser.verifyUser], */ async function (req, res, next) {
    var username = "yws";
    var password = "YYY";

    /*   To hash a password:
    https://www.npmjs.com/package/bcryptjs
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash("B4c0/\/", salt, function(err, hash) {
          // Store hash in your password DB.
      });
  }); 

      var bcrypt = require('bcryptjs');
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync("B4c0/\/", salt);
      // Store hash in your password DB.
      // Load hash from your password DB.
      bcrypt.compareSync("B4c0/\/", hash); // true
      bcrypt.compareSync("not_bacon", hash); // false

  //To check a password:
  bcrypt.compare("B4c0/\/", hash).then((res) => {
    // res === true
});
  */

    const results = await usermodel.getUserInfo({ username, password });
    if (results.length > 0) {
      res.send(results);
    } else {
      res.send("ユーザ存在しません");
    }
  }
);

/* ユーザログイン処理 */
router.post("/login", async function (req, res, next) {
  // ユーザ名とパスワード
  const { username, password } = req.body;
  // パスワードハッシュ化
  // bcrypt.genSalt(128, function (err, salt) {
  //   bcrypt.hash(password, salt, function (err, hash) {
  //     password = hash
  //   });

  // ユーザ情報取得
  const results = await usermodel.getUserInfo({ username, password });
  if (results.length > 0) {
    // トークンを作成
    var tokenKey = jwtToken.sign({ id: results[0].userID }, config.secret, {
       // 24時間
      expiresIn: 60 * 60 * 24,
    });
    // ユーザ名をセッションに格納
    req.session.username = results[0].UserName;
    // ユーザIDをセッションに格納
    req.session.userID = results[0].userID;
    //　Tokenをセッションに格納
    req.session.token = tokenKey;
    // Response データ
    var resObj = {
      // JSON ステータスコード
      code: STATUS_MESSAGE.CODE_SUCCESS,
      data: {
        // ユーザ名
        userName:results[0].UserName,
        // トークン情報
        token: tokenKey,
        // ユーザアバター
        avatar:"",
        // ユーザ情報
        introduction:"",
        // ユーザ権限
        roles:[]
      },
    };
    res.send(resObj);
  } else {
    // 認証失敗の場合
    return res.status(200).send({
      token: null,
      message: STATUS_MESSAGE.LOGIN_ERROR_401,
    });
  }
});

// ユーザ情報取得処理
router.get("/info", [checkuser.verifyUser],function (req, res, next) {
  // トークイン解析したユーザIDを取得
  // var token = req.query.token;
  var token_userID = req.userID;
  if (req.session.userID != token_userID){
     // 未実装
  }
  

  // トークンをキーとして、データを検索

   var resobj ={
     code:STATUS_MESSAGE.CODE_SUCCESS,
     roles:['admin','superUser'],
     name:"test001",
     avatar:"http://localhost:8080",
     introduction:"test User"
   }
  //　結果を返す
  res.status(200).send(resobj);
});


router.post("/update", function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  console.log("1233");
  res.send({ code: 2000, content: "OK---" });
});

=======
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  var username = req.body.username;
  var password= req.body.password
  res.send(username + "------" + password);
});

router.post('/update', function(req, res, next) {
  var username = req.body.username;
  var password= req.body.password
  res.send(username + "------" + password);
});

router.post('/info', function(req, res, next) {
  var username = req.body.username;
  var password= req.body.password
  res.send(username + "------" + password);
})
>>>>>>> 068edf1b4ad420a27f5ed9b8cbced9ccf449b97c

module.exports = router;
