<template>
  <el-table
    :data="list"
    style="width: 100%;padding-top: 10px;"
    max-height="450px"
    height="450"
  >
    <el-table-column label="利用日" align="center" width="100px">
      <template slot-scope="scope">
        {{ scope.row.UseDate }}
      </template>
    </el-table-column>
    <el-table-column label="見当識" align="center">
      <template slot-scope="scope">
        {{ scope.row.Orientation }}
      </template>
    </el-table-column>
    <el-table-column label="視覚探索" align="center">
      <template slot-scope="scope">
        {{ scope.row.VisualSearch }}
      </template>
    </el-table-column>
    <el-table-column label="双子探し" align="center">
      <template slot-scope="scope">
        {{ scope.row.TwinsSearch }}
      </template>
    </el-table-column>
    <el-table-column label="ストップウォッチ" align="center">
      <template slot-scope="scope">
        {{ scope.row.StopWatch }}
      </template>
    </el-table-column>
    <el-table-column label="フラッシュライト" align="center">
      <template slot-scope="scope">
        {{ scope.row.Flashlight }}
      </template>
    </el-table-column>
    <el-table-column label="カード記憶" align="center" width="90px">
      <template slot-scope="scope">
        {{ scope.row.CardMemory }}
      </template>
    </el-table-column>
    <el-table-column label="ストーリー" align="center" width="90px">
      <template slot-scope="scope">
        {{ scope.row.Story }}
      </template>
    </el-table-column>
    <el-table-column label="ルート99" align="center">
      <template slot-scope="scope">
        {{ scope.row.Route99 }}
      </template>
    </el-table-column>
    <el-table-column label="ステップ" align="center">
      <template slot-scope="scope">
        {{ scope.row.Step }}
      </template>
    </el-table-column>
    <el-table-column label="ナンバーステップ" align="center">
      <template slot-scope="scope">
        {{ scope.row.NumberStep }}
      </template>
    </el-table-column>
    <el-table-column label="ジャストフィット" align="center">
      <template slot-scope="scope">
        {{ scope.row.JustFit }}
      </template>
    </el-table-column>
    <el-table-column label="さめがめ" align="center">
      <template slot-scope="scope">
        {{ scope.row.Turtle }}
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
