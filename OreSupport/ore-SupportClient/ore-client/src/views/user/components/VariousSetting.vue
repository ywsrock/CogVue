<template>
  <div id="VariousSetting">
    <div class="content">
      <div class="page-title">
        <h1>各種設定</h1>
      </div>
      <!-- /.page-title -->

      <div class="background-white p20 mb30">
        <h3 class="page-title">
          権限設定
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
        <div class="row">
          <div class="col-3 text-center m-1">
            <label class="h4">プロフィール</label>
          </div>
          <div class="col-6 text-center m-1">
            <div class="form-control">公開中</div>
          </div>
          <div class="col-3">
            <switchc text="ON|OFF" />
          </div>
        </div>

        <!--コグエボ-->
        <div class="row">
          <div class="col-3 text-center m-1">
            <label class="h4">コグエボ</label>
          </div>
          <div class="col-6 text-center m-1">
            <div class="form-control">公開中</div>
          </div>
          <div class="col-3">
            <switchc text="ON|OFF" />
          </div>
        </div>

        <!--行動-->
        <div class="row">
          <div class="col-3 text-center m-1">
            <label class="h4">行動</label>
          </div>
          <div class="col-6 text-center m-1">
            <div class="form-control">公開中</div>
          </div>
          <div class="col-3">
            <switchc text="ON|OFF" />
          </div>
        </div>

        <!--ブログ-->
        <div class="row">
          <div class="col-3 text-center m-1">
            <label class="h4">ブログ</label>
          </div>
          <div class="col-6 text-center m-1">
            <div class="form-control">公開中</div>
          </div>
          <div class="col-3">
            <switchc text="ON|OFF" />
          </div>
        </div>
        <div class="row">
          <div class="col-3 text-center m-1">
            <label class="h4"></label>
          </div>
          <div class="col-6 text-center m-1">
            <div class="form-control">コメント機能</div>
          </div>
          <div class="col-3">
            <switchc text="ON|OFF" />
          </div>
        </div>
        <div class="row">
          <div class="col-3 text-center m-1">
            <label class="h4"></label>
          </div>
          <div class="col-6 text-center m-1">
            <div class="form-control">コグエボ結果</div>
          </div>
          <div class="col-3">
            <switchc text="ON|OFF" />
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
import {
  validEmail,
  validPhone,
  validURL,
  validPostalcode,
  isNumber,
} from "@/utils/validate";

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
      myOptions: {
        layout: {
          color: "black",
          backgroundColor: "lightgray",
          selectedColor: "white",
          selectedBackgroundColor: "green",
          borderColor: "black",
          fontFamily: "Arial",
          fontWeight: "normal",
          fontWeightSelected: "bold",
          squareCorners: false,
          noBorder: false,
        },
        // size: {
        //   fontSize: 14,
        //   height: 34,
        //   padding: 7,
        //   width: 100,
        // },
        items: {
          delay: 0.4,
          preSelected: "unknown",
          disabled: false,
          labels: [
            { name: "Off", color: "white", backgroundColor: "red" },
            { name: "On", color: "white", backgroundColor: "green" },
          ],
        },
      },
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
