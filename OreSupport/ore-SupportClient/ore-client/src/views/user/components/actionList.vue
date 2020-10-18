<template>
  <el-table
    max-height="300"
    @row-click="handleRowClick"
    :data="tableData.filter(handlerFilter)"
    style="width: 100%"
  >
    <el-table-column label="" prop="id" v-if="false"> </el-table-column>
    <el-table-column label="行動開始日" prop="startDate"> </el-table-column>
    <el-table-column label="行動終了日" prop="endDate"> </el-table-column>
    <el-table-column
      label="行動名"
      prop="name"
      :show-overflow-tooltip="showTooltip"
    >
    </el-table-column>
    <el-table-column
      label="メモ"
      prop="memo"
      :show-overflow-tooltip="showTooltip"
    >
    </el-table-column>
    <el-table-column align="right">
      <template slot="header" slot-scope="scope_header">
        <el-input
          v-model="search"
          size="mini"
          placeholder="search..."
          @click="(scope) => scope_header"
        />
      </template>
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >編集</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >削除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { MessageBox } from "element-ui";
export default {
  data() {
    return {
      showTooltip: true,
      tableData: [
        {
          id: "1",
          startDate: "2016-05-04 11:00:01",
          endDate: "2019-05-04 11:00:01",
          name: "Tom",
          memo: "No. 189, Grove St, Los Angeles",
        },
        {
          id: "2",
          startDate: "2016-05-04 11:00:01",
          endDate: "2019-05-04 11:00:01",
          name: "John",
          memo: "No. 189, Grove St, Los Angeles",
        },
        {
          id: "3",
          startDate: "2016-05-04 11:00:01",
          endDate: "2019-05-04 11:00:01",
          name: "Morgan",
          memo: "No. 189, Grove St, Los Angeles",
        },
        {
          id: "4",
          startDate: "2016-05-04 11:00:01",
          endDate: "2019-05-04 11:00:01",
          name: "Jessy",
          memo: "No. 189, Grove St, Los Angeles",
        },
        {
          id: "5",
          startDate: "2016-05-04 11:00:01",
          endDate: "2019-05-04 11:00:01",
          name: "Jessy",
          memo: "No. 189, Grove St, Los Angeles",
        },
        {
          id: "6",
          startDate: "2016-05-04 11:00:01",
          endDate: "2019-05-04 11:00:01",
          name: "Jessy",
          memo:
            "No. 189, Grove St, Los AngelesasdfNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los Angeles",
        },
      ],
      search: "",
    };
  },
  methods: {
    //インクリメント検索処理
    handlerFilter(data) {
      return (
        !this.search ||
        data.name.toLowerCase().includes(this.search.toLowerCase()) ||
        data.startDate.indexOf(this.search) != -1 ||
        data.endDate.indexOf(this.search) != -1 ||
        data.memo.indexOf(this.search) != -1
      );
    },
    //アクションの編集
    handleEdit(index, row) {
      this.$parent.is_readonly = false;
      Object.assign(this.$parent.actionInfo, row);
    },
    //アクションの削除
    handleDelete(index, row) {
      this.$confirm("このアクションを削除しますが?", "確認...", {
        confirmButtonText: "削除",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "削除しました。",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消しました。",
          });
        });
      console.log(index, row);
    },
    //行クリック
    handleRowClick(row, column, event) {
      // this.$parent.is_readonly = true;
      Object.assign(this.$parent.actionInfo, row);
    },
  },
};
</script>
