/* eslint-disable */
import { getToken, setToken, removeToken } from "@/utils/auth";
import { autoSearch } from "@/utils/api/address";
import { resetRouter } from "@/router";

/*
 *住所自動検索を行う
 */
const actions = {
  autoSearch(context, postalcode) {
    return new Promise((resolve, reject) => {
      autoSearch(postalcode)
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
