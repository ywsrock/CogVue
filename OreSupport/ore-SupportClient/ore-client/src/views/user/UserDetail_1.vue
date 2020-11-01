<template>
  <div id="UserDetail">
    <body class>
      <div class="page-wrapper">
        <div id="header" class="header"></div>

        <div class="main">
          <div class="main-inner">
            <div class="container">
              <div class="orig-row">
                <div class="col-sm-12">
                  <div class="content">
                    <v-card flat>
                      <v-card-text>
                        <v-container fluid fill-height>
                          <v-row class="form-group">
                            <v-col cols="3">
                              <div class="user-photo">
                                <img src="../../assets/img/tmp/hitsuji.jpg" />
                              </div>
                            </v-col>
                            <v-col cols="6" class="pa-5">
                              <div><h3>しろちゃん</h3></div>
                              <hr />
                              <div>男性 / 50代 / 建築家 / 千葉在住</div>
                              <hr />
                              <div>
                                建築家になってから１０年以上立ちました。<br />認知機能の勉強してます。予防も兼ねて
                              </div>
                            </v-col>
                            <v-col>
                              <div>
                                フォロワー30人<br /><a href="#"
                                  >＞フォローする</a
                                >
                              </div>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col>
                              <div>
                                <img
                                  style="max-width:100%"
                                  src="../../assets/img/tmp/radar.png"
                                />
                              </div>
                            </v-col>
                          </v-row>
                          <!-- <v-row>
                            <v-col>
                              <div>
                                <img
                                  style="max-width:100%"
                                  src="../../assets/img/tmp/action.png"
                                />
                              </div>
                            </v-col>
                          </v-row> -->
                          <hr />
                          <v-row>
                            <v-col>
                              <div class="posts">
                                <div>
                                  <div class="post-image">
                                    <img
                                      src="../../assets/img/tmp/tablet_family.png"
                                      alt="A Clockwork Origin"
                                    />
                                    <a class="read-more" href="blog_detail.html"
                                      >View</a
                                    >
                                  </div>
                                  <!-- /.post-image -->
                                  <hr />
                                  <div class="post-content">
                                    <h2>
                                      <a href="blog-detail.html">タイトル</a>
                                    </h2>
                                    <p id="content">
                                      コンテント
                                    </p>
                                  </div>
                                  <!-- /.post-content -->

                                  <div class="post-meta clearfix">
                                    <div class="post-meta-author">
                                      By
                                      <a href="blog-detail.html"></a>
                                    </div>
                                    <!-- /.post-meta-author -->
                                    <div class="post-meta-date">2020/07/07</div>
                                    <!-- /.post-meta-date -->
                                    <div class="post-meta-categories">
                                      <i class="fa fa-tags"></i>
                                      <a href="blog-detail.html">記憶力</a>
                                    </div>
                                    <!-- /.post-meta-categories -->
                                    <div class="post-meta-comments">
                                      <i class="fa fa-comments"></i>
                                      <a href="blog-detail.html">3 コメント</a>
                                    </div>

                                    <!-- /.post-meta-comments -->
                                    <div class="post-meta-more">
                                      <a>
                                        もっと読む
                                        <i class="fa fa-chevron-right"></i>
                                      </a>
                                    </div>
                                    <!-- /.post-meta-more -->
                                  </div>
                                  <!-- /.post-meta -->
                                </div>
                                <!-- /.post -->
                              </div>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col>
                              <div class="posts">
                                <div>
                                  <div class="post-image">
                                    <img
                                      src="../../assets/img/tmp/suppliment_pill_diet.png"
                                      alt="A Clockwork Origin"
                                    />
                                    <a class="read-more" href="blog_detail.html"
                                      >View</a
                                    >
                                  </div>
                                  <!-- /.post-image -->

                                  <div class="post-content">
                                    <h2>
                                      <a href="blog-detail.html">タイトル</a>
                                    </h2>
                                    <p id="content">
                                      コンテント
                                    </p>
                                  </div>
                                  <!-- /.post-content -->

                                  <div class="post-meta clearfix">
                                    <div class="post-meta-author">
                                      By
                                      <a href="blog-detail.html"></a>
                                    </div>
                                    <!-- /.post-meta-author -->
                                    <div class="post-meta-date">2020/07/07</div>
                                    <!-- /.post-meta-date -->
                                    <div class="post-meta-categories">
                                      <i class="fa fa-tags"></i>
                                      <a href="blog-detail.html">記憶力</a>
                                    </div>
                                    <!-- /.post-meta-categories -->
                                    <div class="post-meta-comments">
                                      <i class="fa fa-comments"></i>
                                      <a href="blog-detail.html">3 コメント</a>
                                    </div>

                                    <!-- /.post-meta-comments -->
                                    <div class="post-meta-more">
                                      <a>
                                        もっと読む
                                        <i class="fa fa-chevron-right"></i>
                                      </a>
                                    </div>
                                    <!-- /.post-meta-more -->
                                  </div>
                                  <!-- /.post-meta -->
                                </div>
                                <!-- /.post -->
                              </div>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                    </v-card>
                  </div>
                  <!-- /.content -->
                </div>
                <!-- /.col-* -->
              </div>
              <!-- /.row -->
            </div>
            <!-- /.container -->
          </div>
          <!-- /.main-inner -->
        </div>
        <!-- /.main -->

        <div id="footer" class="footer"></div>
      </div>
      <!-- /.page-wrapper -->
    </body>
  </div>
