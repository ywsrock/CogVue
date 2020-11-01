<template>
  <el-table
    :data="list"
    style="width: 100%;padding-top: 10px;"
    max-height="450px"
    height="450"
    empty-text="トレーニング履歴見つかりません..."
  >
    <el-table-column label="利用日" align="center" width="100%px">
      <template slot-scope="scope">
        {{ scope.row.target_at }}
      </template>
    </el-table-column>
    <el-table-column label="見当識" align="center">
      <template slot-scope="scope">
        {{ scope.row.task_id_1 }}
      </template>
    </el-table-column>
    <el-table-column label="視覚探索" align="center">
      <template slot-scope="scope">
        {{ scope.row.task_id_2 }}
      </template>
    </el-table-column>
    <el-table-column label="双子探し" align="center">
      <template slot-scope="scope">
        {{ scope.row.task_id_3 }}
      </template>
    </el-table-column>
    <el-table-column label="ストップウォッチ" align="center">
      <template slot-scope="scope">
        {{ scope.row.task_id_4 }}
      </template>
    </el-table-column>
    <el-table-column label="フラッシュライト" align="center">
      <template slot-scope="scope">
        {{ scope.row.task_id_5 }}
      </template>
    </el-table-column>
    <el-table-column label="カード記憶" align="center" width="90px">
      <template slot-scope="scope">
        {{ scope.row.task_id_6 }}
      </template>
    </el-table-column>
    <el-table-column label="ストーリー" align="center" width="90px">
      <template slot-scope="scope">
        {{ scope.row.task_id_7 }}
      </template>
    </el-table-column>
    <el-table-column label="ルート99" align="center">
      <template slot-scope="scope">
        {{ scope.row.task_id_8 }}
      </template>
    </el-table-column>
    <el-table-column label="ステップ" align="center">
      <template slot-scope="scope">
        {{ scope.row.task_id_9 }}
      </template>
    </el-table-column>
    <el-table-column label="ナンバーステップ" align="center">
      <template slot-scope="scope">
        {{ scope.row.task_id_10 }}
      </template>
    </el-table-column>
    <el-table-column label="ジャストフィット" align="center">
      <template slot-scope="scope">
        {{ scope.row.task_id_11 }}
      </template>
    </el-table-column>
    <el-table-column label="さめがめ" align="center">
      <template slot-scope="scope">
        {{ scope.row.task_id_12 }}
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
  mounted() {},
  methods: {
    indexMethod(index) {
      return index + 1;
    },
  },
};
</script>
