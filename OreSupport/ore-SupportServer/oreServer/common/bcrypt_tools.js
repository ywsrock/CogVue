const bcrypt = require("bcryptjs")
var crypto = require('crypto');
const BCRYPT_SALT = require("./const").BCRYPT_SALT;
const { CIPHERSETTING } = require("./const")

/*   To hash a password:
    https://www.npmjs.com/package/bcryptjs
*/

// ハッシュ処理
const hash = function (key) {
    var salt = bcrypt.genSaltSync(BCRYPT_SALT);
    return bcrypt.hashSync(key, salt);
};

// ハッシュ比較
const compareSync = function (key, hash) {
    return bcrypt.compareSync(key, hash);
};

//指定文字暗号化
const CipherStr =  function (str) {

    /*  引数
           アルコーリズム　とパスワード指定
           algorithm 暗号化するアルゴリズムで、このアルゴリズムはOpenSSLに依存します。
           password 暗号化・復号化で使用するキー
        返り値
            暗号オブジェクト 
     */
    let cipherIns = crypto.createCipher(CIPHERSETTING.ALGORITHM, CIPHERSETTING.PASSWORD);
    // let cipherIns =  crypto.createCipheriv(CIPHERSETTING.ALGORITHM, CIPHERSETTING.PASSWORD);
    /*   指定文字暗号
            dataで暗号を更新する。
        引数
            data 更新するデータ
            input_encoding 'utf8', 'ascii' or 'binary'が指定できる
            output_encoding 暗号化されたデータの出力形式。'binary', 'base64' or 'hex'が指定できる。
     */
    let cipherStr =  cipherIns.update(str, 'utf8', 'hex')
    /*   暗号化されたデータを取得する。
        ※ finalメソッドが呼び出された後、暗号オブジェクトは使えません。
    引数
          output_encoding 'binary', 'base64' or 'hex'を指定できる。
    返り値
        暗号化されたデータ */
    cipherStr += cipherIns.final('hex');
    return cipherStr
}

//指定文字複合
const DecipherStr = function (deStr) {
    var Decipher = crypto.createDecipher(CIPHERSETTING.ALGORITHM, CIPHERSETTING.PASSWORD);
    // var Decipher = crypto.createDecipheriv(CIPHERSETTING.ALGORITHM, CIPHERSETTING.PASSWORD);
    var deCipherStr = Decipher.update(deStr, 'hex', 'utf8')
    deCipherStr += Decipher.final('utf8');
    return deCipherStr
}

module.exports = {
    hash,
    compareSync,
    CipherStr,
    DecipherStr
};
