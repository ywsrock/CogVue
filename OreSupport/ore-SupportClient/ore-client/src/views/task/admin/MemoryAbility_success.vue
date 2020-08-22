<template>
  <div class="dashboard-editor-container">
    <div class="page-wrapper">
      <div class="main">
        <div class="main-inner">
          <div class="content">
            <div class="mt-70 mb70">
              <div class="detail-banner">
                <div class="container">
                  <div class="detail-banner-left">
                    <div class="detail-banner-info">
                      <div class="detail-banner-info">
                        <div class="detail-verified">
                          タスクごとの記録
                        </div>
                      </div>
                      <!-- /.detail-banner-info -->
                    </div>
                    <!-- /.detail-banner-info -->

                    <h2 class="detail-title">
                      「{{ userName }}」さんの{{ abilityName }}
                    </h2>

                    <div class="detail-banner-address">
                      <i class="fa fa-map-o"></i>現在の{{ abilityName }}情報把握
                    </div>
                    <!-- /.detail-banner-address -->

                    <!-- /.detail-banner-rating -->

                    <!-- /.detail-claim -->
                    <div
                      class="detail-banner-btn heart"
                      :class="{ tabaAtive: activeTabObj.isTab1 }"
                      @click="tabclickHand(1)"
                    >
                      <i class="fa fa-heart-o"></i>
                      <span
                        data-toggle="I Love It"
                        style=" display: inline-block;width:200px"
                        >フラッシュライト 【{{ abilityName }}】</span
                      >
                      <div class="detail-banner-rating">
                        <i class="detail-verified" style="float:left"
                          >{{ ability_rate0 }}級</i
                        >
                        <el-rate
                          v-model="ability_rate0"
                          disabled
                          text-color="#ff9900"
                        >
                        </el-rate>
                      </div>
                    </div>
                    <div
                      class="detail-banner-btn heart"
                      :class="{ tabaAtive: activeTabObj.isTab2 }"
                      @click="tabclickHand(2)"
                    >
                      <i class="fa fa-heart-o"></i>
                      <span
                        data-toggle="I Love It"
                        style="display: inline-block;width:200px"
                        >カード記憶 【{{ abilityName }}】</span
                      >
                      <div class="detail-banner-rating">
                        <i class="detail-verified" style="float:left"
                          >{{ ability_rate1 }}級</i
                        >
                        <el-rate
                          v-model="ability_rate1"
                          disabled
                          text-color="#ff9900"
                        >
                        </el-rate>
                      </div>
                    </div>
                    <div
                      class="detail-banner-btn heart"
                      :class="{ tabaAtive: activeTabObj.isTab3 }"
                      @click="tabclickHand(3)"
                    >
                      <i class="fa fa-heart-o"></i>
                      <span
                        data-toggle="I Love It"
                        style=" display: inline-block;width:200px"
                        >ストーリー 【{{ abilityName }}】</span
                      >
                      <div class="detail-banner-rating">
                        <i class="detail-verified" style="float:left"
                          >{{ ability_rate2 }}級</i
                        >
                        <el-rate
                          v-model="ability_rate2"
                          disabled
                          text-color="#ff9900"
                        >
                        </el-rate>
                      </div>
                    </div>
                    <!-- /.detail-claim -->
                  </div>
                  <!-- /.detail-banner-left -->
                </div>
                <!-- /.container -->
              </div>
              <!-- /.detail-banner -->
            </div>

            <div class="container">
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
                        <h5>
                          最終トレーニング日:&nbsp;{{
                            cardPazulData.lastUseDate
                          }}
                        </h5>
                      </div>
                      <hr />
                      <el-tooltip
                        content="これまでに獲得した等級です。"
                        placement="top"
                        style="color:#303133"
                      >
                        <div class="row">
                          <div class="quiz-medal">
                            <div
                              class="quiz-medal__circle quiz-medal__circle--gold"
                            >
                              <el-badge
                                :value="cardPazulData.medal0"
                                class="item"
                              >
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
                            <div
                              class="quiz-medal__circle quiz-medal__circle--silver"
                            >
                              <el-badge
                                :value="cardPazulData.medal1"
                                class="item"
                              >
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
                            <div
                              class="quiz-medal__circle quiz-medal__circle--bronze"
                            >
                              <el-badge
                                :value="cardPazulData.medal2"
                                class="item"
                              >
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
                            <div
                              class="quiz-medal__circle quiz-medal__circle--silver"
                            >
                              <el-badge
                                :value="cardPazulData.medal3"
                                class="item"
                              >
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
                            <div
                              class="quiz-medal__circle quiz-medal__circle--silver"
                            >
                              <el-badge
                                :value="cardPazulData.medal4"
                                class="item"
                              >
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
                            <div
                              class="quiz-medal__circle quiz-medal__circle--silver"
                            >
                              <el-badge
                                :value="cardPazulData.medal5"
                                class="item"
                              >
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
            <!-- /.container -->
          </div>
          <!-- /.content -->
        </div>
        <!-- /.main-inner -->
      </div>
      <!-- /.main -->

      <footer class="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <h3>運営会社</h3>

                <p>
                  会社名: 株式会社トータルブレインケア<br />
                  事業内容: 認知機能に関するツールやプログラムの提供及び<br />インターネットサービス事業
                </p>
              </div>
              <!-- /.col-* -->

              <div class="col-sm-4">
                <h3>脳活バランサーCogEvo パーソナル</h3>

                <p>
                  CogEvoは脳のリハビリテーションから生まれた
                  認知機能別トレーニングができる
                  エビデンス（科学的根拠）に基づいたクラウドサービスです。
                </p>
              </div>
              <!-- /.col-* -->

              <div class="col-sm-4">
                <h3>CogEvoカスタマーサポート</h3>
                <p>
                  平日9:30〜17:00
                  <br />土・日・祝日、および弊社休業日を除きます<br />
                  電話：078-335-8467<br />
                  <a href="https://cog-evo.jp/">https://cog-evo.jp/</a>
                </p>
                <!-- /.header-nav-social -->
              </div>
              <!-- /.col-* -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container -->
        </div>
        <!-- /.footer-top -->

        <div class="footer-bottom">
          <div class="container">
            <div class="footer-bottom-left">
              &copy; 2020 All rights reserved. Created by
              <a href="#">oreSupport</a>.
            </div>
            <!-- /.footer-bottom-left -->

            <div class="footer-bottom-right">
              <ul class="nav nav-pills">
                <li><a href="index.html">Home</a></li>
                <li><a href="pricing.html">Pricing</a></li>
                <li>
                  <a href="terms-conditions.html">Terms &amp; Conditions</a>
                </li>
                <li><a href="contact-1.html">Contact</a></li>
              </ul>
              <!-- /.nav -->
            </div>
            <!-- /.footer-bottom-right -->
          </div>
          <!-- /.container -->
        </div>
      </footer>
      <!-- /.footer -->
    </div>
    <!-- /.page-wrapper -->
  </div>
