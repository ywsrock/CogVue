<template>
  <div id="ユーザINFO">
    <body class="">
      <div class="page-wrapper">
        <div id="header" class="header"></div>

        <div class="main">
          <form>
            <div class="main-inner">
              <div class="container">
                <div class="content">
                  <div class="page-title">
                    <h1>ブログ投稿</h1>
                  </div>
                  <!-- /.page-title -->

                  <div class="background-white p20 mb30">
                    <h3 class="page-title">
                      投稿内容
                    </h3>

                    <div class="row">
                      <div class="col-sm-8">
                        <div class="form-group col-sm-12">
                          <label for="title">タイトル</label>
                          <input
                            type="text"
                            v-model="blogDetail.title"
                            maxlength="30"
                            show-word-limit
                          />
                        </div>

                        <!-- /.form-group -->
                        <div class="form-group col-sm-12">
                          <label for="title">カテゴリ</label>
                          <v-sheet>
                            <v-chip-group multiple active-class="primary--text">
                              <v-chip v-for="tag in category" :key="tag">
                                {{ tag }}
                              </v-chip>
                            </v-chip-group>
                          </v-sheet>
                        </div>

                        <div class="form-group col-sm-12">
                          <label for="title">
                            行動タグ
                            <br />
                            行動タグの追加については<a href="#">こちら</a>から
                          </label>

                          <v-sheet>
                            <v-chip-group multiple active-class="primary--text">
                              <v-chip v-for="tag in tags" :key="tag">
                                {{ tag }}
                              </v-chip>
                            </v-chip-group>
                          </v-sheet>
                        </div>
                      </div>

                      <!-- /.form-group -->

                      <div class="col-sm-4">
                        <div class="widget">
                          <div class="user-photo">
                            <a href="#">
                              <img
                                :src="blogImg"
                                @error="defaultBlogImg"
                                alt="User Photo"
                              />
                              <input
                                ref="upfile"
                                id="file_photo"
                                type="file"
                                accept=".jpg, .jpeg, .png"
                                @change="onchange"
                              />
                            </a>
                          </div>
                        </div>
                        <!-- /.widget -->
                      </div>
                      <!-- col-sm-4 -->
                    </div>
                    <!-- /.row -->

                    <h3 class="page-title">
                      本文

                      <!-- <div class="col-sm-4 pull-right">
                        <a href="#" class="btn btn-primary col-sm-5"
                          >商品選択</a
                        >
                        <a href="#" class="btn btn-primary col-sm-5 pull-right"
                          >CogEvoデータ</a
                        >
                      </div> -->
                    </h3>
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="form-group col-sm-12">
                          <label for="content">内容 </label>
                          <textarea
                            type="textarea"
                            v-model="blogDetail.content"
                            maxlength="2000"
                            show-word-limit
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /.background-white p20 mb30 -->

                  <div class="col-sm-4">
                    <button
                      href="#"
                      class="btn btn-primary col-sm-5"
                      @click="blogUpdate"
                    >
                      更新
                    </button>
                    <button
                      href="#"
                      class="btn btn-primary col-sm-5 pull-right"
                    >
                      一時保存
                    </button>
                    <br /><br />
                  </div>
                  <div class="col-sm-4 pull-right">
                    <a
                      href
                      @click.prevent="blogClick"
                      class="btn btn-primary col-sm-5 pull-right"
                      >戻る</a
                    >

                    <!-- <button type="reset"
                          href="#"
                          class="btn btn-primary col-sm-5 pull-right"
                        >
                          キャンセル
                        </button> -->
                  </div>

                  <!-- /.content -->
                </div>
                <!-- /.container -->
              </div>
              <!-- /.main-inner -->
            </div>
            <!-- /.main -->
          </form>
        </div>
        <div id="footer" class="footer"></div>
      </div>
      <!-- /.page-wrapper -->
    </body>
  </div>
</template>

<script>
import { Message } from "element-ui";
var img = require("../../../public/favicon.png");

/* eslint-disable */
export default {
  data() {
    return {
      blogDetail: {
        id: "",
        id: "",
        title: "",
        content: "",
        blogimage: "",
        filename: "",
      },
      blogImg: "" || img,
      defaultsrc: img,
      category: ["食事", "運動", "脳トレ", "音楽", "その他"],
      tags: ["サンマ", "マラソン", "モーツァルト", "パズル"],
    };
  },
  mounted() {
    var that = this;
    this.$store
      .dispatch("blog/getBlogDetail", this.$route.query.id)
      .then((res) => {
        this.$nextTick().then(function() {
          const content = that.$store.getters.get_content;
          const title = that.$store.getters.get_title;
          const id = that.$store.getters.get_id;
          const blogImg = that.$store.getters.get_blogImg;
          that.blogDetail.content = content;
          that.blogDetail.title = title;
          that.blogDetail.id = id;
          that.blogImg = blogImg;
        });
      });
  },
  methods: {
    defaultBlogImg: function() {
      return this.defaultsrc;
    },
    onchange: function(e) {
      e.preventDefault();
      const files = e.target.files;
      const file = files[0];
      console.log(file.name);
      this.blogDetail.filename = file.name;
      this.blogDetail.blogimage = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.blogImg = e.target.result;
      };
    },
    blogUpdate: function(e) {
      // 二重コミット防止のため、ボタンを非活性
      e.target.disabled = true;
      // // 全項目チェック、問題なければ、登録処理を行う
      // const isValid = this.validate(this.registForm, this.rules);
      // if (!isValid) {
      // ユーザ登録処理
      //console.log(`val = ${JSON.stringify(this.$route.query.id)}`);
      let that = this;
      let fl = this.$refs.upfile.files[0];
      //Content-Type:form/multipart で送信されます
      let data = new FormData();
      // data.append("key", value, parameter);
      data.append(
        "imgBlog",
        this.blogDetail.blogimage,
        this.blogDetail.filename
      );
      data.append("blogDetail", JSON.stringify(this.blogDetail));
      this.$store
        .dispatch("blog/blogUpdate", data)
        .then((res) => {
          Message({
            message: "更新OK",
            type: "success",
            duration: 5 * 1000,
          }),
            // ブログリスト画面に遷移
            this.$router.push("/blog/blogList");
        })
        .catch((error) => {
          e.target.disabled = false;
          console.log(error.data);
          console.log("作成失敗");
        });
    },
    blogClick: function() {
      this.$router.push("/blog/blogList");
    },
  },
};
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Nunito:300,400,700";
@import "../../../public/assets/libraries/font-awesome/css/font-awesome.min.css";
@import "../../../public/assets/libraries/owl.carousel/assets/owl.carousel.css";
@import "../../../public/assets/libraries/colorbox/example1/colorbox.css";
@import "../../../public/assets/libraries/bootstrap-select/bootstrap-select.min.css";
@import "../../../public/assets/libraries/bootstrap-fileinput/fileinput.min.css";
@import "../../../public/assets/css/superlist.css";
#content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
</style>
