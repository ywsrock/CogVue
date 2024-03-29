const db = require("../../common/db.common");
const { Blog } = require("../../model/blog.model");
const { User } = require("../../model/user.model");
const { Comment } = require("../../model/comment.model");
const { UserProfile } = require("../../model/userprofile.model")
const { sequelize } = require("../../common/db.common");
const Sequelize = require("sequelize");
const { Op } = require("sequelize");

/* ユーザ新規作成
 * 登録データ：メールアドレス、パスワード
 * 検索テーブル: ユーザ情報テーブル
 */
const createBlog = async (queryInfo) => {
  try {
    // トランザクション処理開始
    const t = await sequelize.transaction();
    const result = await Blog.create({
      // ユーザID
      UserID: queryInfo.UserID,
      // タイトル
      Title: queryInfo.Title,
      // Content
      Content: queryInfo.Content,
      // ブログ画像
      BlogImage: queryInfo.BlogImage,
      // 投稿日
      Timestamp: queryInfo.Timestamp
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

const getBlogList = async (queryInfo) => {
  try {
    User.hasOne(Blog, {
      foreignKey: {
        name: "UserID",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    });
    Blog.belongsTo(User, {
      foreignKey: {
        name: "UserID",
      },
    });
    UserProfile.belongsTo(User,{
      foreignKey: {
        name: "UserID",
      },
      
    });
    User.belongsTo(UserProfile, {
      foreignKey: {
        name: "UserID",
      },
      targetKey: "UserID",
    });
    if (queryInfo == undefined){
      const result = await Blog.findAll({
        order: [["id", "DESC"]],
        include: [
          {model:User,
          include:
          [{
            model:UserProfile,
            required: false,
          }
        ]}]
      });
      return result;
  }else{
      const result = await Blog.findAll({
        where: {
              [Op.and]: [{
                      [queryInfo.key]: queryInfo.val
                  },
              ]
          },
        order: [["id", "DESC"]],
        include: [
          {model:User,
          include:
          [{
            model:UserProfile,
            required: false,
          }
        ]}]
      });
      return result;
    }
    // return result;
  } catch (error) {
    console.error("情報取得エラー:" + error.stack);
    throw error;
  }
};

// //ブログ詳細 old
// const getBlogDetail = async(queryInfo) => {
//     try {
//         // 結果を返す
//         const result = await Blog.findOne({
// where: {
//     [Op.and]: [{
//             [queryInfo.key]: queryInfo.val
//         },
//     ]
// }
//         });
//         return result;
//     } catch (error) {
//         console.error("情報取得エラー:" + error.stack);
//         throw error;
//     }
// }

//ブログ詳細
const getBlogDetail = async (queryInfo) => {
  try {
    // 結果を返す
    Blog.hasMany(Comment, {
      foreignKey: {
        name: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    });
    Comment.belongsTo(Blog, {
      foreignKey: {
        name: "id",
      },
      targetKey: "id",
    });
    User.belongsTo(Comment,{
      foreignKey: {
        name: "UserID",
      },
      
    });
    Comment.belongsTo(User, {
      foreignKey: {
        name: "UserID",
      },
      targetKey: "UserID",
    });

    const result = await Blog.findAll({
      
      where: {
        [Op.and]: [
          {
            [queryInfo.key]: queryInfo.val,
          },
        ],
      },
      include: [
        {
          model: Comment,
          required: false,
          include:[
            {
              model:User,
              required: false,
            }
            
          ]
        },
      ],

      attributes: { exclude: ["Password"] },
      // attributes: ['Title',sequelize.fn('upper', sequelize.col("Title")),'Title'],      
    });
    return result;
  } catch (error) {
    console.error("情報取得エラー:" + error.stack);
    throw error;
  }
};

const blogDelete = async (queryInfo) => {
  try {
    // 結果を返す
    const result = await Blog.destroy({
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

const blogUpdate = async (queryInfo) => {
  try {
    const result = await Blog.update(
      {
        // タイトル
        Title: queryInfo.Title,
        // Content
        Content: queryInfo.Content,
        // ブログ画像のファイル名
        BlogImage: queryInfo.BlogImage,
      },
      {
        where: {
          id: queryInfo.id,
        },
      }

      // ,

      // {where: {

      //     [Op.and]: [{
      //         [queryInfo.key]: queryInfo.val
      //     }
      // ]
      // }

      // }
    );
    // 結果を返す
    return result;
  } catch (error) {
    console.error("情報取得エラー:" + error.stack);
    return error;
  }
};

const postComment = async (queryInfo) => {
  try {
    // トランザクション処理開始
    const t = await sequelize.transaction();
    const result = await Comment.create({
      id: queryInfo.id,
      // ユーザID
      UserID: queryInfo.UserID,
      // タイトル
      Comment1: queryInfo.comment,
      // Content
      commentName: queryInfo.commentName,
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
};

const searchBlog = async (queryInfo) => {
  try {

    // ユーザーとブログ
    User.hasMany(Blog, {
      foreignKey: {
        name: "UserID",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    });
    Blog.belongsTo(User, {
      foreignKey: {
        name: "UserID",
      },
    });

    // ユーザーとプロフィール
    User.hasOne(UserProfile, {
      foreignKey: {
        name: "UserID",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    });
    UserProfile.belongsTo(User, {
      foreignKey: {
        name: "UserID",
      },
    });

    const blogs = await Blog.findAll({
      include: {
        model: User,
        include: {
          model: UserProfile,
        }
      },
    });


    let result = [];
    let regexp = new RegExp(queryInfo.freeWord, 'i');
    let from, to;
    if (queryInfo.from) {
      from = new Date(queryInfo.from);
    } else {
      from = new Date('1900-01-01');
    }

    if (queryInfo.to) {
      to = new Date(queryInfo.to);
    } else {
      to = new Date('3000-01-01');
    }

    // 投稿日, フリーワード, 性別, 住所で絞り込み
    blogs.forEach(blog => {
      if ((queryInfo.freeWord && (blog.Content.match(regexp) || blog.Title.match(regexp))) || !queryInfo.freeWord) {
        if (blog.Timestamp >= from && blog.Timestamp <= to) {
          if (blog.User.UserProfile.Sex == queryInfo.sex || !queryInfo.sex) {
            if (blog.User.UserProfile.State == queryInfo.pref || !queryInfo.pref) {
              result.push(blog);
            }
          }
        }
      }
    });

    return result;
  } catch (error) {
    console.error("情報取得エラー:" + error.stack);
    throw error;
  }
};

const imageDelete = async (queryInfo) => {
  try {
    const result = await Blog.update(
      {
        BlogImage: "",
      },
      {
        where: {
          id: queryInfo.id,
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
  createBlog: createBlog,
  getBlogList: getBlogList,
  getBlogDetail: getBlogDetail,
  blogDelete: blogDelete,
  blogUpdate: blogUpdate,
  postComment: postComment,
  searchBlog: searchBlog,
  imageDelete: imageDelete,
};
