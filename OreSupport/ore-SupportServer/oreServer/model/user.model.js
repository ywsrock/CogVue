const db = require('../common/db.common');



/* 情報取得 
 * 検索条件：ユーザ名とパスワード
 * 検索テーブル: ユーザ情報テーブル
 */
const getUserInfoByUserNameAndPassword = async (queryInfo) => {
   try {
      // コネクションを取得
      const connection = await db.connectHandle();
      // 実行SQL
      let statement = "select userID,UserName,RankCode,DisableFlag from tb_user where UserName =? And password = ?"
      // 検索パラメータ
      // let param = [connection.escape(queryInfo.username) , connection.escape(queryInfo.password)]
      let param = [queryInfo.username, queryInfo.password]
      // SQL実行
      const result = await db.query(connection, statement, param);
      // リソース開放
      await db.release(connection);
      // 結果を返す
      return result;

   } catch (error) {
      console.error("情報取得エラー:" + error.stack + "\n" + "connectionID：" + connection.threadId);
      throw error;
   }
}
module.exports = {
   getUserInfo: getUserInfoByUserNameAndPassword
}