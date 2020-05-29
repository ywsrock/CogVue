import router from "./router";
import { getToken } from "./utils/auth"
import store from './store';

router.beforeEach(async (to, from, next) => {
  // ユーザToken 取得
  const userToken = getToken();

  //トークン存在の場合ユーザ登録済みメイン画面に遷移
  if (userToken) {
    if (to.path === "/login") {
      next({ path: '/userInfo' })
    } else {
      // ユーザ権限取得
      // const hasroles = store.getters["user/roles"];
      const hasroles = store.getters.roles;
      // 権限がある場合、処理続きます
      if (hasroles > 0) {
        console.log("●roles -" + hasroles)
        next()
      } else {
        // ユーザ情報取得
        const { roles } = await store.dispatch("user/getInfo");
        console.log(roles);
        // 権限と紐つけたルートを取得
        // const accessRoutes = {};
        // ルートを追加
        // router.addRoutes(accessRoutes)
        next()
      }
    }
  } else {
    //ログイン画面に遷移
    // next(`/login?redirect=${to.path}`);
    next()
  }
})