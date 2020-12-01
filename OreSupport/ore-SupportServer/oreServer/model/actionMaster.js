const { sequelize } = require('../common/db.common');
const { DataTypes, or } = require("sequelize"); // 导入内置数据类型

const UserActionMaster = sequelize.define("UserActionMaster", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "アクションID"
    },

    name: {
        type: DataTypes.STRING,
        allowNull: true
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
    tableName: 'tb_useractionmaster',
    modelName: 'UserActionMaster'
})

UserActionMaster.sync({ force: false });

module.exports = {
    UserActionMaster: UserActionMaster
}
