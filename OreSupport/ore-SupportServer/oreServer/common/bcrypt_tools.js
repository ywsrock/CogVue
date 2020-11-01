const bcrypt = require("bcryptjs");
const BCRYPT_SALT = require("./const").BCRYPT_SALT;

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

module.exports = {
    hash,
    compareSync,
};
