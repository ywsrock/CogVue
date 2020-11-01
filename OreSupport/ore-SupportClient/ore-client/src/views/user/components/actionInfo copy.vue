<template>
  <div id="profileInfo">
    <div class="content">
      <div class="page-title">
        <h1>行動履歴管理</h1>
      </div>
      <!-- /.page-title -->

      <div class="background-white p20 mb30">
        <div class="container">
          <div>
            <el-dialog title="行動作成" :visible.sync="isModalShow">
              <div>
                <div class="orig-row">
                  <div class="form-group col-sm-6">
                    <label>アクション名</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="newAction.newName"
                    />
                  </div>
                  <div class="form-group col-sm-6">
                    <label>行動期間</label>
                    <el-date-picker
                      class="form-control"
                      v-model="newAction.newDate"
                      type="datetimerange"
                      value-format="yyyy-MM-dd HH:mm:ss"
                      range-separator="〜"
                      start-placeholder="開始日時"
                      end-placeholder="終了日時"
                      style="width:100%"
                    >
                    </el-date-picker>
                  </div>
                  <div class="form-group col-sm-12">
                    <label>メモ</label>
                    <textarea
                      class="form-control"
                      rows="3"
                      v-model="newAction.newMemo"
                    ></textarea>
                  </div>
                  <div class="orig-row  mx-auto">
                    <div class="col">
                      <el-button
                        type="warning"
                        class="btn btn-danger btn-xs col-sm-6"
                        @click="handlerNewAction(0)"
                        >取消</el-button
                      >
                    </div>
                    <div class="col">
                      <el-button
                        type="primary"
                        class="btn btn-primary btn-xs col-sm-6"
                        @click="handlerNewAction(1)"
                        >作成</el-button
                      >
                    </div>
                  </div>
                  <!-- /.form-group -->
                </div>
              </div>
            </el-dialog>
          </div>
        </div>
        <h3 class="page-title">
          行動管理

          <div class="pull-right" v-if="!is_readonly">
            <el-button
              type="warning"
              class="btn btn-danger btn-xs"
              @click="is_readonly = true"
              >取消</el-button
            >

            <el-button
              type="primary"
              class="btn btn-primary btn-xs"
              @click="handlerSave"
              >保存</el-button
            >
          </div>
        </h3>

        <div class="orig-row">
          <div class="form-group col-sm-6">
            <label>アクション名</label>
            <input
              type="text"
              class="form-control"
              v-bind:value="actionInfo.name"
              v-if="is_readonly"
              :readonly="is_readonly"
            />

            <el-select
              v-model="currentActionName"
              clearable
              placeholder="選択..."
              ref="actionName"
              style="width:100%"
              v-if="!is_readonly"
            >
              <el-option
                v-for="item in actionOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div class="form-group col-sm-6">
            <label>行動期間</label>
            <input
              type="text"
              id="start"
              name="trip-start"
              v-bind:value="actionTerm"
              class="form-control"
              :readonly="is_readonly"
              v-if="is_readonly"
            />
            <el-date-picker
              ref="actionDate"
              class="form-control"
              v-model="currentActionDate"
              type="datetimerange"
              value-format="yyyy-MM-dd HH:mm:ss"
              range-separator="To"
              start-placeholder="開始日時"
              end-placeholder="終了日時"
              v-if="!is_readonly"
              style="width:100%"
            >
            </el-date-picker>
          </div>
          <div class="form-group col-sm-12">
            <label>メモ</label>
            <textarea
              ref="actionMemo"
              class="form-control"
              rows="3"
              v-bind:value="actionInfo.memo"
              :readonly="is_readonly"
            ></textarea>
          </div>
          <div class="form-group col-sm-12">
            <el-button
              type="primary"
              class="btn btn-primary btn-xs pull-right"
              @click="isModalShow = true"
              >新規作成</el-button
            >
          </div>
          <!-- /.form-group -->
        </div>
        <!-- /.row -->
      </div>

      <div class="background-white p20 mb30">
        <h3 class="page-title">
          行動リスト
        </h3>
        <ActionList />
      </div>
    </div>
  </div>
</template>

<script>
import schema from "async-validator";
import { Message } from "element-ui";
import ActionList from "./actionList";
import {
  validEmail,
  validPhone,
  validURL,
  validPostalcode,
  isNumber,
} from "@/utils/validate";

export default {
  components: {
    ActionList,
  },
  props: {
    avatarSrc: {
      type: String,
    },
  },
  watch: {
    "actionInfo.name": {
      handler: function(newV, oldV) {
        if (newV !== oldV) {
          this.currentActionName = newV;
        }
      },
    },
    "actionInfo.startDate": {
      handler: function(newV, oldV) {
        if (newV !== oldV) {
          this.currentActionDate = [newV, this.actionInfo.endDate];
        }
      },
    },
    "actionInfo.endDate": {
      handler: function(newV, oldV) {
        if (newV !== oldV) {
          this.currentActionDate = [this.actionInfo.startDate, newV];
        }
      },
    },
    deep: true,
    immediate: true,
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
      actionInfo: {
        id: "",
        startDate: "",
        endDate: "",
        name: "",
        memo: "",
      },
      currentActionName: "",
      currentActionDate: [],
      actionOptions: [
        {
          value: "味噌汁",
          label: "味噌汁",
        },
        {
          value: "焼き魚",
          label: "焼き魚",
        },
      ],
      newAction: {
        newDate: [
          new Date("2020-01-01 01:10:11"),
          new Date("2022-01-01 10:11:12"),
        ],
        newName: "",
        newMemo: "",
      },
      rules: {
        date: [{ required: true }],
        name: [{ required: true }],
      },
      is_readonly: true,
      isModalShow: false,
    };
  },
  computed: {
    actionTerm: function() {
      if (!this.actionInfo.startDate) {
        return "";
      }
      return this.actionInfo.startDate + "   〜   " + this.actionInfo.endDate;
    },
  },
  created() {},
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

    //全項目チェックして、情報保存
    basicInfo_Save: function() {
      this.checkEmail();
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

    //アクション情報変更
    handlerSave() {
      let saveObj = {
        name: this.$refs.actionName.value,
        date: this.$refs.actionDate.value,
        memo: this.$refs.actionMemo.value,
      };
      console.log(saveObj);
      this.is_readonly = true;
    },
    //新規作成
    handlerNewAction(index) {
      switch (index) {
        case 1: //保存の場合
          console.log(this.newAction);
          break;
        default:
        //キャンセルの場合
      }
      this.isModalShow = false;
      // 値のクリア
      Object.assign(this.newAction, {
        newDate: "",
        newName: "",
        newMemo: "",
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
