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
    ACTION_DESTROY_ERROR: "アクション削除失敗",
    CODE_408: 408,
    LOGIN_ERROR_408: "入力された情報を確認してください。",
    CODE_409: 409,
    LOGIN_ERROR_409: "送信失敗しました。メールアドレスを確認してください。",
    CODE_410: 410,
    LOGIN_ERROR_410: "現在パスワードが間違います。再確認確認くだいさい。",
    CODE_411: 411,
    LOGIN_ERROR_411: "パスワード変更失敗。サイト管理者までご連絡ください。",
    CODE_411: 412,
    SETPOWER_ERROR_412: "権限変更失敗。サイト管理者までご連絡ください。",
    LIKE_CREATE_ERROR: "いいね登録失敗",
    LIKE_QUERY_ERROR: "いいね取得失敗",
    LIKE_DESTROY_ERROR: "いいね削除失敗",
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

//メール本文
const MAILTEXT = `
<h3>Cognees ユーザー様</h3>
<br>
<br>
※本メールは自動送信されています、<br>
心当たりの無い方は本メールの破棄をお願い致します。<br>
<br>
<br>
パスワード再設定用のURLを送付致します。<br>
以下のURLより変更をお願い致します。<br>
<br>
再設定用URL<br>
#url#<br>
<br>
本URLの有効期限は2020/11/30 12:00までとなります。<br>
変更したパスワードは大切に保管してください。<br>
<br>
<br>
〇お問合せ先<br>
Cognees サポート窓口<br>
cognees_support@cognisolution.com<br>
<br>
〇運営会社<br>
株式会社 Cognisolution<br>
住所：〒165-0026 東京都中野区新井1-12-14　秀光建設本社ビル3<br>
web：http://www.cognisolution.com/<br>
`

//パスワードリセットメール設定
const MAIL_SETTING = {
    FROM: 'info@cognisolution.com',
    SUBJECT: "パスワード設定確認",
    TEXT: MAILTEXT,
    HTML: MAILTEXT,
    HOST: "mail38.onamae.ne.jp",
    PORT: 465,
    SECURE: true, // true for 465, false for other ports
    USER: 'info@cognisolution.com', // generated ethereal user
    PASS: 'Benz300SLR)', // generated ethereal password
    EXPIRATERM: 2,    //hours
    CLINENTLOGINURL: "https://localhost:8080/#/userLogin" //oresupport login url
}

// パスワードセットポリシー
const PASSWORDPOLICY = [
    "   ①　6桁以上、16桁以下の英数字",
    "   ②　最低1つの大文字の英字",
    "   ③　「@ $ ! % * ? & 」いずれの符号を含む",
    "   ④　最低1つの数字"
]





module.exports = {
    STATUS_MESSAGE,
    BCRYPT_SALT,
    PROFILE_INFO,
    CIPHERSETTING,
    MAIL_SETTING,
    PASSWORDPOLICY,
}