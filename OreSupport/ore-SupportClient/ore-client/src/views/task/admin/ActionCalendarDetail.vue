<template>
  <div class="dashboard-editor-container">
    <div class="page-wrapper">
      <div class="main">
        <div class="main-inner">
          <div class="content">
            <div class="mt-70 mb70">
              <div class="detail-banner orig-detail-banner " id="origiBanner">
                <div class="container">
                  <div class="detail-banner-left">
                    <div class="detail-banner-info">
                      <div class="detail-banner-info">
                        <div class="detail-verified">
                          アクション結果
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
                  </div>
                  <!-- /.detail-banner-left -->
                </div>
                <!-- /.container -->
              </div>
              <!-- /.detail-banner -->
            </div>

            <div class="container">
              <h2>
                【アクション】
                <span class="text-secondary">{{ "記録一覧" }}</span>
              </h2>
              <ActionCalendar />
              <div class="orig-row detail-content">
                <h2>
                  【アクション】
                  <span class="text-secondary">{{ "効果" }}</span>
                </h2>
                <div class="col-sm-4">
                  <div class="background-white overflo-div-height450">
                    <ActionTimeLine />
                  </div>
                  <!--<div class="background-white p20 overflo-div-height450"></div>-->
                </div>
                <div class="col-sm-8">
                  <div class="background-white p20">
                    <div class="detail-map" style="text-align: center;">
                      <ActionLineChart
                        :chartData="showData"
                        :proplegendData="legendData"
                        :propxAxisData="xAxisData"
                      />
                    </div>
                  </div>
                </div>
              </div>
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
import ActionCalendar from "./components/ActionCalendar";
import ActionTimeLine from "./components/ActionTimeLine";
import ActionLineChart from "./components/TaskLineChart";

export default {
  name: "ActionCalendarDetail",
  components: {
    ActionCalendar,
    ActionTimeLine,
    ActionLineChart,
  },
  mounted() {
    this.$http.get("/api/personal/CogEvo/memoryAbility").then(
      (res) => {
        this.dataObj = Object.assign({}, this.dataObj, res.data.MemoryAbility);
        this.legendData = this.dataObj.Flashlight.legendData;
        this.ability_rate0 = this.dataObj.Flashlight.cardPazulData.current_ability_rate;
        this.ability_rate1 = this.dataObj.CardMemory.cardPazulData.current_ability_rate;
        this.ability_rate2 = this.dataObj.Story.cardPazulData.current_ability_rate;
        // this.showData = Object.assign(
        //   {},
        //   this.showData,
        //   this.dataObj.Flashlight
        // );
      },
      (error) => {
        console.log(error);
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
      //コンポーネント表示データ
      showData: { MemoryAbility: [123, 111, 121, 123] },
      // チャートlegendData
      legendData: ["アクション"],
      //
      xAxisData: ["1990/01/01", "1990/01/15", "1990/01/20", "1990/01/25"],
      // // ユーザ名
      userName: this.$session.get("UserName") || "",
      // // 能力名
      abilityName: "アクション結果",
      // // 等級
      ability_rate0: 5,
      ability_rate1: 3.5,
      ability_rate2: 4,
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
    tabclickHand: function(index) {
      let that = this;
      switch (index) {
        case 2:
          this.activeTabObj.isTab1 = false;
          this.activeTabObj.isTab2 = true;
          this.activeTabObj.isTab3 = false;
          this.$nextTick().then(function() {
            that.showData = that.dataObj.CardMemory;
          });
          this.legendData = this.dataObj.CardMemory.legendData || ["2"];
          break;
        case 3:
          this.activeTabObj.isTab1 = false;
          this.activeTabObj.isTab2 = false;
          this.activeTabObj.isTab3 = true;
          this.$nextTick().then(function() {
            that.showData = that.dataObj.Story;
          });

          this.legendData = this.dataObj.Story.legendData || ["3"];
          break;
        default:
          this.activeTabObj.isTab1 = true;
          this.activeTabObj.isTab2 = false;
          this.activeTabObj.isTab3 = false;
          this.$nextTick().then(function() {
            that.showData = that.dataObj.Flashlight;
          });
          this.legendData = this.dataObj.Flashlight.legendData || ["1"];
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
.tabaAtive {
  background: #eee;
  color: black;
}

.orig-detail-banner {
  height: 200px;
}

.overflo-div-height450 {
  height: 470px;
  overflow: auto;
  text-align: left;
}
</style>
