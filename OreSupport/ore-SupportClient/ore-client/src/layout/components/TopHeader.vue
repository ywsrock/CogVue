<template>
  <div class="header-wrapper">
    <div class="container">
      <div class="header-inner">
        <div class="header-logo">
          <router-link to="/">
            <img
              style="width:250px;"
              src="../../assets/img/logo.png"
              alt="Logo"
            />
            <span></span>
          </router-link>
        </div>
        <!-- /.header-logo -->
        <div class="header-content">
          <div class="header-top">
            <!-- /.header-search -->
            <ul
              class="header-nav-social social-links nav nav-pills"
              v-if="!isLogin"
            >
              <li>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" @click.prevent="fblogin()">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-google-plus"></i>
                </a>
              </li>
              <li></li>
            </ul>
            <!-- /.header-nav-social -->

            <ul class="header-nav-secondary nav nav-pills">
              <li v-if="!isLogin">
                <router-link v-bind:to="{ name: 'login' }" key="key"
                  >ログイン</router-link
                >
              </li>
              <li v-if="!isLogin">
                <router-link v-bind:to="{ name: 'register' }" key="key"
                  >新規登録</router-link
                >
              </li>
              <li v-if="isLogin">
                <a
                  class="text-success text-center"
                  href
                  @click.prevent.stop="getProfileInfo"
                  >{{ username }} 様、お疲れ様です。</a
                >
              </li>
              <li v-if="isLogin">
                <!--<el-button type="text" @click.native="logout">Logout</el-button>-->
                <a href @click.prevent.stop="logout">ログアウト</a>
              </li>
              <li v-if="isLogin">
                <a href @click.prevent.stop="getProfileInfo">設定</a>
              </li>
            </ul>
          </div>
          <!-- /.header-top -->
          <div class="header-bottom">
            <ul
              class="header-nav-primary nav nav-pills collapse navbar-collapse"
            >
              <li class="dropdown">
                <a href="#">
                  ホーム
                  <i class="fa fa-chevron-down"></i>
                </a>

                <ul class="sub-menu">
                  <li>
                    <a href="/views/index.html">ホームに戻る</a>
                  </li>
                </ul>
              </li>
              <!--認知概要-->
              <li>
                <a href="#">
                  認知概要
                  <i class="fa fa-chevron-down"></i>
                </a>

                <ul class="sub-menu">
                  <li>
                    <a href @click.prevent.stop="clickKnowledge(1)"
                      >認知機能とは</a
                    >
                  </li>
                  <li>
                    <!--<a href @click.prevent.stop="clickKnowledge(2)"
                      >基本知識一覧</a
                    >-->
                  </li>
                </ul>
              </li>
              <!--認知測定-->
              <li>
                <a href="#">
                  認知測定
                  <i class="fa fa-chevron-down"></i>
                </a>

                <ul class="sub-menu">
                  <li>
                    <a href @click.prevent.stop="taskClick(1)">結果表示</a>
                  </li>
                  <li><a href @click.prevent.stop="runTask">測定開始</a></li>
                  <li>
                    <a href="https://cog-evo.jp/" target="_blank">CogEvoとは</a>
                  </li>
                </ul>
              </li>

              <!--ブログ-->
              <li>
                <a href="#">
                  ブログ
                  <i class="fa fa-chevron-down"></i>
                </a>

                <ul class="sub-menu">
                  <li>
                    <!--<a href @click.prevent.stop="blogClick(1)"></a>-->
                  </li>
                  <li>
                    <a href @click.prevent.stop="blogClick(1)">検索</a>
                  </li>
                  <li v-if="isLogin" >
                    <a href @click.prevent.stop="blockClick(3)">自分のブログ</a>
                  </li>
                  <li>
                    <a href @click.prevent.stop="blogClick(2)">新規投稿</a>
                  </li>
                </ul>
              </li>
              <!--行動管理-->
              <li>
                <a @click.prevent.stop="actionClick(1)">
                  行動管理
                  <i class="fa fa-chevron-down"></i>
                </a>

                <!-- <ul class="sub-menu">
                  <li>
                    <a href @click.prevent.stop="actionClick(1)">行動履歴 </a>
                  </li>
                  <li>
                    <a href @click.prevent.stop="actionClick(2)"
                      >行動登録/削除</a
                    >
                  </li>
                </ul>-->
              </li>
              <!--商品購入-->
              <li v-show="false">
                <a href="#">
                  商品を購入する
                  <i class="fa fa-chevron-down"></i>
                </a>

                <ul class="sub-menu">
                  <li>
                    <a href="/#/solution/top">商品トップ</a>
                  </li>
                  <li>
                    <a href="/#/solution/index">商品一覧</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">
                  ヘルプ
                  <i class="fa fa-chevron-down"></i>
                </a>
                <ul class="sub-menu">
                  <li>
                    <a href="http://www.cognisolution.com/" target="_blank"
                      >企業情報</a
                    >
                  </li>
                  <li>
                    <a href="#">Cogneesとは </a>
                  </li>
                  <li>
                    <a href="#">FAQ/お問合せ</a>
                  </li>
                </ul>
              </li>
            </ul>
            <button
              class="navbar-toggle collapsed"
              type="button"
              data-toggle="collapse"
              data-target=".header-nav-primary"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <!-- /.header-bottom -->
        </div>
        <!-- /.header-content -->
      </div>
      <!-- /.header-inner -->
    </div>
    <!-- /.container -->
    <!--</div>-->
    <!-- /.header-wrapper -->
    <!--</header>-->
    <!-- /.header -->
  </div>
</template>

<script>
/* eslint-disable */

import store from "@/store";
// import { USER_INFO_STATIC_JS } from "../../utils/const";
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
    // if (store.getters.token){
    if (this.$session.get("jwt")) {
      this.isLogin = true;
      this.username = this.$session.get("UserName");
    } else {
      this.isLogin = false;
    }
    // VUEインスタン設定
    // var that = this;
    // 外部JS引用、public/index.html中で、直接引用してもOK
    // USER_INFO_STATIC_JS.forEach((p) => {
    //   that
    //     .$loadScript(p)
    //     .then(() => {})
    //     .catch(() => {
    //       console.log("外部IS引用失敗");
    //     });
    // });

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
    blogClick: function(index) {
      switch (index) {
        //検索
        case 1:
          this.$router.push("/blog/blogList");
          break;
        case 3:
          this.$router.push("/blog/blogList?myblog=true");
          break;
        //新規
        default:
          this.$router.push("/blog/createBlog");
      }
    },
    // アクション管理
    actionClick: function(index) {
      switch (index) {
        //検索
        case 1:
          this.$router.push("/action/userAction");
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
