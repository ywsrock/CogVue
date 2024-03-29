var express = require("express");
var router = express.Router();
var usermodel = require("../dao/user/user.dao");
var checkuser = require("../common/check.token");
const STATUS_MESSAGE = require("../common/const").STATUS_MESSAGE;
const { PROFILE_INFO, MAIL_SETTING, PASSWORDPOLICY } = require("../common/const");
const bcryptTools = require("../common/bcrypt_tools");
const config = require("../config/secret.config");
const jwtToken = require("jsonwebtoken");
const { User } = require("../model/user.model");
const { userPower } = require("../model/userPower.model");
const { UserProfile } = require("../model/userprofile.model")
const { RestInfo } = require("../model/restinfo.model")
const Image_storage = require("../common/fileup");
const multer = require("multer");
const fs = require("fs");
const appRoot = require("app-root-path");
const { createSMTPTTransport, sendMail, dateDiff } = require("../common/nodeMailer")
var log = require("log4js").getLogger("users");
var dateFormat = require('dateformat');
const { Op, and } = require('sequelize');


//thirdParytyログインの場合
async function thirdParyty(req, res, next) {
  log.info(`Third Party by ${req.body.type}`);
  // パスワードハッシュ処理 ランダムパスワード
  let rndPwd = `${Math.random().toString(36).slice(-8)}${req.body.userId} `;
  const password_hash = await bcryptTools.hash(rndPwd);
  let username = req.body.userId, //ユーザID
    // ユーザ登録処理
    userObj = {
      username: username, //ユーザID
      email: "",
      rankCode: 1,
      password: password_hash,
    };

  //ユーザ存在しない場合：
  var user = await usermodel.getUserInfo({ username });

  if (user == null) {
    // DBにユーザ登録を呼び出す
    const results = await usermodel.saveUser(userObj);
    //登録結果判断
    if (typeof results.errors != "undefined") {
      // エラー結果
      resObj = {
        code: STATUS_MESSAGE.CODE_402,
        message: results.message,
      };
      log.error(`singUp error: ${resObj} `);
      return res.status(200).send(resObj);
    }
  }
  //ユーザ情報取得
  var user = await usermodel.getUserInfo({ username });
  // トークンを作成
  var tokenKey = jwtToken.sign(
    { id: user.UserID, userName: req.body.username },
    config.secret,
    {
      // 24時間
      expiresIn: 60 * 60 * 24,
    }
  );

  // Response データ
  var resObj = {
    // JSON ステータスコード
    code: STATUS_MESSAGE.CODE_SUCCESS,
    data: {
      // ユーザ名
      userName: req.body.username,
      // ユーザ情報
      dataInfo: user,
      // トークン情報
      token: tokenKey,
      // ユーザアバター
      avatar: "",
      // ユーザ情報
      introduction: "",
      // ユーザ権限
      roles: [],
    },
  };
  return resObj;
}

/* ユーザログイン処理 */
router.post("/login", async function (req, res, next) {
  //ログ出力
  log.info("ユーザログ UserName:" + req.body.username);
  // ログインタイプ設定
  req.session.loginType = req.body.type;
  // Third party　登録の場合
  if (req.body.type !== "normal") {
    var resObj = await thirdParyty(req, res, next);
    res.status(200).send(resObj);
    return;
  }
  // ユーザ名とパスワード
  const { username, password } = req.body;
  // ユーザ情報取得
  var user = await usermodel.getUserInfo({ username });

  // ユーザ存在　かつ　パスワード同じの場合
  if (user && bcryptTools.compareSync(password, user.Password)) {
    // ユーザデータを取得
    user = user.dataValues;
    // ユーザパウワード情報削除
    delete user.Password;
    // トークンを作成
    var tokenKey = jwtToken.sign(
      { id: user.UserID, userName: user.UserName },
      config.secret,
      {
        // 24時間
        expiresIn: 60 * 60 * 24,
      }
    );

    // ユーザ名をセッションに格納
    req.session.username = user.UserName;
    // ユーザIDをセッションに格納
    req.session.userID = user.UserID;
    //　Tokenをセッションに格納
    req.session.token = tokenKey;
    // ログインタイプ設定
    req.session.loginType = req.body.type;
    // Response データ
    var resObj = {
      // JSON ステータスコード
      code: STATUS_MESSAGE.CODE_SUCCESS,
      data: {
        // ユーザ名
        userName: user.UserName,
        // ユーザ情報
        dataInfo: user,
        // トークン情報
        token: tokenKey,
        // ユーザアバター
        avatar: "",
        // ユーザ情報
        introduction: "",
        // ユーザ権限
        roles: [],
      },
    };
    log.info(`login success UserID: ${user.UserID} `);
    res.send(resObj);
  } else {
    log.error(`login error UserName: ${req.body.username} `);
    // 認証失敗の場合
    return res.status(200).send({
      token: null,
      message: STATUS_MESSAGE.LOGIN_ERROR_401,
    });
  }
});

