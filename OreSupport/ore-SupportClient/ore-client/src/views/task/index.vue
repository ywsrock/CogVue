<template>
  <div id="Top">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      />
      <title>測定結果</title>
    </head>
    <body class="orig-row">
      <div class="page-wrapper">
        <div id="header" class="header"></div>
        <div class="main">
          <div class="main-inner" style="padding: 0px !important;">
            <div class="content">
              <div class="container">
                <div class="row">
                  <div class="col-lg-9">
                    <headerNav />
                    <v-card>
                      <v-tabs
                        background-color="deep-purple basil accent-3 accent-4"
                        center-active
                        dark
                      >
                        <template v-for="category in categories">
                          <v-tooltip top :key="category.itemName">
                            <template v-slot:activator="{ on, attrs }">
                              <v-tab
                                class="text-h5 font-weight-black"
                                :key="category.index"
                                v-bind="attrs"
                                v-on="on"
                                @click="activeSecondTabClick(category.index)"
                                ><v-icon color="darken-2"
                                  >{{ category.icon }} </v-icon
                                >{{ category.itemName }}</v-tab
                              >
                            </template>
                            <span>{{ category.describe }}</span>
                          </v-tooltip>
                        </template>
                      </v-tabs>
                    </v-card>
                    <!--機能測定結果表示-->
                    <component :is="currentAbility" :key="currentAbilityKey" />
                  </div>

                  <!-- サイドメニュー -->
                  <div class="col-lg-3">
                    <SideMenu />
                  </div>
                </div>
                <!-- /.container -->
              </div>

              <!-- フッター -->
            </div>
            <!-- /.content -->
          </div>
          <!-- /.main-inner -->
        </div>
        <!-- /.main -->
      </div>
      <!-- /.page-wrapper -->
    </body>
  </div>
</template>

<script>
import headerNav from "./DashboardHeader";
import Summary from "./admin/Summary";
import MemoryAbility from "./admin/MemoryAbility";
import SpatialAbility from "./admin/SpatialAbility";
import ActionCalendarDetail from "./admin/ActionCalendarDetail";
import ActionCalendarManage from "./admin/ActionCalendarManage";
import OrientationAbility from "./admin/OrientationAbility";
import PlanAblity from "./admin/PlanAblity";
import AttentionAbility from "./admin/AttentionAbility";
import DashboardHeader from "./DashboardHeader";
import DashboardSideMenu from "./DashboardSideMenu";
import SideMenu from "./sideMenu";
export default {
  components: {
    headerNav,
    Summary, // サマリー
    MemoryAbility, // 記憶力
    SpatialAbility, // 空間
    OrientationAbility,
    PlanAblity,
    AttentionAbility,
    DashboardHeader,
    DashboardSideMenu,
    ActionCalendarDetail,
    ActionCalendarManage,
    SideMenu,
  },
  data: () => ({
    activeTab: 1,
    activeSecondTab: 1,
    currentAbility: 1,
    currentAbilityKey: 1,
    components: {
      "user-tab-1": "Summary",
      "user-tab-2": "MemoryAbility",
      "user-tab-3": "SpatialAbility",
      "user-tab-4": "OrientationAbility",
      "user-tab-5": "PlanAblity",
      "user-tab-6": "AttentionAbility",
      "settings-tab-1": "ActionCalendarDetail",
      "settings-tab-2": "ActionCalendarManage",
    },

    categories: {
      Summary: {
        index: 1,
        itemName: "サマリー",
        describe: "現在の総合情報",
        icon: "mdi-karate",
      },
      MemoryAbility: {
        index: 2,
        itemName: "記憶力",
        describe: "現在の記憶力",
        icon: "mdi-brain",
      },
      SpatialAbility: {
        index: 3,
        itemName: "空間認識力",
        describe: "現在の空間認識力情報把握",
        icon: "mdi-vector-combine",
      },
      OrientationAbility: {
        index: 4,
        itemName: "見当識",
        describe: "現在の見当識",
        icon: "mdi-head-cog-outline",
      },
      PlanAblity: {
        index: 5,
        itemName: "計画力",
        describe: "現在の計画力",
        icon: "mdi-notebook-outline",
      },
      AttentionAbility: {
        index: 6,
        itemName: "注意力",
        describe: "現在の注意力",
        icon: "mdi-charity",
      },
    },
  }),
  watch: {
    activeTab: {
      handler: function(newValue, oldValue) {
        if (newValue != oldValue) {
          this.activeSecondTabClick(1);
        }
      },
      deep: false,
      immediate: true,
    },
  },
  methods: {
    //アクティブ
    // eslint-disable-next-line
    activeTabClick: function(activeTab, activeSecondTab, e) {
      this.$nextTick(function() {
        //タブ
        this.activeTab = activeTab;
        //サブタブ
        this.activeSecondTab = activeSecondTab;
        // this.$router.push("asdfasd");
      });
    },
    //アクティブサブタブ
    activeSecondTabClick: function(activeSecondTab) {
      //サブタブ
      this.activeTab = 1;
      this.activeSecondTab = activeSecondTab;
      this.currentAbilityKey = this.components[`user-tab-${activeSecondTab}`];
      this.currentAbility = this.components[`user-tab-${activeSecondTab}`];
    },
  },
};
</script>

<style>
.modal-background {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  display: block;
  overflow-y: auto;
}
/* 外枠に設定する class */
.img_outer {
  position: relative;
  margin: 1em 0;
  height: 300px;
}

/* 画像に対して指定する class */
.inner_photo {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  height: auto;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
}

.statusbox h2 {
  color: black !important;
  font-size: 18px !important;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.information-border {
  padding: 5px 20px;
  border: 1px solid #de0000;
}

.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card.on-hover {
  opacity: 0.8;
}
</style>
