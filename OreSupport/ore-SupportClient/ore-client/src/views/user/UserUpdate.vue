<template>
  <div id="ユーザ更新">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      />

      <title>oreSupport ユーザプロフィール編集</title>
    </head>

    <body class="" style="">
      <div class="page-wrapper">
        <header class="header">
          <div class="header-wrapper">
            <!-- /.container -->
          </div>
          <!-- /.header-wrapper -->
        </header>
        <!-- /.header -->

        <div class="main">
          <div class="main-inner">
            <div class="container">
              <div class="row">
                <div class="col-sm-4 col-lg-3">
                  <div class="sidebar">
                    <div class="widget">
                      <div class="user-photo">
                        <a
                          href="#"
                          style='cursor: url("chrome-extension://ledmjlnkdlappilhaaihfhanlpdjjalm/rockhand.png"), auto;'
                        >
                          <img
                            v-bind:src="basicInfo.avatar"
                            alt="User Photo"
                          />
                          <span class="user-photo-action">
                            <label for="file_photo">
                              写真アップロード
                              <input
                                ref="upfile"
                                id="file_photo"
                                type="file"
                                accept=".jpg, .jpeg, .png"
                                v-on:change="onchange"
                                style="display:none;"
                              />
                            </label>
                          </span>
                        </a>
                      </div>
                      <!-- /.user-photo -->
                    </div>
                    <!-- /.widget -->

                    <div class="widget">
                      <ul class="menu-advanced">
                        <li class="active">
                          <a href="#"
                            ><i class="fa fa-user"></i> プロフィール編集</a
                          >
                        </li>
                        <!--<li>
                          <a href="#"
                            ><i class="fa fa-key"></i> パスワード変更</a
                          >
                        </li>
                        <li>
                          <a href="#"><i class="fa fa-sign-out"></i>退会</a>
                        </li>-->
                      </ul>
                    </div>
                    <!-- /.widget -->
                  </div>
                  <!-- /.sidebar -->
                </div>
                <!-- /.col-* -->

                <div class="col-sm-8 col-lg-9">
                  <div class="content">
                    <div class="page-title">
                      <h1>プロフィール編集</h1>
                    </div>
                    <!-- /.page-title -->

                    <div class="background-white p20 mb30">
                      <h3 class="page-title">
                        基本情報
                        <el-button
                          type="primary"
                          class="btn btn-primary btn-xs pull-right"
                          @click="basicInfo_Save"
                          >保存</el-button
                        >
                      </h3>

                      <div class="row">
                        <div class="form-group col-sm-6">
                          <label>姓</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="basicInfo.lastName"
                          />
                        </div>
                        <!-- /.form-group -->

                        <div class="form-group col-sm-6">
                          <label>名</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="basicInfo.firstName"
                          />
                        </div>
                        <!-- /.form-group -->

                        <div class="form-group col-sm-6">
                          <label>性別</label>
                          <div class="form-control">
                            <el-radio v-model="basicInfo.sex" label="1"
                              >女</el-radio
                            >
                            <el-radio v-model="basicInfo.sex" label="2"
                              >男</el-radio
                            >
                          </div>
                        </div>
                        <!-- /.form-group -->
                        <div class="form-group col-sm-6">
                          <label>生年月日</label>
                          <input
                            type="date"
                            id="start"
                            name="trip-start"
                            v-model="basicInfo.birthday"
                            min="1700-01-01"
                            max="2100-12-31"
                            class="form-control"
                          />
                        </div>
                        <!-- /.form-group -->
                        <div class="form-group col-sm-6">
                          <label>E-mail</label>
                          <input
                            type="text"
                            ref="email"
                            class="form-control"
                            v-model="basicInfo.email"
                            @blur="checkEmail"
                          />
                          <p style="color:red;font-size:12px;float:top" ref="e-email"></p>
                        </div>
                        <!-- /.form-group -->

                        <div class="form-group col-sm-6">
                          <label>Phone</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="basicInfo.phone"
                          />
                        </div>
                        <!-- /.form-group -->
                      </div>
                      <!-- /.row -->
                    </div>

                    <div class="background-white p20 mb30">
                      <h3 class="page-title">
                        SNS

                        <el-button
                          type="primary"
                          class="btn btn-primary btn-xs pull-right"
                          @click="snsInfo_Save"
                          >保存</el-button
                        >
                      </h3>

                      <div class="form-horizontal">
                        <div class="form-group">
                          <label class="col-sm-2 control-label">Facebook</label>

                          <div class="col-sm-9">
                            <input
                              type="text"
                              class="form-control"
                              v-model="snsInfo.sns_Facebook"
                            />
                          </div>
                          <!-- /.col-* -->
                        </div>
                        <!-- /.form-group -->

                        <div class="form-group">
                          <label class="col-sm-2 control-label">Twitter</label>

                          <div class="col-sm-9">
                            <input
                              type="text"
                              class="form-control"
                              v-model="snsInfo.sns_twtitter"
                            />
                          </div>
                          <!-- /.col-* -->
                        </div>
                        <!-- /.form-group -->

                        <div class="form-group">
                          <label class="col-sm-2 control-label"
                            >Instagram</label
                          >

                          <div class="col-sm-9">
                            <input
                              type="text"
                              class="form-control"
                              v-model="snsInfo.sns_instagram"
                            />
                          </div>
                          <!-- /.col-* -->
                        </div>
                        <!-- /.form-group -->

                        <div class="form-group">
                          <label class="col-sm-2 control-label">その他</label>
                          <div class="col-sm-9">
                            <input
                              type="text"
                              class="form-control"
                              v-model="snsInfo.sns_other"
                            />
                          </div>
                          <!-- /.col-* -->
                        </div>
                        <!-- /.form-group -->
                      </div>
                      <!-- /.form-inline -->
                    </div>
                    <!-- /.background-white -->

                    <div class="background-white p20 mb30">
                      <h3 class="page-title">
                        アドレス

                        <el-button
                          type="primary"
                          class="btn btn-primary btn-xs pull-right"
                          @click="addressInfo_Save"
                          >保存</el-button
                        >
                      </h3>

                      <div class="row">
                        <div class="form-group col-sm-6">
                          <label>都道府県</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="addressInfo.state"
                          />
                        </div>
                        <!-- /.form-group -->

                        <div class="form-group col-sm-6">
                          <label>市区</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="addressInfo.city"
                          />
                        </div>
                        <!-- /.form-group -->

                        <div class="form-group col-sm-6">
                          <label>町</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="addressInfo.streat"
                          />
                        </div>
                        <!-- /.form-group -->

                        <div class="form-group col-sm-3">
                          <label>部屋番号</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="addressInfo.houseNumber"
                          />
                        </div>
                        <!-- /.form-group -->

                        <div class="form-group col-sm-3">
                          <label>郵便番号</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="addressInfo.postalcode"
                          />
                        </div>
                        <!-- /.form-group -->
                      </div>
                      <!-- /.row -->
                    </div>

                    <div class="background-white p20 mb30">
                      <h3 class="page-title">
                        自分紹介

                        <el-button
                          type="primary"
                          class="btn btn-primary btn-xs pull-right"
                          @click="basicInfo_Save"
                          >保存</el-button
                        >
                      </h3>

                      <textarea
                        class="form-control"
                        rows="7"
                        v-model="basicInfo.aboutMe"
                      ></textarea>
                    </div>
                  </div>
                  <!-- /.content -->
                </div>
                <!-- /.col-* -->
              </div>
              <!-- /.row -->
            </div>
            <!-- /.container -->
          </div>
          <!-- /.main-inner -->
        </div>
        <!-- /.main -->

        <!-- /.footer -->
      </div>
      <!-- /.page-wrapper -->
    </body>
  </div>
