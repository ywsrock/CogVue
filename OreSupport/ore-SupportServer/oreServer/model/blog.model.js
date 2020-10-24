const Sequelize = require("sequelize");
const { sequelize } = require('../common/db.common');
const User = require("./user.model")

// ユーザモデル バリデーションも入れられる
const Blog = sequelize.define('Blog', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        comment: "ID"
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
    Title: {
        type: Sequelize.STRING,
        allowNull: true,
        comment: "Title"
    },
    Content: {
        type: Sequelize.TEXT,
        allowNull: true,
        comment: "Content"
    }

}, {
    tableName: "Tb_Blog", //　Maping　テーブル名指定
    modelName: "Blog", // モデル名指定
    timestamps: false,　 // モデルに変更tamestamp カラム自動追加禁止
});
// モデルとDB同期取得 force オプションを必ずFalseを指定（trueの場合、テーブル削除して、再作成になる）
var blogs = Blog.sync({ force: false });


module.exports = {
    Blog: Blog
}