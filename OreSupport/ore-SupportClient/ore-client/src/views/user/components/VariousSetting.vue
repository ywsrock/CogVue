<template>
  <div id="VariousSetting">
    <div class="content">
      <div class="page-title">
        <h1>各種設定</h1>
      </div>
      <!-- /.page-title -->
      <!--権限設定-->
      <div class="background-white p20 mb30">
        <h3 class="page-title">
          権限設定
          <el-button
            type="primary"
            class="btn btn-primary btn-xs pull-right"
            @click="power_Save(1)"
            v-if="is_readonly"
            >保存</el-button
          >
          <!-- <el-button
            type="primary"
            class="btn btn-primary btn-xs pull-right"
            @click="is_readonly = false"
            v-if="is_readonly"
            >編集</el-button
          >-->
        </h3>
        <div class="row">
          <div class="col-3 text-center m-1">
            <label class="col-form-label-lg h4">プロフィール</label>
          </div>
          <div class="col-6 text-center m-1">
            <div class="form-control">
              {{ powerSetting.profileOpen ? status[0] : status[1] }}
            </div>
          </div>
          <div class="col-3">
            <switchc
              text="ON|OFF"
              ref="profile"
              index="1"
              @change="switchc"
              :value="powerSetting.profileOpen"
            />
          </div>
        </div>

        <!--コグエボ-->
        <div class="row">
          <div class="col-3 text-center m-1">
            <label class="h4">コグエボ</label>
          </div>
          <div class="col-6 text-center m-1">
            <div class="form-control">
              {{ powerSetting.cogEvoOpen ? status[0] : status[1] }}
            </div>
          </div>
          <div class="col-3">
            <switchc
              text="ON|OFF"
              index="2"
              ref="cogEvo"
              @change="switchc"
              :value="powerSetting.cogEvoOpen"
            />
          </div>
        </div>

        <!--行動-->
        <div class="row">
          <div class="col-3 text-center m-1">
            <label class="h4">行動</label>
          </div>
          <div class="col-6 text-center m-1">
            <div class="form-control">
              {{ powerSetting.actionOpen ? status[0] : status[1] }}
            </div>
          </div>
          <div class="col-3">
            <switchc
              text="ON|OFF"
              index="3"
              ref="action"
              @change="switchc"
              :value="powerSetting.actionOpen"
            />
          </div>
        </div>

        <!--ブログ-->
        <!--style="width:100%;height: 100%; background-color: rgba(255,0,0,0.1);"-->
        <div>
          <div class="row">
            <div class="col-3 text-center m-1 ">
              <label class="h4">ブログ</label>
            </div>
            <div class="col-6 text-center m-1">
              <div class="form-control">
                {{ powerSetting.blogOpen ? status[0] : status[1] }}
              </div>
            </div>
            <div class="col-3">
              <switchc
                text="ON|OFF"
                ref="blog"
                index="4"
                @change="switchc"
                :value="powerSetting.blogOpen"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-3 text-center m-1">
              <label class="h4"></label>
            </div>
            <div class="col-6 text-center m-1">
              <div class="form-control">
                {{ powerSetting.blogCommentOpen ? status[2] : status[3] }}
              </div>
            </div>
            <div class="col-3">
              <switchc
                text="ON|OFF"
                ref="blogComment"
                index="5"
                @change="switchc"
                :value="powerSetting.blogCommentOpen"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-3 text-center m-1">
              <label class="h4"></label>
            </div>
            <div class="col-6 text-center m-1">
              <div class="form-control">
                {{ powerSetting.blogCogEvoOpen ? status[4] : status[5] }}
              </div>
            </div>
            <div class="col-3">
              <switchc
                text="ON|OFF"
                ref="blogCogEvo"
                index="6"
                @change="switchc"
                :value="powerSetting.blogCogEvoOpen"
              />
            </div>
          </div>
        </div>
      </div>

      <!--パスワードリセット-->
      <div class="background-white p20 mb30">
        <h3 class="page-title">
          パスワード変更
          <el-button
            type="primary"
            class="btn btn-primary btn-xs pull-right"
            @click="power_Save(2)"
            v-if="is_readonly"
            >保存</el-button
          >
          <!--<el-button
            type="primary"
            class="btn btn-primary btn-xs pull-right"
            @click="is_readonly = false"
            v-if="is_readonly"
            >編集</el-button
          >-->
        </h3>
        <!--現在のパスワード-->
        <div class="row">
          <div class="col-3 text-center m-1">
            <label class="col-form-label-lg h4">現在のパスワード</label>
          </div>
          <div class="col-6 text-center m-1">
            <div>
              <input
                type="password"
                name="password"
                v-model="passwordForm.passwdOld"
                required
                style="background-color:white;border: 2px solid #e9e9e9;"
                class="form-control"
              />
            </div>
          </div>
        </div>

        <!--新しいパスワード-->
        <div class="row">
          <div class="col-3 text-center m-1">
            <label class="col-form-label-lg h4">新しいパスワード</label>
          </div>
          <div class="col-6 text-center m-1">
            <div>
              <input
                type="password"
                ref="password"
                name="password"
                v-model="passwordForm.password"
                @keyup="checkPassword"
                required
                style="background-color:white;border: 2px solid #e9e9e9;"
                class="form-control"
                minlength="6"
                maxlength="16"
              />
            </div>
            <p style="color:red;font-size:12px" ref="e-password"></p>
          </div>
        </div>

        <!--新しいパスワード(確認)-->
        <div class="row">
          <div class="col-3 text-center m-1">
            <label class="col-form-label-lg h4">新しいパスワード(確認)</label>
          </div>
          <div class="col-6 text-center m-1">
            <div>
              <input
                type="password"
                ref="repeatpassword"
                name="repeatpassword"
                v-model="passwordForm.repeatpassword"
                @keyup="checkrepeatPassword"
                required
                style="background-color:white;border: 2px solid #e9e9e9;"
                class="form-control"
                minlength="6"
                maxlength="16"
              />
            </div>
            <p style="color:red;font-size:12px" ref="e-password2"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import schema from "async-validator";
