<template>
  <div class="ユーザINFO">
    <form @submit.prevent="createBlog" style="border:1px solid #ccc">
      <div class="container">
        <h1>ブログ登録</h1>
        <p>ブログ新規作成</p>
        <hr />
        <label for="title"><b>タイトル</b></label>
        <input
          type="text"
          ref="title"
          placeholder="タイトル"
          v-model="registForm.title"
          name="title"
          required
        />
        <label for="content"><b>内容</b></label>
          <textarea
            class="form-control"
            rows="7"
            placeholder="内容"
            name="content"
            v-model="registForm.content"
            :readonly="is_readonly"
          ></textarea>
        <!-- <label for="repeatpassword"><b>その他</b></label>
        <input
          type="text"
          ref="repeatpassword"
          placeholder="その他"
          name="repeatpassword"
          v-model="registForm.repeatpassword"
          
          required
        /> -->
        <!-- <p style="color:red;font-size:12px" ref="e-password2"></p>

        <label>
          <input
            type="checkbox"
            checked="checked"
            name="remember"
            style="margin-bottom:15px"
          />
          
        </label> -->

        <div class="clearfix">
          <button type="button" class="cancelbtn">キャンセル</button>
          <button type="submit" class="signupbtn">新規作成</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { Message } from "element-ui";

/* eslint-disable */

export default {
  data() {
    return {
      registForm: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    // blog登録処理ハンドラー
    createBlog: function(e) {
      // 二重コミット防止のため、ボタンを非活性
      e.target.disabled=true;
      // // 全項目チェック、問題なければ、登録処理を行う
      // const isValid = this.validate(this.registForm, this.rules);
      // if (!isValid) {
        // ユーザ登録処理
         this.$store
          .dispatch("blog/createBlog", this.registForm)
          .then((res) => {
            Message({
              message: "作成OK",
              type: "success",
              duration: 5 * 1000,
            }),
              // ログイン画面に遷移
              this.$router.push({ path: "/blogList" }).catch(err => {});
          })
          .catch((error) => {
             e.target.disabled=false;
            console.log(error.data);
            console.log("作成失敗");
          });
      }
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
