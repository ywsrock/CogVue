<template>
  <div class="page-wrapper">
    <div class="main">
      <div class="main-inner">
        <div class="container">
          <div class="content">
            <div class="orig-row">
              <div class="col-sm-4 col-sm-offset-4">
                <div class="page-title">
                  <h1>Register</h1>
                </div>
                <!-- /.page-title -->

                <form @submit.prevent="singUp">
                  <div class="form-group">
                    <label for="login-form-email">Email</label>
                    <input
                      type="text"
                      ref="email"
                      v-model="registForm.email"
                      @blur="checkEmail"
                      name="email"
                      required
                      style="background-color:white;border: 2px solid #e9e9e9;"
                      class="form-control"
                    />
                    <p
                      style="color:red;font-size:12px;float:top"
                      ref="e-email"
                    ></p>
                  </div>
                  <!-- /.form-group -->

                  <div class="form-group">
                    <label for="login-form-password">Password</label>
                    <input
                      type="password"
                      ref="password"
                      name="password"
                      v-model="registForm.password"
                      @blur="checkPassword"
                      required
                      style="background-color:white;border: 2px solid #e9e9e9;"
                      class="form-control"
                    />
                    <p style="color:red;font-size:12px" ref="e-password"></p>
                  </div>
                  <!-- /.form-group -->

                  <div class="form-group">
                    <label for="login-form-password-retype"
                      >Retype password</label
                    >
                    <input
                      type="password"
                      ref="repeatpassword"
                      name="repeatpassword"
                      v-model="registForm.repeatpassword"
                      @blur="checkrepeatPassword"
                      required
                      style="background-color:white;border: 2px solid #e9e9e9;"
                      class="form-control"
                    />
                    <p style="color:red;font-size:12px" ref="e-password2"></p>
                  </div>
                  <!-- /.form-group -->

                  <label>
                    <input
                      type="checkbox"
                      checked="checked"
                      name="remember"
                      style="margin-bottom:15px"
                    />
                    パスワード記憶
                  </label>
                  <p>
                    個人情報保護
                    <a href="#" style="color:dodgerblue">プライバシー</a>.
                  </p>
                  <div style="text-align: right;">
                    <button type="submit" class="btn btn-primary">
                      Register
                    </button>
                  </div>
                  <!-- <button type="submit" class="btn btn-primary pull-right">Register</button> -->
                </form>
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
import schema from "async-validator";
import { validEmail, validPasswd } from "@/utils/validate";
import { Message } from "element-ui";

/* eslint-disable */

export default {
  data() {
    // メールアドレスチェック
    const validateEmail = (rule, value, callback, source, options) => {
      if (!validEmail(value)) {
        callback(new Error("正ししくメールアドレスを入力してください。"));
      } else {
        callback();
      }
    };

    // パスワードチェック
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

    // 確認パスワード確認
    var validatePassword2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("確認パスワードを入力してください。"));
      } else if (value !== this.registForm.password) {
        callback(new Error("パスワードと一致しない。"));
      } else {
        callback();
      }
    };

    return {
      registForm: {
        email: "",
        password: "",
        repeatpassword: "",
      },
      rules: {
        email: [{ required: true, validator: validateEmail }],
        password: [{ required: true, validator: validatePassword }],
        repeatpassword: [{ required: true, validator: validatePassword2 }],
      },
    };
  },
  methods: {
    // メールのチェック処理
    checkEmail: function(e) {
      var fields = { email: e.target.value };
      var ret = this.validate(fields, { email: this.rules.email });
      if (ret) {
        const { message, field } = ret[0];
        // this.$refs.email.focus();
        this.$refs["e-email"].textContent = message;
      } else {
        this.$refs["e-email"].textContent = "";
      }
    },
    // パスワードのチェック処理
    checkPassword: function(e) {
      var fields = { password: e.target.value };
      var ret = this.validate(fields, { password: this.rules.password });
      if (ret) {
        const { message, field } = ret[0];
        // this.$refs.password.focus();
        this.$refs["e-password"].textContent = message;
      } else {
        this.$refs["e-password"].textContent = "";
      }
    },
    // パスワード2のチェック処理
    checkrepeatPassword: function(e) {
      var fields = { repeatpassword: e.target.value };
      var ret = this.validate(fields, {
        repeatpassword: this.rules.repeatpassword,
      });
      if (ret) {
        const { message, field } = ret[0];
        // this.$refs.repeatpassword.focus();
        this.$refs["e-password2"].textContent = message;
      } else {
        this.$refs["e-password2"].textContent = "";
      }
    },

    // 画面項目チェック
    validate: function(field, rules) {
      var validator = new schema(rules);
      var check_result;
      validator.validate(field, { first: true }, (errors, res) => {
        if (errors) {
          check_result = errors;
        }
      });
      return check_result;
    },

    // ユーザ登録処理ハンドラー
    singUp: function(e) {
      // 二重コミット防止のため、ボタンを非活性
      e.target.disabled = true;
      // 全項目チェック、問題なければ、登録処理を行う
      const isValid = this.validate(this.registForm, this.rules);
      if (!isValid) {
        // ユーザ登録処理
        this.$store
          .dispatch("user/singUp", this.registForm)
          .then((res) => {
            Message({
              message: "ユーザ登録完了しました。",
              type: "success",
              duration: 5 * 1000,
            }),
              // ログイン画面に遷移
              this.$router.push({ path: "/login" }).catch((err) => {});
          })
          .catch((error) => {
            e.target.disabled = false;
            console.log(error.data);
            console.log("ユーザ登録失敗");
          });
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

/* Full-width input fields */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn,
.signupbtn {
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.container {
  padding: 16px;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn,
  .signupbtn {
    width: 100%;
  }
}
</style>