import { Message } from "element-ui";
import switchc from "./switchc";
import { validPasswd } from "@/utils/validate";
/* eslint-disable */
export default {
  name: "VariousSetting",
  components: {
    switchc,
  },
  props: {
    avatarSrc: {
      type: String,
    },
  },
  data() {
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
      } else if (value !== this.passwordForm.password) {
        callback(new Error("パスワードと一致しない。"));
      } else {
        callback();
      }
    };

    return {
      powerSetting: {
        //プロフィル
        profileOpen: false,
        //コグエボ
        cogEvoOpen: false,
        //行動
        actionOpen: false,
        //ブログ
        blogOpen: false,
        //コメント
        blogCommentOpen: false,
        //コグエボ結果
        blogCogEvoOpen: false,
      },
      status: [
        "公開中",
        "非公開",
        "ブログコメントあり",
        "ブログコメントなし",
        "ブログにコクエボ結果表示",
        "ブログにコクエボ結果表示しない",
      ],
      passwordForm: {
        passwdOld: "",
        password: "",
        repeatpassword: "",
      },
      rules: {
        passwdOld: [{ required: true }],
        password: [{ required: true, validator: validatePassword }],
        repeatpassword: [{ required: true, validator: validatePassword2 }],
      },
      //編集
      is_readonly: true,
    };
  },
  created() {},
  mounted() {
    this.showUserPower();
  },
  methods: {
    //権限初期表示
    showUserPower() {
      this.$store
        .dispatch("user/showUserPower")
        .then((res) => {
          //権限の設定
          Object.assign(this.powerSetting, res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //権限切り替え設定
    switchc(index, value) {
      console.log(`${index}---${value}`);
      switch (index) {
        case "1":
          //   let v = !this.$refs.actionSwitchc.value;
          this.powerSetting.profileOpen = value;
          break;
        case "2":
          this.powerSetting.cogEvoOpen = value;
          break;
        case "3":
          this.powerSetting.actionOpen = value;
          break;
        case "4":
          this.powerSetting.blogOpen = value;
          break;
        case "5":
          this.powerSetting.blogCommentOpen = value;
          break;
        case "6":
          this.powerSetting.blogCogEvoOpen = value;
          break;
        default:
      }
    },
    //権限保存
    power_Save(index) {
      switch (index) {
        case 2:
          //   this.is_readonly = true;
          //パスワードチェック処理
          var ret = this.validate(this.passwordForm, this.rules);
          if (ret) {
            Message({
              message: "入力されたパスワード情報を確認ください。",
              type: "error",
              duration: 5 * 1000,
            });
            return;
          }
          //パスワード更新処理
          this.$store
            .dispatch("user/passwordSetting", {
              passwordForm: this.passwordForm,
            })
            .then((res) => {
              Message({
                message: "パスワードを更新しました。",
                type: "success",
                duration: 5 * 1000,
              });
            })
            .catch((error) => {
              //   Message({
              //     message:
              //       "パスワードを更新失敗しました。サイト管理までご連絡ください",
              //     type: "error",
              //     duration: 5 * 1000,
              //   });
              console.log(error);
            });
          console.log(index);
          beak;
        default:
          this.$store
            .dispatch("user/varousSetting", { powerSetting: this.powerSetting })
            .then((res) => {
              Message({
                message: "権限を更新しました。",
                type: "success",
                duration: 5 * 1000,
              });
            })
            .catch((error) => {
              Message({
                message: "更新失敗しました。サイト管理までご連絡ください。",
                type: "success",
                duration: 5 * 1000,
              });
              console.log(error);
            });
          //   this.is_readonly = true;
          console.log(index);
      }
      this.is_readonly = true;
      console.log("test");
    },
    // パスワードのチェック処理
    checkPassword: function(e) {
      var fields = { password: e.target.value };
      var ret = this.validate(fields, { password: this.rules.password });
      if (ret) {
        const { message, field } = ret[0];
        // this.$refs.password.focus();
        this.$refs["e-password"].textContent = message;
        this.$refs["e-password"].style.backgroundColor = "orange";
      } else {
        this.$refs["e-password"].textContent = "";
        this.$refs["e-password"].style.backgroundColor = "";
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
        this.$refs["e-password2"].textContent = message;
        this.$refs["e-password2"].style.backgroundColor = "orange";
      } else {
        this.$refs["e-password2"].textContent = "";
        this.$refs["e-password2"].style.backgroundColor = "";
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
  },
};
</script>

<style scoped>
@import "../../../../public/static_src/css";
@import "../../../../public/static_src/bootstrap-select.min.css";
@import "../../../../public/static_src/owl.carousel.css";
@import "../../../../public/static_src/superlist.css";
@import "../../../../public/static_src/colorbox.css";

.modal-background {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  display: block;
  overflow-y: auto;
}
</style>
