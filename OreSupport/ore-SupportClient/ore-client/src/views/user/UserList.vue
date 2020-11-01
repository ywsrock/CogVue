<template>
  <div id="UserList">
    <body class>
      <div class="page-wrapper">
        <div id="header" class="header"></div>

        <div class="main">
          <div class="main-inner">
            <div class="container">
              <div class="orig-row">
                <div class="col-sm-12">
                  <div class="content">
                    <div class="document-title">
                      <h1>ユーザー検索</h1>
                      <ul class="breadcrumb">
                        <li><a href="#">Personal Experience</a></li>
                      </ul>
                    </div>

                    <!--  -->

                    <v-card flat>
                      <v-card-text>
                        <v-container fluid fill-height>
                          <v-row class="form-group">
                            <v-col cols="3" class="pa-5">
                              <div
                                style="text-align:center"
                                class="form-control"
                              >
                                性別
                              </div>
                            </v-col>
                            <v-col cols="2" class="pa-5">
                              <v-checkbox
                                v-model="ex4"
                                label="男性"
                                color="indigo darken-3"
                                value="indigo darken-3"
                                hide-details
                              ></v-checkbox>
                            </v-col>
                            <v-col cols="2" class="pa-5">
                              <v-checkbox
                                v-model="ex4"
                                label="女性"
                                color="red darken-3"
                                value="red darken-3"
                                hide-details
                              ></v-checkbox>
                            </v-col>
                          </v-row>
                          <v-row class="form-group">
                            <v-col cols="3" class="pa-5">
                              <div
                                style="text-align:center"
                                class="form-control"
                              >
                                年代
                              </div>
                            </v-col>
                            <v-col cols="3" class="pa-5">
                              <v-select
                                :items="ageL"
                                label="40代"
                                dense
                                outlined
                              ></v-select>
                            </v-col>

                            <v-col cols="3" class="pa-5">
                              <v-select
                                :items="ageH"
                                label="50代"
                                dense
                                outlined
                              ></v-select>
                            </v-col>
                          </v-row>
                          <v-row class="form-group">
                            <v-col cols="3" class="pa-5">
                              <div
                                style="text-align:center"
                                class="form-control"
                              >
                                住所
                              </div>
                            </v-col>
                            <v-col cols="3" class="pa-5">
                              <v-select
                                :items="address"
                                label="東京都"
                                dense
                                outlined
                              ></v-select>
                            </v-col>
                          </v-row>
                          <v-row class="form-group">
                            <v-col cols="3" class="pa-5">
                              <div
                                style="text-align:center"
                                class="form-control"
                              >
                                公開
                              </div>
                            </v-col>
                            <v-col cols="3" class="pa-5">
                              <v-checkbox
                                v-model="ex4"
                                label="コグエボ"
                                color="orange"
                                value="orange"
                                hide-details
                              ></v-checkbox>
                            </v-col>
                            <v-col cols="3" class="pa-5">
                              <v-checkbox
                                v-model="ex4"
                                label="行動履歴"
                                color="yellow"
                                value="yellow"
                                hide-details
                              ></v-checkbox>
                            </v-col>
                            <v-col cols="3" class="pa-5">
                              <v-checkbox
                                v-model="ex4"
                                label="ブログ"
                                color="green"
                                value="green"
                                hide-details
                              ></v-checkbox>
                            </v-col>
                          </v-row>
                          <v-row class="form-group">
                            <v-col cols="3" class="pa-5">
                              <div
                                style="text-align:center"
                                class="form-control"
                              >
                                フリーワード
                              </div>
                            </v-col>
                            <v-col cols="6" class="pa-5">
                              <v-textarea
                                label="ニックネーム、職業などで検索"
                                auto-grow
                                outlined
                                rows="1"
                                row-height="15"
                              ></v-textarea>
                            </v-col>
                          </v-row>

                          <hr />

                          <v-row>
                            <v-col cols="3">
                              <div class="filter-actions">
                                <a href="#"
                                  ><i class="fa fa-close"></i
                                  >検索条件リセット</a
                                >
                                <a href="#"
                                  ><i class="fa fa-save"></i> 検索条件の保存</a
                                >
                              </div>
                              <!-- /.filter-actions -->
                            </v-col>
                            <v-spacer />
                            <v-col cols="2">
                              <v-button
                                type="submit"
                                class="btn btn-primary"
                                href=""
                              >
                                検&nbsp;索
                              </v-button>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                    </v-card>

                    <div class="page-title">
                      <!-- <h1>{{ tableData.length }}件がヒットしました</h1> -->
                      <h1>10件がヒットしました</h1>
                    </div>
                    <!-- /.page-title -->
                    <v-card>
                      <v-card-text>
                        <v-container>
                          <!-- <div
                        class="post"
                        v-for="item in displayLists"
                        :key="item.id"
                      > -->
                          <v-row class="ml-5">
                            <v-col cols="2">
                              <div class="post-image">
                                <img
                                  src="../../assets/img/tmp/hebi.png"
                                  alt="A Clockwork Origin"
                                />
                              </div>
                            </v-col>
                            <v-col cols="2">
                              <ul style="list-style: none">
                                <li><h3>くろちゃん</h3></li>
                                <li><h4>50代</h4></li>
                                <li><h4>男性</h4></li>
                                <li><h4>ラッパー</h4></li>
                                <li><h4>東京都在住</h4></li>
                              </ul>
                            </v-col>
                            <v-col cols="2">
                              <div class="post-image">
                                <img
                                  src="../../assets/img/tmp/chart.png"
                                  alt="A Clockwork Origin"
                                />
                              </div>
                            </v-col>
                            <v-col cols="2">
                              <div class="post-image">
                                <img
                                  src="../../assets/img/tmp/calendar.png"
                                  alt="A Clockwork Origin"
                                />
                              </div>
                            </v-col>
                            <v-col cols="2">
                              <div class="post-image">
                                <img
                                  src="../../assets/img/tmp/blog.png"
                                  alt="A Clockwork Origin"
                                />
                              </div>
                            </v-col>
                            <!-- /.post-image -->

                            <div class="post-content">
                              <!-- <h2>
                            <a href="blog-detail.html">{{ item.title }}</a>
                          </h2>
                          <p id="content">
                            {{ item.content | content_slice }}
                          </p> -->
                            </div>
                            <!-- /.post-content -->

                            <div class="post-meta clearfix">
                              <div class="post-meta-author">
                                <!-- <a href="blog-detail.html">{{ item.userName }}</a> -->
                              </div>
                              <!-- /.post-meta-author -->
                              <div class="post-meta-date">
                                入会日：2020/07/07
                              </div>
                              <!-- /.post-meta-date -->
                              <!-- <div class="post-meta-categories">
                                <i class="fa fa-tags"></i>
                                <a href="blog-detail.html">記憶力</a>
                              </div> -->
                              <!-- /.post-meta-categories -->
                              <!-- <div class="post-meta-comments">
                            <i class="fa fa-comments"></i>
                            <a href="blog-detail.html">3 コメント</a>
                          </div> -->

                              <!-- <br> <button size="mini" @click="blogEdit(scope.$index, scope.row)">Edit</button>
                          <button size="mini" type="danger" @click="blogDelete(scope.$index, scope.row)">Delete</button> -->

                              <!-- /.post-meta-comments -->
                              <div class="post-meta-more">
                                <a href="/#/UserDetail">
                                  くろちゃんのプロフィールを見る
                                  <i class="fa fa-chevron-right"></i>
                                </a>
                              </div>
                              <!-- /.post-meta-more -->
                            </div>
                            <!-- /.post-meta -->
                          </v-row>
                          <!-- /.post -->
                        </v-container>
                        <!-- /.posts -->
                      </v-card-text>
                    </v-card>

                    <v-card>
                      <v-card-text>
                        <v-container>
                          <!-- <div
                        class="post"
                        v-for="item in displayLists"
                        :key="item.id"
                      > -->
                          <v-row class="ml-5">
                            <v-col cols="2">
                              <div class="post-image">
                                <img
                                  src="../../assets/img/tmp/tora.png"
                                  alt="A Clockwork Origin"
                                />
                              </div>
                            </v-col>
                            <v-col cols="2">
                              <div>
                                <ul style="list-style: none">
                                  <li><h3>おうちゃん</h3></li>
                                  <li><h4>ひ・み・つ❤</h4></li>
                                  <li><h4></h4></li>
                                  <li><h4></h4></li>
                                  <li><h4></h4></li>
                                </ul>
                              </div>
                            </v-col>
                            <v-col cols="2">
                              <div class="post-image">
                                <!-- <img
                                  src="../../assets/img/tmp/product-11.jpg"
                                  alt="A Clockwork Origin"
                                /> -->
                              </div>
                            </v-col>
                            <v-col cols="2">
                              <div class="post-image">
                                <img
                                  src="../../assets/img/tmp/calendar.png"
                                  alt="A Clockwork Origin"
                                />
                              </div>
                            </v-col>
                            <v-col cols="2">
                              <div class="post-image">
                                <img
                                  src="../../assets/img/tmp/blog.png"
                                  alt="A Clockwork Origin"
                                />
                              </div>
                            </v-col>
                            <!-- /.post-image -->

                            <div class="post-content">
                              <!-- <h2>
                            <a href="blog-detail.html">{{ item.title }}</a>
                          </h2>
                          <p id="content">
                            {{ item.content | content_slice }}
                          </p> -->
                            </div>
                            <!-- /.post-content -->

                            <div class="post-meta clearfix">
                              <div class="post-meta-author">
                                <!-- <a href="blog-detail.html">{{ item.userName }}</a> -->
                              </div>
                              <!-- /.post-meta-author -->
                              <div class="post-meta-date">
                                入会日：2020/07/07
                              </div>
                              <!-- /.post-meta-date -->

                              <!-- /.post-meta-categories -->
                              <!-- <div class="post-meta-comments">
                            <i class="fa fa-comments"></i>
                            <a href="blog-detail.html">3 コメント</a>
                          </div> -->

                              <!-- <br> <button size="mini" @click="blogEdit(scope.$index, scope.row)">Edit</button>
                          <button size="mini" type="danger" @click="blogDelete(scope.$index, scope.row)">Delete</button> -->

                              <!-- /.post-meta-comments -->
                              <div class="post-meta-more">
                                <a @click.prevent="">
                                  おうちゃんのプロフィールを見る
                                  <i class="fa fa-chevron-right"></i>
                                </a>
                              </div>
                              <!-- /.post-meta-more -->
                            </div>
                            <!-- /.post-meta -->
                          </v-row>
                          <!-- /.post -->
                        </v-container>
                        <!-- /.posts -->
                      </v-card-text>
                    </v-card>
                    <v-card>
                      <v-card-text>
                        <v-container>
                          <!-- <div
                        class="post"
                        v-for="item in displayLists"
                        :key="item.id"
                      > -->
                          <v-row class="ml-5">
                            <v-col cols="2">
                              <div class="post-image">
                                <img
                                  src="../../assets/img/tmp/hitsuji.jpg"
                                  alt="A Clockwork Origin"
                                />
                              </div>
                            </v-col>
                            <v-col cols="2">
                              <div>
                                <ul style="list-style: none">
                                  <li><h3>しろちゃん</h3></li>
                                  <li><h4>50代</h4></li>
                                  <li><h4>男性</h4></li>
                                  <li><h4>建築家</h4></li>
                                  <li><h4>千葉在住</h4></li>
                                </ul>
                              </div>
                            </v-col>
                            <v-col cols="2">
                              <div class="post-image">
                                <img
                                  src="../../assets/img/tmp/chart.png"
                                  alt="A Clockwork Origin"
                                />
                              </div>
                            </v-col>
                            <v-col cols="2">
                              <div class="post-image">
                                <!-- <img
                                  src="../../assets/img/tmp/product-11.jpg"
                                  alt="A Clockwork Origin"
                                /> -->
                              </div>
                            </v-col>
                            <v-col cols="2">
                              <div class="post-image">
                                <img
                                  src="../../assets/img/tmp/blog.png"
                                  alt="A Clockwork Origin"
                                />
                              </div>
                            </v-col>
                            <!-- /.post-image -->

                            <div class="post-content">
                              <!-- <h2>
                            <a href="blog-detail.html">{{ item.title }}</a>
                          </h2>
                          <p id="content">
                            {{ item.content | content_slice }}
                          </p> -->
                            </div>
                            <!-- /.post-content -->

                            <div class="post-meta clearfix">
                              <div class="post-meta-author">
                                <!-- <a href="blog-detail.html">{{ item.userName }}</a> -->
                              </div>
                              <!-- /.post-meta-author -->
                              <div class="post-meta-date">
                                入会日：2020/07/07
                              </div>
                              <!-- /.post-meta-date -->
                              <!-- <div class="post-meta-categories">
                                <i class="fa fa-tags"></i>
                                <a href="blog-detail.html">記憶力</a>
                              </div> -->
                              <!-- /.post-meta-categories -->
                              <!-- <div class="post-meta-comments">
                            <i class="fa fa-comments"></i>
                            <a href="blog-detail.html">3 コメント</a>
                          </div> -->

                              <!-- <br> <button size="mini" @click="blogEdit(scope.$index, scope.row)">Edit</button>
                          <button size="mini" type="danger" @click="blogDelete(scope.$index, scope.row)">Delete</button> -->

                              <!-- /.post-meta-comments -->
                              <div class="post-meta-more">
                                <a href="/#/UserDetail_1">
                                  しろちゃんのプロフィールを見る
                                  <i class="fa fa-chevron-right"></i>
                                </a>
                              </div>
                              <!-- /.post-meta-more -->
                            </div>
                            <!-- /.post-meta -->
                          </v-row>
                          <!-- /.post -->
                        </v-container>
                        <!-- /.posts -->
                      </v-card-text>
                    </v-card>
                    <!-- <div class="pager">
                      <v-pagination
                        v-model="page"
                        :length="length"
                        :total-visible="7"
                        @input="pageChange"
                      ></v-pagination>
                    </div> -->
                    <div class="pager">
                      <ul>
                        <li><a href="#">"Prev"</a></li>
                        <li><a href="#">2</a></li>
                        <li class="active"><a>3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">Next</a></li>
                      </ul>
                    </div>
                    <!-- /.pagination -->
                  </div>
                  <!-- /.content -->
                </div>
                <!-- /.col-* -->

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
export default {
  data() {
    return {
      // page: 1,
      // length: 0,
      // tableData: [],
      // search: "",
      // displayLists: [],
      // pageSize: 6,
      ageL: ["40代", "50代", "60代"],
      ageH: ["50代", "60代", "70代"],
      address: ["東京都", "神奈川", "千葉", "埼玉"],
    };
  },
  mounted() {
    // var that = this;
    // //
    // this.$store
    //   .dispatch("blog/getBlogList", this.$route.query.userid)
    //   .then((res) => {
    //     this.$nextTick().then(function() {
    //       const blogInfo = that.$store.getters.get_content;
    //       that.tableData = blogInfo;
    //       that.length = Math.ceil(that.tableData.length / that.pageSize);
    //       that.displayLists = that.tableData.slice(0, that.pageSize);
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
  methods: {
    //   pageChange: function(pageNumber) {
    //     this.displayLists = this.tableData.slice(
    //       this.pageSize * (pageNumber - 1),
    //       this.pageSize * pageNumber
    //     );
    //   },
    //   getBlogDetail(id) {
    //     //apiからサーバーに命令をだす。(store action)
    //     // console.log(`val = ${JSON.stringify(row)}`)
    //     //   console.log(`val = ${JSON.stringify(row)}`);
    //     // this.$router.push("/blogDetail");
    //     // this.$store.dispatch("blog/getBlogDetail",row.id)
    //     // this.$store.dispatch("blog/getBlogDetail",row.id)
    //     // .then(res =>{   //成功の場合
    //     this.$router.push("/blog/blogDetail?id=" + id);
    //     // }).catch(error =>{
    //     //   console.log("err=====");
    //     // })
    //   },
    //   blogEdit(id) {
    //     //apiからサーバーに命令をだす。(store action)
    //     // console.log(`val = ${JSON.stringify(row)}`);
    //     // this.$router.push("/blogDetail");
    //     // this.$store.dispatch("blog/getBlogDetail",row.id)
    //     this.$store
    //       .dispatch("blog/getBlogDetail", id)
    //       .then((res) => {
    //         //成功の場合
    //         this.$router.push("/blog/blogEdit?id=" + id);
    //       })
    //       .catch((error) => {
    //         console.log("err=====");
    //       });
    //   },
    //   // handleEdit(index, row) {
    //   //   console.log(index, row)
    //   // },
    //   blogDelete(id) {
    //     // console.log(`val = ${JSON.stringify(row)}`);
    //     this.$store
    //       .dispatch("blog/blogDelete", id)
    //       .then((res) => {
    //         //成功の場合
    //         var that = this;
    //         this.$store
    //           .dispatch("blog/getBlogList")
    //           .then((res) => {
    //             this.$nextTick().then(function() {
    //               const blogInfo = that.$store.getters.get_content;
    //               that.tableData = blogInfo;
    //             });
    //             Message({
    //               message: "削除OK",
    //               type: "success",
    //               duration: 5 * 1000,
    //             });
    //           })
    //           .catch((err) => {
    //             console.log("err-------");
    //           });
    //       })
    //       .catch((error) => {
    //         console.log("err=====");
    //       });
    //   },
    // },
    // filters: {
    //   content_slice: function(value) {
    //     if (!value) return "";
    //     value = value.toString();
    //     return value.slice(0, 100) + "....";
    //   },
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
