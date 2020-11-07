/* eslint-disable */
import { createLike, getLikes, destroyLike } from "@/utils/api/like";

/*
 * ストア管理情報、全アプリケーション共有
 */
const state = {
    likes: []
}

/*
 * ストア情報取得
 */
const getters = {
  get_likes: (state) => state.likes,
};

/*
 *ストア情報編集処理を行う（同期）
 *ストア情報設定処理
 */
const mutations = {
  set_likes: (state, likes) => {
    state.likes = likes;
  },
};

/*
 *ストア情報編集処理を行う（非同期処理）
 */
const actions = {
  // like作成
  createLike(context, likeInfo) {
    return new Promise((resolve, reject) => {
      createLike(likeInfo)
        .then((res) => {
          const data = res.data;
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // like情報取得
  getLikes(context, blogId) {
    return new Promise((resolve, reject) => {
      getLikes(blogId)
        .then((res) => {
          const data = res.data;
          context.commit("set_likes", res.data.likes);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // like情報削除
  destroyLike(context, likeId) {
    return new Promise((resolve, reject) => {
      destroyLike(likeId)
        .then((res) => {
          const data = res.data;
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default {
    // NameSpace有効
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}