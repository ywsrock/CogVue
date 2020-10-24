const { Sequelize } = require('sequelize');
const databaseconfig = require('../config/database.config')


/* 
データベース接続
@param host DBサーバーホスト
@param max コネクションプールの数(最大)
@param min コネクションプールの数(最小)
@param idle スレッド最大待ち時間
＠return Sequelizeインスタンス */
const sequelize = new Sequelize(databaseconfig.database, databaseconfig.user, databaseconfig.password,
    {
        host: databaseconfig.host,
        dialect: databaseconfig.dialect,
        pool: {
            max: databaseconfig.max,
            min: databaseconfig.min,
            idle: databaseconfig.idle
        }
    })

module.exports = {
    sequelize
}