<template>
  <div id="profileInfo">
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
            v-if="!is_readonly"
            >保存</el-button
          >
          <el-button
            type="primary"
            class="btn btn-primary btn-xs pull-right"
            @click="is_readonly = false"
            v-if="is_readonly"
            >編集</el-button
          >
        </h3>

        <div class="orig-row">
          <div class="form-group col-sm-6">
            <label>姓</label>
            <input
              type="text"
              class="form-control"
              v-model="basicInfo.lastName"
              :readonly="is_readonly"
            />
          </div>
          <!-- /.form-group -->

          <div class="form-group col-sm-6">
            <label>名</label>
            <input
              type="text"
              class="form-control"
              v-model="basicInfo.firstName"
              :readonly="is_readonly"
            />
          </div>
          <!-- /.form-group -->

          <div class="form-group col-sm-6">
            <label>性別</label>
            <div v-if="is_readonly" class="form-control" readonly="true">
              <div v-if="basicInfo.sex === '1'">女</div>
              <div v-else>男</div>
            </div>
            <div v-else class="form-control" :readonly="is_readonly">
              <el-radio v-model="basicInfo.sex" label="1">女</el-radio>
              <el-radio v-model="basicInfo.sex" label="2">男</el-radio>
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
              :readonly="is_readonly"
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
              :readonly="is_readonly"
            />
            <p style="color:red;font-size:12px;float:top" ref="e-email"></p>
          </div>
          <!-- /.form-group -->

          <div class="form-group col-sm-6">
            <label>Phone</label>
            <input
              type="text"
              ref="phone"
              placeholder="09012345678"
              class="form-control"
              v-model="basicInfo.phone"
              @blur="checkPhone"
              :readonly="is_readonly"
            />
            <p style="color:red;font-size:12px;float:top" ref="e-phone"></p>
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
            v-if="!is_readonly"
            >保存</el-button
          >
          <el-button
            type="primary"
            class="btn btn-primary btn-xs pull-right"
            @click="is_readonly = false"
            v-if="is_readonly"
            >編集</el-button
          >
        </h3>

        <div class="form-horizontal">
          <div class="form-group">
            <label class="col-sm-2 control-label">Facebook</label>

            <div class="col-sm-9">
              <input
                type="text"
                ref="sns_facebook"
                class="form-control"
                v-model="snsInfo.sns_facebook"
                @blur="checkURL('sns_facebook')"
                :readonly="is_readonly"
              />
              <p
                style="color:red;font-size:12px;float:top"
                ref="e-sns_facebook"
              ></p>
            </div>
            <!-- /.col-* -->
          </div>
          <!-- /.form-group -->

          <div class="form-group">
            <label class="col-sm-2 control-label">Twitter</label>

            <div class="col-sm-9">
              <input
                type="text"
                ref="sns_twtitter"
                class="form-control"
                v-model="snsInfo.sns_twtitter"
                @blur="checkURL('sns_twtitter')"
                :readonly="is_readonly"
              />
              <p
                style="color:red;font-size:12px;float:top"
                ref="e-sns_twtitter"
              ></p>
            </div>
            <!-- /.col-* -->
          </div>
          <!-- /.form-group -->

          <div class="form-group">
            <label class="col-sm-2 control-label">Instagram</label>

            <div class="col-sm-9">
              <input
                type="text"
                ref="sns_instagram"
                class="form-control"
                v-model="snsInfo.sns_instagram"
                @blur="checkURL('sns_instagram')"
                :readonly="is_readonly"
              />
              <p
                style="color:red;font-size:12px;float:top"
                ref="e-sns_instagram"
              ></p>
            </div>
            <!-- /.col-* -->
          </div>
          <!-- /.form-group -->

          <div class="form-group">
            <label class="col-sm-2 control-label">その他</label>
            <div class="col-sm-9">
              <input
                type="text"
                ref="sns_other"
                class="form-control"
                v-model="snsInfo.sns_other"
                @blur="checkURL('sns_other')"
                :readonly="is_readonly"
              />
              <p
                style="color:red;font-size:12px;float:top"
                ref="e-sns_other"
              ></p>
            </div>
            <!-- /.col-* -->
          </div>
          <!-- /.form-group -->
        </div>
        <!-- /.form-inline -->
      </div>
      <!-- /.background-white -->
      <div class="background-white p20 mb30">
        <div class="container">
          <div v-if="isModalShow" class="modal-background">
            <div
              class="background-white p20 mb30"
              style="width: 50%; position: absolute; top: 20%; left: 25%;"
            >
              <h3 class="page-title">
                住所をご選択ください
              </h3>
              <div
                v-for="(address, index) in addresses"
                :key="address.zipcode + index"
              >
                <div class="ml-4">
                  <input
                    class="form-check-input"
                    v-model="addressesIndex"
                    :value="index"
                    type="radio"
                    name="select-address"
                    :id="address.zipcode + index"
                  />
                  <label
                    class="form-check-label"
                    :for="address.zipcode + index"
                    >{{
                      address.address1 + address.address2 + address.address3
                    }}</label
                  >
                </div>
              </div>
              <div style="text-align: right;">
                <button
                  @click="isModalShow = false"
                  type="button"
                  class="btn btn-primary mr-2"
                  style="background-color: gray;"
                >
                  キャンセル
                </button>

                <button
                  @click="selectAddress"
                  type="button"
                  class="btn btn-primary"
                >
                  選択する
                </button>
              </div>
            </div>
          </div>
        </div>
        <h3 class="page-title">
          アドレス
          <el-button
            type="primary"
            class="btn btn-primary btn-xs pull-right"
            @click="addressInfo_Save"
            v-if="!is_readonly"
            >保存</el-button
          >
          <el-button
            type="primary"
            class="btn btn-primary btn-xs pull-right"
            @click="is_readonly = false"
            v-if="is_readonly"
            >編集</el-button
          >
        </h3>

        <div class="orig-row">
          <div class="col-sm-6">
            <div class="form-group">
              <label>郵便番号</label>
              <input
                type="text"
                ref="postalcode"
                class="form-control"
                v-model="addressInfo.postalcode"
                placeholder="123456"
                @blur="checkPostalcode"
                :readonly="is_readonly"
              />
            </div>
            <div v-if="!is_readonly">
              <button
                type="primary"
                class="btn btn-primary btn-xs pull-right"
                @click="searchAddress"
              >
                住所検索
              </button>
            </div>

            <p
              style="color:red;font-size:12px;float:top"
              ref="e-postalcode"
            ></p>
          </div>
          <!-- /.form-group -->

          <div class="form-group col-sm-3">
            <label>都道府県</label>
            <input
              type="text"
              class="form-control"
              v-model="addressInfo.state"
              :readonly="is_readonly"
            />
          </div>
          <!-- /.form-group -->

          <div class="form-group col-sm-3">
            <label>市区</label>
            <input
              type="text"
              class="form-control"
              v-model="addressInfo.city"
              :readonly="is_readonly"
            />
          </div>
          <!-- /.form-group -->
        </div>
        <!-- /.row -->

        <div class="row">
          <div class="form-group col-sm-6">
            <label>町村・番地</label>
            <input
              type="text"
              class="form-control"
              v-model="addressInfo.streat"
              :readonly="is_readonly"
            />
          </div>
          <!-- /.form-group -->

          <div class="form-group col-sm-6">
            <label>建物・部屋番号等</label>
            <input
              type="text"
              ref="houseNumber"
              class="form-control"
              v-model="addressInfo.houseNumber"
              placeholder="101"
              @blur="checkHouseNumber"
              :readonly="is_readonly"
            />
            <p
              style="color:red;font-size:12px;float:top"
              ref="e-houseNumber"
            ></p>
          </div>
          <!-- /.form-group -->
        </div>
      </div>

      <div class="background-white p20 mb30">
        <h3 class="page-title">
          自分紹介
          <el-button
            type="primary"
            class="btn btn-primary btn-xs pull-right"
            @click="basicInfo_Save;"
            v-if="!is_readonly"
            >保存</el-button
          >
          <el-button
            type="primary"
            class="btn btn-primary btn-xs pull-right"
            @click="is_readonly = false"
            v-if="is_readonly"
            >編集</el-button
          >
        </h3>

        <textarea
          class="form-control"
          rows="7"
          v-model="basicInfo.aboutMe"
          :readonly="is_readonly"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import schema from "async-validator";
