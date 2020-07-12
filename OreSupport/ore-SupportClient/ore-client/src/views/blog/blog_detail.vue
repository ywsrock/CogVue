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
    this.$nextTick().then(function() {
      const content = that.$store.getters.get_content;
      const title = that.$store.getters.get_title;
      that.blogDetail.content = content;
      that.blogDetail.title = title;
    });
  }
};
</script>
