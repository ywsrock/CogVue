<template>
  <div>
    <h1>
      記憶力
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
    </h1>
    <tab />
    <div class="chart-container">
      <line-chart :chart-data="lineChartData" height="50%" width="100%" />
    </div>
  </div>
</template>

<script>
import tab from "./tab/index";
// import LineChart from "./components/LineChart";
import LineChart from "./components/LineMarker";
const lineChartData = {
  newVisitis: {
    week: [100, 120, 161, 134, 105, 160, 165],
    month: [120, 82, 91, 154, 162, 140, 145],
    year: [10, 812, 51, 514, 62, 40, 45],
  },
  messages: {
    week: [200, 192, 120, 144, 160, 130, 140],
    month: [180, 160, 121, 106, 145, 150, 130],
    year: [10, 812, 51, 514, 62, 40, 45],
  },
  purchases: {
    week: [80, 100, 121, 104, 105, 90, 100],
    month: [120, 90, 100, 138, 142, 130, 130],
    year: [10, 812, 51, 514, 62, 40, 45],
  },
  shoppings: {
    week: [130, 140, 141, 142, 145, 150, 160],
    month: [120, 82, 91, 154, 162, 140, 130],
    year: [10, 812, 51, 514, 62, 40, 45],
  },
};
export default {
  name: "MemoryAbility",
  components: {
    tab,
    LineChart,
  },
  data() {
    return {
      value: 5,
      lineChartData: lineChartData.newVisitis,
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
