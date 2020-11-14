var express = require("express");
var router = express.Router();
var blogmodel = require("../dao/blog/blog.dao");
var usermodel = require("../dao/user/user.dao");
var checkuser = require("../common/check.token");
var commentmodel = require("../dao/comment/commetn.dao");
const STATUS_MESSAGE = require("../common/const").STATUS_MESSAGE;

//ブログリスト取得


router.post("/createComment", [checkuser.verifyUser], async function (req, res, next) {
  // 出力結果
  let resObj = {};
  // ユーザID(ベリファイチェックから)
  let userID = req.userID;
  //　title
  // let title = req.body.title;
  //　title
  let Comment1 = req.body.Comment1;

  let CommentName = req.body.CommentName;

  // titleとcontent
  if ("" != Comment1.trim() && "" != content.trim()) {
    // Blog登録処理
    commentObj = {
      UserID: userID,
      Title: title,
      Comment1: Comment1,
      CommentName: CommentName,
    };

    // DBにユーザ登録を呼び出す
    const results = await commentmodel.createComment(commentObj);

    // TODO　登録結果評価、エラーの場合、エラーメッセージを返す（再修正必要）
    if (typeof results.errors != "undefined") {
      // エラー結果
      resObj = {
        code: STATUS_MESSAGE.CODE_402,
        message: "サーバーブログ作成エラー",
      };
      return res.status(200).send(resObj);
    } else {
      resObj = {
        // JSON ステータスコード
        code: STATUS_MESSAGE.CODE_SUCCESS,
        data: {
          message: "ブログ作成成功",
        },
      };
    }
    return res.status(200).send(resObj);
  } else {
    return res.status(200).send({
      token: null,
      message: "ブログの内容エラー",
    });
  }
});



module.exports = router;
