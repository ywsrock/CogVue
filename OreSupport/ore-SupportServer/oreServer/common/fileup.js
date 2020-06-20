var multer = require('multer');
const hash = require('./bcrypt_tools')
const path = require('path');
var appRoot = require('app-root-path');

// 保存エンジン_画像
const Image_storage = multer.diskStorage({
    // ファイルの保存先を指定

    destination: appRoot.path + "/public/avatar",

    // ファイル名を指定(オリジナルのファイル名を指定)
    filename: function(req, file, cb) {
        //　Math.random().toString(36).slice(-8)で乱数を生成ブラウザでは36進数
        const filename = `${Math.random().toString(36).slice(-8)}_${req.userID}.jpg`
        cb(null, filename)
    }
})

module.exports = {
    Image_storage
}