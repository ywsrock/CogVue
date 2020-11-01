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
            <el-dialog :visible.sync="isModalShow">
              <div>
                <h3 class="page-title">
                  行動作成
                </h3>
                <div class="orig-row">
                  <div class="form-group col-12">
                    <label>アクション名</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="newAction.newName"
                    />
                  </div>
                  <div class="form-group col-sm-12">
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
              <el-option-group
                v-for="group in actionOptions"
                :key="group.label"
                :label="group.label"
              >
                <el-option
                  v-for="item in group.options"
                  :key="item.id"
                  :label="item.name"
                  :value="item.name + ':' + item.id"
                >
                </el-option>
              </el-option-group>
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
          行動カレンダー
        </h3>
        <ActionCalendar />
      </div>

      <div class="background-white p20 mb30">
        <h3 class="page-title">
          行動リスト
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

export default {
  components: {
    ActionList,
    ActionCalendar,
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
    return {
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
      currentActionName: "",
      currentActionDate: [],
      actionOptions: [],

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
      let saveObj = {
        newName: this.$refs.actionName.value,
        newDate: this.$refs.actionDate.value,
        newMemo: this.$refs.actionMemo.value,
        id: this.actionInfo.id,
      };
      let res = await this.$store.dispatch("action/saveAction", saveObj);
      Object.assign(this.actionInfo, res.userAction);
      Message({
        message: "アクション保存成功",
        type: "success",
        duration: 5 * 1000,
      });
      //アクション情報再検索
      this.fetchUserAction();
      this.is_readonly = true;
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
