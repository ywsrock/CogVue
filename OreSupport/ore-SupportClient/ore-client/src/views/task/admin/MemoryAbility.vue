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
                        >フラッシュライト 【{{ abilityName }}】</span
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
                      class="detail-banner-btn heart "
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
                          >{{ star_1 }}級</i
                        >
                        <el-rate v-model="star_1" disabled text-color="#ff9900">
                        </el-rate>
                      </div>
                    </div>
                    <div
                      class="detail-banner-btn heart "
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

      <FooterCommon></FooterCommon>
      <!-- /.footer -->
    </div>
    <!-- /.page-wrapper -->
  </div>
</template>

<script>
import CommonAbility from "./components/CommonAbility";
import { TaskData } from "@/store/cgevModel/task";
import { CGEV_SESSION_KEY } from "@/utils/const";
import FooterCommon from "./components/FooterCommon";

export default {
  name: "MemoryAbility",
  components: {
    CommonAbility,
    FooterCommon,
  },
  mounted() {
    //記憶力APIデータ取得
    this.getMemoryData();
    // this.$http.get("/api/personal/CogEvo/memoryAbility").then(
    //   (res) => {
    //     this.dataObj = Object.assign({}, this.dataObj, res.data.MemoryAbility);
    //     this.task_name = this.dataObj.Flashlight.cardPazulData.task_name;
    //     this.star_0 = this.dataObj.Flashlight.cardPazulData.star;
    //     this.star_1 = this.dataObj.CardMemory.cardPazulData.star;
    //     this.star_2 = this.dataObj.Story.cardPazulData.star;
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
      // // チャー.task_name
      task_name: "フラッシュライト ",
      // // ユーザ名
      userName: this.$session.get("UserName") || "",
      // // 能力名
      abilityName: "記憶力",
      // // 等級
      star_0: 0,
      star_1: 0,
      star_2: 0,
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
    //機能クリック
    tabclickHand: function(index) {
      let that = this;
      switch (index) {
        case 2:
          this.activeTabObj.isTab1 = false;
          this.activeTabObj.isTab2 = true;
          this.activeTabObj.isTab3 = false;
          this.$nextTick().then(function() {
            that.showData = that.dataObj.CardMemory;
            that.task_name =
              that.dataObj.CardMemory.cardPazulData.task_name || "カード記憶 ";
          });
          break;
        case 3:
          this.activeTabObj.isTab1 = false;
          this.activeTabObj.isTab2 = false;
          this.activeTabObj.isTab3 = true;
          this.$nextTick().then(function() {
            that.showData = that.dataObj.Story;
            that.task_name =
              that.dataObj.Story.cardPazulData.task_name || "ストーリー ";
          });
          break;
        default:
          this.activeTabObj.isTab1 = true;
          this.activeTabObj.isTab2 = false;
          this.activeTabObj.isTab3 = false;
          this.$nextTick().then(function() {
            that.showData = that.dataObj.Flashlight;
            that.task_name =
              that.dataObj.Flashlight.cardPazulData.task_name ||
              "フラッシュライト";
          });
      }
    },
    //記憶データ取得
    getMemoryData: function() {
      if (this.$session.has(CGEV_SESSION_KEY.TASK_ID_567)) {
        let sessionDataObj = this.$session.get(CGEV_SESSION_KEY.TASK_ID_567);
        this.dataObj = Object.assign(this.dataObj, sessionDataObj);
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
      } else {
        this.$nextTick(async () => {
          await this.$store.dispatch("cgev/authenticate");
          Promise.all([
            await this.$store.dispatch("cgev/recordsTasksIdSummary", {
              task_id: 5,
            }),
            await this.$store.dispatch("cgev/recordsTasksIdSummary", {
              task_id: 6,
            }),
            await this.$store.dispatch("cgev/recordsTasksIdSummary", {
              task_id: 7,
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
              this.$session.set(CGEV_SESSION_KEY.TASK_ID_567, this.dataObj);
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
              //セッションクリア
              this.clearMemorySession();
              // 初期設定
              this.resetMemoryInfo();
            });
        });
      }
    },
    //セッション情報クリア
    clearMemorySession: function() {
      //セッションクリア
      if (this.$session.has(CGEV_SESSION_KEY.TASK_ID_567)) {
        this.$session.remove(CGEV_SESSION_KEY.TASK_ID_567);
      }
    },
    //初期化設定
    resetMemoryInfo: function() {
      // 失敗の場合、初期設定
      this.dataObj = Object.assign({}, this.dataObj, TaskData);
      this.task_name = this.dataObj.Flashlight.cardPazulData.task_name;
      this.star_0 = this.dataObj.Flashlight.cardPazulData.star;
      this.star_1 = this.dataObj.CardMemory.cardPazulData.star;
      this.star_2 = this.dataObj.Story.cardPazulData.star;
      this.showData = Object.assign({}, this.showData, this.dataObj.Flashlight);
    },
    //最新データ取得
    refreshData: function() {
      //画面ロード状態にする
      this.loadFlg = true;
      //セッションクリア
      this.clearMemorySession();
      //画面初期化
      this.resetMemoryInfo();
      //データ取得
      this.getMemoryData();
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
