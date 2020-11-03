<template>
  <div id="blog_list">
    <body class>
      <div class="page-wrapper">
        <div id="header" class="header"></div>

        <div class="main">
          <div class="main-inner">
            <div class="container">
              <div class="orig-row">
                <div class="col-sm-12 col-lg-9">
                  <div class="content">
                    <div class="page-title">
                      <h1>{{ tableData.length }}件がヒットしました</h1>
                    </div>
                    <!-- /.page-title -->

                    <div class="posts">
                      <div
                        class="post"
                        v-for="item in displayLists"
                        :key="item.id"
                      >
                        <div class="post-image">
                          <img
                            src="../../assets/img/tmp/product-11.jpg"
                            alt="A Clockwork Origin"
                          />
                          <a class="read-more" href="blog_detail.html">View</a>
                        </div>
                        <!-- /.post-image -->

                        <div class="post-content">
                          <h2>
                            <a href="blog-detail.html">{{ item.title }}</a>
                          </h2>
                          <p id="content">
                            {{ item.content | content_slice }}
                          </p>
                        </div>
                        <!-- /.post-content -->

                        <div class="post-meta clearfix">
                          <div class="post-meta-author">
                            By
                            <a href="blog-detail.html">{{ item.userName }}</a>
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

                          <!-- <br> <button size="mini" @click="blogEdit(scope.$index, scope.row)">Edit</button>
                          <button size="mini" type="danger" @click="blogDelete(scope.$index, scope.row)">Delete</button> -->

                          <!-- /.post-meta-comments -->
                          <div class="post-meta-more">
                            <a @click="blogDelete(item.id)">削除する
                              <i class="fa fa-chevron-right"></i>
                            </a>
                            <a @click="blogEdit(item.id)">編集する
                              <i class="fa fa-chevron-right"></i>
                            </a>
                            <a @click.prevent="getBlogDetail(item.id)">
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
                    <!-- /.posts -->

                    <div class="pager">
                        <v-pagination
                          v-model="page"
                          :length="length"
                          :total-visible="7"
                          @input = "pageChange"
                        ></v-pagination>
                    </div>
                    <!-- /.pagination -->
                  </div>
                  <!-- /.content -->
                </div>
                <!-- /.col-* -->

                <div class="col-sm-4 col-lg-3">
                  <div class="sidebar">
                    <div class="widget">
                      <div class="card-small">
                        <button
                          class="btn btn-primary btn-block"
                          type="submit"
                          onclick="location.href='#/blog/createBlog';return false;"
                        >
                          新規投稿
                        </button>
                      </div>
                      <h2 class="widgettitle">おススメブログ</h2>
                      <div class="cards-small">
                        <div class="card-small">
                          <div class="card-small-image">
                            <a href="listing-detail.html">
                              <img
                                src="../../assets/img/tmp/product-2.jpg"
                                alt="Tasty Brazil Coffee"
                              />
                            </a>
                          </div>
                          <!-- /.card-small-image -->

                          <div class="card-small-content">
                            <h3>
                              <a href="listing-detail.html"
                                >成長を実感できています！</a
                              >
                            </h3>
                            <h4>
                              <a href="listing-detail.html">土生さん</a>
                            </h4>

                            <div class="card-small-price">$180 / person</div>
                          </div>
                          <!-- /.card-small-content -->
                        </div>
                        <!-- /.card-small -->
                      </div>
                      <!-- /.cards-small -->

                      <div class="cards-small">
                        <div class="card-small">
                          <div class="card-small-image">
                            <a href="listing-detail.html">
                              <img
                                src="../../assets/img/tmp/product-3.jpg"
                                alt="Healthy Breakfast"
                              />
                            </a>
                          </div>
                          <!-- /.card-small-image -->

                          <div class="card-small-content">
                            <h3>
                              <a href="listing-detail.html"
                                >画面デザインの勉強中です</a
                              >
                            </h3>
                            <h4>
                              <a href="listing-detail.html">王さん</a>
                            </h4>

                            <div class="card-small-price">$180 / person</div>
                          </div>
                          <!-- /.card-small-content -->
                        </div>
                        <!-- /.card-small -->
                      </div>
                      <!-- /.cards-small -->

                      <div class="cards-small">
                        <div class="card-small">
                          <div class="card-small-image">
                            <a href="listing-detail.html">
                              <img
                                src="../../assets/img/tmp/product-4.jpg"
                                alt="Coffee &amp; Newspaper"
                              />
                            </a>
                          </div>
                          <!-- /.card-small-image -->

                          <div class="card-small-content">
                            <h3>
                              <a href="listing-detail.html"
                                >Coffee &amp; Newspaper</a
                              >
                            </h3>
                            <h4>
                              <a href="listing-detail.html"
                                >New York / Village</a
                              >
                            </h4>

                            <div class="card-small-price">$180 / person</div>
                          </div>
                          <!-- /.card-small-content -->
                        </div>
                        <!-- /.card-small -->
                      </div>
                      <!-- /.cards-small -->
                    </div>
                    <!-- /.widget -->

                    <div class="widget">
                      <h2 class="widgettitle">検索</h2>

                      <div class="background-white p20">
                        <form method="post" action="?">
                          <div class="form-group">
                            <label for>Keyword</label>
                            <input type="text" class="form-control" name id />
                          </div>
                          <!-- /.form-group -->

                          <div class="form-group">
                            <label for>Category</label>

                            <select
                              class="form-control"
                              title="Select Category"
                            >
                              <option>Automotive</option>
                              <option>Real Estate</option>
                            </select>
                          </div>
                          <!-- /.form-group -->

                          <div class="form-group">
                            <label for>Location</label>
                            <select
                              class="form-control"
                              title="Select Location"
                            >
                              <option>New York</option>
                              <option>San Francisco</option>
                            </select>
                          </div>
                          <!-- /.form-group -->

                          <div class="form-group">
                            <label for>Starting Price</label>
                            <input type="text" class="form-control" name id />
                          </div>
                          <!-- /.form-group -->

                          <button
                            class="btn btn-primary btn-block"
                            type="submit"
                          >
                            検索
                          </button>
                        </form>
                      </div>
                    </div>
                    <!-- /.widget -->

                    <div class="widget">
                      <h2 class="widgettitle">Working Hours</h2>

                      <div class="p20 background-white">
                        <div class="working-hours">
                          <div class="day clearfix">
                            <span class="name">Mon</span>
                            <span class="hours">
                              07:00 AM - 07:00 PM
                            </span>
                          </div>
                          <!-- /.day -->

                          <div class="day clearfix">
                            <span class="name">Tue</span>
                            <span class="hours">
                              07:00 AM - 07:00 PM
                            </span>
                          </div>
                          <!-- /.day -->

                          <div class="day clearfix">
                            <span class="name">Wed</span>
                            <span class="hours">
                              07:00 AM - 07:00 PM
                            </span>
                          </div>
                          <!-- /.day -->

                          <div class="day clearfix">
                            <span class="name">Thu</span>
                            <span class="hours">
                              07:00 AM - 07:00 PM
                            </span>
                          </div>
                          <!-- /.day -->

                          <div class="day clearfix">
                            <span class="name">Fri</span>
                            <span class="hours">
                              07:00 AM - 07:00 PM
                            </span>
                          </div>
                          <!-- /.day -->

                          <div class="day clearfix">
                            <span class="name">Sat</span>
                            <span class="hours">
                              07:00 AM - 02:00 PM
                            </span>
                          </div>
                          <!-- /.day -->

                          <div class="day clearfix">
                            <span class="name">Sun</span>
                            <span class="hours">Closed</span>
                          </div>
                          <!-- /.day -->
                        </div>
                      </div>
                    </div>
                    <!-- /.widget -->

                    <div class="widget">
                      <h2 class="widgettitle">Categories</h2>

                      <ul class="menu">
                        <li>
                          <a href="#">Automotive</a>
                        </li>
                        <li>
                          <a href="#">Jobs</a>
                        </li>
                        <li>
                          <a href="#">Nightlife</a>
                        </li>
                        <li>
                          <a href="#">Services</a>
                        </li>
                        <li>
                          <a href="#">Transportation</a>
                        </li>
                        <li>
                          <a href="#">Real Estate</a>
                        </li>
                        <li>
                          <a href="#">Restaurants</a>
                        </li>
                      </ul>
                      <!-- /.menu -->
                    </div>
                    <!-- /.wifget -->

                    <div class="widget">
                      <h2 class="widgettitle">Archives</h2>

                      <ul class="menu">
                        <li>
                          <a href="#">
                            August
                            <strong class="pull-right">12</strong>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            July
                            <strong class="pull-right">23</strong>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            June
                            <strong class="pull-right">53</strong>
                          </a>
                        </li>
                      </ul>
                      <!-- /.menu -->
                    </div>
                    <!-- /.wifget -->
                  </div>
                  <!-- /.sidebar -->
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
import { Message } from "element-ui";
/* eslint-disable */
export default {
  data() {
    return {
      page: 1,
      length:0,
      tableData: [],
      search: "",
      displayLists: [],
      pageSize: 6,
    };
  },
  mounted() {
    var that = this;
    //
    this.$store
      .dispatch("blog/getBlogList", this.$route.query.userid)
      .then((res) => {
        this.$nextTick().then(function() {
          const blogInfo = that.$store.getters.get_content;
          that.tableData = blogInfo;

          that.length = Math.ceil(that.tableData.length/that.pageSize);
          that.displayLists = that.tableData.slice(0,that.pageSize);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    pageChange: function(pageNumber){
    this.displayLists = this.tableData.slice(this.pageSize*(pageNumber -1), this.pageSize*(pageNumber));
  },

    getBlogDetail(id) {
      //apiからサーバーに命令をだす。(store action)
      // console.log(`val = ${JSON.stringify(row)}`)
      //   console.log(`val = ${JSON.stringify(row)}`);
      // this.$router.push("/blogDetail");
      // this.$store.dispatch("blog/getBlogDetail",row.id)
      // this.$store.dispatch("blog/getBlogDetail",row.id)
      // .then(res =>{   //成功の場合
      this.$router.push("/blog/blogDetail?id=" + id);
      // }).catch(error =>{
      //   console.log("err=====");
      // })
    },
    blogEdit(id) {
      //apiからサーバーに命令をだす。(store action)
      // console.log(`val = ${JSON.stringify(row)}`);
      // this.$router.push("/blogDetail");
      // this.$store.dispatch("blog/getBlogDetail",row.id)
      this.$store
        .dispatch("blog/getBlogDetail", id)
        .then((res) => {
          //成功の場合
          this.$router.push("/blog/blogEdit?id=" + id);
        })
        .catch((error) => {
          console.log("err=====");
        });
    },
    // handleEdit(index, row) {
    //   console.log(index, row)
    // },
    blogDelete(id) {
      // console.log(`val = ${JSON.stringify(row)}`);
      this.$store
        .dispatch("blog/blogDelete", id)
        .then((res) => {
          //成功の場合
          var that = this;
          this.$store
            .dispatch("blog/getBlogList")
            .then((res) => {
              this.$nextTick().then(function() {
                const blogInfo = that.$store.getters.get_content;
                that.tableData = blogInfo;
              });
              Message({
                message: "削除OK",
                type: "success",
                duration: 5 * 1000,
              });
            })
            .catch((err) => {
              console.log("err-------");
            });
        })
        .catch((error) => {
          console.log("err=====");
        });
    },
  },
  filters: {
    content_slice: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.slice(0, 100) + "....";
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