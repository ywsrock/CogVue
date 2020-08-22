<template>
  <div class="container-fluid h-100">
    <div class="page-wrapper">
      <div class="main">
        <DashboardHeader className="sidebar-container" />
        <div class="row h-100">
          <div class="col-sm-3" id="sidebar">
            <div class="navestylemenublock sticky-top">
              <DashboardSideMenu ref="child" />
            </div>
          </div>
          <main class="col-sm-9 py-2" id="printable">
            <component :is="currentAbility" :key="key" />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import Summary from "./admin/Summary";
import MemoryAbility from "./admin/MemoryAbility";
import SpatialAbility from "./admin/SpatialAbility";
import OrientationAbility from "./admin/OrientationAbility";
import PlanAblity from "./admin/PlanAblity";
import AttentionAbility from "./admin/AttentionAbility";
import DashboardHeader from "./DashboardHeader";
import DashboardSideMenu from "./DashboardSideMenu";

export default {
  name: "Dashboard",
  components: {
    Summary, // サマリー
    MemoryAbility, // 記憶力
    SpatialAbility, // 空間
    OrientationAbility,
    PlanAblity,
    AttentionAbility,
    DashboardHeader,
    DashboardSideMenu,
  },
  data() {
    return {
      currentAbility: "Summary",
      key: "Summary",
      activeTab: "user-tab",
      activeSecondTab: 1,
      routeKey: this.$route.path,
    };
  },
  computed: {
    // ...mapGetters([
    //   'roles'
    // ])
  },
  // created() {
  //   if (!this.roles.includes('admin')) {
  //     this.currentAbility = 'editorDashboard'
  //   }
  // }
};
</script>
