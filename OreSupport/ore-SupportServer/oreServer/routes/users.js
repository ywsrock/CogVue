var express = require("express");
var router = express.Router();
var usermodel = require("../dao/user/user.dao");
var checkuser = require("../common/check.token");
const STATUS_MESSAGE = require("../common/const").STATUS_MESSAGE;
const PROFILE_INFO = require("../common/const").PROFILE_INFO;
const bcryptTools = require("../common/bcrypt_tools");
const config = require("../config/secret.config");
const jwtToken = require("jsonwebtoken");
const User = require("../model/user.model")
const Image_storage = require("../common/fileup")
const multer = require('multer');
const fs = require('fs');
const appRoot = require('app-root-path');

const upload = multer({ storage: Image_storage.Image_storage });

/* GET users listing. */
router.get(
    "/",
    /* [checkuser.verifyUser], */
    async function(req, res, next) {
        var username = "yws";
        var password = "YYY";

        const results = await usermodel.getUserInfo({ username, password });
        if (result) {
            console.log(results.toJSON())
            res.send(results);
        } else {
            res.send("ユーザ存在しません");
        }
    }
);

/* ユーザログイン処理 */
router.post("/login", async function(req, res, next) {
    // ユーザ名とパスワード
    const { username, password } = req.body;
    // ユーザ情報取得
    var user = await usermodel.getUserInfo({ username });

    // ユーザ存在　かつ　パスワード同じの場合
    if (user &&
        bcryptTools.compareSync(password, user.Password)) {
        // ユーザデータを取得
        user = user.dataValues;
        // ユーザパウワード情報削除
        delete user.Password;
        // トークンを作成
        var tokenKey = jwtToken.sign({ id: user.UserID, userName: user.UserName }, config.secret, {
            // 24時間
            expiresIn: 60 * 60 * 24,
        });

        // ユーザ名をセッションに格納
        req.session.username = user.UserName;
        // ユーザIDをセッションに格納
        req.session.userID = user.UserID;
        //　Tokenをセッションに格納
        req.session.token = tokenKey;
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
        res.send(resObj);
    } else {
        // 認証失敗の場合
        return res.status(200).send({
            token: null,
            message: STATUS_MESSAGE.LOGIN_ERROR_401,
        });
    }
});

// ユーザ登録
router.post("/singUp", async function(req, res, next) {
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

        // DBにユーザ登録を呼び出す
        const results = await usermodel.saveUser(userObj);

        // TODO　登録結果評価、エラーの場合、エラーメッセージを返す（再修正必要）
        if (typeof results.errors != "undefined") {
            // エラー結果
            resObj = {
                code: STATUS_MESSAGE.CODE_402,
                message: results.message,
            };
            return res.status(200).send(resObj);
        } else {
            resObj = {
                // JSON ステータスコード
                code: STATUS_MESSAGE.CODE_SUCCESS,
                data: {
                    message: "登録成功",
                },
            };
        }
        return res.status(200).send(resObj);
    } else {
        return res.status(200).send({
            token: null,
            message: "ユーザ名とパスワードをチェックしてくだい。",
        });
    }
});

// // ユーザ情報取得処理
// router.get("/info", [checkuser.verifyUser], async function (req, res, next) {
//   // トークイン解析したユーザIDを取得
//   // var token = req.query.token;
//   var token_userID = req.userID;
//   // トークン解析したユーザ名を取得
//   var token_userName = req.userName;
//   if (!token_userID) {
//     res.status(200).send({
//       token: null,
//       message: STATUS_MESSAGE.LOGIN_ERROR_401,
//     });
//     return
//   }
//   // DBユーザ情報取得(ユーザ登録ずみなので、存在チェックしなくてもよい)
//   var user = await usermodel.getUserInfoByField({ key: "UserID", val: req.userID })
//   // トークンをキーとして、データを検索
//   var resobj = {
//     code: STATUS_MESSAGE.CODE_SUCCESS,
//     data: {
//       // ユーザ名
//       name: user.UserName,
//       // ユーザ情報
//       dataInfo: user,
//       // 権限
//       roles: ["admin", "superUser"],
//       // ユーザアバター
//       avatar: "http://localhost:8080",
//       // 詳細情報
//       introduction: user.rankCode
//     }
//   };
//   //　結果を返す
//   res.status(200).send(resobj);
// });

