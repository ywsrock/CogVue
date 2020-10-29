const Sequelize = require("sequelize");
const { sequelize } = require("../common/db.common");
const { freezeTableName } = require("../config/database.config");
const User = require("./user.model");

const UserProfile = sequelize.define(
  "UserProfile",
  {
    ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    UserID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: User,
        key: "UserID",
      },
    },
    FirstName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    LastName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    Sex: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    Birthday: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    Phone1: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    Aboutme: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    Phone2: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    Avatar: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    sns_facebook: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    sns_twitter: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    sns_instagram: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    sns_other: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    Memo1: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    Memo2: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    Memo3: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    State: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    City: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    streat: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    houseNumber: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    postNumber: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    DisableFlag: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "0",
    },
    UpdUserID: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    Timestamp: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "tb_userprofile", //　Maping　テーブル名指定
    modelName: "UserProfile", // モデル名指定
    timestamps: false, // モデルに変更tamestamp カラム自動追加禁止
  }
);

// モデルとDB同期取得 force オプションを必ずFalseを指定（trueの場合、テーブル削除して、再作成になる）
const userProfile = UserProfile.sync({ force: false });

module.exports = {
  UserProfile: UserProfile,
};
