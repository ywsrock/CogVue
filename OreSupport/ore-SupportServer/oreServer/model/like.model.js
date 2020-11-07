const Sequelize = require("sequelize");
const { sequelize } = require("../common/db.common");

// ユーザモデル バリデーションも入れられる
const Like = sequelize.define(
  "Like",
  {
    ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: "ID",
    },
    userID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      comment: "userID",
    },
    blogID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      comment: "blogID",
    }
  },
  {
    tableName: "tb_like", //　Maping　テーブル名指定
    modelName: "Like", // モデル名指定
    timestamps: false, // モデルに変更tamestamp カラム自動追加禁止
  }
);
// モデルとDB同期取得 force オプションを必ずFalseを指定（trueの場合、テーブル削除して、再作成になる）
var like = Like.sync({ force: false });

module.exports = {
  Like: Like,
};
