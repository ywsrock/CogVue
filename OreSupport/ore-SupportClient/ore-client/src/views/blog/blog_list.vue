<template>
<div>
  <pre>
    <h1>ブログリスト</h1>
  </pre>


  <el-table :data="tableData"  style="width: 100%" >
    <el-table-column 
    label="id" 
    prop="id">
    </el-table-column>

    <el-table-column 
    label="title" 
    prop="title">
    </el-table-column>

    <el-table-column 
    label="content" 
    prop="content">
    </el-table-column>
    
    <el-table-column align="right">
    <!--
      <template slot="header" slot-scope="scope">
        <el-input v-model="search" size="mini" placeholder="Type to search" />
      </template>
      -->
      <template slot-scope="scope">
        <el-button size="mini" @click="getBlogDetail(scope.$index, scope.row)">Show</el-button>
        <el-button size="mini" @click="blogEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button size="mini" type="danger" @click="blogDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>
<script>
export default {
  data() {
    return {
      // tableData: [
      //   {
      //     title:"test",
      //     content: "2016-05-03",
      //   },
      // ],
      tableData:[],
      search: "",
    };
  },
mounted(){
  var that = this;
  // 
    this.$store
      .dispatch("blog/getBlogList")
      .then((res) => {
    this.$nextTick().then(function() {    
    const blogInfo = that.$store.getters.get_content;
    that.tableData =blogInfo
  });
})
.catch(err =>{
  console.log("err-------");
});
},
methods: {
  // handleEdit: function(index, row){
  //   alert(index, row)

  // },
  getBlogDetail(index, row) {
      //apiからサーバーに命令をだす。(store action)
      // console.log(`val = ${JSON.stringify(row)}`)
      console.log(`val = ${JSON.stringify(row)}`)
      // this.$router.push("/blogDetail");
      // this.$store.dispatch("blog/getBlogDetail",row.id)
      this.$store.dispatch("blog/getBlogDetail",row.id)
      .then(res =>{   //成功の場合
        this.$router.push("/blogDetail?id=" + row.id);
      }).catch(error =>{
        console.log("err=====");
      })
    },

  blogEdit(index, row) {
      //apiからサーバーに命令をだす。(store action)
      // console.log(`val = ${JSON.stringify(row)}`)
      console.log(`val = ${JSON.stringify(row)}`)
      // this.$router.push("/blogDetail");
      // this.$store.dispatch("blog/getBlogDetail",row.id)
      this.$store.dispatch("blog/getBlogDetail",row.id)
      .then(res =>{   //成功の場合
        this.$router.push("/blogEdit?id=" + row.id);
      }).catch(error =>{
        console.log("err=====");
      })
    },

  


    // handleEdit(index, row) {
    //   console.log(index, row)
    // },
blogDelete(index, row) {
      console.log(`val = ${JSON.stringify(row)}`)
      this.$store.dispatch("blog/blogDelete",row.id)
      .then(res =>{   //成功の場合
        this.$router.push("/blogList");

        var that = this;
        this.$store
      .dispatch("blog/getBlogList")
      .then((res) => {
    this.$nextTick().then(function() {    
    const blogInfo = that.$store.getters.get_content;
    that.tableData =blogInfo
  });
})
.catch(err =>{
  console.log("err-------");
});
        
      }).catch(error =>{
        console.log("err=====");
      })
    },
}};
</script>