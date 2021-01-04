var express = require("express");
var router = express.Router();
var blogmodel = require("../dao/blog/blog.dao");
var usermodel = require("../dao/user/user.dao");
var checkuser = require("../common/check.token");
const STATUS_MESSAGE = require("../common/const").STATUS_MESSAGE;
const Image_storage = require("../common/fileup");
const multer = require("multer");
var log = require("log4js").getLogger("users");
const fs = require("fs");
const appRoot = require("app-root-path");
const Sequelize = require("sequelize");

//ブログリスト取得
router.get("/bloglist", async function (req, res, next) {
  // 出力結果
  let resObj = {};
  // ユーザID(ベリファイチェックから)
  let userID = req.userID;

  //ブログリスと取得
  //var blogList = await blogmodel.getBlogList({ key: "UserID", val: userID })
  var blogList = await blogmodel.getBlogList();

  if (typeof blogList.errors != "undefined") {
    // エラー結果
    resObj = {
      code: STATUS_MESSAGE.CODE_402,
      message: blogList.message,
    };
    return res.status(200).send(resObj);
  } else {
    //DBの絡むと大文字小文字も併せないといけない
    // var title = blog.Title;
    // var content = blog.Content

    contentArray = [];
    blogList.forEach((blog) => {
      contentArray.push({
        id: blog.id,
        title: blog.Title,
        content: blog.Content,
        userName: blog.User.UserName || "",
        timeStamp: blog.Timestamp,
        userProfile: blog.User,
      });
    });

    resObj = {
      code: STATUS_MESSAGE.CODE_SUCCESS,

      data: {
        title: "test",
        content: contentArray,
        userID: userID,
      },
    };
  }

  return res.status(200).send(resObj);
});