import { Message } from "element-ui";
import {
  validEmail,
  validPhone,
  validURL,
  validPostalcode,
  isNumber,
} from "@/utils/validate";

export default {
  props: {
    avatarSrc: {
      type: String,
    },
  },
  data() {
    // メールアドレスチェック
    const validateEmail = (rule, value, callback) => {
      if (!validEmail(value)) {
        callback(new Error("正ししくメールアドレスを入力してください。"));
      } else {
        callback();
      }
    };
    // 電話番号チェック
    const validatePhone = (rule, value, callback) => {
      if (!validPhone(value)) {
        callback(new Error("半角数字・ハイフン無しで入力してください。"));
      } else {
        callback();
      }
    };
    // URLチェック
    const validateURL = (rule, value, callback) => {
      if (!validURL(value)) {
        callback(new Error("正しくURLを入力してください。"));
      } else {
        callback();
      }
    };
    // 郵便番号チェック
    const validatePostalcode = (rule, value, callback) => {
      if (!validPostalcode(value)) {
        callback(new Error("半角数字・ハイフン無しで入力してください。"));
      } else {
        callback();
      }
    };
    // 部屋数字チェック
    const validateHouseNumber = (rule, value, callback) => {
      if (!isNumber(value)) {
        callback(new Error("半角数字で入力してください。"));
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
        sns_facebook: "",
        sns_twtitter: "",
        sns_instagram: "",
        sns_other: "",
      },
      rules: {
        email: [{ required: true, validator: validateEmail }],
        phone: [{ validator: validatePhone }],
        sns_facebook: [{ validator: validateURL }],
        sns_twtitter: [{ validator: validateURL }],
        sns_instagram: [{ validator: validateURL }],
        sns_other: [{ validator: validateURL }],
        postalcode: [{ validator: validatePostalcode }],
        houseNumber: [{ validator: validateHouseNumber }],
      },
      is_readonly: true,
      addresses: [],
      isModalShow: false,
      addressesIndex: 0,
    };
  },
  created() {
    // ユーザ情報更新
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
    this.fetchUserProfile();
  },
  methods: {
    // ユーザーのプロフィールを取得
    async fetchUserProfile() {
      try {
        const res = await this.$store.dispatch("user/getProfileInfo");
        this.basicInfo = res.dataInfo.basicInfo;
        this.addressInfo = res.dataInfo.addressInfo;
        this.passwordInfo = res.dataInfo.passwordInfo;
        this.snsInfo = res.dataInfo.snsInfo;
        //画像パス親に設定
        this.$parent.avatarSrc = this.basicInfo.avatar;
      } catch (err) {
        Message({
          message: "ユーザ情報取得失敗、サイト管理者に連絡ください。",
          type: "error",
          duration: 5 * 1000,
        });
      }
    },
    // 住所自動検索
    async searchAddress() {
      try {
        const params = new URLSearchParams();
        params.append("postalcode", this.$refs["postalcode"].value);
        const res = await this.$store.dispatch("address/autoSearch", params);
        if (res.results !== null && res.results.length === 1) {
          this.addressInfo.state = res.results[0].address1;
          this.addressInfo.city = res.results[0].address2;
          this.addressInfo.streat = res.results[0].address3;
        } else if (res.results !== null && res.results.length > 1) {
          this.addresses = res.results;
          this.isModalShow = true;
        } else {
          // alert("該当する住所がありません。");
          Message({
            message: "該当する住所がありません。",
            type: "error",
            duration: 2 * 1000,
          });
        }
      } catch (err) {
        Message({
          message: "住所が見つかりません。",
          type: "error",
          duration: 2 * 1000,
        });
      }
    },
    // 住所が重複した場合、選択させる
    selectAddress: function() {
      this.addressInfo.state = this.addresses[this.addressesIndex].address1;
      this.addressInfo.city = this.addresses[this.addressesIndex].address2;
      this.addressInfo.streat = this.addresses[this.addressesIndex].address3;

      this.isModalShow = false;
    },
    //全項目チェックして、情報保存
    basicInfo_Save: function() {
      this.checkEmail();
      this.checkPhone();
      if (
        this.$refs["e-email"].textContent === "" &&
        this.$refs["e-phone"].textContent === ""
      ) {
        //基本情報更新
        this.proUpdate(this.basicInfo);
      }
      //編集不可
      this.is_readonly = true;
    },
    //全項目チェックして、SNS情報
    snsInfo_Save: function() {
      this.checkURL("sns_facebook");
      this.checkURL("sns_twtitter");
      this.checkURL("sns_instagram");
      this.checkURL("sns_other");
      if (
        this.$refs["e-sns_facebook"].textContent === "" &&
        this.$refs["e-sns_twtitter"].textContent === "" &&
        this.$refs["e-sns_instagram"].textContent === "" &&
        this.$refs["e-sns_other"].textContent === ""
      ) {
        this.proUpdate(this.snsInfo);
      }
      //編集不可
      this.is_readonly = true;
    },
    //全項目チェックして、アドレス情報
    addressInfo_Save: function() {
      this.checkPostalcode();
      this.checkHouseNumber();
      if (
        this.$refs["e-postalcode"].textContent === "" &&
        this.$refs["e-houseNumber"].textContent === ""
      ) {
        this.proUpdate(this.addressInfo);
      }
      //編集不可
      this.is_readonly = true;
    },
    //画像アップロード
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
      this.$store
        .dispatch("user/imageUp", data)
        .then(function(data) {
          return data.imgUrl;
        })
        .then(function(text) {
          that.basicInfo.avatar = text;
        })
        .catch(function(error) {
          window.alert("Error: " + error.message);
        });
    },
    // メールのチェック処理
    checkEmail: function() {
      var fields = { email: this.$refs.email.value };
      var ret = this.validate(fields, { email: this.rules.email });
      if (ret) {
        const { message } = ret[0];
        this.$refs["e-email"].textContent = message;
      } else {
        this.$refs["e-email"].textContent = "";
      }
    },
    // 電話番号のチェック処理 任意項目のためブランク許容
    checkPhone: function() {
      var fields = { phone: this.$refs.phone.value };
      var ret = this.validate(fields, { phone: this.rules.phone });
      if (fields["phone"] && ret) {
        const { message } = ret[0];
        this.$refs["e-phone"].textContent = message;
      } else {
        this.$refs["e-phone"].textContent = "";
      }
    },
    // URLのチェック処理 任意項目のためブランク許容
    checkURL: function(sns) {
      var fields = {};
      fields[sns] = this.$refs[sns].value;
      var rules = {};
      rules[sns] = this.rules[sns];
      var ret = this.validate(fields, rules);
      if (fields[sns] && ret) {
        const { message } = ret[0];
        this.$refs[`e-${sns}`].textContent = message;
      } else {
        this.$refs[`e-${sns}`].textContent = "";
      }
    },
    // 郵便番号のチェック処理 任意項目のためブランク許容
    checkPostalcode: function() {
      var fields = { postalcode: this.$refs.postalcode.value };
      var ret = this.validate(fields, { postalcode: this.rules.postalcode });
      if (fields["postalcode"] && ret) {
        const { message } = ret[0];
        this.$refs["e-postalcode"].textContent = message;
      } else {
        this.$refs["e-postalcode"].textContent = "";
      }
    },
    // 郵便番号のチェック処理 任意項目のためブランク許容
    checkHouseNumber: function() {
      var fields = { houseNumber: this.$refs.houseNumber.value };
      var ret = this.validate(fields, { houseNumber: this.rules.houseNumber });
      if (fields["houseNumber"] && ret) {
        const { message } = ret[0];
        this.$refs["e-houseNumber"].textContent = message;
      } else {
        this.$refs["e-houseNumber"].textContent = "";
      }
    },
    // 画面項目チェック
    validate: function(field, rules) {
      var validator = new schema(rules);
      var check_result;
      validator.validate(field, { first: true }, (errors) => {
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
