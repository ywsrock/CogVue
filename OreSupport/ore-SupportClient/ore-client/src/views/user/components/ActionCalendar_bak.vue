<template>
  <div>
    <div>
      <v-row>
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
              <el-select v-model="type" placeholder="選択">
                <el-option
                  v-for="item in items"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                  <span style="float: left">{{ item.label }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{
                    item.value
                  }}</span>
                </el-option>
              </el-select>
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
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-toolbar-title
                    v-html="selectedEvent.name"
                  ></v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </v-toolbar>
                <v-card-text>
                  <span v-html="selectedEvent.details"></span>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color="secondary" @click="selectedOpen = false">
                    Cancel
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
            <v-menu
              v-model="creatOpen"
              :close-on-content-click="false"
              :activator="selectedElement"
              offset-y
            >
              <v-card> </v-card>
            </v-menu>
          </v-sheet>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import dateFormat from "dateformat";
import { Message } from "element-ui";
export default {
  name: "ActionCalendar",
  data: () => ({
    //新規フォーム開く
    creatOpen: false,
    // ダイアログ表示フラグ
    isModalShow: false,
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
      "grey darken-1",
    ],
    names: [
      "サプリA",
      "味噌汁",
      "ランニング",
      "サプリB",
      "アクション1",
      "アクション2",
      "アクション3",
      "アクション4",
    ],
    items: [
      { lable: "month", value: "month" },
      { lable: "week", value: "week" },
      { lable: "day", value: "day" },
    ],
  }),
  mounted() {
    this.$refs.calendar.checkChange();
  },
  methods: {
    viewDay({ date, year }) {
      alert(year);
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
    updateRange({ start, end }) {
      const events = [];

      const min = new Date(`${start.date}T00:00:00`);
      const max = new Date(`${end.date}T23:59:59`);
      const days = (max.getTime() - min.getTime()) / 86400000;
      const eventCount = this.rnd(days, days + 20);

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0;
        const firstTimestamp = this.rnd(min.getTime(), max.getTime());
        const first = new Date(firstTimestamp - (firstTimestamp % 900000));
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
        const second = new Date(first.getTime() + secondTimestamp);

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay,
        });
      }

      this.events = events;
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
      const mouse = this.toTime(tms);
      if (this.dragEvent && this.dragTime === null) {
        const start = this.dragEvent.start;
        this.dragTime = mouse - start;
      } else {
        // 新規追加ポップアップ表示
        this.isModalShow = true;
        // 開始時刻変換
        this.createStart = this.roundTime(mouse);
        this.createEvent = {
          name: `Event #${this.events.length}`,
          color: this.rndElement(this.colors),
          start: this.createStart,
          end: this.createStart,
          timed: true,
        };
        // イベントを表示配列の末尾に追加
        this.events.push(this.createEvent);
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
      switch (index) {
        case 1: //保存の場合
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
            });
          break;
        default:
        //キャンセルの場合、処理しません
      }
      //表示フラグ初期化
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
</style>
