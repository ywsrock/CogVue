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
                        style=" display: inline-block;width:230px"
                        >見当識 【{{ abilityName }}】</span
                      >
                      <div class="detail-banner-rating">
                        <i class="detail-verified" style="float:left"
                          >{{ star_0 }}級</i
                        >
                        <el-rate v-model="star_0" disabled text-color="#ff9900">
                        </el-rate>
                      </div>
                    </div>
                    <!-- <div
                      class="detail-banner-btn heart"
                      :class="{ tabaAtive: activeTabObj.isTab2 }"
                      @click="tabclickHand(2)"
                    >
                      <i class="fa fa-heart-o"></i>
                      <span
                        data-toggle="I Love It"
                        style="display: inline-block;width:230px"
                        >さめがめ 【{{ abilityName }}】</span
                      >
                      <div class="detail-banner-rating">
                        <i class="detail-verified" style="float:left"
                          >{{ star_1 }}級</i
                        >
                        <el-rate
                          v-model="star_1"
                          disabled
                          text-color="#ff9900"
                        >
                        </el-rate>
                      </div>
                    </div>-->
                    <!--<div
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
                    </div>-->
                    <!-- /.detail-claim -->
                  </div>
                  <!-- /.detail-banner-left -->
                </div>
                <!-- /.container -->
              </div>
              <!-- /.detail-banner -->
            </div>

            <div class="container">
              <CommonAbility
                :showDataObj="showData"
                :showAbilityName="abilityName"
                :key="task_name"
                :loadFlg="loadFlg"
                v-cloak
              />
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
import CommonAbility from "./components/CommonAbility";
import { TaskData } from "@/store/cgevModel/task";
import { CGEV_SESSION_KEY } from "@/utils/const";

export default {
  name: "OrientationAbility",
  components: {
    CommonAbility,
  },
  mounted() {
    if (this.$session.has(CGEV_SESSION_KEY.TASK_ID_1)) {
      let sessionDataObj = this.$session.get(CGEV_SESSION_KEY.TASK_ID_1);
      this.dataObj = Object.assign(this.dataObj, sessionDataObj);
      // console.log(JSON.stringify(this.dataObj, null, "\t"));
      this.task_name = this.dataObj.Flashlight.cardPazulData.task_name;
      this.star_0 = this.dataObj.Flashlight.cardPazulData.star;
      this.showData = Object.assign({}, this.showData, this.dataObj.Flashlight);
      //ロード完了
      this.loadFlg = false;
    } else {
      this.$nextTick(async () => {
        await this.$store.dispatch("cgev/authenticate");
        Promise.all([
          await this.$store.dispatch("cgev/recordsTasksIdSummary", {
            task_id: 1,
          }),
          /* eslint-disable */
        ])
          .then(([FlashlightData]) => {
            if (Object.keys(FlashlightData).length === 0) {
              throw new Error();
            }
            this.dataObj = Object.assign(this.dataObj, {
              Flashlight: { cardPazulData: FlashlightData },
            });
            this.$session.set(CGEV_SESSION_KEY.TASK_ID_1, this.dataObj);
            // console.log(JSON.stringify(this.dataObj, null, "\t"));

            this.task_name = this.dataObj.Flashlight.cardPazulData.task_name;
            this.star_0 = this.dataObj.Flashlight.cardPazulData.star;
            this.showData = Object.assign(
              {},
              this.showData,
              this.dataObj.Flashlight
            );
            //ロード完了
            this.loadFlg = false;
          })
          .catch((error) => {
            if (this.$session.has(CGEV_SESSION_KEY.TASK_ID_1)) {
              this.$session.remove(CGEV_SESSION_KEY.TASK_ID_1);
            }
            // 失敗の場合、初期設定
            this.dataObj = Object.assign({}, this.dataObj, TaskData);
            this.task_name = this.dataObj.Flashlight.cardPazulData.task_name;
            this.star_0 = this.dataObj.Flashlight.cardPazulData.star;
            this.showData = Object.assign(
              {},
              this.showData,
              this.dataObj.Flashlight
            );
          });
      });
    }

    // this.$http.get("/api/personal/CogEvo/OrientationAbility").then(
    //   (res) => {
    //     this.dataObj = Object.assign(
    //       {},
    //       this.dataObj,
    //       res.data.OrientationAbility
    //     );
    //     this.legendData = this.dataObj.Orientation.legendData;
    //     this.star_0 = this.dataObj.Orientation.cardPazulData.current_ability_rate;
    //     this.showData = Object.assign(
    //       {},
    //       this.showData,
    //       this.dataObj.Orientation
    //     );
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
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
      //ロード状態
      loadFlg: true,
      //コンポーネント表示データ
      showData: TaskData.Flashlight,
      // // チャートlegendData
      task_name: "見当識 ",
      // // ユーザ名
      userName: this.$session.get("UserName") || "",
      // // 能力名
      abilityName: "見当識",
      // // 等級
      star_0: 0,
      star_1: 0,
      // 年、月、週 カレントアクティブ
      activeObj: {
        isActiveY: true,
        isActiveM: false,
        isActiveW: false,
      },
      activeTabObj: {
        isTab1: true,
      },
    };
  },
  methods: {
    // eslint-disable-next-line
    tabclickHand: function(index) {
      let that = this;
      this.activeTabObj.isTab1 = true;
      this.$nextTick().then(function() {
        that.showData = that.dataObj.Flashlight;
        that.task_name =
          that.dataObj.Flashlight.cardPazulData.task_name || "見当識 ";
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
.tabaAtive {
  background: #eee;
  color: black;
}
</style>
