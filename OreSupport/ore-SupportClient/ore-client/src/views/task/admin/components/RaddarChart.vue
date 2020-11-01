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
    indicatorParams: {
      type: Array,
      default: () => {
        return [
          { name: "計画力", max: 150 },
          { name: "記憶力", max: 150 },
          { name: "注意力", max: 150 },
          { name: "見当識", max: 150 },
          { name: "空間認識力", max: 150 },
          // { name: "その他", max: 150 },
        ];
      },
    },
    chartDateParams: {
      type: Array,
      // default: () => [0, 0, 0, 0, 0],
      default: () => [],
    },
  },
  watch: {
    chartDateParams: {
      handler: function(newValue, oldValue) {
        if (oldValue != newValue) {
          this.chartDate = newValue;
          this.initChart();
        }
      },
      deep: true,
      immediate: false,
    },
  },
  data() {
    return {
      chart: null,
      chartDate: this.chartDateParams,
      chartLabels: this.indicatorParams,
    };
  },
  mounted() {
    this.initChart();
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
          // trigger: "axis",
          axisPointer: {
            type: "shadow", // 'line' | 'shadow'
          },
        },
        //  tooltip: {},
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
          indicator: this.chartLabels,
          name: {
            // // formatter: "{value}",
            // formatter: function(name) {
            //   // return name + "\n" + "現在" + "\n" + "3カ月前";
            //   return [name, "{a|現在:}", "{b|3カ月前:}"].join("\n");
            // },
            // rich: {
            //   a: {
            //     color: "red",
            //     lineHeight: 14,
            //   },
            //   b: {
            //     color: "red",
            //     lineHeight: 14,
            //   },
            // },
            // textStyle: {
            //   // color: "#72ACD1",
            // },
          },
          axisLabel: {
            show: false,
            rotate: 1,
            color: "rgba(15, 16, 15, 1)",
          },
        },
        legend: {
          left: "center",
          bottom: "10",
          data: ["現在", "3ヶ月前"],
        },
        series: [
          {
            type: "radar",
            symbolSize: 5,
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
