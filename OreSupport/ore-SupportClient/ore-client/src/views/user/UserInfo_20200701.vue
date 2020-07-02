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
