<template>
  <div class="card-small">
    <v-row justify="space-around">
      <div class="detail-gallery">
        <h2>
          <span class="text-secondary">現在のCogEvoスコア</span>
        </h2>
        <div>
          <raddar-chart
            :indicatorParams="indicatorParams"
            :chartDateParams="chartDateParams"
          />
        </div>
      </div>
    </v-row>
  </div>
</template>

<script>
// import LineChart from "../task/admin/components/LineChart";
import RaddarChart from "../task/admin/components/RaddarChart";
// import TransactionTable from "../task/admin/components/TransactionTable";
import { CGEV_SESSION_KEY } from "@/utils/const";
// import FooterCommon from "../task/admin/components/FooterCommon";
// import getCgevApi from "@/utils/cgevapi";
// import ActionPieChart from "../task/admin/components/ActionPieChart";

export default {
  name: "Summary",
  components: {
    // LineChart,
    RaddarChart,
    // TransactionTable,
    // FooterCommon,
    // ActionPieChart,
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
