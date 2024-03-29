const Sequelize = require("sequelize");
const { sequelize } = require('../common/db.common');
const { DataTypes, or } = require("sequelize");
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
                this.setDataValue('startDate', now)
            } else {
                this.setDataValue('startDate', value)
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
                this.setDataValue('endDate', now)
            } else {
                this.setDataValue('endDate', value)
            }
        }
    },
    memo: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: ""
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
    tableName: 'tb_useraction',
    modelName: 'UserAction'
})

UserAction.sync({ force: false });

module.exports = {
    UserAction: UserAction
}
