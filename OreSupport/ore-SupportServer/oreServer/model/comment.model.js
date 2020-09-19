const Sequelize = require("sequelize");
const {sequelize} = require('../common/db.common');
const User = require("./user.model")
const Blog = require("./blog.model")

// ユーザモデル バリデーションも入れられる
const Comment = sequelize.define('Comment', {
id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement: true,
        comment: "ID"
} ,
BlogID: {
    type: Sequelize.STRING,
    allowNull: true,
    comment: "ブログID",
    references: {
        model: Blog,
        key: "BlogID"
      }
},
UserID: {
    type: Sequelize.STRING,
    allowNull: true,
    comment: "ユーザID",
    references: {
        model: User,
        key: "UserID"
      }
},
Comment1:{
    type: Sequelize.TEXT,
    allowNull: true,
    comment: "Comment1"
},
Timestamp: {
    type: Sequelize.STRING,
    allowNull: true,
    comment: "更新日付"
},

}, {
    tableName: "Tb_Comment", //　Maping　テーブル名指定
    modelName: "Comment", // モデル名指定
    timestamps: false,　 // モデルに変更tamestamp カラム自動追加禁止
});
// モデルとDB同期取得 force オプションを必ずFalseを指定（trueの場合、テーブル削除して、再作成になる）
var comments =  Comment.sync({ force: false });


module.exports = {
    Comment:Comment
}