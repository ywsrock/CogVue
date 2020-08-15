<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import resize from "./mixins/resize";

const animationDuration = 6000;

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "400px",
    },
  },
  data() {
    return {
      chart: null,
      chartDate: [],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$http.get("/api/personal/CogEvo/barChart").then(
        (res) => {
          this.chartDate = res.data.barChartData;
          this.initChart();
        },
        (error) => {
          console.log(error);
        }
      );
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");

      this.chart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          top: 10,
          left: "2%",
          right: "2%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["月", "火", "水", "木", "金", "土", "日"],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "記憶力",
            type: "bar",
            stack: "vistors",
            barWidth: "60%",
            data: this.chartDate[0],
            animationDuration,
          },
          {
            name: "空間力",
            type: "bar",
            stack: "vistors",
            barWidth: "60%",
            data: this.chartDate[1],
            animationDuration,
          },
          {
            name: "注意力",
            type: "bar",
            stack: "vistors",
            barWidth: "60%",
            data: this.chartDate[2],
            animationDuration,
          },
        ],
      });
    },
  },
};
</script>
