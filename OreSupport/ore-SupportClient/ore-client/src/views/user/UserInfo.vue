<template>
  <div class="ユーザ情報">
    <h1>ユーザINFINFO</h1>
    <h2>ようこそ：{{ getusername }}</h2>

    <ul>
      <li v-if="isLogin">
        <el-button type="text" @click.native="getProfileInfo"
          >プロフィール編集</el-button
        >
      </li>
      <li v-if="isLogin">
        <router-link v-bind:to="{ name: 'userDel' }">削除</router-link>
      </li>
      <li v-if="isLogin">
        <el-button type="text" @click.native="logout">ログアウト</el-button>
      </li>
      <li v-else>
        <router-link v-bind:to="{ name: 'login' }">ログイン</router-link>
      </li>
        <li v-if="isLogin">
        <router-link v-bind:to="{ name: 'viewBlog' }">ブログ参照</router-link>
      </li>
      <li >
        <li v-if="isLogin">
        <router-link v-bind:to="{ name: 'createBlog' }">ブログ投稿</router-link>
      </li>
      <li >
        <li v-if="isLogin">
        <el-button type="text" @click.native="getBlogList">ブログリスト</el-button
        >
      </li>
    </ul>
    <div>
      <router-view />
    </div>
    <div>
      <router-view name="sub" />
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  data() {
    return {
      username: "",
      isLogin: false,
    };
  },
  mounted() {
    // if (store.getters.token){
    if (this.$session.get("jwt")) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  },
  computed: {
    getusername: function() {
      if (this.isLogin) {
        return (
          store.getters.info.basicInfo.lastName +
          store.getters.info.basicInfo.firstName
        );
      } else {
        return "";
      }
    },
  },
  methods: {
    getProfileInfo() {
      this.$router.push("/userInfo/userUpdate");
    },
    //ブログ一覧
    getBlogList() {
      //apiから　サーバーに命令をだす。(store action)
      this.$store.dispatch("blog/getBlogList")
      //成功の場合
      .then(res =>{
        this.$router.push("/blogList");
      })
      //失敗の場合
      .catch();
        console.log("err=====");
    },

    logout() {
      this.$store.dispatch("user/logout");
      this.$session.destroy();
      this.isLogin = false;
      // this.$router.push(`/login?redirect=${this.$route.fullPath}`);
      this.$router.push(`/userInfo?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>
