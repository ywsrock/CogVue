const mysql = require('mysql')
const databaseconfig = require('../config/database.config')


/* 
 *データベースコネクションプール 
 */
const pool = mysql.createPool({
    connectionLimit: databaseconfig.connectionLimit,        //Poolの数設定
    host: databaseconfig.host,                              //DBサーバのアドレス
    database: databaseconfig.database,                      //DB名
    user: databaseconfig.user,                              // ユーザ名
    password: databaseconfig.password                       // パスワード
})


//Promise コネクションを返す
const connectHandle = () => new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('DB接続エラー：' + err.stack + '\n' + 'connectionID：' + connection.threadId)
            reject(err)
        } else {
            resolve(connection)
        }
    })
})

/**
 * トランザクション処理　開始 
 * @Param connection Connection 
 */
const beginTransaction = (connection) => {
    return new Promise((resolve, reject) => {
        connection.beginTransaction((err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        })
    });
}

// 
/**
 * SQL処理
 * @Param1 connection Connection
 * @Param2 statement String 
 * @Param3 params Collection
 */
const query = (connection, statement, params) => {
    return new Promise((resolve, reject) => {
        connection.query(statement,params, (err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results, fields);
            }
        });
    });
}

/**
 * トランザクションcommit
 * @Param connection Connection 
 */
const commit = (connection) => {
    return new Promise((resolve, reject) => {
        connection.commit((err) => {
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};


/**
 * トランザクションrollback
 * @Param connection Connection 
 * @Param err Error 
 */
const rollback = (connection, err) => {
    return new Promise((resolve, reject) => {
        connection.rollback(() => {
            reject(err);
        });
    });
};


/**
 * 接続リソース開放
 * @Param connection Connection 
 */
const　release = (connection) => {
    return new Promise((resolve,reject) =>{
        try {
            connection.release();
            resolve()
        } catch (error) {
           reject(error) 
        }
    });
};



module.exports = {
    connectHandle,
    beginTransaction: beginTransaction,
    query: query,
    commit: commit,
    release: release,
    rollback: rollback
}