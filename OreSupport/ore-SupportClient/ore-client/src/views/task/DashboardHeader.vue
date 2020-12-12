<template>
  <div class="container">
    <div class="header-inner">
      <!-- /.header-logo -->
      <div class="header-content">
        <div>
          <p class="text-h2">CogEvo結果</p>
        </div>
        <!-- /.header-top -->

        <!-- /.header-bottom -->
      </div>
      <!-- /.header-content -->
    </div>
    <!-- /.header-inner -->
  </div>
</template>

<script>
/* eslint-disable */

import store from "@/store";
import { Switch } from "element-ui";
import { getToken } from "@/utils/auth";
import { CGEV_SESSION_KEY } from "@/utils/const";

export default {
  data() {
    return {
      username: "",
      isLogin: false,
    };
  },
  mounted() {
    if (this.$session.get("jwt")) {
      this.isLogin = true;
      this.username = this.$session.get("UserName");
    } else {
      this.isLogin = false;
    }

    this.getFBInfoAPI = function() {
      var that = this;
      FB.api("/me", function(response) {
        that.$store
          .dispatch("user/login", {
            username: response.name,
            userId: response.id,
            type: "Facebook",
          })
          .then((res) => {
            location.reload();
            // that.$router.push("/?type=facebook&time="+new Date().getTime());
          })
          .catch((error) => {
            console.log("Login error");
          });
      });
    };
  },

  computed: {
    key() {
      return this.$route.path;
    },
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
    fblogin() {
      const that = this;

      // eslint-disable-next-line
      FB.login(
        function(response) {
          if (response.status === "connected") {
            that.getFBInfoAPI();
          } else {
            console.log("error");
          }
          console.log(response);
        },
        { scope: "public_profile,email" }
      );
      //メイン画面に遷移
      this.$router.push("/");
    },

    getBlogList() {
      //apiから　サーバーに命令をだす。(store action)
      this.$store
        .dispatch("blog/getBlogList")
        //成功の場合
        .then((res) => {
          let userid = res.userID;
          this.$router.push("/blogList?userid=" + userid);
        })
        //失敗の場合
        .catch();
      console.log("err=====");
    },

    getProfileInfo() {
      this.$router.push("/userInfo/userUpdate");
    },

    async logout() {
      // Facebook登録された場合
      await FB.getLoginStatus(function(response) {
        if (response.status === "connected") {
          FB.logout(function(response) {});
        }
      });
      await this.$store.dispatch("user/logout");
      this.$session.destroy();
      this.isLogin = false;
      // this.$router.push(`/login?redirect=${this.$route.fullPath}`);
      this.$router.push(`/userInfo?redirect=${this.$route.fullPath}`);
    },
    // 基本知識クリック
    clickKnowledge: function(index) {
      switch (index) {
        case 1:
          this.$router.push("/knowledge/knowledgeDetail");
          break;
        default:
          this.$router.push("/knowledge/knowledgeList");
      }
    },
    // コグエボ結果
    taskClick: function(index) {
      switch (index) {
        //個人結果
        case 1:
          this.$router.push("/task/userSummary");
          break;
        //　みんなの結果
        default:
          this.$router.push("/task/userSummary");
      }
    },
    // ブログ
    blockClick: function(index) {
      switch (index) {
        //検索
        case 1:
          this.$router.push("/blog/blogList");
          break;
        //新規
        default:
          this.$router.push("/blog/createBlog");
      }
    },
    //タスク実行
    runTask: function() {
      const userToken = getToken();
      if (!userToken) {
        this.$router.push("/login");
        return;
      }
      // top画面に移動
      this.$router.push("/");
      // 新しいタブを開き、ページを表示
      this.$nextTick(async () => {
        let access_token = await this.$store.dispatch("cgev/authenticate");
        var url = location.href;
        var winFeature =
          "location=no,toolbar=no,menubar=no,scrollbars=yes,resizable=yes";

        let subWin = await window.open(
          `https://api.cgev-stg.com/v1/run/tasks?access_token=${access_token}&return_url=${url}`,
          "_blank",
          winFeature
        );
        // サブ画面閉じる時、指定画面遷移
        if (subWin !== null && subWin != undefined) {
          var that = this;
          const timer = setInterval(() => {
            if (!subWin.closed) return;
            clearInterval(timer);
            Object.keys(CGEV_SESSION_KEY).forEach(function(key) {
              if (that.$session.has(key)) {
                that.$session.remove(key);
              }
            });
            that.$router.push("/task/userSummary");
            subWin = null;
          }, 100);
        }
      });
    },
  },
};
</script>
<style scoped>
@import "https://fonts.googleapis.com/css?family=Nunito:300,400,700";
@import "../../../public/assets/libraries/font-awesome/css/font-awesome.min.css";
@import "../../../public/assets/libraries/owl.carousel/assets/owl.carousel.css";
@import "../../../public/assets/libraries/colorbox/example1/colorbox.css";
@import "../../../public/assets/libraries/bootstrap-select/bootstrap-select.min.css";
@import "../../../public/assets/libraries/bootstrap-fileinput/fileinput.min.css";
@import "../../../public/assets/css/superlist.css";
@import "../../../public/assets/css/oresapo.css";

.header-content .nav li a {
  font-size: 15px;
}

.header-content .nav li .sub-menu li a {
  font-size: 15px;
}

.header-logo span {
  font-size: 15px;
}
</style>
