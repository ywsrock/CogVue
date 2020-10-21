<template>
  <!--<div v-if="isModalShow" class="modal-background">-->
  <el-dialog title="行動作成" :visible.sync="isModalShow">
    <div>
      <div class="orig-row">
        <div class="form-group col-sm-6">
          <label>アクション名</label>
          <input type="text" class="form-control" v-model="newAction.newName" />
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
</template>
<script>
export default {
  name: "newActon",
  props: {
    isModalShow: {
      type: Boolean,
      required: true,
      default: function() {
        return false;
      },
    },
  },
  data() {
    return {
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      newAction: {
        newDate: [
          new Date("2020-01-01 01:10:11"),
          new Date("2022-01-01 10:11:12"),
        ],
        newName: "",
        newMemo: "",
      },
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
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

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  display: block;
  overflow-y: auto;
}
.showDateTimePicker {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
  display: block;
  overflow-y: auto;
}
</style>
