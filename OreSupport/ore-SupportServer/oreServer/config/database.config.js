module.exports = {
    connectionLimit: 20,    //Poolの数設定
    host: 'localhost',      //DBサーバのアドレス
    database: 'pbl',        //DB名
    user: 'root',           // ユーザ名
    password: 'passw0rd',   // パスワー
    dialect: 'mysql',       // データエースタイプ
    pool_max: 10,            // プールの最大数
    pool_min: 5,             // プールの最大数 
    idle: 20000,             // リソース開放タイムアウト
    freezeTableName: false  // テーブル名自動複数しない
}