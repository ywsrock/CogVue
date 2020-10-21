const Sequelize = require("sequelize");
const { sequelize } = require('../common/db.common');
const { DataTypes, or } = require("sequelize"); // 导入内置数据类型
const dateFormat = require("dateformat")


const UserAction = sequelize.define("UserAction", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "アクションID"
    },
    userID: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    startDate: {
        type: DataTypes.STRING,
        allowNull: true,
        set(value) {
            if (!value) {
                let now = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss")
                this.setDataValue(now)
            }
        }
    },
    endDate:
    {
        type: DataTypes.STRING,
        allowNull: true,
        set(value) {
            if (!value) {
                let now = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss")
                this.setDataValue(now)
            }
        }
    },
    deleteFlg: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: "0:表示　1:論理削除"
    },
    displayFlg: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: "0:表示　1:非表示"
    }
}, {
    timestamps: false,
    createdAt: false,
    tableName: 'UserAction',
    modelName: 'UserAction'
})

UserAction.sync() //テーブル存在しない場合、自動作成
