const bcrypt = require("bcryptjs");
const BCRYPT_SALT = require("./const").BCRYPT_SALT;

/*   To hash a password:
    https://www.npmjs.com/package/bcryptjs
      var bcrypt = require('bcryptjs');
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync("B4c0/\/", salt);
      // Store hash in your password DB.
      // Load hash from your password DB.
      bcrypt.compareSync("B4c0/\/", hash); // true
      bcrypt.compareSync("not_bacon", hash); // false
      */


// ハッシュ処理
const hash = function (key) {
    var salt = bcrypt.genSaltSync(BCRYPT_SALT);
    return bcrypt.hashSync(key, salt);
}

// ハッシュ比較
const compareSync = function (key, hash) {
    return bcrypt.compareSync(key, hash);
}


module.exports = {
    hash,
    compareSync
}
