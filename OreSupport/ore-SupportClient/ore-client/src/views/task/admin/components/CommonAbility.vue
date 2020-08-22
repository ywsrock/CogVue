<template>
  <div>
    <div class="row detail-content">
      <div class="col-sm-7">
        <!--時系列Line-->
        <div class="row detail-content">
          <h2>
            【推移】
            <span class="text-secondary">{{ legendData[0] }}</span>
          </h2>
          <div class="chart-wrapper overflo-div-height450">
            <div class="background-white p20">
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
                      :proplegendData="legendData"
                      :key="legendData[0]"
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
                      :proplegendData="legendData"
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
                >
                  <div class="detail-map">
                    <line-chart
                      :chart-data="lineChartData"
                      :proplegendData="legendData"
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

      <div class="col-sm-5">
        <h2>
          【{{ abilityName }}】
          <span class="text-secondary">{{ legendData[0] }} </span>
        </h2>
        <div class="background-white p20 overflo-div-height450 ">
          <div class="detail-description">
            <div style="text-align: center ">
              <el-tag type="success" style="font-size:large"
                >{{ cardPazulData.current_ability_rate }}級</el-tag
              >
              <el-rate
                v-model="cardPazulData.current_ability_rate"
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
                    &nbsp;{{ cardPazulData.maxPoint }}
                  </el-button>
                </el-tooltip>

                <el-tooltip
                  content="標準点（18歳）"
                  placement="top"
                  style="color:#303133"
                >
                  <el-button type="text" class="fa fa-dot-circle-o">
                    &nbsp;{{ cardPazulData.standardPoint }}
                  </el-button>
                </el-tooltip>

                <el-tooltip
                  content="平均指数"
                  placement="top"
                  style="color:#303133"
                >
                  <el-button type="text" class="fa fa-line-chart">
                    &nbsp;{{ cardPazulData.averageIndex }}
                  </el-button>
                </el-tooltip>

                <el-tooltip
                  content="時間"
                  placement="top"
                  style="color:#303133"
                >
                  <el-button type="text" class="fa fa-clock-o">
                    &nbsp;{{ cardPazulData.timePoint }}
                  </el-button>
                </el-tooltip>
              </h5>
              <h5>最終トレーニング日:&nbsp;{{ cardPazulData.lastUseDate }}</h5>
            </div>
            <hr />
            <el-tooltip
              content="これまでに獲得した等級です。"
              placement="top"
              style="color:#303133"
            >
              <div class="row">
                <div class="quiz-medal">
                  <div class="quiz-medal__circle quiz-medal__circle--gold">
                    <el-badge :value="cardPazulData.medal0" class="item">
                      <span>
                        特
                      </span>
                    </el-badge>
                  </div>
                  <div
                    class="quiz-medal__ribbon quiz-medal__ribbon--left"
                  ></div>
                  <div
                    class="quiz-medal__ribbon quiz-medal__ribbon--right"
                  ></div>
                </div>

                <div class="quiz-medal">
                  <div class="quiz-medal__circle quiz-medal__circle--silver">
                    <el-badge :value="cardPazulData.medal1" class="item">
                      <span>
                        1
                      </span>
                    </el-badge>
                  </div>
                  <div
                    class="quiz-medal__ribbon quiz-medal__ribbon--left"
                  ></div>
                  <div
                    class="quiz-medal__ribbon quiz-medal__ribbon--right"
                  ></div>
                </div>
                <div class="quiz-medal">
                  <div class="quiz-medal__circle quiz-medal__circle--bronze">
                    <el-badge :value="cardPazulData.medal2" class="item">
                      <span>
                        2
                      </span>
                    </el-badge>
                  </div>
                  <div
                    class="quiz-medal__ribbon quiz-medal__ribbon--left"
                  ></div>
                  <div
                    class="quiz-medal__ribbon quiz-medal__ribbon--right"
                  ></div>
                </div>

                <div class="quiz-medal">
                  <div class="quiz-medal__circle quiz-medal__circle--silver">
                    <el-badge :value="cardPazulData.medal3" class="item">
                      <span>
                        3
                      </span>
                    </el-badge>
                  </div>
                  <div
                    class="quiz-medal__ribbon quiz-medal__ribbon--left"
                  ></div>
                  <div
                    class="quiz-medal__ribbon quiz-medal__ribbon--right"
                  ></div>
                </div>
                <div class="quiz-medal">
                  <div class="quiz-medal__circle quiz-medal__circle--silver">
                    <el-badge :value="cardPazulData.medal4" class="item">
                      <span>
                        4
                      </span>
                    </el-badge>
                  </div>
                  <div
                    class="quiz-medal__ribbon quiz-medal__ribbon--left"
                  ></div>
                  <div
                    class="quiz-medal__ribbon quiz-medal__ribbon--right"
                  ></div>
                </div>
                <div class="quiz-medal">
                  <div class="quiz-medal__circle quiz-medal__circle--silver">
                    <el-badge :value="cardPazulData.medal5" class="item">
                      <span>
                        5
                      </span>
                    </el-badge>
                  </div>
                  <div
                    class="quiz-medal__ribbon quiz-medal__ribbon--left"
                  ></div>
                  <div
                    class="quiz-medal__ribbon quiz-medal__ribbon--right"
                  ></div>
                </div>
              </div>
            </el-tooltip>
            <hr />
            <div class="row">
              <div class="col-md-7 text-center">
                <img
                  id="screen-shot"
                  :src="cardPazulData.pazulImage"
                  width="100%"
                />
              </div>
              <div class="col-md-5">
                <h5>
                  {{ cardPazulData.pazulDec }}
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
    <div class="row detail-content">
      <h2>
        【最近の記録】
        <span class="text-secondary">{{ legendData[0] }}</span>
      </h2>
      <div class="chart-wrapper">
        <div class="background-white p20">
          <transaction-table
            :chartData="TransactionData"
            v-cloak
            :key="legendData[0]"
          />
        </div>
      </div>
    </div>
    <!-- /.row -->
  </div>
