<template>
  <div>
    <h1>
      空間認識力
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
    <div class="chart-container">
      <LineMarker height="50%" width="100%" />
    </div>
  </div>
</template>

<script>
import LineMarker from "./components/LineMarker";
export default {
  name: "SpatialAbility",
  components: { LineMarker },
  created() {
    this.$router.push(`${this.$route.path}`);
  },
  data() {
    return {
      value: 4,
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
