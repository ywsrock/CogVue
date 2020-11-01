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
                        style=" display: inline-block;width:200px"
                        >ルート99 【{{ abilityName }}】</span
                      >
                      <div class="detail-banner-rating">
                        <i class="detail-verified" style="float:left"
                          >{{ star_0 }}級</i
                        >
                        <el-rate v-model="star_0" disabled text-color="#ff9900">
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
                        >ステップ 【{{ abilityName }}】</span
                      >
                      <div class="detail-banner-rating">
                        <i class="detail-verified" style="float:left"
                          >{{ star_1 }}級</i
                        >
                        <el-rate v-model="star_1" disabled text-color="#ff9900">
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
                        >ナンバーステップ 【{{ abilityName }}】</span
                      >
                      <div class="detail-banner-rating">
                        <i class="detail-verified" style="float:left"
                          >{{ star_2 }}級</i
                        >
                        <el-rate v-model="star_2" disabled text-color="#ff9900">
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
  name: "PlanAbility",
  components: {
    CommonAbility,
  },
  mounted() {
    if (this.$session.has(CGEV_SESSION_KEY.TASK_ID_8910)) {
      let sessionDataObj = this.$session.get(CGEV_SESSION_KEY.TASK_ID_8910);
      this.dataObj = Object.assign(this.dataObj, sessionDataObj);
      this.task_name = this.dataObj.Flashlight.cardPazulData.task_name;
      this.star_0 = this.dataObj.Flashlight.cardPazulData.star;
      this.star_1 = this.dataObj.CardMemory.cardPazulData.star;
      this.star_2 = this.dataObj.Story.cardPazulData.star;
      this.showData = Object.assign({}, this.showData, this.dataObj.Flashlight);
      //ロード完了
      this.loadFlg = false;
    } else {
      this.$nextTick(async () => {
        await this.$store.dispatch("cgev/authenticate");
        Promise.all([
          await this.$store.dispatch("cgev/recordsTasksIdSummary", {
            task_id: 8,
          }),
          await this.$store.dispatch("cgev/recordsTasksIdSummary", {
            task_id: 9,
          }),
          await this.$store.dispatch("cgev/recordsTasksIdSummary", {
            task_id: 10,
          }),
          /* eslint-disable */
        ])
          .then(([FlashlightData, CardMemoryData, StoryData]) => {
            if (Object.keys(FlashlightData).length === 0) {
              throw new Error();
            }
            this.dataObj = Object.assign(
              this.dataObj,
              {
                Flashlight: { cardPazulData: FlashlightData },
              },
              {
                CardMemory: { cardPazulData: CardMemoryData },
              },
              {
                Story: { cardPazulData: StoryData },
              }
            );
            this.$session.set(CGEV_SESSION_KEY.TASK_ID_8910, this.dataObj);
            // console.log(JSON.stringify(this.dataObj, null, "\t"));

            this.task_name = this.dataObj.Flashlight.cardPazulData.task_name;
            this.star_0 = this.dataObj.Flashlight.cardPazulData.star;
            this.star_1 = this.dataObj.CardMemory.cardPazulData.star;
            this.star_2 = this.dataObj.Story.cardPazulData.star;
            this.showData = Object.assign(
              {},
              this.showData,
              this.dataObj.Flashlight
            );
            //ロード完了
            this.loadFlg = false;
          })
          .catch((error) => {
            if (this.$session.has(CGEV_SESSION_KEY.TASK_ID_8910)) {
              this.$session.remove(CGEV_SESSION_KEY.TASK_ID_8910);
            }
            // 失敗の場合、初期設定
            this.dataObj = Object.assign({}, this.dataObj, TaskData);
            this.task_name = this.dataObj.Flashlight.cardPazulData.task_name;
            this.star_0 = this.dataObj.Flashlight.cardPazulData.star;
            this.star_1 = this.dataObj.CardMemory.cardPazulData.star;
            this.star_2 = this.dataObj.Story.cardPazulData.star;
            this.showData = Object.assign(
              {},
              this.showData,
              this.dataObj.Flashlight
            );
          });
      });
    }
    // this.$http.get("/api/personal/CogEvo/PlanAbility").then(
    //   (res) => {
    //     this.dataObj = Object.assign({}, this.dataObj, res.data.PlanAbility);
    //     this.task_name = this.dataObj.Flashlight.task_name;
    //     this.star_0 = this.dataObj.Flashlight.cardPazulData.current_star_0
    //     this.star_0 = this.dataObj.CardMemory.cardPazulData.current_star_0
    //     this.star_0 = this.dataObj.Story.cardPazulData.current_star_0
    //     this.showData = Object.assign(
    //       {},
    //       this.showData,
    //       this.dataObj.Flashlight
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
      // // チャートtask_name
      task_name: "ルート99 ",
      // // ユーザ名
      userName: this.$session.get("UserName") || "",
      // // 能力名
      abilityName: "計画力",
      // // 等級
      star_0: 5,
      star_1: 3.5,
      star_2: 4,
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
          this.task_name =
            this.dataObj.CardMemory.task_name || "ナンバーステップ";
          break;
        case 3:
          this.activeTabObj.isTab1 = false;
          this.activeTabObj.isTab2 = false;
          this.activeTabObj.isTab3 = true;
          this.$nextTick().then(function() {
            that.showData = that.dataObj.Story;
          });

          this.task_name = this.dataObj.Story.task_name || "ステップ ";
          break;
        default:
          this.activeTabObj.isTab1 = true;
          this.activeTabObj.isTab2 = false;
          this.activeTabObj.isTab3 = false;
          this.$nextTick().then(function() {
            that.showData = that.dataObj.Flashlight;
          });
          this.task_name = this.dataObj.Flashlight.task_name || "ルート99 ";
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
</style>
