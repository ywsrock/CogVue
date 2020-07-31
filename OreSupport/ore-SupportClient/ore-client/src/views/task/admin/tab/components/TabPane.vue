<template>
  <el-table :data="list" border fit highlight-current-row style="width: 100%">
    <el-table-column
      v-loading="loading"
      align="center"
      label="ID"
      width="65"
      element-loading-text="ロード時間！"
    >
      <template slot-scope="scope">
        <span>{{ scope.row.id }}</span>
      </template>
    </el-table-column>

    <el-table-column width="180px" align="center" label="測定時間">
      <template slot-scope="scope">
        <span>{{
          scope.row.timestamp | parseTime("{y}-{m}-{d} {h}:{i}")
        }}</span>
      </template>
    </el-table-column>

    <el-table-column min-width="300px" label="測定内容">
      <template slot-scope="{ row }">
        <span>{{ row.title }}</span>
      </template>
    </el-table-column>

    <el-table-column width="110px" align="center" label="評価結果">
      <template slot-scope="scope">
        <span>{{ scope.row.result }}</span>
      </template>
    </el-table-column>

    <el-table-column width="120px" label="状態">
      <template slot-scope="scope">
        <span>{{ scope.row.importance }}</span>
      </template>
    </el-table-column>

    <el-table-column align="center" label="改善" width="95">
      <template slot-scope="scope">
        <span>{{ scope.row.pageviews }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
// import { fetchList } from '@/api/article'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "info",
        deleted: "danger",
      };
      return statusMap[status];
    },
  },
  props: {
    type: {
      type: String,
      default: "1",
    },
  },
  data() {
    return {
      list: null,
      listQuery: {
        page: 1,
        limit: 5,
        type: this.type,
        sort: "+id",
      },
      loading: false,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.loading = true;
      this.$emit("create"); // for test
      // fetchList(this.listQuery).then(response => {
      this.list = [
        {
          id: 1,
          timestamp: "2020/03/01 11:11:12",
          result: "良好",
          reviewer: "2222",
          title: "記憶力パズルテスト",
          importance: "22",
          pageviews: "リラックス",
        },
        {
          id: 2,
          timestamp: "2020/03/01 11:11:12",
          result: "弱い",
          reviewer: "2222",
          title: "記憶力パズルテスト",
          importance: "22",
          pageviews: "リラックス",
        },
        {
          id: 3,
          timestamp: "2020/03/01 11:11:12",
          result: "強い",
          reviewer: "2222",
          title: "記憶力パズルテスト",
          importance: "22",
          pageviews: "リラックス",
        },
      ];
      this.loading = false;
      // })
    },
  },
};
</script>
