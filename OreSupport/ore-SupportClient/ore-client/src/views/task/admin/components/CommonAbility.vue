<template>
  <div>
    <div class="orig-row detail-content">
      <div class="col-sm-4">
        <!--時系列Line-->
        <div class="orig-row detail-content">
          <h2 class="text-h4">
            【推移】
            <span class="text-secondary">{{ task_name }}</span>
          </h2>
          <div class="chart-wrapper overflo-div-height450 overflow-auto">
            <div class="background-white p-5">
              <!-- Nav tabs -->
              <ul
                id="listing-detail-location"
                class="nav nav-tabs"
                role="tablist"
              >
                <li role="presentation" class="active">
                  <a
                    href="#simple-year-panel"
                    role="tab"
                    data-toggle="tab"
                    @click.prevent="clickYear"
                  >
                    <i class="fa fa-calendar-check-o"></i>年
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="#simple-month-panel"
                    role="tab"
                    data-toggle="tab"
                    @click.prevent="clickMonth"
                  >
                    <i class="fa fa-calendar-minus-o"></i>月
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="#simple-week-panel"
                    role="tab"
                    data-toggle="tab"
                    @click.prevent="clickWeek"
                  >
                    <i class="fa a-calendar-plus-o"></i>週
                  </a>
                </li>
              </ul>

              <!-- Tab panes -->
              <div class="tab-content">
                <div
                  role="tabpanel"
                  class="tab-pane active"
                  v-if="activeObj.isActiveY"
                  id="simple-year-panel"
                  key="year"
                >
                  <div class="detail-map">
                    <line-chart
                      :chart-data="lineChartData"
                      :proplegendData="task_name"
                      :key="task_name"
                      dateFmt="yyyy"
                    />
                  </div>
                </div>
                <!-- year-property -->

                <div
                  role="tabpanel"
                  class="tab-pane active"
                  v-if="activeObj.isActiveM"
                  id="simple-month-panel"
                  key="month"
                >
                  <div class="detail-map">
                    <line-chart
                      :chart-data="lineChartData"
                      :proplegendData="task_name"
                      dateFmt="yyyy/mm"
                    />
                  </div>
                </div>
                <!-- month-property -->

                <div
                  role="tabpanel"
                  class="tab-pane active"
                  v-if="activeObj.isActiveW"
                  id="simple-week-panel"
                  key="week"
                  dateFmt="W"
                >
                  <div class="detail-map">
                    <line-chart
                      :chart-data="lineChartData"
                      :proplegendData="task_name"
                      dateFmt="yyyy年第W週"
                    />
                  </div>
                </div>
                <!-- week-property -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /.col-sm-7 -->

      <div class="col-sm-4">
        <h2 class="text-h4">
          【{{ abilityName }}】
          <span class="text-secondary">{{ task_name }} </span>
        </h2>
        <div class="background-white p20 overflo-div-height450 ">
          <div class="detail-description">
            <div style="text-align: center ">
              <el-tag type="success" style="font-size:large"
                >{{ cardPazulData.star }}級</el-tag
              >
              <el-rate
                v-model="cardPazulData.star"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              >
              </el-rate>
            </div>
            <hr />
            <div style="text-align: center">
              <h5>
                <el-tooltip
                  content="最高点"
                  placement="top"
                  style="color:#303133"
                >
                  <el-button type="text" class="fa fa-bullseye">
                    &nbsp;{{ cardPazulData.score_max }}
                  </el-button>
                </el-tooltip>

                <el-tooltip
                  content="標準点（18歳）"
                  placement="top"
                  style="color:#303133"
                >
                  <el-button type="text" class="fa fa-dot-circle-o">
                    &nbsp;{{ cardPazulData.score_age }}
                  </el-button>
                </el-tooltip>

                <el-tooltip
                  content="平均指数"
                  placement="top"
                  style="color:#303133"
                >
                  <el-button type="text" class="fa fa-line-chart">
                    &nbsp;{{ cardPazulData.performance }}
                  </el-button>
                </el-tooltip>

                <el-tooltip
                  content="時間"
                  placement="top"
                  style="color:#303133"
                >
                  <el-button type="text" class="fa fa-clock-o">
                    &nbsp;{{ cardPazulData.playtime }}
                  </el-button>
                </el-tooltip>
              </h5>
              <h5>
                最終トレーニング日:&nbsp;{{ cardPazulData.last_updated_at }}
              </h5>
            </div>
            <hr />
            <el-tooltip
              content="これまでに獲得した等級です。"
              placement="top"
              style="color:#303133"
            >
              <div class="orig-row">
                <div class="quiz-rank_count_">
                  <div
                    class="quiz-rank_count___circle quiz-rank_count___circle--gold"
                  >
                    <el-badge :value="cardPazulData.rank_count_0" class="item">
                      <span>
                        特
                      </span>
                    </el-badge>
                  </div>
                  <div
                    class="quiz-rank_count___ribbon quiz-rank_count___ribbon--left"
                  ></div>
                  <div
                    class="quiz-rank_count___ribbon quiz-rank_count___ribbon--right"
                  ></div>
                </div>

                <div class="quiz-rank_count_">
                  <div
                    class="quiz-rank_count___circle quiz-rank_count___circle--silver"
                  >
                    <el-badge :value="cardPazulData.rank_count_1" class="item">
                      <span>
                        1
                      </span>
                    </el-badge>
                  </div>
                  <div
                    class="quiz-rank_count___ribbon quiz-rank_count___ribbon--left"
                  ></div>
                  <div
                    class="quiz-rank_count___ribbon quiz-rank_count___ribbon--right"
                  ></div>
                </div>
                <div class="quiz-rank_count_">
                  <div
                    class="quiz-rank_count___circle quiz-rank_count___circle--bronze"
                  >
                    <el-badge :value="cardPazulData.rank_count_2" class="item">
                      <span>
                        2
                      </span>
                    </el-badge>
                  </div>
                  <div
                    class="quiz-rank_count___ribbon quiz-rank_count___ribbon--left"
                  ></div>
                  <div
                    class="quiz-rank_count___ribbon quiz-rank_count___ribbon--right"
                  ></div>
                </div>

                <div class="quiz-rank_count_">
                  <div
                    class="quiz-rank_count___circle quiz-rank_count___circle--silver"
                  >
                    <el-badge :value="cardPazulData.rank_count_3" class="item">
                      <span>
                        3
                      </span>
                    </el-badge>
                  </div>
                  <div
                    class="quiz-rank_count___ribbon quiz-rank_count___ribbon--left"
                  ></div>
                  <div
                    class="quiz-rank_count___ribbon quiz-rank_count___ribbon--right"
                  ></div>
                </div>
                <div class="quiz-rank_count_">
                  <div
                    class="quiz-rank_count___circle quiz-rank_count___circle--silver"
                  >
                    <el-badge :value="cardPazulData.rank_count_4" class="item">
                      <span>
                        4
                      </span>
                    </el-badge>
                  </div>
                  <div
                    class="quiz-rank_count___ribbon quiz-rank_count___ribbon--left"
                  ></div>
                  <div
                    class="quiz-rank_count___ribbon quiz-rank_count___ribbon--right"
                  ></div>
                </div>
                <div class="quiz-rank_count_">
                  <div
                    class="quiz-rank_count___circle quiz-rank_count___circle--silver"
                  >
                    <el-badge :value="cardPazulData.rank_count_5" class="item">
                      <span>
                        5
                      </span>
                    </el-badge>
                  </div>
                  <div
                    class="quiz-rank_count___ribbon quiz-rank_count___ribbon--left"
                  ></div>
                  <div
                    class="quiz-rank_count___ribbon quiz-rank_count___ribbon--right"
                  ></div>
                </div>
              </div>
            </el-tooltip>
            <hr />
            <div class="orig-row" v-loading="loading">
              <div class="col-md-7 text-center">
                <img id="screen-shot" :src="cgevTaskImage" width="100%" />
              </div>
              <div class="col-md-5">
                <h5>
                  {{ cardPazulData.task_desc }}
                </h5>
              </div>
            </div>
            <!--<transaction-table />-->
          </div>
          <!-- /.detail-follow -->
        </div>

        <div class="widget"></div>
        <!-- /.widget -->
      </div>
      <!-- /.col-sm-5 -->
      <!-- /.col-* -->
    </div>

    <!--履歴データ表示-->
    <div class="orig-row detail-content">
      <h2 class="text-h4">
        【最近の記録】
        <span class="text-secondary">{{ task_name }}</span>
      </h2>
      <div class="chart-wrapper">
        <div class="background-white p10 overflow-auto">
          <transaction-table :chartData="recents" v-cloak :key="task_name" />
        </div>
      </div>
    </div>
    <!-- /.row -->
  </div>
