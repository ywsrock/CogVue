<template>
  <div class="tab-container">
    <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">
      <el-tab-pane
        v-for="item in tabMapOptions"
        :key="item.key"
        :label="item.label"
        :name="item.key"
      >
        <keep-alive>
          <tab-pane
            v-if="activeName == item.key"
            :type="item.key"
            @create="showCreatedTimes"
          />
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TabPane from "./components/TabPane";

export default {
  name: "Tab",
  components: { TabPane },
  data() {
    return {
      tabMapOptions: [
        { label: "3月", key: "3" },
        { label: "6月", key: "6" },
        { label: "9月", key: "9" },
        { label: "12月", key: "12" },
      ],
      activeName: "3",
      createdTimes: 0,
    };
  },
  watch: {
    activeName(val) {
      this.$router.push(`${this.$route.path}?tab=${val}`);
    },
  },
  created() {
    this.$router.push(`${this.$route.path}?tab=1`);
    const tab = this.$route.query.tab;
    if (tab) {
      this.activeName = tab;
    }
  },
  methods: {
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1;
    },
  },
};
</script>

<style scoped>
.tab-container {
  margin: 30px;
}
</style>