</template>

<script>
import LineChart from "./components/TaskLineChart";
import TransactionTable from "./components/TaskTransactionTable";

export default {
  name: "MemoryAbility",
  components: {
    LineChart,
    TransactionTable,
  },
  created() {},

  mounted() {
    this.$http.get("/api/personal/CogEvo/memoryAbility").then(
      (res) => {
        this.dataObj = Object.assign(this.dataObj, res.data.MemoryAbility);
        this.lineChartData = this.dataObj.Flashlight.lineChartData.yearData;
        this.TransactionData = this.dataObj.Flashlight.transactionTableChartData;
        this.legendData = this.dataObj.Flashlight.legendData;
        this.cardPazulData = this.dataObj.Flashlight.cardPazulData;
        this.ability_rate0 = this.dataObj.Flashlight.cardPazulData.current_ability_rate;
        this.ability_rate1 = this.dataObj.CardMemory.cardPazulData.current_ability_rate;
        this.ability_rate2 = this.dataObj.Story.cardPazulData.current_ability_rate;
      },
      (error) => {
        console.log("error");
      }
    );
  },
  watch: {
    $route: function(to, from) {
      if (to.path !== from.path) {
        this.$router.push(`${this.$route.path}`);
      }
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
      legendData: ["フラッシュライト "],
      // ユーザ名
      userName: this.$session.get("UserName") || "",
      // 能力名
      abilityName: "記憶力",
      // 等級
      ability_rate0: 5,
      ability_rate1: 3.5,
      ability_rate2: 4,
      //rate
      cardPazulData: {
        //カレントrate
        current_ability_rate: 5,
        //最終利用日
        lastUseDate: "2020-08-09",
        //最高点
        maxPoint: 90,
        // 標準点
        standardPoint: 401,
        //平均指数
        averageIndex: 64.11,
        //time
        timePoint: "00:27",
        // medal
        medal0: 2,
        medal1: 3,
        medal2: 1,
        medal3: 5,
        medal4: 1,
        medal5: 9,
        // パズル画像
        pazulImage: "https://personal.tbcare.jp/images/task/5.png",
        // パズル説明
        pazulDec:
          "ライトが光る順番を記憶し、次にその順番でライトをタッチしていくタスクです。",
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
    tabclickHand: function(index) {
      switch (index) {
        case 2:
          this.activeTabObj.isTab1 = false;
          this.activeTabObj.isTab2 = true;
          this.activeTabObj.isTab3 = false;

          this.lineChartData = this.dataObj.CardMemory.lineChartData.yearData;
          this.TransactionData = this.dataObj.CardMemory.transactionTableChartData;
          this.legendData = this.dataObj.CardMemory.legendData || 2;
          this.cardPazulData = this.dataObj.CardMemory.cardPazulData;
          break;
        case 3:
          this.activeTabObj.isTab1 = false;
          this.activeTabObj.isTab2 = false;
          this.activeTabObj.isTab3 = true;

          this.lineChartData = this.dataObj.Story.lineChartData.yearData;
          this.TransactionData = this.dataObj.Story.transactionTableChartData;
          this.legendData = this.dataObj.Story.legendData || 3;
          this.cardPazulData = this.dataObj.Story.cardPazulData;
          break;
        default:
          this.activeTabObj.isTab1 = true;
          this.activeTabObj.isTab2 = false;
          this.activeTabObj.isTab3 = false;

          this.lineChartData = this.dataObj.Flashlight.lineChartData.yearData;
          this.TransactionData = this.dataObj.Flashlight.transactionTableChartData;
          this.legendData = this.dataObj.Flashlight.legendData || 1;
          this.cardPazulData = this.dataObj.Flashlight.cardPazulData;
      }
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
