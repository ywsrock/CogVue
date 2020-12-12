<template>
  <div
    class="overflow-auto"
    :class="className"
    :style="{ height: height, width: width }"
  />
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
    width: {
      type: String,
      default: "100%",
    },
    dateFmt: {
      type: String,
      default: "yyyy/mm",
    },
    height: {
      type: String,
      default: "350px",
    },
    autoResize: {
      type: Boolean,
      default: true,
    },
    chartData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      chart: null,
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
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");
      this.setOptions(this.chartData);
    },
    setOptions({
      OrientationAbility,
      AttentionAbility,
      MemoryAbility,
      PlanAblity,
      SpatialAbility,
    } = {}) {
      var that = this;
      this.chart.setOption({
        xAxis: {
          data: [
            "2020/01/01",
            "2021/01/02",
            "2022/01/03",
            "2023/01/04",
            "2024/01/05",
            "2025/01/06",
            "2026/01/07",
          ],
          boundaryGap: false,
          axisTick: {
            show: true,
          },
          axisLabel: {
            interval: 0,
            formatter: function(value) {
              return dateFormat(value, that.dateFmt);
            },
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
          data: ["見当識", "注意力", "記憶力", "計画力", "空間認識力"],
        },
        series: [
          {
            name: "見当識",
            itemStyle: {
              normal: {
                color: "#FF005A",
                lineStyle: {
                  color: "#FF005A",
                  width: 2,
                },
              },
            },
            smooth: true,
            type: "line",
            data: OrientationAbility,
            animationDuration: 2800,
            animationEasing: "cubicInOut",
          },
          {
            name: "注意力",
            smooth: true,
            type: "line",
            itemStyle: {
              normal: {
                color: "#3888fa",
                lineStyle: {
                  color: "#3888fa",
                  width: 2,
                },
                areaStyle: {
                  color: "#f3f8ff",
                },
              },
            },
            data: AttentionAbility,
            animationDuration: 2800,
            animationEasing: "quadraticOut",
          },
          {
            name: "記憶力",
            smooth: true,
            type: "line",
            itemStyle: {
              normal: {
                color: "#4b565b",
                lineStyle: {
                  color: "#4b565b",
                  width: 2,
                },
                areaStyle: {
                  color: "#f1f8ff",
                },
              },
            },
            data: MemoryAbility,
            animationDuration: 2800,
            animationEasing: "quadraticOut",
          },
          {
            name: "計画力",
            smooth: true,
            type: "line",
            itemStyle: {
              normal: {
                color: "#05f525",
                lineStyle: {
                  color: "#05f525",
                  width: 2,
                },
                areaStyle: {
                  color: "#f1f8ff",
                },
              },
            },
            data: PlanAblity,
            animationDuration: 2800,
            animationEasing: "quadraticOut",
          },
          {
            name: "空間認識力",
            smooth: true,
            type: "line",
            itemStyle: {
              normal: {
                color: "#f505cd",
                lineStyle: {
                  color: "#f505cd",
                  width: 2,
                },
                areaStyle: {
                  color: "#f1f8ff",
                },
              },
            },
            data: SpatialAbility,
            animationDuration: 2800,
            animationEasing: "quadraticOut",
          },
        ],
      });
    },
  },
};
</script>
