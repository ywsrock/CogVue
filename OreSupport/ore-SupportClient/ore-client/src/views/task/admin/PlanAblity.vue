<template>
  <div>
    <h1>
      計画力
    </h1>
    <el-tag type="success">評価点数</el-tag>
    <span>
      <el-rate
        v-model="value"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value}"
      >
      </el-rate>
    </span>
    <div class="chart-container">
      <chart height="50%" width="100%" />
    </div>
  </div>
</template>

<script>
import Chart from "./components/MixChart";
export default {
  name: "PlanAbility",
  components: { Chart },
  created() {
    this.$router.push(`${this.$route.path}`);
  },
  data() {
    return {
      value: 2,
    };
  },
};
</script>
<style scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>
