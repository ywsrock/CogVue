const Sequelize = require("sequelize");
const { sequelize } = require('../common/db.common');
const { freezeTableName } = require("../config/database.config");
const { UserProfile } = require("./userprofile.model")


// ユーザモデル
const userPower = sequelize.define('userPower', {
    ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        comment: "ID"
    },
    UserID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        comment: "ユーザID"
    },
    showProfile: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    showCogEvo: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    showAction: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    showBlog: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    showBlogComment: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    showBlogCogEvo: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

}, {
    tableName: "tb_userPower", //　Maping　テーブル名指定
    modelName: "userPower", // モデル名指定
    timestamps: false,　 // モデルに変更tamestamp カラム自動追加禁止
});
// モデルとDB同期取得 force オプションを必ずFalseを指定（trueの場合、テーブル削除して、再作成になる）
userPower.sync({ force: false });

module.exports = {
    userPower: userPower
}