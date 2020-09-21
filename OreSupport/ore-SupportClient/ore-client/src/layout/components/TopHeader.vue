<template>
  <div class="header-wrapper">
    <div class="container">
      <div class="header-inner">
        <div class="header-logo">
          <router-link to="/">
            <img style="width:250px;" src="../../assets/img/logo.png" alt="Logo" />
            <span></span>
          </router-link>
        </div>
        <!-- /.header-logo -->
        <div class="header-content">
          <div class="header-top">
            <div class="header-search" v-if="isLogin">
              <input type="text" class="form-control" placeholder="Search for..." />
            </div>
            <!-- /.header-search -->
            <ul class="header-nav-social social-links nav nav-pills" v-if="!isLogin">
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
                <router-link v-bind:to="{ name: 'login' }" key="key">Login</router-link>
              </li>
              <li v-if="!isLogin">
                <router-link v-bind:to="{ name: 'register' }" key="key">Register</router-link>
              </li>
              <li v-if="isLogin">
                <a
                  class="text-success text-center"
                  href
                  @click.prevent.stop="getProfileInfo"
                >{{ username }} 様、お疲れ様です。</a>
              </li>
              <li v-if="isLogin">
                <!--<el-button type="text" @click.native="logout">Logout</el-button>-->
                <a href @click.prevent.stop="logout">Logout</a>
              </li>
              <li v-if="isLogin">
                <a href @click.prevent.stop="getProfileInfo">Profile</a>
              </li>
            </ul>
          </div>
          <!-- /.header-top -->
          <div class="header-bottom">
            <ul class="header-nav-primary nav nav-pills collapse navbar-collapse">
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

              <li>
                <a href="#">
                  体験談を読む
                  <i class="fa fa-chevron-down"></i>
                </a>

                <ul class="sub-menu">
                  <li>
                    <a href @click.prevent.stop="blockClick(1)">ブログトップ</a>
                  </li>
                  <li>
                    <a href @click.prevent.stop="blockClick(2)">ブログ一覧</a>
                  </li>
                </ul>
              </li>
              <li class="has-mega-menu">
                <a href="#">
                  認知機能を測定する
                  <i class="fa fa-chevron-down"></i>
                </a>
                <ul class="mega-menu">
                  <li class="hidden-xs">
                    <div class="special" style="width:90%;">
                      <a
                        style="font-size: 15px;"
                        href="https://personal.tbcare.jp/login"
                      >CogEvoで認知認知機能の測定をする</a>
                    </div>
                    <!-- /.special-->
                  </li>
                  <li>
                    <a style="font-size: 15px;" href="#">結果を見る</a>
                    <ul>
                      <li>
                        <a
                          style="font-size: 15px;"
                          href
                          @click.prevent.stop="taskClick(1)"
                        >これまでの認知機能の推移を確認する</a>
                      </li>
                      <li>
                        <a
                          style="font-size: 15px;"
                          href
                          @click.prevent.stop="taskClick(2)"
                        >統計的な認知機能のデータを確認する</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a style="font-size: 15px;" href="#">CogEvoのご紹介</a>
                    <ul>
                      <li>
                        <a
                          style="font-size: 15px;"
                          href="https://cog-evo.jp/"
                          target="_blank"
                        >CogEvoとは</a>
                      </li>
                      <li>
                        <a
                          style="font-size: 15px;"
                          href="https://tbcare.jp/"
                          target="_blank"
                        >運営会社（株式会社トータルブレインケア）</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
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
                  認知機能を知る
                  <i class="fa fa-chevron-down"></i>
                </a>

                <ul class="sub-menu">
                  <li>
                    <a href @click.prevent.stop="clickKnowledge(1)">基本知識詳細</a>
                  </li>
                  <li>
                    <a href @click.prevent.stop="clickKnowledge(2)">基本知識一覧</a>
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
                    <a href="#">「おれさぽ」とは</a>
                  </li>
                  <li>
                    <a href="#">運営会社</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">お問合せ</a>
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
import { USER_INFO_STATIC_JS } from "../../utils/const";
import { Switch } from "element-ui";

export default {
  data() {
    return {
      username: "",
      isLogin: false
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
            type: "Facebook"
          })
          .then(res => {
            location.reload();
            // that.$router.push("/?type=facebook&time="+new Date().getTime());
          })
          .catch(error => {
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
    }
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
        .then(res => {
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
        //ブログTOP
        case 1:
          this.$router.push("/blog/blog_top");
          break;
        //ブログ一覧
        default:
          this.$router.push("/blog/blogList");
      }
    }
  }
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
