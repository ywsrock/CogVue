const Sequelize = require("sequelize");
const { sequelize } = require('../common/db.common');


//リセット情報モデル
const RestInfo = sequelize.define('RestInfo', {
    ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    UserID: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    Timestamp: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    RandomKey: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    URL: {
        type: Sequelize.STRING,
        allowNull: true,
    }
}, {
    tableName: "tb_restinfo",
    modelName: "RestInfo",
    timestamps: false
})

RestInfo.sync({ force: false })

module.exports = {
    RestInfo: RestInfo
}