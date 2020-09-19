const Sequelize = require("sequelize");
const { sequelize } = require("../common/db.common");

// ユーザモデル バリデーションも入れられる
const Information = sequelize.define(
  "Information",
  {
    ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: "ID",
    },
    Title: {
      type: Sequelize.STRING,
      allowNull: false,
      comment: "Title",
    },
    Category: {
      type: Sequelize.STRING,
      allowNull: false,
      comment: "Category",
    },
    Content: {
      type: Sequelize.STRING,
      allowNull: false,
      comment: "Content",
    },
    From: {
      type: Sequelize.DATE,
      allowNull: false,
      comment: "From",
    },
    To: {
      type: Sequelize.DATE,
      allowNull: false,
      comment: "To",
    },
  },
  {
    tableName: "TB_INFORMATION", //　Maping　テーブル名指定
    modelName: "Information", // モデル名指定
    timestamps: false, // モデルに変更tamestamp カラム自動追加禁止
  }
);
// モデルとDB同期取得 force オプションを必ずFalseを指定（trueの場合、テーブル削除して、再作成になる）
var informations = Information.sync({ force: false });

module.exports = {
  Information: Information,
};
