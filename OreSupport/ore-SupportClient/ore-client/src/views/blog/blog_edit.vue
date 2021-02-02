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
                          <label for="title">ブログのタイトル</label>
                          <div class="form-control">
                            <input
                              type="text"
                              v-model="blogDetail.title"
                              maxlength="30"
                              show-word-limit
                            />
                          </div>
                        </div>

                        <!-- /.form-group -->
                        <div class="form-group col-sm-12">
                          <label for="title">カテゴリ</label>
                          <v-chip-group
                            v-model="categorySelected"
                            column
                            color="blue"
                          >
                            <!-- v-model="blogDetail.categorySelected" -->
                            <v-chip
                              filter
                              outlined
                              v-for="category in categories"
                              :value="category.id"
                              :key="category.id"
                            >
                              {{ category.name }}
                            </v-chip>
                          </v-chip-group>
                        </div>

                        <div class="form-group col-sm-12">
                          <label for="title">
                            行動タグ
                            <br />
                            行動タグの追加・削除については<a
                              @click.prevent="actionClick"
                              >こちら</a
                            >から
                          </label>

                          <v-sheet>
                            <v-chip-group
                              v-model="blogDetail.actionSelected"
                              multiple
                              column
                              color="green"
                            >
                              <v-chip
                                filter
                                outlined
                                v-for="action in actions"
                                :value="action.id"
                                :key="action.id"
                              >
                                {{ action.name }}
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
                                v-if="!isDefault"
                                @error="defaultBlogImg"
                                alt="User Photo"
                              />
                              <img
                                :src="defaultsrc"
                                v-if="isDefault"
                                alt="Default Photo"
                              />
                              <input
                                ref="upfile"
                                id="file_photo"
                                type="file"
                                accept=".jpg, .jpeg, .png"
                                @change="onchange"
                              />
                              <button
                                id="file_photo"
                                type="file"
                                @click="imageDelete"
                              >
                                削除ボタン
                              </button>
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
                          <!-- <textarea
                            type="textarea"
                            v-model="blogDetail.content"
                            maxlength="2000"
                            show-word-limit
                          ></textarea> -->
                          <quill-editor
                            ref="quillEditor"
                            v-model="blogDetail.content"
                            :options="editorOption"
                          />
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
var img = require("../../../public/00_00.jpg");

/* eslint-disable */
export default {
  watch: {
    // categorySelected: {
    //   handler: function(newValue, oldValue) {
    //     console.log(newValue);
    //   },
    // },
    // actionSelected: {
    //   handler: function(newValue, oldValue) {
    //     console.log(newValue);
    //   },
    // },
  },
  data() {
    return {
      blogDetail: {
        id: "",
        title: "",
        content: "",
        blogimage: "",
        filename: "",
        categorySelected: "",
        actionSelected: [],
      },
      blogImg: "" || img,
      defaultsrc: img,
      categories: [],
      actions: [],
      isDefault: false,
      isImageChange: false,
      editorOption: {
        theme: "snow",
        modules: {
          // imageResize: true
        },
      },
    };
  },

  computed: {
    categorySelected: {
      get: function() {
        return Number(this.blogDetail.categorySelected);
      },
      set: function(value) {
        this.blogDetail.categorySelected = value;
      },
    },
  },

  mounted() {
    this.getUserAction();
    this.getBlogDetail();
  },
  methods: {
    getBlogDetail() {
      var that = this;
      this.$store
        .dispatch("blog/getBlogDetail", this.$route.query.id)
        .then((res) => {
          this.$nextTick().then(function() {
            const content = that.$store.getters.get_content;
            const title = that.$store.getters.get_title;
            const id = that.$store.getters.get_id;
            const blogImg = that.$store.getters.get_blogImg;
            const filename = that.$store.getters.get_imagename;
            const categorySelected = that.$store.getters.get_categoryId;
            const actionSelected = that.$store.getters.get_actionId;
            const actionArray = actionSelected
              .split(",")
              .map(function(actionSelected) {
                return Number(actionSelected);
              });
            that.blogDetail.content = content;
            that.blogDetail.title = title;
            that.blogDetail.id = id;
            that.blogImg = blogImg;
            that.blogDetail.filename = filename;
            // that.blogDetail.categorySelected = Number(categorySelected);
            //ここにif（値が空""とundefinedの場合）はDefault値elseそのままを入れる（that.blogDetail.categorySelected = Number(categorySelected);）
            that.blogDetail.categorySelected = categorySelected;
            // that.blogDetail.actionSelected = actionSelected;
            if (actionArray == 0) {
              that.blogDetail.actionSelected = "";
            } else {
              that.blogDetail.actionSelected = actionArray;
            }
          });
        });
    },

    getUserAction() {
      var that = this;
      console.log(this.$router.query);
      //行動取得
      this.$store
        .dispatch("action/queryAction", this.$route.query.userid)
        .then((res) => {
          this.$nextTick().then(function() {
            const actions = that.$store.getters.action;
            console.log(actions);
            that.actions = actions.userAction;
            that.categories = actions.userActionMaster;
            // アクション重複削除
            that.actions = that.actions.filter((value, index, array) => {
              return (
                array.findIndex((action) => value.name === action.name) ===
                index
              );
            });
          });
        })
        .catch((error) => {
          console.log(error.data);
        });
    },

    imageDelete: function(e) {
      e.preventDefault();
      this.isDefault = true;
      this.isImageChange = true;
      this.blogDetail.blogimage = "";
      this.blogDetail.filename = "";
    },

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
      this.isDefault = false;
      this.isImageChange = true;
      reader.onload = (e) => {
        this.blogImg = e.target.result;
      };
    },

    blogUpdate: function(e) {
      // 二重コミット防止のため、ボタンを非活性
      e.target.disabled = true;
      let that = this;
      // let fl = this.$refs.upfile.files[0];
      //Content-Type:form/multipart で送信されます
      let data = new FormData();

      if (this.isImageChange === true) {
        // data.append("key", value, parameter);
        //画像削除の場合
        if (this.blogDetail.filename === "") {
          data.append("imgBlog", this.defaultBlogImg);
        } else {
          data.append(
            "imgBlog",
            this.blogDetail.blogimage,
            this.blogDetail.filename
          );
        }
      }
      // else {
      //   data.append("imgBlog", this.defaultBlogImg);
      // }

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
    actionClick: function() {
      this.$router.push("/action/userAction");
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
