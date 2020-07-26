<template>
  <div>
    <pre>
    <h1>ブログ詳細</h1>
  </pre>title :
    <p>{{blogDetail.title}}</p>ブログ詳細
    <el-input type="textarea" placeholder="ブログ詳細" v-model="blogDetail.content"></el-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blogDetail: {
        title: "",
        content: ""
      }
    };
  },
  mounted() {
    var that = this;
    // console.log(this.$router.query); 次回の閻餐会
    
    //ブログ詳細取得
    this.$store.dispatch("blog/getBlogDetail",this.$route.query.id)
      .then(res =>{   //成功の場合
        // this.$router.push("/blogDetail?id=" + this.$route.query.id);
      this.$nextTick().then(function() {
      const content = that.$store.getters.get_content;
      const title = that.$store.getters.get_title;
      that.blogDetail.content = content;
      that.blogDetail.title = title;
    });
      }).catch(error =>{
        console.log("err=====");
      })



    




  }
};
</script>
