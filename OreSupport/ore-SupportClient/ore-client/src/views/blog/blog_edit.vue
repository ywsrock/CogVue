<template>
  <div>
    <pre>
    <h1>ブログ編集</h1>
  </pre>title :
    <p>{{blogDetail.title}}</p>ブログ詳細

<el-input
  type="text"
  placeholder="Please input"
  v-model="blogDetail.title"
  maxlength="30"
  show-word-limit
>
</el-input>
<div style="margin: 20px 0;"></div>
<el-input
  type="textarea"
  placeholder="Please input"
  v-model="blogDetail.content"
  maxlength="2000"
  show-word-limit
>
</el-input>
<el-button  size="mini" @click="blogUpdate">Update</el-button>

  </div>
</template>
<script>
import { Message } from "element-ui";
export default {
  data() {
    return {
      blogDetail: {
        id:"",
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
      const id = that.$store.getters.get_id;
      that.blogDetail.content = content;
      that.blogDetail.title = title;
      that.blogDetail.id = id;
    });
  },

  methods:{


    blogUpdate: function(e) {
      // 二重コミット防止のため、ボタンを非活性
      e.target.disabled=true;
      // // 全項目チェック、問題なければ、登録処理を行う
      // const isValid = this.validate(this.registForm, this.rules);
      // if (!isValid) {
        // ユーザ登録処理
        console.log(`val = ${JSON.stringify(this.$route.query.id)}`)
        this.$store
          .dispatch("blog/blogUpdate", this.blogDetail)
          .then((res) => {
            Message({
              message: "作成OK",
              type: "success",
              duration: 5 * 1000,
            }),
              // ブログリスト画面に遷移
              this.$router.push("/blog/blogList");
          })
          .catch((error) => {
            e.target.disabled=false;
            console.log(error.data);
            console.log("作成失敗");
          });
      },

  }


};
</script>
