<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import resize from "./mixins/resize";
import dateFormat from "dateformat";

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart",
    },
    dateFmt: {
      type: String,
      default: "yyyy/mm",
    },
    width: {
      type: String,
      default: "105%",
    },
    height: {
      type: String,
      default: "430px",
    },
    autoResize: {
      type: Boolean,
      default: true,
    },
    chartData: {
      type: Object,
      required: true,
    },
    proplegendData: {
      type: String,
      required: true,
      default: function() {
        return "";
      },
    },
    propxAxisData: {
      type: Array,
      required: false,
      default: function() {
        return [
          "2020/01/01",
          "2021/01/02",
          "2022/01/03",
          "2023/01/04",
          "2024/01/05",
          "2025/01/06",
          "2026/01/07",
        ];
      },
    },
  },
  data() {
    return {
      chart: null,
      legendData: this.proplegendData,
      xAxisData: this.propxAxisData,
    };
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      },
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
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
    randomColor() {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      return "#" + randomColor;
    },

    initChart() {
      this.chart = echarts.init(this.$el, "macarons");
      this.setOptions(this.chartData);
    },
    setOptions({ MemoryAbility } = {}) {
      let that = this;
      this.chart.setOption({
        xAxis: {
          type: "category",
          data: that.xAxisData,
          boundaryGap: false,
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            formatter: function(value) {
              return dateFormat(value, that.dateFmt);
            },
            rotate: 40,
          },
        },
        grid: {
          left: 35,
          // right: 10,
          bottom: 20,
          top: 90,
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
          padding: [5, 10],
        },
        yAxis: {
          axisTick: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              // color: "#57617B",
            },
          },
        },
        legend: {
          // data: ["フラッシュライト"],
          data: [that.legendData],
        },
        series: [
          {
            // name: "フラッシュライト",
            name: that.legendData,
            itemStyle: {
              normal: {
                color: "#FF005A",
                // color: that.randomColor(),
                lineStyle: {
                  color: "#FF005A",
                  // color: that.randomColor(),
                  width: 2,
                },
              },
            },
            smooth: true,
            type: "line",
            data: MemoryAbility,
            animationDuration: 2800,
            animationEasing: "cubicInOut",
          },
        ],
      });
    },
  },
};
</script>
