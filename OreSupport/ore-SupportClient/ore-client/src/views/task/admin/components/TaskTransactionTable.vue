<template>
  <el-table
    :data="list"
    style="width: 100%;padding-top: 10px;"
    max-height="450px"
    height="450"
  >
    <el-table-column label="トレーニング日" align="center">
      <template slot-scope="scope">
        {{ scope.row.created_at }}
      </template>
    </el-table-column>
    <el-table-column label="時間" align="center">
      <template slot-scope="scope">
        {{ scope.row.playtime }}
      </template>
    </el-table-column>
    <el-table-column label="得点" align="center">
      <template slot-scope="scope">
        {{ scope.row.score }}
      </template>
    </el-table-column>
    <el-table-column label="指数" align="center">
      <template slot-scope="scope">
        {{ scope.row.performance }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: "success",
        pending: "danger",
      };
      return statusMap[status];
    },
  },
  props: {
    chartData: {
      type: Array,
      required: true,
    },
  },
  watch: {
    chartData: {
      deep: true,
      immediate: true,
      handler(val) {
        this.list = val;
      },
    },
  },
  data() {
    return {
      list: null,
      item: [],
    };
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.$http.get("/api/personal/CogEvo/transactionTable").then(
    //     (res) => {
    //       this.item = res.data.transactionTableChartData;
    //       this.list = res.data.transactionTableChartData;
    //       console.log("---" & this.item);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    // });
  },
  // created() {
  //   this.fetchData();
  // },
  methods: {
    indexMethod(index) {
      return index + 1;
    },
  },
};
</script>
