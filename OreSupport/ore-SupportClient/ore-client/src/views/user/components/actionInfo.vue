<template>
  <div id="profileInfo">
    <div class="content">
      <div class="page-title">
        <h1>行動履歴管理</h1>
      </div>
      <!-- /.page-title -->

      <v-dialog v-model="isModalShow" fullscreen hide-overlay>
        <v-card tile>
          <v-toolbar flat dark :color="actionInfo.color">
            <v-btn icon dark @click="isModalShow = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title class="text-h3">行動履歴編集</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="handlerSave" class="text-h4">
                保存
              </v-btn>
              <v-btn dark text @click="isModalShow = false" class="text-h4">
                取消
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <ValidationObserver ref="editActionForm" v-slot="{ reset }">
            <div class="orig-row ma-5" @reset.prevent="reset">
              >
              <div class="form-group col-sm-12">
                <label class="font-weight-black text-h4">アクション名</label>
                <ValidationProvider
                  rules="required|max:30"
                  name="アクション名"
                  v-slot="{ errors }"
                >
                  <v-combobox
                    v-model="currentActionName"
                    :items="actionOptions[1].options"
                    ref="actionName"
                    style="width:100%"
                    v-if="!is_readonly"
                    class="text-h5"
                    item-text="text"
                    item-value="value"
                  >
                  </v-combobox>
                  <span class="red--text">{{ errors[0] }}</span>
                </ValidationProvider>
                <!--MASTERアクション表示-->
                <v-chip-group active-class="deep-purple accent-4 white--text">
                  <template v-for="master in actionOptions[0].options">
                    <v-chip
                      class="ma-2"
                      color="orange"
                      text-color="white"
                      :key="master.id"
                      @click="currentActionName = master.name"
                    >
                      {{ master.name }}
                      <v-icon right>
                        mdi-star
                      </v-icon>
                    </v-chip>
                  </template>
                </v-chip-group>
              </div>
              <div class="form-group col-sm-12">
                <div class="form-group col-sm-6">
                  <label class="font-weight-black text-h4">行動開始時刻</label>
                  <ValidationProvider
                    rules="required"
                    via="startDate"
                    name="行動開始時刻"
                    v-slot="{ errors }"
                  >
                    <v-datetime-picker
                      v-model="actionInfo.startDate"
                      :time-picker-props="timeProps"
                      :date-picker-props="dateProps"
                      time-format="HH:mm:ss"
                      date-format="yyyy-MM-dd"
                      clearText="取消"
                      okText="選択"
                    >
                      <template slot="dateIcon">
                        <v-icon>mdi-calendar</v-icon>
                      </template>
                      <template slot="timeIcon">
                        <v-icon>mdi-clock</v-icon>
                      </template>
                    </v-datetime-picker>
                    <span class="red--text">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="form-group col-sm-6">
                  <label class="font-weight-black text-h4">行動終了時刻</label>
                  <ValidationProvider
                    rules="required|actionTerm:@行動開始時刻"
                    via="endDate"
                    name="行動終了時刻"
                    v-slot="{ errors }"
                  >
                    <v-datetime-picker
                      v-model="actionInfo.endDate"
                      :time-picker-props="timeProps"
                      :date-picker-props="dateProps"
                      time-format="HH:mm:ss"
                      date-format="yyyy-MM-dd"
                      clearText="取消"
                      okText="選択"
                    >
                      <template slot="dateIcon">
                        <v-icon>mdi-calendar</v-icon>
                      </template>
                      <template slot="timeIcon">
                        <v-icon>mdi-clock</v-icon>
                      </template>
                    </v-datetime-picker>
                    <span class="red--text">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="form-group col-sm-12">
                <label class="font-weight-black text-h4">メモ</label>
                <ValidationProvider
                  rules="max:100"
                  name="メモ"
                  v-slot="{ errors }"
                >
                  <v-textarea
                    counter
                    ref="actionMemo"
                    rows="10"
                    v-model="actionInfo.memo"
                    :readonly="is_readonly"
                    height="120%"
                  ></v-textarea>
                  <span class="red--text">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div class="form-group col-sm-12">
                <v-btn
                  dark
                  text
                  @click="handlerSave"
                  class="btn btn-primary btn-xs col-sm-1 text-h4 float-right"
                >
                  保存
                </v-btn>
                <v-btn
                  dark
                  text
                  @click="isModalShow = false"
                  class="btn btn-danger btn-xs col-sm-1 text-h4 float-right"
                >
                  取消
                </v-btn>
              </div>
              <!-- /.form-group -->
            </div>
          </ValidationObserver>
        </v-card>
      </v-dialog>

      <div class="background-white p20 mb30">
        <h3 class="page-title">
          行動カレンダー
        </h3>
        <ActionCalendar ref="child" :actionData="actionHistoryData" />
      </div>

      <div class="background-white p20 mb30">
        <h3 class="page-title">
          行動履歴リスト
        </h3>
        <ActionList :actionData="actionHistoryData" />
      </div>
    </div>
  </div>
