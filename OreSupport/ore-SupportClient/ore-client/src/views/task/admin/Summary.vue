<template>
  <div class="dashboard-editor-container">
    <div class="page-wrapper">
      <div class="main">
        <div class="main-inner">
          <div
            class="content"
            v-loading.fullscreen.lock="loadFlg"
            element-loading-text="記録取得中......"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)"
          >
            <div class="mt-70 mb70">
              <div class="detail-banner">
                <div class="container">
                  <div class="detail-banner-left">
                    <div class="detail-banner-info">
                      <div class="detail-label">総合結果</div>
                    </div>
                    <!-- /.detail-banner-info -->

                    <h2 class="detail-title">「{{ userName }}」さんの記録</h2>

                    <div class="detail-banner-address">
                      <i class="fa fa-map-o"></i
                      >トレーニング開始から現在までのサマリー
                    </div>
                    <!-- /.detail-banner-address -->

                    <div class="detail-banner-rating">
                      <i class="detail-verified" style="float:left"
                        >{{ ability_rate0 }}級</i
                      >
                      <el-rate
                        v-model="ability_rate0"
                        disabled
                        text-color="#ff9900"
                      ></el-rate>
                      <p></p>
                    </div>
                    <!-- /.detail-banner-rating -->

                    <!-- /.detail-claim -->
                    <div class="detail-banner-btn heart">
                      <i class="fa fa-heart-o"></i>
                      <span data-toggle="I Love It"
                        >平均指数：{{ averageIndex }}</span
                      >
                    </div>
                    <!-- /.detail-claim -->
                  </div>
                  <!-- /.detail-banner-left -->
                </div>

                <!-- /.container -->
              </div>
              <!-- /.detail-banner -->
            </div>
            <div class="form-group max-width">
              <v-btn
                tile
                color="green"
                height="20px"
                class="float-right white--text text-h5"
                @click="refreshData()"
              >
                <v-icon left>
                  mdi-hand-peace
                </v-icon>
                最新結果取得
              </v-btn>
            </div>
            <div class="container">
              <div class="orig-row detail-content">
                <div class="col-sm-4">
                  <div class="detail-gallery">
                    <h2 class="text-h4">
                      【傾向】
                      <span class="text-secondary">5種バランスの指数平均</span>
                    </h2>
                    <div class="background-white p20">
                      <raddar-chart
                        :indicatorParams="indicatorParams"
                        :chartDateParams="chartDateParams"
                      />
                    </div>
                  </div>
                  <!-- /.detail-gallery -->
                </div>
                <!-- /.col-sm-7 -->
                <!--評価-->
                <div class="col-sm-4">
                  <h2 class="text-h4">
                    【評価】
                    <span class="text-secondary">総合サマリー</span>
                  </h2>
                  <div class="background-white p20 overflo-div-height450">
                    <div class="detail-description" style="border-bottom: 0;">
                      <h4>利用開始日 {{ useStart }}</h4>
                      <h4>最終利用日 {{ userEnd }}</h4>
                      <hr />
                      <el-tooltip
                        content="これまでに獲得した等級です。"
                        placement="top"
                        style="color:#303133"
                      >
                        <div class="orig-row">
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
                      <div class="orig-row">
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
                      <p>{{ SummaryDec }}</p>
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
              <!--時系列Line-->
              <div class="orig-row detail-content">
                <h2 class="text-h4">
                  【推移】
                  <span class="text-secondary">認知機能バランス値</span>
                </h2>
                <div class="chart-wrapper">
                  <div class="col-8 background-white p30">
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
                            height="450px"
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
                            height="450px"
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
                      >
                        <div class="detail-map">
                          <line-chart
                            :chart-data="lineChartData"
                            height="450px"
                            dateFmt="yyyy年第W週"
                          />
                        </div>
                      </div>
                      <!-- week-property -->
                    </div>
                  </div>
                </div>
              </div>
              <!--履歴データ表示-->
              <div class="orig-row detail-content">
                <h2 class="text-h4">
                  【トレーニング履歴】
                  <span class="text-secondary">最新20利用日</span>
                </h2>
                <div class="col-8 chart-wrapper">
                  <div class="background-white p30 overflow-auto">
                    <transaction-table :chartData="TransactionData" v-cloak />
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
      <FooterCommon></FooterCommon>
      <!-- /.footer -->
    </div>
    <!-- /.page-wrapper -->
  </div>
</template>

<script>
import LineChart from "./components/LineChart";
import RaddarChart from "./components/RaddarChart";
import TransactionTable from "./components/TransactionTable";
import { CGEV_SESSION_KEY } from "@/utils/const";
import FooterCommon from "./components/FooterCommon";
// import getCgevApi from "@/utils/cgevapi";

