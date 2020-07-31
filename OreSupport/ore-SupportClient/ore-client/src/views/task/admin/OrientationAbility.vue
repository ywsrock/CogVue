<template>
  <div>
    <h1>
      見当識力
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
      <!--<tab />-->
      能力推移
      <KeyboardChart height="50%" width="100%" />
    </div>
  </div>
</template>

<script>
import tab from "./tab/index";
import KeyboardChart from "./components/Keyboard";
export default {
  name: "OrientationAbility",
  components: {
    KeyboardChart,
    tab,
  },
  created() {
    this.$router.push(`${this.$route.path}`);
  },
  data() {
    return {
      value: 3,
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
