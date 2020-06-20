const db = require('../../common/db.common');



/* 情報取得 
 * 検索条件：ユーザ名とパスワード
 * 検索テーブル: ユーザ情報テーブル
 */
const getUserInfoByUserName = async (queryInfo) => {
   try {
      // コネクションを取得
      const connection = await db.connectHandle();
      // 実行SQL
      let statement = "select userID,UserName,Password,RankCode,DisableFlag from tb_user where UserName = ? AND DisableFlag = '0'"
      // 検索パラメータ
      // let param = [connection.escape(queryInfo.username) , connection.escape(queryInfo.password)]
      let param = [queryInfo.username]
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



/* 情報取得 
 * 検索条件　指定field
 * 検索テーブル: ユーザ情報テーブル
 */
const getUserInfoByField = async (queryInfo) => {
   try {
      // コネクションを取得
      const connection = await db.connectHandle();
      // 実行SQL
      let statement = "select userID,UserName,RankCode,DisableFlag from tb_user where ?? = ? AND DisableFlag = '0'"
      // 検索パラメータ
      // let param = [connection.escape(queryInfo.username) , connection.escape(queryInfo.password)]
      let param = [queryInfo.key, queryInfo.val]
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

/* ユーザ新規作成
 * 登録データ：メールアドレス、パスワード
 * 検索テーブル: ユーザ情報テーブル
 */
const saveUserAsEmailAndPassword = async (queryInfo) => {
   try {
      // コネクションを取得
      const connection = await db.connectHandle();
      // 実行SQL
      let statement = "INSERT INTO tb_user (UserName, Email, RankCode, Password, PasswordDate, JoinDate) VALUES (?, ?, ?, ?, now(), now());"
      // 検索パラメータ
      // let param = [connection.escape(queryInfo.username) , connection.escape(queryInfo.password)]
      let param = [queryInfo.username, queryInfo.email, queryInfo.rankCode, queryInfo.password]
      // SQL実行
      const result = await db.query(connection, statement, param);
      // リソース開放
      await db.release(connection);
      // 結果を返す
      return result;

   } catch (error) {
      console.error("情報取得エラー:" + error.stack + "\n");
      return error;
   }
}

module.exports = {
   getUserInfo: getUserInfoByUserName,
   saveUser: saveUserAsEmailAndPassword,
   getUserInfoByField: getUserInfoByField
}