// ミドルウェア
var upload1 = multer({ storage: Image_storage.blogImage_storage }).single(
  "imgBlog"
);
router.post("/create", [checkuser.verifyUser], async function (req, res, next) {
  // log.info(`fileUpload: ----------------------------- `);
  // 出力結果
  let resObj = {};
  // ユーザID(ベリファイチェックから)
  let userID = "";
  //　title
  let title = "";
  //　title
  let content = "";
  // ポートの番号取得
  var port = req.app.settings.port;
  // ホスト取得
  var respath =
    req.protocol +
    "://" +
    req.host +
    (port == 80 || port == 443 ? "" : ":" + port);

  // まずmulterのインスタンス作成
  await upload1(req, res, function (err) {
    if (err) {
      log.error(`imageUp upload error: ${err} `);
      resObj.code = STATUS_MESSAGE.CODE_403;
      resObj.message = STATUS_MESSAGE.FILEUP_ERROR_403;
    } else {
      if (undefined !== req.file) {
        //ログ出力
        log.info(`fileUpload: + ${req.file.filename} `);
      }
      // JSON文字列をオブジェクトに変換
      let registForm = JSON.parse(req.body.registForm);
      // ユーザID(ベリファイチェックから)
      userID = req.userID;
      //　title
      title = registForm.title;
      //　title
      content = registForm.content;

      if (undefined !== res.req.file) {
        // ファイル存在チェック
        var isExists = fs.existsSync(
          `${appRoot}/public/blogImg/${res.req.file.filename}`
        );
        //　ファイルが存在しない場合"00_00.jpg"
        var imgpath = isExists ? res.req.file.filename : "00_00.jpg";
        resObj.code = STATUS_MESSAGE.CODE_SUCCESS;
        // respathはhttp://ホスト名:ポート
        resObj.data = {
          imgUrl: `${respath}/blogImg/${imgpath}`,
        };
      }

      category = registForm.categorySelected;
      userAction = registForm.actionSelected;
    }

    log.info(`imageUp success`);

    // blogImg_obj = {
    //   BlogImage: req.file.filename,
    //   Title: title,
    //   Content: content,
    // };

    // プロフィール更新処理
    // var ret = blogmodel.blogUpdate(
    //   //queryInfo
    //   blogImg_obj,
    //   {},
    //   { key: "id", val: req.id }
    // );
    // titleとcontent
    if ("" != title.trim() && "" != content.trim()) {
      // Blog登録処理
      blogObj = {
        UserID: userID,
        Title: title,
        Content: content,
        // filename取得、本体は/public/blogImge/の中
        // undefined以外の場合は値を取得し、undefinedの場合は空
        BlogImage: req.file !== undefined ? req.file.filename : "",
        Timestamp: Sequelize.fn("NOW"),
        Category: category,
        UserAction: userAction
      };

      // DBにユーザ登録を呼び出す
      const results = blogmodel.createBlog(blogObj);

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
});

router.get("/blogdetail", async function (req, res, next) {
  console.log(req.query.blogID);
  let resObj = {};

  // ポートの番号取得
  var port = req.app.settings.port;
  var respath =
    req.protocol +
    "://" +
    req.host +
    (port == 80 || port == 443 ? "" : ":" + port);

  var id = req.query.blogID;
  //ブログ詳細取得
  var blogDetail = await blogmodel.getBlogDetail({ key: "id", val: id });

  var userId = blogDetail[0].UserID;
  var userProfile = await usermodel.getUserProfileByUserID({
    key: "userId",
    val: userId,
  });

  if (typeof blogDetail.errors != "undefined") {
    // エラー結果
    resObj = {
      code: STATUS_MESSAGE.CODE_402,
      message: blogDetail.message,
    };
    return res.status(200).send(resObj);
  } else {
    //DBの絡むと大文字小文字も併せないといけない
    // var title = blog.Title;
    // var content = blog.Content

    // let commentArray = []
    // blogDetail.forEach((model) => {
    //     commentArray.push(model.Comment1)
    // })
    let imgUrl = "";

    if (blogDetail[0].BlogImage !== "") {
      imgUrl = `${respath}/blogImg/${blogDetail[0].BlogImage}`;
    } else {
      imgUrl = `${respath}/blogImg/00_00.jpg`;
    }
    resObj = {
      code: STATUS_MESSAGE.CODE_SUCCESS,
      data: {
        id: blogDetail[0].id,
        //  blogDetail[0].Blog.id,
        title: blogDetail[0].Title,
        content: blogDetail[0].Content,
        // comment: blogDetail.Comment1　|| "",
        // comment: commentArray || "",
        comment: blogDetail[0].Comments || "",
        userProfile: userProfile,
        imgUrl: imgUrl,
        timeStamp: blogDetail[0].Timestamp,
      },
    };
  }
  return res.status(200).send(resObj);
});

router.get("/blogDelete", async function (req, res, next) {
  console.log(req.query.blogID);

  var id = req.query.blogID;
  //ブログ詳細取得
  var blogDelete = await blogmodel.blogDelete({ key: "id", val: id });

  if (typeof blogDelete.errors != "undefined") {
    // エラー結果
    resObj = {
      code: STATUS_MESSAGE.CODE_402,
      message: blogDelete.message,
    };
    return res.status(200).send(resObj);
  } else {
    //DBの絡むと大文字小文字も併せないといけない
    // var title = blog.Title;
    // var content = blog.Content

    resObj = {
      code: STATUS_MESSAGE.CODE_SUCCESS,
      data: {
        id: blogDelete.id,
        title: blogDelete.Title,
        content: blogDelete.Content,
      },
    };
  }
  return res.status(200).send(resObj);
});

router.post(
  "/blogUpdate",
  [checkuser.verifyUser],
  async function (req, res, next) {
    // 出力結果
    let resObj = {};

    //　id
    let id = req.body.id;
    // ユーザID(ベリファイチェックから)
    let userID = req.userID;
    //　title
    let title = req.body.title;
    //　content
    let content = req.body.content;
    // ポートの番号取得
    var port = req.app.settings.port;
    // ホスト取得
    var respath =
      req.protocol +
      "://" +
      req.host +
      (port == 80 || port == 443 ? "" : ":" + port);

    // まずmulterのインスタンス作成
    await upload1(req, res, function (err) {
      if (err) {
        log.error(`imageUp upload error: ${err} `);
        resObj.code = STATUS_MESSAGE.CODE_403;
        resObj.message = STATUS_MESSAGE.FILEUP_ERROR_403;
      } else {
        //ログ出力
        // log.info(`fileUpload: + ${req.file.filename} `);
        // JSON文字列をオブジェクトに変換
        let blogDetail = JSON.parse(req.body.blogDetail);
        id = blogDetail.id;
        // ユーザID(ベリファイチェックから)
        userID = req.userID;
        //　title
        title = blogDetail.title;
        //　title
        content = blogDetail.content;
        // ファイル存在チェック
        var isExists = false;
        if (undefined !== res.req.file) {
          isExists = fs.existsSync(
            `${appRoot}/public/blogImg/${res.req.file.filename}`
          );
        }
        //　ファイルが存在しない場合"00_00.jpg"
        var imgpath = isExists ? res.req.file.filename : "00_00.jpg";
        resObj.code = STATUS_MESSAGE.CODE_SUCCESS;
        // respathはhttp://ホスト名:ポート
        resObj.data = {
          imgUrl: `${respath}/blogImg/${imgpath}`,
        };
      }
      // log.info(`imageUp success`);

      // titleとcontent
      if ("" != title.trim() && "" != content.trim()) {
        // Blog登録処理
        blogObj = {
          id: id,
          UserID: userID,
          Title: title,
          Content: content,
          // filename取得、本体は/public/blogImge/の中
          // isExistsがファイルが存在するかのフラグ
          // isExistsがTrueの場合filename読み込んで、Falseの場合は空にする
          BlogImage: isExists ? req.file.filename : "",
        };

        // DBにユーザ登録を呼び出す
        const results = blogmodel.blogUpdate(blogObj, { key: "id", val: id });

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
              message: "ブログ更新成功",
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
  }
);

router.post(
  "/postComment",
  [checkuser.verifyUser],
  async function (req, res, next) {
    // 出力結果
    let resObj = {};
    // ユーザID(ベリファイチェックから)
    let userID = req.userID;
    //　title
    var id = req.body.id;

    var comment = req.body.comment;

    var commentName = req.body.commentName;

    // titleとcontent
    if ("" != comment.trim() && "" != commentName.trim()) {
      // Comment登録処理
      CommentObj = {
        id: id,
        UserID: userID,
        comment: comment,
        commentName: commentName,
      };

      // DBにユーザ登録を呼び出す
      const results = await blogmodel.postComment(CommentObj);

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
  }
);

router.post(
  "/postComment",
  [checkuser.verifyUser],
  async function (req, res, next) {
    // 出力結果
    let resObj = {};
    // ユーザID(ベリファイチェックから)
    let userID = req.userID;
    //　title
    var id = req.body.id;

    var comment = req.body.comment;

    var commentName = req.body.commentName;

    // titleとcontent
    if ("" != comment.trim() && "" != commentName.trim()) {
      // Comment登録処理
      CommentObj = {
        id: id,
        UserID: userID,
        comment: comment,
        commentName: commentName,
      };

      // DBにユーザ登録を呼び出す
      const results = await blogmodel.postComment(CommentObj);

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
  }
);

router.post("/searchBlog", async function (req, res, next) {
  // 出力結果
  let resObj = {};
  const searchObj = {
    sex: req.body.sex,
    freeWord: req.body.freeWord,
    from: req.body.from,
    to: req.body.to,
    pref: req.body.pref,
  };

  // ユーザID(ベリファイチェックから)
  let userID = req.userID;

  //ブログ検索
  var blogList = await blogmodel.searchBlog(searchObj);

  if (typeof blogList.errors != "undefined") {
    // エラー結果
    resObj = {
      code: STATUS_MESSAGE.CODE_402,
      message: blogList.message,
    };
    return res.status(200).send(resObj);
  } else {
    contentArray = [];
    blogList.forEach((blog) => {
      contentArray.push({
        id: blog.id,
        title: blog.Title,
        content: blog.Content,
        userName: blog.User.UserName || "",
      });
    });

    resObj = {
      code: STATUS_MESSAGE.CODE_SUCCESS,

      data: {
        title: "test",
        content: contentArray,
        userID: userID,
      },
    };
  }

  return res.status(200).send(resObj);
});

router.post("/imageDelete", async function (req, res, next) {
  //　id
  let id = req.query.blogID;

  blogObj = {
    id: id,
  };
  // DBにユーザ登録を呼び出す
  const results = blogmodel.imageDelete(blogObj, { key: "id", val: id });

  // TODO　登録結果評価、エラーの場合、エラーメッセージを返す（再修正必要）
  if (typeof results.errors != "undefined") {
    // エラー結果
    resObj = {
      code: STATUS_MESSAGE.CODE_402,
      message: "削除失敗",
    };
    return res.status(200).send(resObj);
  } else {
    resObj = {
      // JSON ステータスコード
      code: STATUS_MESSAGE.CODE_SUCCESS,
      data: {
        message: "削除成功",
      },
    };
  }
  return res.status(200).send(resObj);
});

module.exports = router;