</template>

<script>
import schema from "async-validator";
import { STATIC_JS } from "../../utils/const";
import { Message } from "element-ui";
import { validEmail } from "@/utils/validate";

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
    return {
      basicInfo: {
        Update_type: "basicInfo",
        lastName: "",
        firstName: "",
        sex: "",
        birthday: "",
        email: "",
        phone: "",
        avatar: "",
        aboutMe: "",
      },
      addressInfo: {
        Update_type: "AdressInfo",
        state: "",
        city: "",
        streat: "",
        houseNumber: "",
        postalcode: "",
      },
      passwordInfo: {
        Update_type: "PasswordInfo",
        oldPassword: "",
        newPassword: "",
      },
      snsInfo: {
        Update_type: "snsInfo",
        sns_Facebook: "",
        sns_twtitter: "",
        sns_instagram: "",
        sns_other: "",
      },
      rules: {
        email: [{ required: true, validator: validateEmail }],
      }
    };
  },
  created() {
    this.proUpdate = function(updateObj) {
      this.$store
        .dispatch("user/UpdateUser", updateObj)
        .then(() => {
          Message({
            message: "情報を更新しました。",
            type: "success",
            duration: 5 * 1000,
          });
        })
        .catch((err) => {
          console.log(err);
          Message({
            message: "情報更新を失敗しました。",
            type: "error",
            duration: 5 * 1000,
          });
        });
    };
  },
  mounted() {
    // VUEインスタン設定
    var that = this;
    // 外部JS引用、public/index.html中で、直接引用してもOK
    STATIC_JS.forEach((p) => {
      that
        .$loadScript(p)
        .then(() => {})
        .catch(() => {
          console.log("外部IS引用失敗");
        });
    });
    this.$nextTick().then(function() {
      // basic 情報
      const info_basic = that.$store.getters.info.basicInfo;
      that.basicInfo = Object.assign({}, that.basicInfo, info_basic);
      // アドレス情報
      const info_address = that.$store.getters.info.addressInfo;
      that.addressInfo = Object.assign({}, that.basicInfo, info_address);
      // パスワード情報
      const info_pwd = that.$store.getters.info.passwordInfo;
      that.passwordInfo = Object.assign({}, that.basicInfo, info_pwd);
      // sns情報
      const info_snsinfo = that.$store.getters.info.snsInfo;
      that.snsInfo = Object.assign({}, that.basicInfo, info_snsinfo);
      //  that.data =Object.assign(that.data,that.$store.getters.info)
    });
  },

  methods: {
    //基本情報保存
    basicInfo_Save: function() {
      this.proUpdate(this.basicInfo);
    },
    //SNS情報
    snsInfo_Save: function() {
      this.proUpdate(this.snsInfo);
    },
    //アドレス情報
    addressInfo_Save: function() {
      this.proUpdate(this.addressInfo);
    },
    // 社員アップロード
    onchange: function() {
      let that = this;
      //ファイル取得
      let fl = this.$refs.upfile.files[0];
      //ファイルの形式
      const isJPG = fl.type === "image/jpeg";
      //ファイルサイズ 
      const isLt2M = fl.size / 1024 / 1024 < 2;
      if (!isJPG) {
        Message({
          message: "jpegファイルをアップロードしてくださり。",
          type: "error",
          duration: 5 * 1000,
        });
        return;
      }
      if (!isLt2M) {
        Message({
          message: "サイズは2MB以下のファイルをアップロードしてくだい。",
          type: "error",
          duration: 5 * 1000,
        });
        return;
      }
      //Content-Type:form/multipart で送信されます
      let data = new FormData();
      data.append("imgAvatar", fl, fl.name);
      this.$store.dispatch("user/imageUp", data)
      .then(function(data) {
          return data.imgUrl;
        })
        .then(function(text) {
          that.basicInfo.avatar=text;
        })
        .catch(function(error) {
          window.alert("Error: " + error.message);
        });
    },
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
    }
  }
};
</script>
<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
@import "../../../public/static_src/css";
@import "../../../public/static_src/bootstrap-select.min.css";
@import "../../../public/static_src/owl.carousel.css";
@import "../../../public/static_src/superlist.css";
@import "../../../public/static_src/colorbox.css";
</style>
