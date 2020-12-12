<template>
  <div>
    <div>
      <v-row>
        <v-col>
          <v-sheet height="64">
            <v-toolbar flat color="white">
              <v-btn
                outlined
                class="mr-4"
                color="grey darken-2"
                @click="setToday"
              >
                今日
              </v-btn>
              <v-btn fab text small color="grey darken-2" @click="prev">
                <v-icon small>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn fab text small color="grey darken-2" @click="next">
                <v-icon small>mdi-chevron-right</v-icon>
              </v-btn>
              <v-toolbar-title v-if="$refs.calendar">
                {{ $refs.calendar.title }}
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-row justify="end">
                <v-col cols="2">
                  <v-select
                    v-model="type"
                    :items="items"
                    item-text="label"
                    item-value="value"
                    class="h-25"
                  >
                    >
                  </v-select>
                </v-col>
              </v-row>
            </v-toolbar>
          </v-sheet>
          <v-sheet height="600">
            <v-calendar
              ref="calendar"
              v-model="focus"
              color="primary"
              :events="events"
              :event-ripple="false"
              :event-color="getEventColor"
              :type="type"
              @click:event="showEvent"
              @click:more="viewDay"
              @click:date="viewDay"
              @change="updateRange"
              @mousedown:event="startDrag"
              @mousedown:time="startTime"
              @mousemove:time="mouseMove"
              @mouseup:time="endDrag"
              @mouseleave.native="cancelDrag"
            >
              <template v-slot:event="{ event, timed, eventSummary }">
                <div class="v-event-draggable" v-html="eventSummary()"></div>
                <div
                  v-if="timed"
                  class="v-event-drag-bottom"
                  @mousedown.stop="extendBottom(event)"
                ></div>
              </template>
            </v-calendar>
            <v-menu
              v-model="selectedOpen"
              :close-on-content-click="false"
              :activator="selectedElement"
              offset-y
            >
              <v-card color="grey lighten-4" min-width="350px" flat draggable>
                <v-toolbar :color="selectedEvent.color" dark>
                  <v-btn icon>
                    <v-icon>mdi-human-edit</v-icon>
                  </v-btn>
                  <v-toolbar-title
                    v-html="selectedEvent.name"
                    class="text-h4"
                  ></v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-menu v-model="show" offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn icon v-bind="attrs" v-on="on" @click="show = true">
                        <v-icon>mdi-dots-vertical</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item @click="handleEdit(selectedEvent)">
                        <v-list-item-title class="text-h5"
                          >編集</v-list-item-title
                        >
                      </v-list-item>
                      <v-divider></v-divider>
                      <v-list-item @click="startTime(clicktms)">
                        <v-list-item-title class="text-h5"
                          >新規作成</v-list-item-title
                        >
                      </v-list-item>
                      <v-divider></v-divider>
                      <v-list-item>
                        <v-list-item-title
                          class="text-h5"
                          @click="
                            handleDelete(selectedEvent);
                            selectedOpen = false;
                          "
                          >削除</v-list-item-title
                        >
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-toolbar>
                <v-card-title
                  ><p class="text-h5">
                    行動期間:<span>{{
                      selectedEvent.start | getDateFormat
                    }}</span>
                    〜 :<span>{{ selectedEvent.end | getDateFormat }}</span>
                  </p></v-card-title
                >
                <v-card-text>
                  <v-textarea
                    name="memo"
                    :value="selectedEvent.memo"
                    class="ma-0 text-h5"
                    no-resize
                    rows="5"
                    :readonly="true"
                    counter
                  ></v-textarea>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    text
                    color="secondary"
                    @click="selectedOpen = false"
                    class="text-h5"
                  >
                    取消
                  </v-btn>
                  <!--<v-btn text color="secondary" @click="selectedOpen = false">
                    削除
                  </v-btn>
                  <v-btn text color="secondary" @click="selectedOpen = false">
                    編集
                  </v-btn>-->
                </v-card-actions>
              </v-card>
            </v-menu>
            <v-dialog v-model="creatOpen" persistent max-width="65%">
              <v-card class="container">
                <ValidationObserver ref="createActionForm" v-slot="{ reset }">
                  <div @reset.prevent="reset">
                    <h3 class="page-title font-weight-black text-h4">
                      行動作成
                    </h3>
                    <div class="orig-row">
                      <div class="form-group col-12">
                        <label class="font-weight-black text-h5"
                          >アクション名</label
                        >
                        <ValidationProvider
                          rules="required|max:30"
                          name="アクション名"
                          v-slot="{ errors }"
                        >
                          <input
                            type="text"
                            class="form-control"
                            v-model="newAction.newName"
                          />
                          <span class="red--text">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-sm-6">
                        <label class="font-weight-black text-h5"
                          >行動開始時刻</label
                        >
                        <ValidationProvider
                          rules="required"
                          via="startDate"
                          name="行動開始時刻"
                          v-slot="{ errors }"
                        >
                          <v-datetime-picker
                            v-model="newAction.newDate[0]"
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
                        <label class="font-weight-black text-h5"
                          >行動終了時刻</label
                        >
                        <ValidationProvider
                          rules="required|actionTerm:@行動開始時刻"
                          via="endDate"
                          name="行動終了時刻"
                          v-slot="{ errors }"
                        >
                          <v-datetime-picker
                            v-model="newAction.newDate[1]"
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
                      <div class="form-group col-sm-12">
                        <label class="font-weight-black text-h5">メモ</label>
                        <ValidationProvider
                          rules="max:100"
                          name="メモ"
                          v-slot="{ errors }"
                        >
                          <textarea
                            class="form-control h-100"
                            rows="5"
                            v-model="newAction.newMemo"
                          ></textarea>
                          <span class="red--text">{{ errors[0] }}</span>
                        </ValidationProvider>
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
                </ValidationObserver>
              </v-card>
            </v-dialog>
          </v-sheet>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import dateFormat from "dateformat";