</template>

<script>
import LineChart from "./TaskLineChart";
import TransactionTable from "./TaskTransactionTable";
import { CGEV_IMAGE_BASE } from "@/utils/const";
import { TaskData } from "@/store/cgevModel/task";

export default {
  name: "CommonAbility",
  components: {
    LineChart,
    TransactionTable,
  },
  created() {},

  props: {
    showDataObj: {
      type: Object,
      require: true,
      default: function() {
        return TaskData.Flashlight;
      },
    },
    showAbilityName: {
      type: String,
      require: true,
      default: function() {
        return "";
      },
    },
    loadFlg: {
      type: Boolean,
      require: true,
      default: function() {
        return true;
      },
    },
  },
  watch: {
    showDataObj: {
      handler: function(showDataObj, oldValue) {
        if (showDataObj !== oldValue) {
          this.dataObj = showDataObj;
          // 時系列データ
          // this.lineChartData = showDataObj.cardPazulData.lineChartData.yearData;
          // LineChartデータ取得
          this.$http.get("/api/personal/CogEvo/summary").then(
            (res) => {
              this.lineChartData = res.data.lineChartData.yearData;
            },
            (error) => {
              console.log(error);
            }
          );
          // 履歴データ
          this.recents = showDataObj.cardPazulData.recents;
          // チャートlegendData
          this.task_name = showDataObj.cardPazulData.task_name;
          // ユーザ名
          // userName: this.$session.get("UserName") || "",
          // 能力名
          this.abilityName = this.showAbilityName;
          //rate
          this.cardPazulData = showDataObj.cardPazulData;
        }
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
      dataObj: {},
      // ロード状態
      loading: this.loadFlg,
      // 時系列データ
      lineChartData: {},
      // 履歴データ
      recents: [],
      // チャートlegendData
      task_name: "",
      // 能力名
      abilityName: "",
      //rate
      cardPazulData: {
        //カレントrate
        star: 0,
        //最終利用日
        last_updated_at: "",
        //最高点
        score_max: 0,
        // 標準点
        score_age: 0,
        //平均指数
        performance: 0,
        //time
        playtime: "0",
        // rank_count_
        rank_count_0: 0,
        rank_count_1: 0,
        rank_count_2: 0,
        rank_count_3: 0,
        rank_count_4: 0,
        rank_count_5: 0,
        // パズル画像
        task_image: "",
        // パズル説明
        task_desc: "",
      },
      // 年、月、週 カレントアクティブ
      activeObj: {
        isActiveY: true,
        isActiveM: false,
        isActiveW: false,
      },
      activeTabObj: {
        isTab1: true,
        isTab2: false,
        isTab3: false,
      },
    };
  },
  computed: {
    cgevTaskImage: function() {
      return CGEV_IMAGE_BASE.cgev_image_base + this.cardPazulData.task_image;
    },
  },
  methods: {
    clickYear: function() {
      this.$nextTick(() => {
        this.activeObj.isActiveY = true;
        this.activeObj.isActiveM = false;
        this.activeObj.isActiveW = false;
      });
    },
    clickMonth: function() {
      this.$nextTick(() => {
        this.activeObj.isActiveY = false;
        this.activeObj.isActiveM = true;
        this.activeObj.isActiveW = false;
      });
    },
    clickWeek: function() {
      this.$nextTick(() => {
        this.activeObj.isActiveY = false;
        this.activeObj.isActiveM = false;
        this.activeObj.isActiveW = true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
.overflo-div-height450 {
  height: 530px;
  overflow: auto;
  text-align: center;
}

.quiz-rank_count_ {
  margin: auto 0 0 6%;
  width: 8%;
}

// CSS reset END

$gold-rank_count_: #f9ad0e;
$silver-rank_count_: #d1d7da;
$bronze-rank_count_: #df7e08;
$neutral-rank_count_: #d1d7da;

.quiz-rank_count_ {
  position: relative;
  margin-bottom: 16px;
  float: left;
}

.quiz-rank_count___circle {
  font-family: "Roboto", sans-serif;
  font-size: 28px;
  font-weight: 500;
  width: 56px;
  height: 56px;
  border-radius: 100%;
  color: white;
  text-align: center;
  line-height: 46px;
  vertical-align: middle;
  position: relative;
  border-width: 0.2em;
  border-style: solid;
  z-index: 1;

  // Default colors
  box-shadow: inset 0 0 0 darken($neutral-rank_count_, 15%),
    2px 2px 0 rgba(0, 0, 0, 0.08);
  border-color: lighten(adjust-hue($neutral-rank_count_, 10), 10%);
  text-shadow: 2px 2px 0 darken($neutral-rank_count_, 20%);
  background: linear-gradient(
    to bottom right,
    $neutral-rank_count_ 50%,
    darken($neutral-rank_count_, 5%) 50%
  );

  &.quiz-rank_count___circle--gold {
    box-shadow: inset 0 0 0 darken($gold-rank_count_, 15%),
      2px 2px 0 rgba(0, 0, 0, 0.08);
    border-color: lighten(adjust-hue($gold-rank_count_, 10), 10%);
    text-shadow: 0 0 4px darken($gold-rank_count_, 20%);
    background: linear-gradient(
      to bottom right,
      $gold-rank_count_ 50%,
      darken($gold-rank_count_, 5%) 50%
    );
  }

  &.quiz-rank_count___circle--silver {
    box-shadow: inset 0 0 0 darken($silver-rank_count_, 15%),
      2px 2px 0 rgba(0, 0, 0, 0.08);
    border-color: lighten(adjust-hue($silver-rank_count_, 10), 10%);
    text-shadow: 0px 0px 4px darken($silver-rank_count_, 20%);
    background: linear-gradient(
      to bottom right,
      $silver-rank_count_ 50%,
      darken($silver-rank_count_, 5%) 50%
    );
  }

  &.quiz-rank_count___circle--bronze {
    box-shadow: inset 0 0 0 darken($bronze-rank_count_, 15%),
      2px 2px 0 rgba(0, 0, 0, 0.08);
    border-color: lighten(adjust-hue($bronze-rank_count_, 10), 10%);
    text-shadow: 0 0 4px darken($bronze-rank_count_, 20%);
    background: linear-gradient(
      to bottom right,
      $bronze-rank_count_ 50%,
      darken($bronze-rank_count_, 5%) 50%
    );
  }
}

.quiz-rank_count___ribbon {
  content: "";
  display: block;
  position: absolute;
  border-style: solid;
  border-width: 6px 10px;
  width: 0;
  height: 20px;
  top: 50px;
}

.quiz-rank_count___ribbon--left {
  border-color: #fc402d #fc402d transparent #fc402d;
  left: 8px;
  transform: rotate(20deg) translateZ(-32px);
}

.quiz-rank_count___ribbon--right {
  left: 28px;
  border-color: darken(#fc402d, 10%) darken(#fc402d, 10%) transparent
    darken(#fc402d, 10%);
  transform: rotate(-20deg) translateZ(-48px);
}
.tabaAtive {
  background: #eee;
  color: black;
}
</style>
