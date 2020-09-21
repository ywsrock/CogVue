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
                      <div class="detail-label">総合結果</div>
                    </div>
                    <!-- /.detail-banner-info -->

                    <h2 class="detail-title">「{{ userName }}」さんの記録</h2>

                    <div class="detail-banner-address">
                      <i class="fa fa-map-o"></i>トレーニング開始から現在までのサマリー
                    </div>
                    <!-- /.detail-banner-address -->

                    <div class="detail-banner-rating">
                      <i class="detail-verified" style="float:left">{{ ability_rate0 }}級</i>
                      <el-rate v-model="ability_rate0" disabled text-color="#ff9900"></el-rate>
                      <p></p>
                    </div>
                    <!-- /.detail-banner-rating -->

                    <!-- /.detail-claim -->
                    <div class="detail-banner-btn heart">
                      <i class="fa fa-heart-o"></i>
                      <span data-toggle="I Love It">平均指数：{{ averageIndex }}</span>
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
              <div class="orig-row detail-content">
                <div class="col-sm-7">
                  <div class="detail-gallery">
                    <h2>
                      【傾向】
                      <span class="text-secondary">5種バランスの指数平均</span>
                    </h2>
                    <div class="background-white p20">
                      <raddar-chart />
                    </div>
                  </div>
                  <!-- /.detail-gallery -->
                </div>
                <!-- /.col-sm-7 -->

                <div class="col-sm-5">
                  <h2>
                    【評価】
                    <span class="text-secondary">総合サマリー</span>
                  </h2>
                  <div class="background-white p20 overflo-div-height450">
                    <div class="detail-description" style="border-bottom: 0;">
                      <h4>利用開始日 {{ useStart }}</h4>
                      <h4>最終利用日 {{ userEnd }}</h4>
                      <hr />
                      <p>{{ SummaryDec }}</p>
                      <!--<transaction-table />-->
                    </div>
                    <!-- /.detail-follow -->
                  </div>

                  <div class="widget"></div>
                  <!-- /.widget -->

                  <!--<h2>Amenities</h2>-->

                  <!--<div class="background-white p20">
                    <ul class="detail-amenities">
                      <li class="yes">WiFi</li>
                      <li class="yes">Parking</li>
                      <li class="no">Vine</li>
                      <li class="yes">Terrace</li>
                      <li class="no">Bar</li>
                      <li class="yes">Take Away Coffee</li>
                      <li class="no">Catering</li>
                      <li class="yes">Raw Food</li>
                      <li class="no">Delivery</li>
                      <li class="yes">No-smoking room</li>
                      <li class="no">Reservations</li>
                    </ul>
                  </div>-->
                </div>
                <!-- /.col-sm-5 -->
                <!-- /.col-* -->
              </div>
              <!--時系列Line-->
              <div class="orig-row detail-content">
                <h2>
                  【推移】
                  <span class="text-secondary">認知機能バランス値</span>
                </h2>
                <div class="chart-wrapper">
                  <div class="background-white p20">
                    <!-- Nav tabs -->
                    <ul id="listing-detail-location" class="nav nav-tabs" role="tablist">
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
                          <line-chart :chart-data="lineChartData" height="450px" />
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
                          <line-chart :chart-data="lineChartData" height="450px" />
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
                          <line-chart :chart-data="lineChartData" height="450px" />
                        </div>
                      </div>
                      <!-- week-property -->
                    </div>
                  </div>
                </div>
              </div>
              <!--履歴データ表示-->
              <div class="orig-row detail-content">
                <h2>
                  【トレーニング履歴】
                  <span class="text-secondary">最新20利用日</span>
                </h2>
                <div class="chart-wrapper">
                  <div class="background-white p20">
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

      <footer class="footer">
        <div class="footer-top">
          <div class="container">
            <div class="orig-row">
              <div class="col-sm-4">
                <h3>運営会社</h3>

                <p>
                  会社名: 株式会社トータルブレインケア
                  <br />事業内容: 認知機能に関するツールやプログラムの提供及び
                  <br />インターネットサービス事業
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
                  <br />土・日・祝日、および弊社休業日を除きます
                  <br />電話：078-335-8467
                  <br />
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
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="terms-conditions.html">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="contact-1.html">Contact</a>
                </li>
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
import LineChart from "./components/LineChart";
import RaddarChart from "./components/RaddarChart";
import TransactionTable from "./components/TransactionTable";

export default {
  name: "Summary",
  components: {
    LineChart,
    RaddarChart,
    TransactionTable
  },
  created() {},

  mounted() {
    // LineChartデータ取得
    this.$http.get("/api/personal/CogEvo/summary").then(
      res => {
        this.lineChartData = res.data.lineChartData.yearData;
      },
      error => {
        console.log(error);
      }
    );
    // 履歴データ取得
    this.$http.get("/api/personal/CogEvo/transactionTable").then(
      res => {
        this.TransactionData = res.data.transactionTableChartData;
      },
      error => {
        console.log(error);
      }
    );
  },
  watch: {
    $route: function(to, from) {
      if (to.path !== from.path) {
        this.$router.push(`${this.$route.path}`);
      }
    }
  },
  data() {
    return {
      lineChartData: {},
      TransactionData: [],
      userName: this.$session.get("UserName") || "",
      ability_rate0: 4,
      SummaryDec:
        "認知機能の特性を知るには、多くの種類のタスクにトライしてみましょう。特に、注意力が優れているようです。得意なタスクは視覚探索ですね。まだやったことのないタスクは10個です。",
      //平均指数
      averageIndex: 78.0,
      useStart: "2020-08-05",
      userEnd: " 2020-08-06",
      activeObj: {
        isActiveY: true,
        isActiveM: false,
        isActiveW: false
      }
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
    }
  }
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
