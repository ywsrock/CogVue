const db = require("../../common/db.common");
const { Information } = require("../../model/information.model");
const { sequelize } = require("../../common/db.common");
const Sequelize = require("sequelize");
const { Op } = require("sequelize");
require("date-utils");

/* ユーザ新規作成
 * 登録データ：メールアドレス、パスワード
 * 検索テーブル: ユーザ情報テーブル
 */
const createInformation = async (queryInfo) => {
  try {
    // トランザクション処理開始
    const t = await sequelize.transaction();
    const result = await Information.create({
      // タイトル
      Title: queryInfo.Title,
      // カテゴリー
      Category: queryInfo.Category,
      // 内容
      Content: queryInfo.Content,
      // 配信開始日
      From: queryInfo.From,
      // 配信終了日
      To: queryInfo.To,
    });
    // トランザクションコンミット
    await t.commit();
    // 結果を返す
    return result;
  } catch (error) {
    await t.rollback();
    console.error("情報取得エラー:" + error.stack);
    return error;
  }
};

const getInformations = async (queryInfo) => {
  try {
    const result = await Information.findAll({
      order: [["ID", "DESC"]],
    });
    return result;
  } catch (error) {
    console.error("情報取得エラー:" + error.stack);
    throw error;
  }
};

const getPublicInformations = async (queryInfo) => {
  try {
    const now = new Date();
    const result = await Information.findAll({
      order: [["ID", "DESC"]],
      where: {
        From: {
          [Op.lte]: now,
        },
        To: {
          [Op.gte]: now,
        },
      },
    });
    return result;
  } catch (error) {
    console.error("情報取得エラー:" + error.stack);
    throw error;
  }
};

const deleteInformation = async (queryInfo) => {
  try {
    // 結果を返す
    const result = await Information.destroy({
      where: {
        [Op.and]: [
          {
            [queryInfo.key]: queryInfo.val,
          },
        ],
      },
    });
    return result;
  } catch (error) {
    console.error("情報取得エラー:" + error.stack);
    throw error;
  }
};

//お知らせ詳細
const getInformationDetail = async (queryInfo) => {
  try {
    // 結果を返す
    const result = await Information.findOne({
      where: {
        [Op.and]: [
          {
            [queryInfo.key]: queryInfo.val,
          },
        ],
      },
    });
    return result;
  } catch (error) {
    console.error("情報取得エラー:" + error.stack);
    throw error;
  }
};

const updateInformation = async (queryInfo) => {
  try {
    const result = await Information.update(
      {
        // タイトル
        Title: queryInfo.Title,
        // カテゴリー
        Category: queryInfo.Category,
        // 内容
        Content: queryInfo.Content,
        // 配信開始日
        From: queryInfo.From,
        // 配信終了日
        To: queryInfo.To,
      },
      {
        where: {
          ID: queryInfo.Id,
        },
      }
    );
    // 結果を返す
    return result;
  } catch (error) {
    console.error("情報取得エラー:" + error.stack);
    return error;
  }
};

module.exports = {
  createInformation: createInformation,
  getInformations: getInformations,
  deleteInformation: deleteInformation,
  getInformationDetail: getInformationDetail,
  updateInformation: updateInformation,
  getPublicInformations: getPublicInformations,
};