/* ユーザパスワードリセット */
router.post("/restPassword", async function (req, res, next) {
  //ユーザパスワード変更
  log.info("ユーザ対象 UserName:" + req.body.username);

  //ユーザ名
  let userName = req.body.username
  //ユーザメール
  let email = req.body.email
  //年月日
  let birthday = req.body.birthday
  //年月日存在しない場合、空設定
  if (undefined !== birthday) {
    birthday = dateFormat(new Date(birthday), "yyyy-mm-dd")
  } else {
    birthday = ""
  }

  try {
    //モデル関連設定 letf join　関連テーブル、別名指定　外部キーUserID
    User.hasOne(UserProfile, { as: 'userprofile', foreignKey: 'UserID' })
  } catch (error) {
    console.log(error)
  }
  //指定情報存在かどうか　件数のユーザ情報取得
  let { count, rows } = await User.findAndCountAll({
    include: {
      // model: "userprofile",
      model: UserProfile,
      as: 'userprofile'
    },
    where: {
      '$userprofile.birthday$': { [Op.eq]: birthday },
      Email: email
    }
  })
  //パスワード設定ＵＲＬ
  let restUrl = ""
  //送信先リスト
  let mailList = []
  //送信MSG本体
  let msg = {
    from: `<${MAIL_SETTING.FROM}>`, // sender address
    subject: `${MAIL_SETTING.SUBJECT}`, // Subject line
    text: `${MAIL_SETTING.TEXT}`, // plain text body
    html: `${MAIL_SETTING.HTML}`, // html body
  }

  //存在の場合
  if (count > 0) {
    //ユーザID取得
    let userID = rows[0].UserID
    //一時リンク作成
    let currentTime = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss")
    // ポートの番号取得
    let port = req.app.settings.port;
    // ホスト取得
    let respath = req.protocol + "://" + req.hostname + (port == 80 || port == 443 ? "" : ":" + port);
    //リンクQueryParam作成
    let queryParam = {
      Timestamp: currentTime,
      UserID: userID,
      RandomKey: Math.random().toString(36).slice(-8)
    }
    let encryptParam = await bcryptTools.CipherStr(JSON.stringify(queryParam))
    //url作成
    restUrl = await `${respath}/user/checkPassword?accessKey=${encryptParam}`
    //リセット情報保存
    await RestInfo.create({
      UserID: queryParam.UserID,
      Timestamp: queryParam.Timestamp,
      RandomKey: queryParam.RandomKey,
      URL: restUrl
    })
    //メール内容設定
    msg.text = msg.text.replace("#url#", restUrl)
    msg.html = `${msg.html.replace("#url#", restUrl)}`

    //パスワードリセット
    //メール送信のトランスポート取得
    let trans = createSMTPTTransport()
    //宛先アドレス設定
    // mailList.push("a1906wy@aiit.ac.jp")
    mailList.push(email)
    //メール配信
    let errList = sendMail(trans, msg, mailList)
    //送信エラー
    errList.forEach(err => {
      console.log(err)
      // 送信失敗の場合
      res.status(200).send({
        token: null,
        message: STATUS_MESSAGE.LOGIN_ERROR_409,
      });
      return
    })

  } else {
    res.status(200).send({
      token: null,
      message: STATUS_MESSAGE.LOGIN_ERROR_408,
    });
    return
  }

  //送信成功の場合
  return res.status(200).send({
    code: STATUS_MESSAGE.CODE_SUCCESS,
    data: {
      message: "mail success",
    },
  });
})

