<template>
  <div class="page-wrapper">
    <div class="main">
      <div class="main-inner">
        <div class="container">
          <div class="content">
            <div class="orig-row">
              <div class="col-sm-4 col-sm-offset-4">
                <div class="page-title">
                  <h1>Login</h1>
                </div>
                <!-- /.page-title -->

                <el-form
                  ref="loginForm"
                  :model="loginForm"
                  :rules="loginRules"
                  class="login-form"
                  autocomplete="on"
                  label-position="left"
                >
                  <label for="login-form-email">E-mail</label>
                  <el-form-item prop="username">
                    <el-input
                      id="login-form-email"
                      ref="username"
                      v-model="loginForm.username"
                      name="username"
                      type="email"
                      tabindex="1"
                      autocomplete="on"
                    />
                  </el-form-item>
                  <!-- /.form-group -->

                  <label for="login-form-password">Password</label>
                  <el-tooltip
                    v-model="capsTooltip"
                    content="Caps lock is On"
                    placement="right"
                    manual
                  >
                    <el-form-item prop="password">
                      <el-input
                        id="login-form-password"
                        :key="passwordType"
                        ref="password"
                        v-model="loginForm.password"
                        :type="passwordType"
                        name="password"
                        tabindex="2"
                        autocomplete="on"
                        @keyup.native="checkCapslock"
                        @blur="capsTooltip = false"
                        @keyup.enter.native="handleLogin"
                      />
                      <span class="show-pwd" @click="showPwd">
                        <!--<svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" /> -->
                        パスワード表示
                      </span>
                    </el-form-item>
                  </el-tooltip>
                  <!-- /.form-group -->
                  <div style="text-align: right;">
                    <el-button
                      :loading="loading"
                      type="submit"
                      class="btn btn-primary"
                      @click.native.prevent="handleLogin"
                    >
                      Login
                    </el-button>
                  </div>
                </el-form>
                <span
                  >パスワードを忘れた方は<a
                    href
                    @click.prevent="handleRestPasswd()"
                    >こちら</a
                  ></span
                >

                <el-dialog
                  title="アカウントを選択して、ログインしてください。"
                  :visible.sync="showDialog"
                >
                  <br />
                  <br />
                  <br />
                  <social-sign />
                </el-dialog>
              </div>
              <!-- /.col-sm-4 -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.content -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.main-inner -->
    </div>
    <!-- /.main -->
  </div>
</template>

<script>
import { validUsername, validPasswd } from "@/utils/validate";
import SocialSign from "./components/SocialSignin";
export default {
  name: "Login",
  components: { SocialSign },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("正しいユーザ名を入力してください。"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("パスワード6桁以上を設定していくだいさ。"));
      } else if (!validPasswd(value)) {
        callback(
          new Error(
            "最小6文字、最大10文字、少なくとも1つの大文字、1つの小文字、1つの数字、および1つの特殊文字"
          )
        );
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: "",
        type: "normal",
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword },
        ],
      },
      passwordType: "password",
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {},
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query;
        if (query) {
          this.redirect = query.redirect;
          this.otherQuery = this.getOtherQuery(query);
        }
      },
      immediate: true,
    },
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.loginForm.username === "") {
      this.$refs.username.focus();
    } else if (this.loginForm.password === "") {
      this.$refs.password.focus();
    }
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    checkCapslock(e) {
      const { key } = e;
      this.capsTooltip = key && key.length === 1 && key >= "A" && key <= "Z";
    },
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then((res) => {
              console.log(res);
              this.$router.push({ path: "/userInfo" });
              // this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== "redirect") {
          acc[cur] = query[cur];
        }
        return acc;
      }, {});
    },
    singUp() {
      this.$router.push("/register");
    },
    handleRestPasswd() {
      this.$router.push("/resetPassword");
    },
  },
};
</script>

<style lang="scss">
$bg: #2d3a4b;
$light_gray: rgb(251, 255, 0);
$cursor: #fff;
@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}
/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
    /*     background-color: #4caf50; */
  }
  .siginUP-button {
    position: absolute;
    right: 0;
    bottom: 6px;
    margin-right: 81%;
    /* background-color: #4caf50; */
  }
  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
