<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
    <el-table-column label="No." min-width="50">
      <template slot-scope="scope">
        {{ scope.row.No }}
      </template>
    </el-table-column>
    <el-table-column label="能力" width="200" align="center">
      <template slot-scope="scope">
        {{ scope.row.ability }}
      </template>
    </el-table-column>
    <el-table-column label="能力1" width="200" align="center">
      <template slot-scope="scope">
        {{ scope.row.ability }}
      </template>
    </el-table-column>
    <el-table-column label="状態" width="200" align="center">
      <template slot-scope="{ row }">
        <el-tag :type="row.status">
          {{ row.status }}
        </el-tag>
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
    // orderNoFilter(str) {
    //   return str.substring(0, 30);
    // },
  },
  data() {
    return {
      list: null,
      item: [],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$http.get("/api/personal/CogEvo/transactionTable").then(
        (res) => {
          this.item = res.data.transactionTableChartData;
          this.list = this.item.slice(0, 8);
          console.log("---" & this.item);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  },
  // created() {
  //   this.fetchData();
  // },
  methods: {
    // fetchData() {
    //   this.list = this.items.slice(0, 8);
    // },
  },
};
</script>
