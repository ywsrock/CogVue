/* eslint-disable */
import { getToken, setToken, removeToken } from "@/utils/auth";
import { getInformations } from "@/utils/api/information";
import { resetRouter } from "@/router";

/*
 *ストア情報編集処理を行う（非同期処理）
 */
const actions = {
  // 公開されているお知らせを取得
  getInformations() {
    return new Promise((resolve, reject) => {
      getInformations()
        .then((res) => {
          resolve(res.data);
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
  actions,
};