// ユーザ情報取得処
router.get("/profileInfo", [checkuser.verifyUser], async function(req, res, next) {
    // トークイン解析したユーザIDを取得
    // var token = req.query.token;
    var token_userID = req.userID;
    // トークン解析したユーザ名を取得
    var token_userName = req.userName;
    if (!token_userID) {
        res.status(200).send({
            token: null,
            message: STATUS_MESSAGE.LOGIN_ERROR_401,
        });
        return
    }
    // DBユーザ情報取得(ユーザ登録ずみなので、存在チェックしなくてもよい)
    var user = await usermodel.getUserProfileByUserID({ key: "UserID", val: req.userID })
    if (typeof user.errors != "undefined") {
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
        var respath = req.protocol + '://' + req.host + (port == 80 || port == 443 ? '' : ':' + port);
        // ファイル存在チェック
        var isExists = fs.existsSync(`${appRoot}/public/avatar/${user.UserProfile.Avatar}`);
        // ファイル存在チェック
        var imgpath = isExists ? user.UserProfile.Avatar : "00_00.jpg";

        // トークンをキーとして、データを検索
        var resobj = {
            code: STATUS_MESSAGE.CODE_SUCCESS,
            data: {
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
                        sns_Facebook: user.UserProfile.sns_paceboot,
                        sns_twtitter: user.UserProfile.sns_twtitter,
                        sns_instagram: user.UserProfile.sns_instagram,
                        sns_other: user.UserProfile.sns_other,
                    },
                },
            }
        };
        //　結果を返す
        res.status(200).send(resobj);
    }
});

//　ファイルアップ upload.single('imgAvatar')
var upload1 = multer({ storage: Image_storage.Image_storage }).single('imgAvatar')
router.post("/imageUp", [checkuser.verifyUser], async function(req, res, next) {

    var resObj = {};
    // ユーザIDID
    await upload1(req, res, function(err) {
        if (err) {
            resObj.code = STATUS_MESSAGE.CODE_403;
            resObj.message = STATUS_MESSAGE.FILEUP_ERROR_403;
        } else {
            var port = req.app.settings.port;
            var respath = req.protocol + '://' + req.host + (port == 80 || port == 443 ? '' : ':' + port);

            //ユーザAvatar画像更新
            updateProfile_obj = {
                Avatar: req.file.filename
            };
            // プロフィール更新処理
            var ret = usermodel.saveUserProfile(updateProfile_obj, {}, { key: "UserID", val: req.userID });
            //  更新エラーの場合
            if (typeof ret.errors != "undefined") {
                // エラー結果
                resObj = {
                    code: STATUS_MESSAGE.CODE_403,
                    message: STATUS_MESSAGE.FILEUP_ERROR_403
                };
            } else { //更新成功の場合
                // ファイル存在チェック
                var isExists = fs.existsSync(`${appRoot}/public/avatar/${res.req.file.filename}`);
                var imgpath = isExists ? res.req.file.filename : "00_00.jpg";
                resObj.code = STATUS_MESSAGE.CODE_SUCCESS
                resObj.data = {
                    imgUrl: `${respath}/avatar/${imgpath}`
                }
            }
        }
        res.status(200).send(resObj);
    })
});
// ユーザプロフィール更新
router.post("/updatePro", [checkuser.verifyUser], async function(req, res, next) {
    //　更新type
    var objtype = req.body.Update_type;

    //　更新OBJ
    var updateProfile_obj = {};
    var updateUser_obj = {};
    // ユーザテーブル更新flg
    var flg_u = false;

    switch (objtype) {
        case PROFILE_INFO.BASIC_INFO:
            updateProfile_obj = {
                    LastName: req.body.lastName,
                    FirstName: req.body.firstName,
                    Sex: req.body.sex,
                    Birthday: req.body.birthday,
                    Phone1: req.body.phone,
                    Avatar: req.body.avatar,
                    Aboutme: req.body.aboutMe,
                },
                // ユーザテーブル
                updateUser_obj.Email = req.body.email,
                // ユーザテーブル更新FLG
                flg_u = true
            break;
        case PROFILE_INFO.ADRESS_INFO:
            // アドレス情報
            updateProfile_obj = {
                State: req.body.state,
                City: req.body.city,
                Streat: req.body.streat,
                houseNumber: req.body.houseNumber,
                postNumber: req.body.postalcode,
            }
            break;
        case PROFILE_INFO.PASSORD_INFO:
            // パスワード情報
            updateProfile_obj = {
                oldPassword: "",
                newPassword: "",
            }
            break;
        case PROFILE_INFO.SNS_INFO:
            //　sns情報
            updateProfile_obj = {
                sns_paceboot: req.body.sns_Facebook,
                sns_twtitter: req.body.sns_twtitter,
                sns_instagram: req.body.sns_instagram,
                sns_other: req.body.sns_other,
            }
            break;
        default:
            break;
    }
    // 更新処理
    var ret = await usermodel.saveUserProfile(updateProfile_obj, updateUser_obj, { key: "UserID", val: req.userID }, flg_u)
    if (typeof ret.errors != "undefined") {
        // エラー結果
        resObj = {
            code: STATUS_MESSAGE.CODE_402,
            message: ret.message,
        };
        return res.status(200).send(resObj);
    } else {
        var resobj = {
                code: STATUS_MESSAGE.CODE_SUCCESS,
            }
            //　結果を返す
        res.status(200).send(resobj)
    }




});
// ログアウト処理
router.post("/logout", function(req, res, next) {
    console.log("ログアウト");
    res.send({ code: 20000, content: "OK---" });
});


module.exports = router;