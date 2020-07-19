<template>
  <div class="page-wrapper">
    <DashboardHeader />
    <div class="main">
      <div class="outer-admin">
        <div class="wrapper-admin">
          <DashboardSideMenu />
          <div class="content-admin" id="printable">
            <div class="content-admin-wrapper">
              <div class="content-admin-main">
                <div class="content-admin-main-inner">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="row">
                          <div class="col-sm-12">
                            <span>ユーザーサマリー</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "./DashboardHeader";
import DashboardSideMenu from "./DashboardSideMenu";

export default {
  data() {
    return {
      activeTab: "user-tab",
      activeSecondTab: 1,
      routeKey: this.$route.path
    };
  },
  components: {
    DashboardHeader,
    DashboardSideMenu
  }
};
</script>