</template>

<script>
// import { Message } from "element-ui";
/* eslint-disable */
// export default {
//   data() {
//     return {
//       // page: 1,
//       // length:0,
//       // tableData: [],
//       // search: "",
//       // displayLists: [],
//       // pageSize: 6,
//     };
//   },
//   mounted() {
//     // var that = this;
//     // //
//     // this.$store
//     //   .dispatch("blog/getBlogList", this.$route.query.userid)
//     //   .then((res) => {
//     //     this.$nextTick().then(function() {
//     //       const blogInfo = that.$store.getters.get_content;
//     //       that.tableData = blogInfo;
//     //       that.length = Math.ceil(that.tableData.length/that.pageSize);
//     //       that.displayLists = that.tableData.slice(0,that.pageSize);
//     //     });
//     //   })
//     //   .catch((err) => {
//     //     console.log(err);
//     //   });
//   },
//   methods: {
//     //   pageChange: function(pageNumber){
//     //   this.displayLists = this.tableData.slice(this.pageSize*(pageNumber -1), this.pageSize*(pageNumber));
//     // },
//     //   getBlogDetail(id) {
//     //     //apiからサーバーに命令をだす。(store action)
//     //     // console.log(`val = ${JSON.stringify(row)}`)
//     //     //   console.log(`val = ${JSON.stringify(row)}`);
//     //     // this.$router.push("/blogDetail");
//     //     // this.$store.dispatch("blog/getBlogDetail",row.id)
//     //     // this.$store.dispatch("blog/getBlogDetail",row.id)
//     //     // .then(res =>{   //成功の場合
//     //     this.$router.push("/blog/blogDetail?id=" + id);
//     //     // }).catch(error =>{
//     //     //   console.log("err=====");
//     //     // })
//     //   },
//     //   blogEdit(id) {
//     //     //apiからサーバーに命令をだす。(store action)
//     //     // console.log(`val = ${JSON.stringify(row)}`);
//     //     // this.$router.push("/blogDetail");
//     //     // this.$store.dispatch("blog/getBlogDetail",row.id)
//     //     this.$store
//     //       .dispatch("blog/getBlogDetail", id)
//     //       .then((res) => {
//     //         //成功の場合
//     //         this.$router.push("/blog/blogEdit?id=" + id);
//     //       })
//     //       .catch((error) => {
//     //         console.log("err=====");
//     //       });
//     //   },
//     //   // handleEdit(index, row) {
//     //   //   console.log(index, row)
//     //   // },
//     //   blogDelete(id) {
//     //     // console.log(`val = ${JSON.stringify(row)}`);
//     //     this.$store
//     //       .dispatch("blog/blogDelete", id)
//     //       .then((res) => {
//     //         //成功の場合
//     //         var that = this;
//     //         this.$store
//     //           .dispatch("blog/getBlogList")
//     //           .then((res) => {
//     //             this.$nextTick().then(function() {
//     //               const blogInfo = that.$store.getters.get_content;
//     //               that.tableData = blogInfo;
//     //             });
//     //             Message({
//     //               message: "削除OK",
//     //               type: "success",
//     //               duration: 5 * 1000,
//     //             });
//     //           })
//     //           .catch((err) => {
//     //             console.log("err-------");
//     //           });
//     //       })
//     //       .catch((error) => {
//     //         console.log("err=====");
//     //       });
//     //   },
//   },
//   // filters: {
//   //   content_slice: function(value) {
//   //     if (!value) return "";
//   //     value = value.toString();
//   //     return value.slice(0, 100) + "....";
//   //   },
//   // },
// };
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