</template>

<script>
import LineChart from "./TaskLineChart";
import TransactionTable from "./TaskTransactionTable";

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
    },
    showAbilityName: {
      type: String,
      require: true,
    },
  },
  watch: {
    showDataObj: {
      deep: true,
      handler(showDataObj) {
        this.dataObj = showDataObj;
        // 時系列データ
        this.lineChartData = showDataObj.lineChartData.yearData;
        // 履歴データ
        this.TransactionData = showDataObj.transactionTableChartData;
        // チャートlegendData
        this.legendData = showDataObj.legendData || ["1"];
        // ユーザ名
        // userName: this.$session.get("UserName") || "",
        // 能力名
        this.abilityName = this.showAbilityName || "";
        //rate
        this.cardPazulData = showDataObj.cardPazulData;
      },
    },
  },
  data() {
    return {
      dataObj: {},
      // 時系列データ
      lineChartData: {},
      // 履歴データ
      TransactionData: [],
      // チャートlegendData
      legendData: [""],
      // 能力名
      abilityName: "",
      //rate
      cardPazulData: {
        //カレントrate
        current_ability_rate: 0,
        //最終利用日
        lastUseDate: "",
        //最高点
        maxPoint: 0,
        // 標準点
        standardPoint: 0,
        //平均指数
        averageIndex: 0,
        //time
        timePoint: "0",
        // medal
        medal0: 0,
        medal1: 0,
        medal2: 0,
        medal3: 0,
        medal4: 0,
        medal5: 0,
        // パズル画像
        pazulImage: "",
        // パズル説明
        pazulDec: "",
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

.quiz-medal {
  margin: 10px 0 0 30px;
  width: 40px;
}
// CSS reset END

$gold-medal: #f9ad0e;
$silver-medal: #d1d7da;
$bronze-medal: #df7e08;
$neutral-medal: #d1d7da;

.quiz-medal {
  position: relative;
  margin-bottom: 16px;
  float: left;
}

.quiz-medal__circle {
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
  box-shadow: inset 0 0 0 darken($neutral-medal, 15%),
    2px 2px 0 rgba(0, 0, 0, 0.08);
  border-color: lighten(adjust-hue($neutral-medal, 10), 10%);
  text-shadow: 2px 2px 0 darken($neutral-medal, 20%);
  background: linear-gradient(
    to bottom right,
    $neutral-medal 50%,
    darken($neutral-medal, 5%) 50%
  );

  &.quiz-medal__circle--gold {
    box-shadow: inset 0 0 0 darken($gold-medal, 15%),
      2px 2px 0 rgba(0, 0, 0, 0.08);
    border-color: lighten(adjust-hue($gold-medal, 10), 10%);
    text-shadow: 0 0 4px darken($gold-medal, 20%);
    background: linear-gradient(
      to bottom right,
      $gold-medal 50%,
      darken($gold-medal, 5%) 50%
    );
  }

  &.quiz-medal__circle--silver {
    box-shadow: inset 0 0 0 darken($silver-medal, 15%),
      2px 2px 0 rgba(0, 0, 0, 0.08);
    border-color: lighten(adjust-hue($silver-medal, 10), 10%);
    text-shadow: 0px 0px 4px darken($silver-medal, 20%);
    background: linear-gradient(
      to bottom right,
      $silver-medal 50%,
      darken($silver-medal, 5%) 50%
    );
  }

  &.quiz-medal__circle--bronze {
    box-shadow: inset 0 0 0 darken($bronze-medal, 15%),
      2px 2px 0 rgba(0, 0, 0, 0.08);
    border-color: lighten(adjust-hue($bronze-medal, 10), 10%);
    text-shadow: 0 0 4px darken($bronze-medal, 20%);
    background: linear-gradient(
      to bottom right,
      $bronze-medal 50%,
      darken($bronze-medal, 5%) 50%
    );
  }
}

.quiz-medal__ribbon {
  content: "";
  display: block;
  position: absolute;
  border-style: solid;
  border-width: 6px 10px;
  width: 0;
  height: 20px;
  top: 50px;
}

.quiz-medal__ribbon--left {
  border-color: #fc402d #fc402d transparent #fc402d;
  left: 8px;
  transform: rotate(20deg) translateZ(-32px);
}

.quiz-medal__ribbon--right {
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
