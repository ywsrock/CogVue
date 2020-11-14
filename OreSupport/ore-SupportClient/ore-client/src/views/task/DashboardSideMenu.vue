<template>
  <div class="dashboard-container">
    <!-- <div class="orig-sidebar-admin col-sm-12">
      <ul>
        <li :class="{ active: activeTab === 'user-tab' }">
          <a href="#" @click.prevent="activeTabClick('user-tab', 1)">
            <i class="fa fa-user"></i>
          </a>
        </li>
        <li :class="{ active: activeTab === 'statistics-tab' }">
          <a href="#" @click.prevent="activeTabClick('statistics-tab', 1)">
            <i class="fa fa-users"></i>
          </a>
        </li>
        <li :class="{ active: activeTab === 'help-tab' }">
          <a href="#" @click.prevent="activeTabClick('help-tab', 1)">
            <i class="fa fa-info-circle"></i>
          </a>
        </li>
        <li :class="{ active: activeTab === 'settings-tab' }">
          <a href="#" @click.prevent="activeTabClick('settings-tab', 1)">
            <i class="fa fa-cog"></i>
          </a>
        </li>
      </ul>
    </div>
    /.sidebar-admin -->

    <div class="orig-sidebar-secondary-admin col-sm-12">
      <ul v-if="activeTab === 'user-tab'">
        <li :class="{ active: activeSecondTab === 1 }">
          <a href="#" @click.prevent="activeSecondTabClick(1)">
            <span class="icon">
              <i class="fa fa-tachometer"></i>
            </span>
            <span class="title">サマリー</span>
            <span class="subtitle">現在の総合級</span>
          </a>
        </li>

        <li :class="{ active: activeSecondTab === 2 }">
          <a href="#" @click.prevent="activeSecondTabClick(2)">
            <span class="icon">
              <i class="fa fa-tachometer"></i>
            </span>
            <span class="title">記憶力</span>
            <span class="subtitle">現在の記憶力の級</span>
          </a>
        </li>

        <li :class="{ active: activeSecondTab === 3 }">
          <a href="#" @click.prevent="activeSecondTabClick(3)">
            <span class="icon">
              <i class="fa fa-tachometer"></i>
            </span>
            <span class="title">空間把握力</span>
            <span class="subtitle">現在の空間把握力の級</span>
          </a>
        </li>

        <li :class="{ active: activeSecondTab === 4 }">
          <a href="#" @click.prevent="activeSecondTabClick(4)">
            <span class="icon">
              <i class="fa fa-tachometer"></i>
            </span>
            <span class="title">見当識</span>
            <span class="subtitle">現在の見当識力の級</span>
          </a>
        </li>

        <li :class="{ active: activeSecondTab === 5 }">
          <a href="#" @click.prevent="activeSecondTabClick(5)">
            <span class="icon">
              <i class="fa fa-tachometer"></i>
            </span>
            <span class="title">計画力</span>
            <span class="subtitle">現在の計画力の級</span>
          </a>
        </li>

        <li :class="{ active: activeSecondTab === 6 }">
          <a href="#" @click.prevent="activeSecondTabClick(6)">
            <span class="icon">
              <i class="fa fa-tachometer"></i>
            </span>
            <span class="title">注意力</span>
            <span class="subtitle">現在の注意力の級</span>
          </a>
        </li>
      </ul>

      
    </div>
    <!-- /.sidebar-secondary-admin -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "user-tab",
      activeSecondTab: 1,
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
    };
  },
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
      this.activeSecondTab = activeSecondTab;
      switch (this.activeTab) {
        case "user-tab":
          this.$parent.key = this.components[`user-tab-${activeSecondTab}`];
          this.$parent.currentAbility = this.components[
            `user-tab-${activeSecondTab}`
          ];
          break;
        case "statistics-tab":
          break;
        case "help-tab":
          break;
        case "settings-tab":
          this.$parent.key = this.components[`settings-tab-${activeSecondTab}`];
          this.$parent.currentAbility = this.components[
            `settings-tab-${activeSecondTab}`
          ];
          break;
        default:
          this.activeTab = "user-tab";
          this.activeSecondTab = 1;
          this.$parent.key = this.components[`user-tab-${activeSecondTab}`];
          this.$parent.currentAbility = this.components[
            `user-tab-${activeSecondTab}`
          ];
      }

      // alert(activeSecondTab);
    },
  },
};
</script>

<style>
.reset_style:after {
  color: initial !important;
  content: initial !important;
  display: initial !important;
  font-family: initial !important;
  font-size: initial !important;
  position: initial !important;
  right: initial !important;
  transform: initial !important;
  top: initial !important;
}
.search-tab-menu {
  /* color: #fff;
    display: block; */
  height: 380px !important;
  padding: 18px 20px 200px 20px !important;
  /* transition: all .15s linear; */
}

.select-box {
  margin-top: 20px;
  background-color: #cccccc;
  border: 2px solid #cccccc;
  margin-top: 20px;
}

.search-button {
  margin-top: 20px;
  margin-left: 140px;
  background-color: #cccccc;
  color: black;
}
</style>