</template>

<script>
// import schema from "async-validator";
import { Message } from "element-ui";
import ActionList from "./actionList";
import dateFormat from "dateformat";
import ActionCalendar from "./ActionCalendar";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, max } from "vee-validate/dist/rules";

//必須
extend("required", {
  ...required,
  message: "{_field_} 入力してください。",
});

//文字数
extend("max", {
  ...max,
  params: ["length"],
  message: "{_field_} を{length}文字以ない入力ください。",
});
extend("actionTerm", {
  params: ["startDate"],
  validate(value, { startDate }) {
    if (new Date(value) >= new Date(startDate)) {
      return true;
    }
  },
  message: "行動終了時刻は開始時刻より後で設定してくだいさい。",
});

export default {
  components: {
    ActionList,
    ActionCalendar,
    ValidationProvider,
    ValidationObserver,
  },
  props: {
    avatarSrc: {
      type: String,
    },
  },
  watch: {
    "actionInfo.id": {
      handler: function(newV, oldV) {
        if (newV !== oldV) {
          this.currentActionID = newV;
        }
      },
    },
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
    return {
      //カレンダー日付属性設定
      dateProps: {
        headerColor: "red",
        locale: window.navigator.language,
        // headerDateFormat: "yyyy-MM-dd",
      },
      //カレンダー時間属性設定
      timeProps: {
        format: "ampm",
        headerColor: "red",
        useSeconds: true,
        ampmInTitle: true,
      },
      // アクションの履歴情報
      actionHistoryData: [],
      // カレントアクション情報
      actionInfo: {
        id: "",
        startDate: "",
        endDate: "",
        name: "",
        memo: "",
      },
      currentActionID: "",
      currentActionName: "",
      currentActionDate: [],
      actionOptions: [{ options: [] }, { options: [] }],

      newAction: {
        newDate: [
          dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
          dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
        ],
        newName: "",
        newMemo: "",
        id: "",
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
    this.fetchUserAction();
  },
  methods: {
    // ユーザーのプロフィールを取得
    fetchUserAction() {
      // var that = this;
      this.$store
        .dispatch("action/queryAction")
        .then((actionData) => {
          //アクション履歴情報
          this.actionHistoryData = actionData.userAction;
          this.actionOptions = JSON.parse(actionData.actionOptions);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    //新規作成
    async handlerNewAction(index) {
      switch (index) {
        case 1: //保存の場合
          await this.$store
            .dispatch("action/saveAction", this.newAction)
            .then((res) => {
              Object.assign(this.actionInfo, res.userAction);
              //アクション情報再検索
              this.fetchUserAction();
              Message({
                message: "アクション作成成功",
                type: "success",
                duration: 5 * 1000,
              });
            });

          break;
        default:
        //キャンセルの場合
      }

      this.isModalShow = false;
      // 値のクリア
      Object.assign(this.newAction, {
        newDate: [
          dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
          dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
        ],
        newName: "",
        newMemo: "",
      });
    },
    //アクション情報変更
    async handlerSave() {
      // 項目チェック行う
      let success = await this.$refs.editActionForm.validate();
      if (!success) {
        return;
      }

      await this.$confirm("このアクションを変更しますが?", "確認...", {
        confirmButtonText: "変更",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        let actionNewName = await this.ActionIDToName(
          this.$refs.actionName.value
        );
        let saveObj = {
          newName: actionNewName,
          newDate: [this.actionInfo.startDate, this.actionInfo.endDate],
          newMemo: this.$refs.actionMemo.value,
          id: this.actionInfo.id,
        };
        let res = await this.$store.dispatch("action/saveAction", saveObj);
        Object.assign(this.actionInfo, res.userAction);
        this.$refs.child.selectedEvent = this.actionInfo;
        Message({
          message: "アクション保存成功",
          type: "success",
          duration: 5 * 1000,
        });
        //キャンセルの場合、処理しません
        this.$nextTick(() => {
          this.$refs.editActionForm.reset();
        });
        //アクション情報再検索
        await this.fetchUserAction();
        this.is_readonly = true;
        this.isModalShow = false;
      });
    },
    //アクション取消
    handleCancel() {
      //MODAL画面非表示
      this.isModalShow = false;
      //キャンセルの場合、処理しません
      this.$nextTick(() => {
        this.$refs.createActionForm.reset();
      });
    },
    // アクションIDから名前変更
    ActionIDToName(selectValue) {
      let newActionName = this.currentActionName;
      if (typeof selectValue === "object") {
        newActionName = selectValue.text;
      }
      return newActionName;
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
