const Sequelize = require("sequelize");
const {sequelize} = require('../common/db.common');
const { freezeTableName } = require("../config/database.config");
const {UserProfile} = require("./userprofile.model")


// ユーザモデル
const User = sequelize.define('User', {
    UserID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        comment: "ユーザID"
    },
    UserName: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "ユーザ名"
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
        comment: "メールアドレス"
    },
    RankCode: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "ランクコード"
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "パスワード"
    },
    // PasswordDate: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //     comment: "パスワード設定日"
    // },
    PhoneNo: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "電話番号"
    },
    JoinDate: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "加入日"
    },
    LeaveDate: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "退会日"
    },
    Token: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "トークン"
    },
    Memo1: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "メモ1"
    },
    Memo2: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "メモ2"
    },
    Memo3: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "メモ3"
    },
    // DisableFlag: {
    //     type: Sequelize.STRING,
    //     allowNull: true,
    //     comment: "有効Flag"
    // },
    UpdUserID: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "更新者ID"
    },
    Timestamp: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "更新日付"
    },

}, {
    tableName: "tb_user", //　Maping　テーブル名指定
    modelName: "User", // モデル名指定
    timestamps: false,　 // モデルに変更tamestamp カラム自動追加禁止
});
// モデルとDB同期取得 force オプションを必ずFalseを指定（trueの場合、テーブル削除して、再作成になる）
var user =  User.sync({ force: false });
/* // ユーザテーブルとプロフィールテーブル関連
User.hasOne(UserProfile,{
    foreignKey: {
        name:'UserID'
    },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
})
UserProfile.belongsTo(User); */


module.exports = {
    User:User
}