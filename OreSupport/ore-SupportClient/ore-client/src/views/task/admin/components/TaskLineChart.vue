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
      type: Array,
      required: true,
      default: function() {
        return [""];
      },
    },
  },
  data() {
    return {
      chart: null,
      legendData: this.proplegendData,
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
          data: [
            "2020/01/01",
            "2020/01/02",
            "2020/01/03",
            "2020/01/04",
            "2020/01/05",
            "2020/01/06",
            "2020/01/07",
          ],
          boundaryGap: false,
          axisTick: {
            show: false,
          },
        },
        grid: {
          left: 10,
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
          data: that.legendData,
        },
        series: [
          {
            // name: "フラッシュライト",
            name: that.legendData[0],
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