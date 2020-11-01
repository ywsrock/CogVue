const jwtToken = require("jsonwebtoken");
const config = require('../config/secret.config')
const ERROR_MESSAGE = require('./const').STATUS_MESSAGE;

/* 
 * ユーザのトークンチェック 
 */
verifyUser = (req, res, next) => {
  // ヘッダー、クエリから　トークン情報を取得
  let token = req.headers["x-token"] || req.query.token;
  // トークン存在しない場合、エラーを返す
  if (!token) {
    return res.status(200).send({
      code: ERROR_MESSAGE.CODE_5008,
      message: ERROR_MESSAGE.RES_STATUS_TOKEN_ERROR_50008
    });
  }

  // トークンキーを解析
  jwtToken.verify(token, config.secret, (err, decoded) => {
    // 解析エラーの場合、エラーを返す
    if (err) {
      return res.status(200).send({
        code: ERROR_MESSAGE.CODE_5008,
        message: ERROR_MESSAGE.RES_STATUS_TOKEN_ERROR_50008
      });
    }
    //　解析結果
    req.userID = decoded.id;
    req.userName = decoded.userName;
    next();
  });
}

module.exports = {
  verifyUser: verifyUser
}