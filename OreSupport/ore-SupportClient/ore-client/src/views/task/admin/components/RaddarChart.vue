<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import resize from "./mixins/resize";

const animationDuration = 3000;

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
      this.$http.get("/api/personal/CogEvo/raddarChart").then(
        (res) => {
          this.chartDate = res.data.raddarChartData;
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
            type: "shadow", // 'line' | 'shadow'
          },
        },
        radar: {
          radius: "66%",
          center: ["50%", "42%"],
          splitNumber: 8,
          splitArea: {
            areaStyle: {
              color: "rgba(127,95,132,.3)",
              opacity: 1,
              shadowBlur: 45,
              shadowColor: "rgba(0,0,0,.5)",
              shadowOffsetX: 0,
              shadowOffsetY: 15,
            },
          },
          indicator: [
            { name: "記憶力", max: 10000 },
            { name: "区間把握力", max: 20000 },
            { name: "見当識", max: 20000 },
            { name: "計画力", max: 20000 },
            { name: "注意力", max: 20000 },
            { name: "その他", max: 20000 },
          ],
        },
        legend: {
          left: "center",
          bottom: "10",
          data: ["現在", "3ヶ月前" /* '6ヶ月前' */],
        },
        series: [
          {
            type: "radar",
            symbolSize: 0,
            areaStyle: {
              normal: {
                shadowBlur: 13,
                shadowColor: "rgba(0,0,0,.2)",
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                opacity: 1,
              },
            },
            data: this.chartDate,
            animationDuration: animationDuration,
          },
        ],
      });
    },
  },
};
</script>