export default {
  name: "Summary",
  components: {
    LineChart,
    RaddarChart,
    TransactionTable,
    FooterCommon,
  },
  created() {},

  mounted() {
    //APIからデータ取得
    this.getSummaryData();
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
      //ロード状態
      loadFlg: true,
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
        // pazulImage: "",
        // pazulImage: "https://personal.tbcare.jp/images/task/5.png",
        // パズル説明
        // pazulDec: "",
      },
      lineChartData: {},
      TransactionData: [],
      chartDateParams: [],
      indicatorParams: [
        { name: "計画力", max: 150 },
        { name: "記憶力", max: 150 },
        { name: "注意力", max: 150 },
        { name: "見当識", max: 150 },
        { name: "空間認識力", max: 150 },
      ],
      userName: this.$session.get("UserName") || "",
      ability_rate0: 4,
      SummaryDec: "",
      //平均指数
      averageIndex: 78.0,
      useStart: "----",
      userEnd: "----",
      activeObj: {
        isActiveY: true,
        isActiveM: false,
        isActiveW: false,
      },
    };
  },
  methods: {
    //APIデータ取得
    getSummaryData: function() {
      this.$nextTick(async () => {
        // LineChartデータ取得
        this.$http.get("/api/personal/CogEvo/summary").then(
          (res) => {
            this.lineChartData = res.data.lineChartData.yearData;
          },
          (error) => {
            console.log(error);
          }
        );
        // セッションから値の取得
        if (this.$session.has(CGEV_SESSION_KEY.RECORDSCATEGORIES)) {
          let recordsCategories = this.$session.get(
            CGEV_SESSION_KEY.RECORDSCATEGORIES
          );
          let recordsSummary = this.$session.get(
            CGEV_SESSION_KEY.RECORDSSUMMARY
          );
          let recordsHistories = this.$session.get(
            CGEV_SESSION_KEY.RECORDSHISTORIES
          );

          // 画面表示値設定
          this.setSummaryValues(
            recordsCategories,
            recordsSummary,
            recordsHistories
          );
          //ロード完了
          this.loadFlg = false;
        } else {
          Promise.all([
            await this.$store.dispatch("cgev/authenticate"),
            await this.$store.dispatch("cgev/recordsCategories"),
            await this.$store.dispatch("cgev/recordsSummary"),
            await this.$store.dispatch("cgev/recordsHistories"),
          ])
            .then(
              ([
                // eslint-disable-next-line
                authenticate,
                recordsCategories,
                recordsSummary,
                recordsHistories,
              ]) => {
                // 画面表示値設定
                this.setSummaryValues(
                  recordsCategories,
                  recordsSummary,
                  recordsHistories
                );

                // セッション値保存
                this.$session.set(
                  CGEV_SESSION_KEY.RECORDSCATEGORIES,
                  recordsCategories
                );

                this.$session.set(
                  CGEV_SESSION_KEY.RECORDSSUMMARY,
                  recordsSummary
                );

                this.$session.set(
                  CGEV_SESSION_KEY.RECORDSHISTORIES,
                  recordsHistories
                );
                //ロード完了
                this.loadFlg = false;
              }
            )
            /* eslint-disable */
            .catch((error) => {
              //セッションクリア
              this.clearSession();
            });
        }
      });
    },
    //表示データ設定
    setSummaryValues: function(
      recordsCategories,
      recordsSummary,
      recordsHistories
    ) {
      //傾向
      this.chartDateParams = recordsCategories.raddarChartData;
      //総合結果
      // this.userName = recordsSummary.name;
      this.ability_rate0 = recordsSummary.star;
      this.averageIndex = recordsSummary.performance;
      this.useStart = recordsSummary.started_at;
      this.userEnd = recordsSummary.last_updated_at;
      this.SummaryDec = recordsSummary.analysed_message;
      this.cardPazulData.medal0 = recordsSummary.rank_count_0;
      this.cardPazulData.medal1 = recordsSummary.rank_count_1;
      this.cardPazulData.medal2 = recordsSummary.rank_count_2;
      this.cardPazulData.medal3 = recordsSummary.rank_count_3;
      this.cardPazulData.medal4 = recordsSummary.rank_count_4;
      this.cardPazulData.medal5 = recordsSummary.rank_count_5;
      // this.cardPazulData.pazulDec = recordsSummary.analysed_message;
      //履歴
      this.TransactionData = recordsHistories.histories;
    },
    // 最新データ取得
    refreshData: function() {
      //画面ロード状態に表示
      this.loadFlg = true;
      //セッションクリア
      this.clearSession();
      //APIデータ取得
      this.getSummaryData();
    },
    //セッション情報削除
    clearSession: function() {
      // セッションクリア
      this.$session.has(CGEV_SESSION_KEY.RECORDSCATEGORIES) &&
        this.$session.remove(CGEV_SESSION_KEY.RECORDSCATEGORIES);

      this.$session.has(CGEV_SESSION_KEY.RECORDSSUMMARY) &&
        this.$session.remove(CGEV_SESSION_KEY.RECORDSSUMMARY);

      this.$session.has(CGEV_SESSION_KEY.RECORDSHISTORIES) &&
        this.$session.remove(CGEV_SESSION_KEY.RECORDSHISTORIES);
    },
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
  height: 440px;
  overflow: auto;
}
</style>

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
  overflow: auto;
  text-align: center;
}

.quiz-medal {
  margin: auto 0 0 6%;
  width: 8%;
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
