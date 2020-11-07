var express = require("express");
var router = express.Router();
var checkuser = require("../common/check.token");
const { STATUS_MESSAGE } = require("../common/const");
const { Like } = require("../model/like.model");
var log = require("log4js").getLogger("users");


// いいね保存
router.post("/create", [checkuser.verifyUser], async function (
  req,
  res,
  next
) {
  log.info(`like/create ${req.body.likeInfo}`);

  //新しいアクション作成
  let like = await Like.build();
  //ユーザID
  like.userID = req.body.likeInfo.userID;
  //ブログID
  like.blogID = req.body.likeInfo.blogID;

  try {
    //データ保存
    like.save();
    let resObj = {
      // JSON ステータスコード
      code: STATUS_MESSAGE.CODE_SUCCESS,
      data: {
        status: STATUS_MESSAGE.CODE_SUCCESS,
      },
    };
    return res.status(200).send(resObj);
  } catch (error) {
    console.log(error)
    log.error(`/saveLike ${error}`);
    let resObj = {
      // JSON ステータスコード
      code: STATUS_MESSAGE.CODE_405,
      message: STATUS_MESSAGE.LIKE_CREATE_ERROR,
    };
    return res.status(200).send(resObj);
  }
});

// いいね取得
router.post("/index", [checkuser.verifyUser], async function (
  req,
  res,
  next
) {
  log.info(`like/index ${req.body.blogID}`);

  let blogID = req.body.blogID;
  let resObj = {};

  try {
    let likes = await Like.findAll({
      where: {
        blogID: blogID,
      }
    });

    resObj = {
      // JSON ステータスコード
      code: STATUS_MESSAGE.CODE_SUCCESS,
      data: {
        likes: likes
      },
    };
  } catch (error) {
    log.error(`/queryAction ${error}`);
    resObj = {
      // JSON ステータスコード
      code: STATUS_MESSAGE.CODE_406,
      message: STATUS_MESSAGE.LIKE_QUERY_ERROR,
    };
  }
  return res.status(200).send(resObj);
});

//いいね削除
router.post("/destroy", [checkuser.verifyUser], async function (
  req,
  res,
  next
) {
  log.info(`like/destroy ${req.body.likeInfo}`);
  //ユーザID
  const userID = req.body.likeInfo.userID;
  //ブログID
  const blogID = req.body.likeInfo.blogID;

  let resObj = {};
  try {
    Like.destroy({
      where: {
        userID: userID,
        blogID: blogID
      },
    });
    resObj = {
      code: STATUS_MESSAGE.CODE_SUCCESS,
      data: {
        status: STATUS_MESSAGE.CODE_SUCCESS,
      },
    };
  } catch (error) {
    log.info(`/destroyAction ${error}`);
    resObj = {
      code: STATUS_MESSAGE.CODE_407,
      message: STATUS_MESSAGE.LIKE_DESTROY_ERROR,
    };
  }
  res.status(200).send(resObj);
});

module.exports = router;
