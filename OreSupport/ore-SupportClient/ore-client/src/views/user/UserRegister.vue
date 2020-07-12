<template>
  <div class="ユーザINFO">
    <form @submit.prevent="singUp" style="border:1px solid #ccc">
      <div class="container">
        <h1>ユーザ登録</h1>
        <p>アカウント新規作成</p>
        <hr />

        <label for="email"><b>title</b></label>
        <input
          type="text"
          ref="email"
          placeholder="タイトル"
          v-model="registForm.email"
          @blur="checkEmail"
          name="email"
          required
        />
        <p style="color:red;font-size:12px;float:top" ref="e-email"></p>

        <label for="password"><b>content</b></label>
        <input
          type="password"
          ref="password"
          placeholder="内容"
          name="password"
          v-model="registForm.password"
          @blur="checkPassword"
          required
        />
        <p style="color:red;font-size:12px" ref="e-password"></p>

        <label for="repeatpassword"><b>Repeat Password</b></label>
        <input
          type="password"
          ref="repeatpassword"
          placeholder="Repeat Password"
          name="repeatpassword"
          v-model="registForm.repeatpassword"
          @blur="checkrepeatPassword"
          required
        />
        <p style="color:red;font-size:12px" ref="e-password2"></p>

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

        <div class="clearfix">
          <button type="button" class="cancelbtn">キャンセル</button>
          <button type="submit" class="signupbtn">登録</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import schema from "async-validator";
import { validEmail } from "@/utils/validate";
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
        this.$refs.email.focus();
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
      e.target.disabled=true;
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
              this.$router.push({ path: "/login" }).catch(err => {});
          })
          .catch((error) => {
             e.target.disabled=false;
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

/* Set a style for all buttons */
button {
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity: 1;
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