//現在の有効チェック
router.get("/checkPassword", async function (req, res, next) {
  // //リンクのQueryParamの取得
  let accessKey = req.query.accessKey;
  if ("" === accessKey.trim()) {
    res.render("restpassword/linkTimeout", { loginUrl: MAIL_SETTING.CLINENTLOGINURL })
    return
  }
  let decryptParam = await bcryptTools.DecipherStr(accessKey)
  //キー解析
  let queryParam = await JSON.parse(decryptParam)
  let { rows, count } = await RestInfo.findAndCountAll({
    where: {
      Timestamp: queryParam.Timestamp,
      UserID: queryParam.UserID,
      RandomKey: queryParam.RandomKey
    }
  })
  if (count == 0) {
    //存在しません
    res.render("restpassword/linkTimeout", { loginUrl: MAIL_SETTING.CLINENTLOGINURL })
    return
  }
  //有効期間チェック
  let hoursDiff = await dateDiff(dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"), rows[0].Timestamp, "hours")
  //時間超えたら、404
  if (hoursDiff > MAIL_SETTING.EXPIRATERM) {
    res.render("restpassword/linkTimeout", { loginUrl: MAIL_SETTING.CLINENTLOGINURL })
    return
  }
  //変更画面rendering
  res.render("restpassword/restInfo", { key: accessKey, msg: "", pwdPolicy: PASSWORDPOLICY })
})
//パスワード設定
router.post("/setPassword", async function (req, res, next) {

  try {
    //key情報取得
    let accessKey = req.body.key
    if (undefined == accessKey || "" == accessKey.trim()) {
      res.render("restpassword/restInfo", { key: accessKey, msg: "新パスワードチェックしてください。" })
      return
    }
    let decryptParam = await bcryptTools.DecipherStr(accessKey)
    //キー解析
    let queryParam = await JSON.parse(decryptParam)
    let { rows, count } = await RestInfo.findAndCountAll({
      where: {
        Timestamp: queryParam.Timestamp,
        UserID: queryParam.UserID,
        RandomKey: queryParam.RandomKey
      }
    })
    if (count == 0) {
      //存在しません
      res.render("restpassword/linkTimeout", { loginUrl: MAIL_SETTING.CLINENTLOGINURL })
      return
    }
    //有効期間チェック
    let hoursDiff = await dateDiff(dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"), rows[0].Timestamp, "hours")
    if (hoursDiff > MAIL_SETTING.EXPIRATERM) {
      res.render("restpassword/linkTimeout", { loginUrl: MAIL_SETTING.CLINENTLOGINURL })
      return
    }
    //ユーザＩＤ取得
    let userID = queryParam.UserID
    //パスワード
    let newPassword = req.body.newPassword
    if ("" == await newPassword.trim() || undefined == newPassword) {
      //変更画面rendering
      res.render("restpassword/restInfo", { key: accessKey, msg: "新パスワードチェックしてください。" })
      return
    }

    // パスワードハッシュ処理
    const password_hash = await bcryptTools.hash(newPassword);
    //パスワード更新
    let results = await User.update({
      Password: password_hash
    }, {
      where: {
        UserID: userID
      }
    })
    if (typeof results.errors != "undefined") {
      res.render("restpassword/restInfo", { key: accessKey, msg: "パスワード変更失敗。サイト管理者までご連絡ください。" })
      return
    }
    // リセットテーブル削除
    await RestInfo.destroy({
      where: {
        Timestamp: queryParam.Timestamp,
        UserID: queryParam.UserID,
        RandomKey: queryParam.RandomKey
      }
    })

    // res.send(`パスワード変更しました。再ログインくだい。`)
    res.render("restpassword/linkTimeout", { sucflg: 1, loginUrl: MAIL_SETTING.CLINENTLOGINURL })
  } catch (error) {
    console.log(error)
  }
})

// ユーザ登録
router.post("/singUp", async function (req, res, next) {
  //ログ出力
  log.info("singUp:" + JSON.stringify(req.body));
  // 出力結果
  let resObj = {};
  // ユーザメールアドレスと
  let email = req.body.email;
  //　ユーザパスワード
  let password = req.body.password;

  // ユーザ名とパスワードチェック
  if ("" != email.trim() && "" != password.trim()) {
    // パスワードハッシュ処理
    const password_hash = await bcryptTools.hash(password);
    // ユーザ登録処理
    userObj = {
      username: email,
      email: email,
      rankCode: 1,
      password: password_hash,
    };
    //ユーザ存在チェック：
    var user = await usermodel.getUserInfo({ username: email });
    if (user != null) {
      // エラー結果
      resObj = {
        code: STATUS_MESSAGE.CODE_402,
        message: "同じユーザ名或いはメールアドレスのユーザが存在しております。",
      };
      log.error(`singUp error: ${resObj} `);
      return res.status(200).send(resObj);
    }
    // DBにユーザ登録を呼び出す
    const results = await usermodel.saveUser(userObj);

    // TODO　登録結果評価、エラーの場合、エラーメッセージを返す（再修正必要）
    if (typeof results.errors != "undefined") {
      // エラー結果
      resObj = {
        code: STATUS_MESSAGE.CODE_402,
        message: results.message,
      };
      log.error(`singUp error: ${resObj} `);
      return res.status(200).send(resObj);
    } else {
      resObj = {
        // JSON ステータスコード
        code: STATUS_MESSAGE.CODE_SUCCESS,
        data: {
          message: "singUp success",
        },
      };
    }
    log.info(`singUp: Email: ${email} `);
    return res.status(200).send(resObj);
  } else {
    log.error(`singUp error: ${req.body.email} `);
    return res.status(200).send({
      token: null,
      message: STATUS_MESSAGE.REG_ERROR_402,
    });
  }
});

// ユーザ情報取得処(ログイン処理)
router.get("/profileInfo", [checkuser.verifyUser], async function (
  req,
  res,
  next
) {
  //ログ出力
  log.info(`profileInfo userID: ${req.userID} `);
  // ポートの番号取得
  var port = req.app.settings.port;
  // ホスト取得
  var respath =
    req.protocol +
    "://" +
    req.host +
    (port == 80 || port == 443 ? "" : ":" + port);
  // ファイル存在チェック
  var imgpath = "00_00.jpg";
  if (req.query.loginType != "normal") {
    var resobj = {
      code: STATUS_MESSAGE.CODE_SUCCESS,
      data: {
        type: req.session.loginType,
        name: req.userName,
        // 権限
        roles: ["admin", "superUser"],
        avatar: `${respath}/avatar/${imgpath} `,
        dataInfo: {
          //  基本情報
          basicInfo: {
            Update_type: PROFILE_INFO.BASIC_INFO,
            avatar: `${respath}/avatar/${imgpath} `,
          },
          // アドレス情報
          addressInfo: {
            Update_type: PROFILE_INFO.ADRESS_INFO,
          },
          // パスワード情報
          passwordInfo: {
            Update_type: PROFILE_INFO.PASSORD_INFO,
          },
          //　sns情報
          snsInfo: {
            Update_type: PROFILE_INFO.SNS_INFO,
          },
        },
      },
    };
    return res.status(200).send(resobj);
  }
  // トークイン解析したユーザIDを取得
  // var token = req.query.token;
  var token_userID = req.userID;
  // トークン解析したユーザ名を取得
  var token_userName = req.userName;
  if (!token_userID) {
    log.error(`profileInfo token error UserID: ${token_userID} `);
    res.status(200).send({
      token: null,
      message: STATUS_MESSAGE.LOGIN_ERROR_401,
    });
    return;
  }
  // DBユーザ情報取得(ユーザ登録ずみなので、存在チェックしなくてもよい)
  var user = await usermodel.getUserProfileByUserID({
    key: "UserID",
    val: req.userID,
  });
  if (typeof user.errors != "undefined") {
    log.error(`profileInfo data query error key: UserID val: ${req.userID} `);
    // エラー結果
    resObj = {
      code: STATUS_MESSAGE.CODE_402,
      message: user.message,
    };
    return res.status(200).send(resObj);
  } else {
    // ポートの番号取得
    var port = req.app.settings.port;
    // ホスト取得
    var respath =
      req.protocol +
      "://" +
      req.hostname +
      (port == 80 || port == 443 ? "" : ":" + port);

    var isExists = fs.existsSync(
      `${appRoot}/public/avatar/${user.UserProfile.Avatar}`
    );
    // ファイル存在チェック
    var imgpath = isExists ? user.UserProfile.Avatar : "00_00.jpg";

    // トークンをキーとして、データを検索
    var resobj = {
      code: STATUS_MESSAGE.CODE_SUCCESS,
      data: {
        // ログインType
        type: req.query.loginType,
        // ユーザ名
        name: user.UserName,
        // 権限
        roles: ["admin", "superUser"],
        // ユーザ情報
        dataInfo: {
          UserID: user.UserID,
          //  基本情報
          basicInfo: {
            Update_type: PROFILE_INFO.BASIC_INFO,
            lastName: user.UserProfile.LastName,
            firstName: user.UserProfile.FirstName,
            sex: user.UserProfile.Sex,
            birthday: user.UserProfile.Birthday,
            email: user.Email,
            phone: user.UserProfile.Phone1,
            avatar: `${respath}/avatar/${imgpath}`,
            aboutMe: user.UserProfile.Aboutme,
          },
          // アドレス情報
          addressInfo: {
            Update_type: PROFILE_INFO.ADRESS_INFO,
            state: user.UserProfile.State,
            city: user.UserProfile.City,
            streat: user.UserProfile.streat,
            houseNumber: user.UserProfile.houseNumber,
            postalcode: user.UserProfile.postNumber,
          },
          // パスワード情報
          passwordInfo: {
            Update_type: PROFILE_INFO.PASSORD_INFO,
            oldPassword: "",
            newPassword: "",
          },
          //　sns情報
          snsInfo: {
            Update_type: PROFILE_INFO.SNS_INFO,
            sns_facebook: user.UserProfile.sns_facebook,
            sns_twtitter: user.UserProfile.sns_twitter,
            sns_instagram: user.UserProfile.sns_instagram,
            sns_other: user.UserProfile.sns_other,
          },
        },
      },
    };
    log.info(`profileInfo success`);
    //　結果を返す
    res.status(200).send(resobj);
  }
});

//　ファイルアップ upload.single('imgAvatar')画像格納エンジ
var upload1 = multer({ storage: Image_storage.Image_storage }).single(
  "imgAvatar"
);
router.post("/imageUp", [checkuser.verifyUser], async function (
  req,
  res,
  next
) {
  //ログ出力
  // log.info(`fileUpload: + ${req.file.filename}`);

  var resObj = {};
  // ユーザIDID
  await upload1(req, res, function (err) {
    if (err) {
      log.error(`imageUp upload error: ${err} `);
      resObj.code = STATUS_MESSAGE.CODE_403;
      resObj.message = STATUS_MESSAGE.FILEUP_ERROR_403;
    } else {
      //ログ出力
      log.info(`fileUpload: + ${req.file.filename} `);
      var port = req.app.settings.port;
      var respath =
        req.protocol +
        "://" +
        req.host +
        (port == 80 || port == 443 ? "" : ":" + port);

      //ユーザAvatar画像更新
      updateProfile_obj = {
        Avatar: req.file.filename,
      };
      // プロフィール更新処理
      var ret = usermodel.saveUserProfile(
        updateProfile_obj,
        {},
        { key: "UserID", val: req.userID }
      );
      //  更新エラーの場合
      if (typeof ret.errors != "undefined") {
        log.error(`imageUp query error key: UserID val: ${req.userID} `);
        // エラー結果
        resObj = {
          code: STATUS_MESSAGE.CODE_403,
          message: STATUS_MESSAGE.FILEUP_ERROR_403,
        };
      } else {
        //更新成功の場合
        // ファイル存在チェック
        var isExists = fs.existsSync(
          `${appRoot}/public/avatar/${res.req.file.filename}`
        );
        var imgpath = isExists ? res.req.file.filename : "00_00.jpg";
        resObj.code = STATUS_MESSAGE.CODE_SUCCESS;
        resObj.data = {
          imgUrl: `${respath}/avatar/${imgpath}`,
        };
      }
    }
    log.info(`imageUp success`);
    res.status(200).send(resObj);
  });
});

// ユーザプロフィール更新
router.post("/updatePro", [checkuser.verifyUser], async function (
  req,
  res,
  next
) {
  //ログ出力
  log.info("updatePro:" + JSON.stringify(req.body));
  //　更新type
  var objtype = req.body.Update_type;
  //　更新OBJ
  var updateProfile_obj = {};
  var updateUser_obj = {};
  // ユーザテーブル更新flg
  var flg_u = false;

  switch (objtype) {
    case PROFILE_INFO.BASIC_INFO:
      (updateProfile_obj = {
        LastName: req.body.lastName,
        FirstName: req.body.firstName,
        Sex: req.body.sex,
        Birthday: req.body.birthday,
        Phone1: req.body.phone,
        // Avatar: req.body.avatar,
        Aboutme: req.body.aboutMe,
      }),
        // ユーザテーブル
        (updateUser_obj.Email = req.body.email),
        // ユーザテーブル更新FLG
        (flg_u = true);
      break;
    case PROFILE_INFO.ADRESS_INFO:
      // アドレス情報
      updateProfile_obj = {
        State: req.body.state,
        City: req.body.city,
        Streat: req.body.streat,
        houseNumber: req.body.houseNumber,
        postNumber: req.body.postalcode,
      };
      break;
    case PROFILE_INFO.PASSORD_INFO:
      // パスワード情報
      updateProfile_obj = {
        oldPassword: "",
        newPassword: "",
      };
      break;
    case PROFILE_INFO.SNS_INFO:
      //　sns情報
      updateProfile_obj = {
        sns_facebook: req.body.sns_Facebook,
        sns_twitter: req.body.sns_twtitter,
        sns_instagram: req.body.sns_instagram,
        sns_other: req.body.sns_other,
      };
      break;
    default:
      break;
  }
  // 更新処理
  var ret = await usermodel.saveUserProfile(
    updateProfile_obj,
    updateUser_obj,
    { key: "UserID", val: req.userID },
    flg_u
  );
  if (typeof ret.errors != "undefined") {
    log.error(`updatePro query error key: UserID val: ${req.userID} `);
    // エラー結果
    resObj = {
      code: STATUS_MESSAGE.CODE_402,
      message: ret.message,
    };
    return res.status(200).send(resObj);
  } else {
    var resobj = {
      code: STATUS_MESSAGE.CODE_SUCCESS,
    };
    log.info(`updatePro success`);
    //　結果を返す
    res.status(200).send(resobj);
  }
});

// ログアウト処理
router.post("/logout", function (req, res, next) {
  //ログ出力
  log.info("logout");
  res.send({ code: 20000, content: "OK---" });
});

//各種設定（権限初期表示）
router.get("/showUserPower", [checkuser.verifyUser], async function (req, res, next) {
  //ユーザID取得
  let userID = req.userID
  // Response データ
  var resObj = {
    // JSON ステータスコード
    code: STATUS_MESSAGE.CODE_SUCCESS,
    data: {
      // プロフィール
      profileOpen: false,
      // コグエボ
      cogEvoOpen: false,
      // 行動
      actionOpen: false,
      // ブログ
      blogOpen: false,
      // コメント
      blogCommentOpen: false,
      // コグエボ結果
      blogCogEvoOpen: false,
    },
  };
  //ユーザ権限取得
  let { count, rows } = await userPower.findAndCountAll({
    where: {
      UserID: userID
    }
  })
  //権限存在チェック
  if (count > 0) {
    resObj.data.profileOpen = rows[0].showProfile == 0 ? false : true
    resObj.data.cogEvoOpen = rows[0].showCogEvo == 0 ? false : true
    resObj.data.actionOpen = rows[0].showAction == 0 ? false : true
    resObj.data.blogOpen = rows[0].showBlog == 0 ? false : true
    resObj.data.blogCommentOpen = rows[0].showBlogComment == 0 ? false : true
    resObj.data.blogCogEvoOpen = rows[0].showBlogCogEvo == 0 ? false : true
  }
  res.status(200).send(resObj)

})
//各種設定(権限設定)
router.post("/varousSetting", [checkuser.verifyUser], async function (req, res, next) {
  // 設定情報取得
  let setObj = req.body.powerSetting
  var uPower
  var resobj

  let queryObj = {
    //UserID
    UserID: req.userID,
    //プロフィール
    showProfile: setObj.profileOpen == true ? 1 : 0,
    //コグエボ
    showCogEvo: setObj.cogEvoOpen == true ? 1 : 0,
    //行動
    showAction: setObj.actionOpen == true ? 1 : 0,
    //ブログ
    showBlog: setObj.blogOpen == true ? 1 : 0,
    //コメント
    showBlogComment: setObj.blogCommentOpen == true ? 1 : 0,
    //コグエボ結果
    showBlogCogEvo: setObj.blogCogEvoOpen == true ? 1 : 0
  }
  try {
    // ユーザ存在チェック、存在の場合更新、それ以外の場合新規作成
    const count = await userPower.count({
      where: {
        UserID: req.userID,
      }
    })
    if (count == 0) {
      uPower = await userPower.create({
        ...queryObj
      })
    } else {
      uPower = await userPower.update({
        ...queryObj,
      }, {
        where: {
          UserID: req.userID,
        }
      })
    }
    resobj = {
      code: STATUS_MESSAGE.CODE_SUCCESS,
    };
    res.status(200).send(resobj)
  } catch (error) {
    // エラー結果
    resObj = {
      code: STATUS_MESSAGE.CODE_412,
      message: STATUS_MESSAGE.SETPOWER_ERROR_412,
    };
    res.status(200).send(resObj)
  }
})

//各種設定(パスワード)
router.post("/passwordSetting", [checkuser.verifyUser], async function (req, res, next) {
  // userID
  let userID = req.userID
  // 変更情報取得
  let setObj = req.body.passwordForm
  //現在のパスワード
  let oldPassword = setObj.passwdOld
  var resobj = {}

  //現在のパスワード検証
  var { count, rows } = await User.findAndCountAll({
    where: {
      UserID: userID
    }
  })
  //存在しない場合
  if (count == 0 || !bcryptTools.compareSync(oldPassword, rows[0].Password)) {
    // エラー結果
    resObj = {
      code: STATUS_MESSAGE.CODE_410,
      message: STATUS_MESSAGE.LOGIN_ERROR_410,
    };
    res.status(200).send(resObj)
    return
  }

  //パスワード更新
  if (setObj.password !== undefined && setObj.password.trim() !== "") {
    //パスワード暗号
    let newPasswd = await bcryptTools.hash(setObj.password);
    //パスワード更新
    let results = await User.update({
      Password: newPasswd
    }, {
      where: {
        UserID: userID
      }
    })
    //エラー存在チェック
    if (typeof results.errors != "undefined") {
      // エラー結果
      resObj = {
        code: STATUS_MESSAGE.CODE_411,
        message: STATUS_MESSAGE.LOGIN_ERROR_411,
      };
      res.status(200).send(resObj)
      return
    }

    resobj = {
      code: STATUS_MESSAGE.CODE_SUCCESS,
    };
    res.status(200).send(resobj)

  } else {
    // エラー結果
    resObj = {
      code: STATUS_MESSAGE.CODE_411,
      message: STATUS_MESSAGE.LOGIN_ERROR_411,
    };
    res.status(200).send(resObj)
    return
  }
})
module.exports = router;
