<template>
  <div id="blog_detail">
    <body class="">
      <div class="page-wrapper">
        <div id="header" class="header"></div>

        <div class="main">
          <div class="main-inner">
            <div class="container">
              <div class="orig-row">
                <div class="col-sm-8 col-lg-9">
                  <div class="content">
                    <div class="page-title">
                      <h1>{{ blogDetail.title }}</h1>
                      <button @click.prevent="blogEdit(id)">編集する</button>
                      <button  @click.prevent="blogDelete(id)">削除する</button>
                    </div>
                    <!-- /.page-title -->

                    <div class="posts post-detail">
                      <img
                        src="../../assets/img/tmp/blog-1.jpg"
                        alt="A Clockwork Origin"
                      />

                      <div class="post-meta clearfix">
                        <div class="post-meta-author">
                          By
                          <a href="blog-detail.html"
                            >1@1.comさん&nbsp;40代&nbsp;女性</a
                          >
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
                      </div>
                      <!-- /.post-meta -->

                      <div class="post-content">
                        <p class="drop-cap">{{ blogDetail.content }}</p>
                        <img
                          class="post-content-image pull-left"
                          src="../../assets/img/tmp/product-3.jpg"
                          alt="..."
                        />
                        <img
                          class="post-content-image pull-right"
                          src="../../assets/img/tmp/product-9.jpg"
                          alt="..."
                        />
                      </div>
                      <!-- /.post-content -->

                      <div class="post-meta-tags clearfix">
                        Tags:
                        <ul>
                          <li class="tag"><a href="#">Coffee</a></li>
                          <li class="tag"><a href="#">Breakfast</a></li>
                          <li class="tag"><a href="#">Wine</a></li>
                          <li class="tag"><a href="#">Healthy Food</a></li>
                          <li class="tag"><a href="#">Raw Food</a></li>
                        </ul>
                      </div>
                      <!-- /.post-meta -->
                      <br>
                          <!-- <a @click.prevent="getBlogDetail(item.id)"> -->

                      <h2 id="reviews">23 Comments</h2>

                      <div class="comments">
                        <div class="comment">
                          <div class="comment-image">
                            <img
                              src="../../assets/img/tmp/agent-1.jpg"
                              alt=""
                            />
                          </div>
                          <!-- /.comment-image -->

                          <div class="comment-inner">
                            <div class="comment-header">
                              <h2>Nancy Collins</h2>
                              <span class="separator">&#8226;</span>
                              <span class="comment-date">08/24/2015</span>
                              <div class="comment-reply">
                                <a href="#"
                                  ><i class="fa fa-reply"></i> Reply</a
                                >
                              </div>
                              <!-- /.comment-reply -->
                            </div>
                            <!-- /.comment-header -->

                            <div class="comment-content-wrapper">
                              <div class="comment-content">
                                <p>
                                  Quisque aliquet ornare nunc in viverra. Nullam
                                  ornare molestie ligula in luctus. Suspendisse
                                  ac cursus elit. In congue mattis felis, non
                                  hendrerit orci dictum id.
                                </p>
                              </div>
                              <!-- /.comment-content -->
                            </div>
                            <!-- /.comment-content-wrapper -->
                          </div>
                          <!-- /.comment-inner -->

                          <div class="comment comment-children">
                            <div class="comment-image">
                              <img
                                src="../../assets/img/tmp/agent-2.jpg"
                                alt=""
                              />
                            </div>
                            <!-- /.comment-image -->

                            <div class="comment-inner">
                              <div class="comment-header">
                                <h2>Kim Glove</h2>
                                <span class="separator">&#8226;</span>
                                <span class="comment-date">08/24/2015</span>
                                <div class="comment-reply">
                                  <a href="#"
                                    ><i class="fa fa-reply"></i> Reply</a
                                  >
                                </div>
                                <!-- /.comment-reply -->
                              </div>
                              <!-- /.comment-header -->

                              <div class="comment-content-wrapper">
                                <div class="comment-content">
                                  <p>
                                    Quisque aliquet ornare nunc in viverra.
                                    Nullam ornare molestie ligula in luctus.
                                    Suspendisse ac cursus elit. In congue mattis
                                    felis, non hendrerit orci dictum id. Duis et
                                    magna vel est tempus vehicula vitae sit amet
                                    enim. Sed vitae ligula congue.
                                  </p>
                                </div>
                                <!-- /.comment-content -->
                              </div>
                              <!-- /.comment-content-wrapper -->
                            </div>
                            <!-- /.comment-inner -->

                            <div class="comment comment-children">
                              <div class="comment-image">
                                <img
                                  src="../../assets/img/tmp/agent-1.jpg"
                                  alt=""
                                />
                              </div>
                              <!-- /.comment-image -->

                              <div class="comment-inner">
                                <div class="comment-header">
                                  <h2>Nancy Collins</h2>
                                  <span class="separator">&#8226;</span>
                                  <span class="comment-date">08/24/2015</span>
                                  <div class="comment-reply">
                                    <a href="#"
                                      ><i class="fa fa-reply"></i> Reply</a
                                    >
                                  </div>
                                  <!-- /.comment-reply -->
                                </div>
                                <!-- /.comment-header -->

                                <div class="comment-content-wrapper">
                                  <div class="comment-content">
                                    <p>
                                      Nullam ornare molestie ligula in luctus.
                                      Suspendisse ac cursus elit. In congue
                                      mattis felis, non hendrerit orci dictum
                                      id.
                                    </p>
                                  </div>
                                  <!-- /.comment-content -->
                                </div>
                                <!-- /.comment-content-wrapper -->
                              </div>
                              <!-- /.comment-inner -->
                            </div>
                            <!-- /.comment -->
                          </div>
                          <!-- /.comment -->
                        </div>
                        <!-- /.comment -->

                        <div class="comment">
                          <div class="comment-image">
                            <img
                              src="../../assets/img/tmp/agent-5.jpg"
                              alt=""
                            />
                          </div>
                          <!-- /.comment-image -->

                          <div class="comment-inner">
                            <div class="comment-header">
                              <h2>Richard Peterson</h2>
                              <span class="separator">&#8226;</span>
                              <span class="comment-date">08/25/2015</span>
                              <div class="comment-reply">
                                <a href="#"
                                  ><i class="fa fa-reply"></i> Reply</a
                                >
                              </div>
                              <!-- /.comment-reply -->
                            </div>
                            <!-- /.comment-header -->

                            <div class="comment-content-wrapper">
                              <div class="comment-content">
                                <p>
                                  Quisque aliquet ornare nunc in viverra. Nullam
                                  ornare molestie ligula in luctus. Suspendisse
                                  ac cursus elit. In congue mattis felis, non
                                  hendrerit orci dictum id. Duis et magna vel
                                  est tempus vehicula vitae sit amet enim. Sed
                                  vitae ligula congue.
                                </p>
                              </div>
                              <!-- /.comment-content -->
                            </div>
                            <!-- /.comment-content-wrapper -->
                          </div>
                          <!-- /.comment-inner -->
                        </div>
                        <!-- /.comment -->

                        <div class="comment">
                          <div class="comment-image">
                            <img
                              src="../../assets/img/tmp/agent-3.jpg"
                              alt=""
                            />
                          </div>
                          <!-- /.comment-image -->

                          <div class="comment-inner">
                            <div class="comment-header">
                              <h2>Britney White</h2>
                              <span class="separator">&#8226;</span>
                              <span class="comment-date">08/25/2015</span>
                              <div class="comment-reply">
                                <a href="#"
                                  ><i class="fa fa-reply"></i> Reply</a
                                >
                              </div>
                              <!-- /.comment-reply -->
                            </div>
                            <!-- /.comment-header -->

                            <div class="comment-content-wrapper">
                              <div class="comment-content">
                                <p>
                                  Suspendisse ac cursus elit. In congue mattis
                                  felis, non hendrerit orci dictum id. Quisque
                                  aliquet ornare nunc in viverra. Nullam ornare
                                  molestie ligula in luctus.
                                </p>
                              </div>
                              <!-- /.comment-content -->
                            </div>
                            <!-- /.comment-content-wrapper -->
                          </div>
                          <!-- /.comment-inner -->
                        </div>
                        <!-- /.comment -->
                      </div>
                      <!-- /.comments -->

                      <h2>Write a Comment</h2>
                      <form
                        class="background-white p20 add-comment"
                        method="post"
                        action="?"
                      >
                        <p>
                          Required fields are marked
                          <span class="required">*</span>
                        </p>

                        <div class="orig-row">
                          <div class="form-group col-sm-12">
                            <label for=""
                              >Comment <span class="required">*</span></label
                            >
                            <textarea
                              class="form-control"
                              rows="5"
                              id=""
                              required
                            ></textarea>
                          </div>
                          <!-- /.col-sm-12 -->

                          <div class="form-group col-sm-4">
                            <label for=""
                              >Name <span class="required">*</span></label
                            >
                            <input
                              type="text"
                              class="form-control"
                              id=""
                              required
                            />
                          </div>
                          <!-- /.col-sm-4 -->

                          <div class="form-group col-sm-4">
                            <label for=""
                              >Email <span class="required">*</span></label
                            >
                            <input
                              type="email"
                              class="form-control"
                              id=""
                              required
                            />
                          </div>
                          <!-- /.col-sm-4 -->

                          <div class="form-group col-sm-4">
                            <label for="">Website</label>
                            <input type="text" class="form-control" id="" />
                          </div>
                          <!-- /.col-sm-4 -->

                          <div class="col-sm-8">
                            <p class="form-allowed-tags" id="form-allowed-tags">
                              You may use these
                              <abbr title="HyperText Markup Language"
                                >HTML</abbr
                              >
                              tags and attributes:
                              <code
                                >&lt;a href=&quot;&quot; title=&quot;&quot;&gt;
                                &lt;abbr title=&quot;&quot;&gt; &lt;b&gt;
                                &lt;blockquote cite=&quot;&quot;&gt;
                                &lt;cite&gt; &lt;code&gt; &lt;em&gt; &lt;i&gt;
                                &lt;q cite=&quot;&quot;&gt; &lt;s&gt;
                                &lt;strike&gt; &lt;strong&gt;
                              </code>
                            </p>
                          </div>
                          <!-- /.col-sm-8 -->

                          <div class="col-sm-4">
                            <button
                              class="btn btn-primary btn-block"
                              type="submit"
                            >
                              <i class="fa fa-comments"></i>Post Comment
                            </button>
                          </div>
                          <!-- /.col-sm-4 -->
                        </div>
                        <!-- /.row -->
                      </form>
                    </div>
                    <!-- /.post -->
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

                      <h2 class="widgettitle">最近見たブログ</h2>
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
                                >開発が面白くなってきました</a
                              >
                            </h3>
                            <h4><a href="listing-detail.html">加藤さん</a></h4>
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
                                >ガーナに行ってきました</a
                              >
                            </h3>
                            <h4><a href="listing-detail.html">舘山さん</a></h4>

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
                                >javascript最高！！！</a
                              >
                            </h3>
                            <h4><a href="listing-detail.html">閻さん</a></h4>

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
                      <h2 class="widgettitle">簡易検索</h2>

                      <div class="background-white p20">
                        <form method="post" action="?">
                          <div class="form-group">
                            <label for="">Keyword</label>
                            <input
                              type="text"
                              class="form-control"
                              name=""
                              id=""
                            />
                          </div>
                          <!-- /.form-group -->

                          <div class="form-group">
                            <label for="">Category</label>

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
                            <label for="">Location</label>
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
                            <label for="">Starting Price</label>
                            <input
                              type="text"
                              class="form-control"
                              name=""
                              id=""
                            />
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
                            <span class="name">Mon</span
                            ><span class="hours">07:00 AM - 07:00 PM</span>
                          </div>
                          <!-- /.day -->

                          <div class="day clearfix">
                            <span class="name">Tue</span
                            ><span class="hours">07:00 AM - 07:00 PM</span>
                          </div>
                          <!-- /.day -->

                          <div class="day clearfix">
                            <span class="name">Wed</span
                            ><span class="hours">07:00 AM - 07:00 PM</span>
                          </div>
                          <!-- /.day -->

                          <div class="day clearfix">
                            <span class="name">Thu</span
                            ><span class="hours">07:00 AM - 07:00 PM</span>
                          </div>
                          <!-- /.day -->

                          <div class="day clearfix">
                            <span class="name">Fri</span
                            ><span class="hours">07:00 AM - 07:00 PM</span>
                          </div>
                          <!-- /.day -->

                          <div class="day clearfix">
                            <span class="name">Sat</span
                            ><span class="hours">07:00 AM - 02:00 PM</span>
                          </div>
                          <!-- /.day -->

                          <div class="day clearfix">
                            <span class="name">Sun</span
                            ><span class="hours">Closed</span>
                          </div>
                          <!-- /.day -->
                        </div>
                      </div>
                    </div>
                    <!-- /.widget -->

                    <div class="widget">
                      <h2 class="widgettitle">Categories</h2>

                      <ul class="menu">
                        <li><a href="#">Automotive</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Nightlife</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Transportation</a></li>
                        <li><a href="#">Real Estate</a></li>
                        <li><a href="#">Restaurants</a></li>
                      </ul>
                      <!-- /.menu -->
                    </div>
                    <!-- /.wifget -->

                    <div class="widget">
                      <h2 class="widgettitle">Archives</h2>

                      <ul class="menu">
                        <li>
                          <a href="#"
                            >August <strong class="pull-right">12</strong></a
                          >
                        </li>
                        <li>
                          <a href="#"
                            >July <strong class="pull-right">23</strong></a
                          >
                        </li>
                        <li>
                          <a href="#"
                            >June <strong class="pull-right">53</strong></a
                          >
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
      blogDetail: {
        title: "",
        content: "",
      },
    };
  },
  mounted() {
    var that = this;
    // console.log(this.$router.query); 次回の閻餐会
    //ブログ詳細取得
    this.$store
      .dispatch("blog/getBlogDetail", this.$route.query.id)
      .then((res) => {
        //成功の場合
        // this.$router.push("/blogDetail?id=" + this.$route.query.id);
        this.$nextTick().then(function() {
          const content = that.$store.getters.get_content;
          const title = that.$store.getters.get_title;
          that.blogDetail.content = content;
          that.blogDetail.title = title;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    blogEdit(id) {
      //apiからサーバーに命令をだす。(store action)
      // console.log(`val = ${JSON.stringify(row)}`)
      //console.log(`val = ${JSON.stringify(row)}`);
      // this.$router.push("/blogDetail");
      // this.$store.dispatch("blog/getBlogDetail",row.id)
      this.$router.push("/blog/blogEdit?id=" + this.$route.query.id);
      // this.$store
      //   .dispatch("blog/getBlogDetail", this.$route.query.id)
      //   .then((res) => {
      //     //成功の場合
      //     this.$router.push("/blog/blogEdit?id=" + id);
      //   })
      //   .catch((error) => {
      //     console.log("err=====");
      //   });
    },
    // handleEdit(index, row) {
    //   console.log(index, row)
    // },
    blogDelete(id) {
      // console.log(`val = ${JSON.stringify(row)}`);
      this.$store
        .dispatch("blog/blogDelete", this.$route.query.id)
        .then((res) => {
          Message({
            message: "削除OK",
            type: "success",
            duration: 5 * 1000,
          }),
            // ログイン画面に遷移
            this.$router.push({ path: "/blog/blogList" }).catch((err) => {});
        })
        .catch((error) => {
          e.target.disabled = false;
          console.log(error.data);
          console.log("削除失敗");
        });
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
p {
  white-space: pre-wrap;
}
</style>