import { Message } from "element-ui";
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
  name: "ActionCalendar",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  filters: {
    getDateFormat: function(date) {
      return dateFormat(date, "yyyy-mm-dd HH:MM:ss");
    },
  },
  watch: {
    actionData: {
      handler: function(newV, oldV) {
        if (newV != oldV) {
          this.updateRange({ start: null, end: null });
        }
      },
    },
    // creatOpen: {
    //   handler: function(newV, oldV) {
    //     if (newV !== oldV) {
    //       this.creatOpen = newV;
    //     }
    //   },
    // },
    immediate: true,
    deep: true,
  },

  props: {
    actionData: {
      type: Array,
      requird: true,
      default: function() {
        return [];
      },
    },
  },
  data: () => ({
    //アクション編集menu
    show: false,
    dateProps: {
      headerColor: "red",
      locale: window.navigator.language,
      // headerDateFormat: "yyyy-MM-dd",
    },
    timeProps: {
      format: "ampm",
      headerColor: "red",
      useSeconds: true,
      ampmInTitle: true,
    },
    //新規フォーム開く
    creatOpen: false,
    //click tms
    clicktms: "",
    // 新規アクション保存ブロック
    newAction: {
      newDate: [
        dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
        dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
      ],
      newName: "",
      newMemo: "",
      id: "",
    },
    // 現在アクティブなカレントアクション情報
    actionInfo: {
      id: "",
      startDate: "",
      endDate: "",
      name: "",
      memo: "",
      color: "teal darken-1",
    },

    focus: "",
    type: "month",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
      "4day": "4 Days",
    },
    x: 0,
    y: 0,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      // "grey darken-1",
      "red darken-1",
      "pink darken-1",
      "purple darken-1",
      "light-blue",
      "teal",
      "lime",
    ],
    items: [
      { label: "月", value: "month" },
      { label: "週", value: "week" },
      { label: "日", value: "day" },
    ],
  }),
  mounted() {
    this.$refs.calendar.checkChange();
  },
  methods: {
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => (this.selectedOpen = true), 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }
      nativeEvent.stopPropagation();
    },
    // eslint-disable-next-line
    updateRange({ start, end }) {
      const events = [];

      // const min = new Date(`${start.date}T00:00:00`);
      // const max = new Date(`${end.date}T23:59:59`);
      // const days = (max.getTime() - min.getTime()) / 86400000;
      // const eventCount = this.rnd(days, days + 20);

      // for (let i = 0; i < eventCount; i++) {
      //   const allDay = this.rnd(0, 3) === 0;
      //   const firstTimestamp = this.rnd(min.getTime(), max.getTime());
      //   const first = new Date(firstTimestamp - (firstTimestamp % 900000));
      //   const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
      //   const second = new Date(first.getTime() + secondTimestamp);

      //   events.push({
      //     name: this.names[this.rnd(0, this.names.length - 1)],
      //     start: first,
      //     end: second,
      //     color: this.colors[this.rnd(0, this.colors.length - 1)],
      //     timed: !allDay,
      //   });
      // }
      //アクションの終了日付と現在の日付比較
      let isTimed = false;
      //アクションクリア処理
      // this.events.splice(0, this.events.length);
      this.actionData.forEach((element) => {
        isTimed = new Date() > new Date(element.endDate);
        events.push({
          id: element.id,
          name: element.name,
          start: new Date(element.startDate),
          end: new Date(element.endDate),
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !isTimed,
          startDate: element.startDate,
          endDate: element.endDate,
          memo: element.memo,
        });
      });
      // this.$nextTick(function() {
      this.events = events;
      // });
    },

    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },

    startDrag({ event, timed }) {
      if (event && timed) {
        this.dragEvent = event;
        this.dragTime = null;
        this.extendOriginal = null;
      }
    },
    startTime(tms) {
      this.clicktms = tms;
      const mouse = this.toTime(tms);
      if (this.dragEvent && this.dragTime === null) {
        const start = this.dragEvent.start;
        this.dragTime = mouse - start;
      } else {
        // this.creatOpen = true;
        // // // 開始時刻変換
        // this.createStart = this.roundTime(mouse);
        // this.createEvent = {
        //   name: `Event #${this.events.length}`,
        //   color: this.rndElement(this.colors),
        //   start: this.createStart,
        //   end: this.createStart,
        //   timed: true,
        // };
        // 新規追加ポップアップ表示
        this.newAction.newDate[0] = `${tms.date} ${tms.time}:01`;
        this.newAction.newDate[1] = `${tms.date} ${tms.time}:30`;
        const open = () => {
          setTimeout(() => {
            this.creatOpen = true;
          }, 10);
        };
        if (this.creatOpen) {
          this.creatOpen = false;
          setTimeout(open, 10);
        } else {
          open();
        }
        // イベントを表示配列の末尾に追加
        // this.events.push(this.createEvent);
      }
    },
    extendBottom(event) {
      this.createEvent = event;
      this.createStart = event.start;
      this.extendOriginal = event.end;
    },
    mouseMove(tms) {
      const mouse = this.toTime(tms);
      if (this.dragEvent && this.dragTime !== null) {
        const start = this.dragEvent.start;
        const end = this.dragEvent.end;
        const duration = end - start;
        const newStartTime = mouse - this.dragTime;
        const newStart = this.roundTime(newStartTime);
        const newEnd = newStart + duration;
        this.dragEvent.start = newStart;
        this.dragEvent.end = newEnd;
      } else if (this.createEvent && this.createStart !== null) {
        const mouseRounded = this.roundTime(mouse, false);
        const min = Math.min(mouseRounded, this.createStart);
        const max = Math.max(mouseRounded, this.createStart);
        this.createEvent.start = min;
        this.createEvent.end = max;
      }
    },
    endDrag() {
      this.dragTime = null;
      this.dragEvent = null;
      this.createEvent = null;
      this.createStart = null;
      this.extendOriginal = null;
    },
    cancelDrag() {
      if (this.createEvent) {
        if (this.extendOriginal) {
          this.createEvent.end = this.extendOriginal;
        } else {
          const i = this.events.indexOf(this.createEvent);
          if (i !== -1) {
            this.events.splice(i, 1);
          }
        }
      }
      this.createEvent = null;
      this.createStart = null;
      this.dragTime = null;
      this.dragEvent = null;
    },
    roundTime(time, down = true) {
      const roundTo = 15; // 15分単位刻み
      // ミリ秒に変換
      const roundDownTime = roundTo * 60 * 1000;
      return down
        ? time - (time % roundDownTime)
        : time + (roundDownTime - (time % roundDownTime));
    },
    // クリックセル日付から、時刻を取得
    toTime(tms) {
      return new Date(
        tms.year,
        tms.month - 1,
        tms.day,
        tms.hour,
        tms.minute
      ).getTime();
    },
    rndElement(arr) {
      return arr[this.rnd(0, arr.length - 1)];
    },
    //新規作成
    async handlerNewAction(index) {
      //画面項目チェック
      let success = await this.$refs.createActionForm.validate();
      switch (index) {
        case 1: //保存の場合
          if (!success) {
            // break;
            return;
          }

          this.newAction.newDate[0] = dateFormat(
            new Date(this.newAction.newDate[0]),
            "yyyy-mm-dd HH:MM:ss"
          );

          this.newAction.newDate[1] = dateFormat(
            new Date(this.newAction.newDate[1]),
            "yyyy-mm-dd HH:MM:ss"
          );

          await this.$store
            .dispatch("action/saveAction", this.newAction)
            .then((res) => {
              Object.assign(this.actionInfo, res.userAction);
              //アクション情報再検索
              this.$parent.fetchUserAction();
              Message({
                message: "アクション作成成功",
                type: "success",
                duration: 5 * 1000,
              });
              this.createEvent = {
                name: `Event #${this.newAction.newName}`,
                color: this.rndElement(this.colors),
                start: dateFormat(
                  this.newAction.newDate[0],
                  "yyyy-mm-dd HH:MM:ss"
                ),
                end: dateFormat(
                  this.newAction.newDate[1],
                  "yyyy-mm-dd HH:MM:ss"
                ),
                timed: true,
              };

              this.type = "month";
              //イベントを配列の末尾に追加
              this.events.push(this.createEvent);
            });
          break;
        default:
        //キャンセルの場合、処理しません
        // this.$nextTick(() => {
        //   this.$refs.createActionForm.reset();
        // });
      }
      //表示フラグ初期化
      this.creatOpen = false;
      // 値のクリア
      Object.assign(this.newAction, {
        newDate: [
          dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
          dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
        ],
        newName: "",
        newMemo: "",
      });
      //キャンセルの場合、処理しません
      this.$nextTick(() => {
        this.$refs.createActionForm.reset();
      });
    },
    //アクションの編集
    handleEdit(event) {
      this.$parent.is_readonly = false;
      this.$parent.isModalShow = true;
      Object.assign(this.$parent.actionInfo, event);
    },
    //アクションの削除
    handleDelete(event) {
      var that = this;
      this.$confirm("このアクションを削除しますが?", "確認...", {
        confirmButtonText: "削除",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          that.$store
            .dispatch("action/deleteAction", event.id)
            .then(() => {
              this.$message({
                type: "success",
                message: "削除しました。",
              });
              //アクション再検索
              that.$parent.fetchUserAction();
            })
            .catch((error) => {
              this.$message({
                type: "error",
                message: "処理失敗しました。",
              });
              console.log(error);
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消しました。",
          });
        });
    },
  },
};
</script>
<style scoped lang="scss">
.v-event-draggable {
  padding-left: 6px;
}
.v-event-timed {
  user-select: none;
  -webkit-user-select: none;
}
.v-event-drag-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4px;
  height: 4px;
  cursor: ns-resize;
  &::after {
    display: none;
    position: absolute;
    left: 50%;
    height: 4px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    width: 16px;
    margin-left: -8px;
    opacity: 0.8;
    content: "";
  }
  &:hover::after {
    display: block;
  }
}
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
.v-input {
  font-size: 16px;
}
.v-menu .v-label {
  font-size: 20px !important ;
}

.v-autocomplete__content .v-list__tile .v-divider .v-list-item {
  height: 10px !important ;
}
</style>
