const STATUS_MESSAGE = {
    CODE_SUCCESS: 20000,
    CODE_5008: 50008,
    RES_STATUS_TOKEN_ERROR_50008: "トークン認証失敗",
    CODE_401: 401,
    LOGIN_ERROR_401: "ログイン失敗しました、ユーザ名とパスワードを確認してください。",
    CODE_402: 402,
    REG_ERROR_402: "ユーザ登録失敗。",
    CODE_403: 403,
    FILEUP_ERROR_403: "ファイルアップロード失敗",
    CODE_405: 405,
    ACTION_CREATE_ERROR: "アクション登録失敗",
    CODE_406: 406,
    ACTION_QUERY_ERROR: "アクション取得失敗",
    CODE_407: 407,
    ACTION_DESTROY_ERROR: "アクション削除失敗"
}


// ハッシュ SALT
const BCRYPT_SALT = 10
//暗号設定情報
const CIPHERSETTING = {
    ALGORITHM: "aes-128-cbc",
    PASSWORD: "P@ssw0rd"
}

// プロフィール情報
const PROFILE_INFO = {
    // 基本情報
    BASIC_INFO: "basicInfo",
    // アドレス情報
    ADRESS_INFO: "AdressInfo",
    //　パスワード情報
    PASSORD_INFO: "PasswordInfo",
    // SNS情報
    SNS_INFO: "snsInfo",
}


module.exports = {
    STATUS_MESSAGE,
    BCRYPT_SALT,
    PROFILE_INFO,
    CIPHERSETTING
}