const db = require('../../common/db.common');
const { User } = require("../../model/user.model");
const { UserProfile } = require("../../model/userprofile.model")
const { sequelize } = require('../../common/db.common');
const Sequelize = require('sequelize');
const { Op } = require('sequelize');

/* 情報取得 
 * 検索条件：ユーザ名とパスワード
 * 検索テーブル: ユーザ情報テーブル
 */
const getUserInfoByUserName = async(queryInfo) => {
    try {
        // データ検索
        const result = await User.findOne({
                where: {
                    [Op.and]: [{
                        [Op.or]: {
                            UserName: {
                                [Op.eq]: queryInfo.username
                            },
                            Email: {
                                [Op.eq]: queryInfo.username
                            }
                        },
                        DisableFlag: {
                            [Op.eq]: 0
                        }
                    }]
                }
            })
            // 結果を返す
        return result;
    } catch (error) {
        console.error("情報取得エラー:" + error.stack);
        return error;
    }
}


/* 情報取得 
 * 検索条件　指定field
 * 検索テーブル: ユーザ情報テーブル
 */
const getUserInfoByField = async(queryInfo) => {
    try {
        // 結果を返す
        const result = await User.findOne({
            where: {
                [Op.and]: [{
                        [queryInfo.key]: queryInfo.val
                    },
                    { DisableFlag: 0 },
                ]
            }
        });
        return result;
    } catch (error) {
        console.error("情報取得エラー:" + error.stack);
        throw error;
    }
}

/* ユーザ新規作成
 * 登録データ：メールアドレス、パスワード
 * 検索テーブル: ユーザ情報テーブル
 */
const saveUserAsEmailAndPassword = async(queryInfo) => {
    try {
        // トランザクション処理開始
        const t = await sequelize.transaction();
        const result = await User.create({
            // ユーザ名
            UserName: queryInfo.username,
            // メールアドレス
            Email: queryInfo.email,
            // ランクコード
            RankCode: queryInfo.rankCode,
            // パスワード
            Password: queryInfo.password,
            // パスワード設定日
            PasswordDate: Sequelize.fn("NOW"),
            //　加入日
            JoinDate: Sequelize.fn("NOW"),
            // 更新者
            UpdUserID: "SYSTEM",
            // 更新日
            Timestamp: Sequelize.fn("NOW")
        });
        //ユーザプロフィール採番
        const result_1 = await UserProfile.create({
            //　ユーザID
            UserID: result.UserID,
            // デフォルトAvatar
            Avatar: "00_00.jpg",
            // 更新者
            UpdUserID: "SYSTEM",
            // 更新日
            Timestamp: Sequelize.fn("NOW")
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

// ユーザプロフィール情報取得
const getUserProfileByUserID = async(queryInfo) => {
    try {
        // ユーザテーブルとプロフィールテーブル関連
        User.hasOne(UserProfile, {
            foreignKey: {
                name: 'UserID'
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        })
        UserProfile.belongsTo(User, {
            foreignKey: {
                name: 'UserID'
            }
        });

        // 関連検索
        const user = await User.findOne({
            where: {
                [Op.and]: [{
                        [queryInfo.key]: queryInfo.val
                    },
                    { DisableFlag: 0 }
                ]
            },
            include: UserProfile, //　プリロードモード
            attributes: { exclude: ['Password'] }
        });
        return user;
    } catch (error) {
        console.error("情報取得エラー:" + error.stack);
        return error;
    }
}

// ユーザプロフィール情報設定
const saveUserProfile = async(updateProfile_obj, updateUser_obj, queryInfo, flg = false) => {
    try {
        // ユーザテーブル更新の場合
        if (flg) {
            const result = await User.update(updateUser_obj, {
                where: {
                    [queryInfo.key]: queryInfo.val,
                }
            })
        }
        //　プロフィールテーブル更新
        const result = await UserProfile.update(updateProfile_obj, {
            where: {
                [queryInfo.key]: queryInfo.val,
            }
        })
        return result;
    } catch (error) {
        console.error("情報取得エラー:" + error.stack);
        return error;
    }
}

module.exports = {
    getUserInfo: getUserInfoByUserName,
    saveUser: saveUserAsEmailAndPassword,
    getUserInfoByField: getUserInfoByField,
    getUserProfileByUserID: getUserProfileByUserID,
    saveUserProfile: saveUserProfile
}