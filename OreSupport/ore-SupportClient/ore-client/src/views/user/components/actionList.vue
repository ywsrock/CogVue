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
export default {
  watch: {
    actionData: {
      handler: function(newV, oldV) {
        if (newV != oldV) {
          this.tableData = newV;
        }
      },
    },
    deep: true,
  },
  props: {
    actionData: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
  data() {
    return {
      showTooltip: true,
      tableData: this.actionData,
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
      this.$parent.isModalShow = true;
      row.color = "teal darken-1";
      Object.assign(this.$parent.actionInfo, row);
    },
    //アクションの削除
    handleDelete(index, row) {
      var that = this;
      this.$confirm("このアクションを削除しますが?", "確認...", {
        confirmButtonText: "削除",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          that.$store
            .dispatch("action/deleteAction", row.id)
            .then(() => {
              this.$message({
                type: "success",
                message: "削除しました。",
              });
              //アクション再検索
              that.$parent.fetchUserAction();
            })
            .catch((error) => {
              this.$message({
                type: "error",
                message: "処理失敗しました。",
              });
              console.log(error);
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消しました。",
          });
        });
    },
    //行クリック
    handleRowClick(row) {
      Object.assign(this.$parent.actionInfo, row);
    },
  },
};
</script>
