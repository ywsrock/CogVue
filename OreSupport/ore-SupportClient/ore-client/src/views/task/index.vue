<template>
  <div class="container-fluid h-100">
    <div class="page-wrapper">
      <div class="main">
        <DashboardHeader className="sidebar-container"/>
        <div class="row h-100">
          <div class="col-sm-3" id="sidebar">
            <div class="navestylemenublock sticky-top">
              <DashboardSideMenu />
            </div>
          </div>
          <main class="col-sm-9 py-2" id="printable">
            <component :is="currentRole" />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import adminDashboard from "./admin";
import DashboardHeader from "./DashboardHeader";
import DashboardSideMenu from "./DashboardSideMenu";

export default {
  name: "Dashboard",
  components: {
    adminDashboard,
    DashboardHeader,
    DashboardSideMenu,
  },
  data() {
    return {
      currentRole: "adminDashboard",
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
  //     this.currentRole = 'editorDashboard'
  //   }
  // }
};
</script>
