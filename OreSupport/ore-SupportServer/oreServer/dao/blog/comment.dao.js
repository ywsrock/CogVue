
const db = require('../../common/db.common');
const { Blog } = require("../../model/blog.model");
const { User } = require("../../model/user.model");
const { Comment } = require("../../model/comment.model");
const { sequelize } = require('../../common/db.common');
const Sequelize = require('sequelize');
const { Op } = require('sequelize');



/* ユーザ新規作成
 * 登録データ：メールアドレス、パスワード
 * 検索テーブル: ユーザ情報テーブル
 */

const createComment = async(queryInfo) => {
    try {
        // トランザクション処理開始
        const t = await sequelize.transaction();
        const result = await Comment.create({

            // タイトル
            commentName: queryInfo.commentName,
            // Content
            Comment: queryInfo.Comment,

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
}




module.exports = {
    createComment:createComment
}