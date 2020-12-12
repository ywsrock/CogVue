<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import resize from "./mixins/resize";

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
      this.$http.get("/api/personal/CogEvo/pieChart").then(
        (res) => {
          this.chartDate = res.data.pieChartData;
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
        title: {
          text: "ユーザ全体の利用割合",
          subtext: "年齢層",
          left: "center",
          textStyle: {
            color: "#212121",
            fontWeight: "bold",
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          left: "center",
          bottom: "10",
          data: ["20", "30", "40", "50", "60", "70", "80", "90"],
        },
        series: [
          {
            name: "ユーザ全体の利用割合",
            type: "pie",
            // label: {
            //   normal: {
            //     formatter: "{c}",
            //     position: "inside",
            //   },
            // },
            roseType: "radius",
            // radius: [15, 95],
            radius: "50%",
            data: this.chartDate,
            animationEasing: "cubicInOut",
            animationDuration: 2600,
          },
        ],
      });
    },
  },
};
</script>
