<template>
  <div id="ユーザINFO">
    <body class="">
      <div class="page-wrapper">
        <div id="header" class="header"></div>

        <div class="main">
          <form @submit.prevent="createBlog" style="border:1px solid #ccc">
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
                            ref="title"
                            placeholder="タイトル"
                            v-model="registForm.title"
                            name="title"
                            required
                            class="form-control"
                            maxlength="45"
                          />
                        </div>

                        <!-- /.form-group -->
                        <div class="form-group col-sm-12">
                          <label for="title">カテゴリ</label>
                          <v-sheet>
                            <v-chip-group mandatory active-class="primary--text">
                              <v-chip v-for="tag in registForm.category" :key="tag">
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
                          <label for="content"><b>内容</b></label>
                          <textarea
                            class="form-control"
                            rows="7"
                            placeholder="内容"
                            name="content"
                            v-model="registForm.content"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /.background-white p20 mb30 -->

                  <div class="col-sm-4">
                    <button
                      type="submit"
                      href="#"
                      class="btn btn-primary col-sm-5"
                    >
                      登録
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
      registForm: {
        title: "",
        content: "",
        blogimage: "",
        filename: "",
        category: [
          "食事",
          "サプリ",
          "運動",
          "脳トレ",
          "音楽",
          "社会参加",
          "その他"
          ],
      },
      blogImg: "" || img,
      defaultsrc: img,


      tags: ["サンマ", "マラソン", "モーツァルト", "パズル"],
    };
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
      this.registForm.filename = file.name;
      this.registForm.blogimage = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.blogImg = e.target.result;
        // const blob = new Blob([new Uint8Array(e.target.result)], {type: file.type });
      };
    },

    createBlog: function(e) {
      // 二重コミット防止のため、ボタンを非活性

      e.target.disabled = true;

      let that = this;
      let fl = this.$refs.upfile.files[0];

      //Content-Type:form/multipart で送信されます
      let data = new FormData();
      // data.append("key", value, parameter);
      if (fl !== undefined) {
        data.append(
          "imgBlog",
          this.registForm.blogimage,
          this.registForm.filename
        );
      }

      data.append("registForm", JSON.stringify(this.registForm));

      // ユーザ登録処理
      this.$store
        .dispatch("blog/createBlog", data)
        .then((res) => {
          Message({
            message: "作成OK",
            type: "success",
            duration: 5 * 1000,
          }),
            // ログイン画面に遷移
            this.$router.push({ path: "/blog/blogList" }).catch((err) => {});
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
