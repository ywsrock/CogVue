<template>
  <div id="blog_top">
    <head>
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="../../assets/favicon.png"
      />

      <title>ブログトップ</title>
    </head>

    <body class="">
      <div class="page-wrapper">
        <div id="header" class="header"></div>

        <div class="main">
          <div class="main-inner">
            <div class="container">
              <div class="content">
                <div class="document-title">
                  <h1>みんなのブログ</h1>

                  <ul class="breadcrumb">
                    <li><a href="#">Personal Experience</a></li>
                  </ul>
                </div>
                <!-- /.document-title -->

                <form class="filter" method="post" action="?">
                  <h2>詳細検索</h2>
                  <div class="orig-row">
                    <div class="col-sm-12 col-md-4">
                      <div class="form-group">
                        <input
                          type="text"
                          placeholder="例) 健康食品など"
                          class="form-control"
                        />
                      </div>
                      <!-- /.form-group -->
                    </div>
                    <!-- /.col-* -->

                    <div class="col-sm-12 col-md-4">
                      <div class="form-group">
                        <select class="form-control" title="年齢">
                          <option>40代以下</option>
                          <option>40-50代</option>
                          <option>50-60代</option>
                          <option>60-70代</option>
                          <option>70代以上</option>
                        </select>
                      </div>
                      <!-- /.form-group -->
                    </div>
                    <!-- /.col-* -->

                    <div class="col-sm-12 col-md-4">
                      <div class="form-group">
                        <select class="form-control" title="カテゴリ">
                          <option value="">記憶力</option>
                          <option value="">注意力</option>
                          <option value="">見当識</option>
                          <option value="">空間認識力</option>
                          <option value="">計画力</option>
                        </select>
                      </div>
                      <!-- /.form-group -->
                    </div>
                    <!-- /.col-* -->
                  </div>
                  <!-- /.row -->

                  <hr />

                  <div class="orig-row">
                    <div class="col-sm-8">
                      <div class="filter-actions">
                        <a href="#"
                          ><i class="fa fa-close"></i>検索条件リセット</a
                        >
                        <a href="#"
                          ><i class="fa fa-save"></i> 検索条件の保存</a
                        >
                      </div>
                      <!-- /.filter-actions -->
                    </div>
                    <!-- /.col-* -->

                    <div class="col-sm-4">
                      <button
                        type="submit"
                        class="btn btn-primary"
                        href=""
                        @click.prevent.stop="getBlogList"
                      >
                        検&nbsp;索
                      </button>
                    </div>
                    <!-- /.col-* -->
                  </div>
                  <!-- /.row -->
                </form>

                <h2 class="page-title">
                  人気ブログ

                  <form method="get" action="?" class="filter-sort">
                    <div class="form-group">
                      <select title="ソート">
                        <option name="date">日付</option>
                        <option name="rating">人気順</option>
                        <option name="title">タイトル</option>
                      </select>
                    </div>
                    <!-- /.form-group -->

                    <div class="form-group">
                      <select>
                        <option name="ASC" selected>昇順</option>
                        <option name="DESC">降順</option>
                      </select>
                    </div>
                    <!-- /.form-group -->
                  </form>
                </h2>
                <!-- /.page-title -->

                <div class="cards-simple-wrapper">
                  <div class="orig-row">
                    <div
                      class="col-sm-6 col-md-4 col-lg-3"
                      v-for="item in displayLists"
                      :key="item.id"
                    >
                      <div
                        class="card-simple"
                        data-background-image="../../../assets/img/tmp/product-1.jpg"
                      >
                        <div class="card-simple-background">
                          <div class="card-simple-content">
                            <a href="blog_detail.html">
                              <h2>
                                {{ item.title }}<br />
                                <small style="color: white;"
                                  >{{ item.userName }}さん</small
                                >
                              </h2>
                            </a>
                            <div class="card-simple-rating">
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star-o"></i>
                            </div>
                            <!-- /.card-rating -->

                            <div class="card-simple-actions">
                              <a href="#" class="fa fa-star-o"></a>
                              <a
                                href="listing-detail.html"
                                class="fa fa-search"
                              ></a>
                              <a href="#" class="fa fa-heart-o"></a>
                            </div>
                            <!-- /.card-simple-actions -->
                          </div>
                          <!-- /.card-simple-content -->

                          <div class="card-simple-label">記憶力</div>

                          <div class="card-simple-price">投稿1週間以内</div>
                        </div>
                        <!-- /.card-simple-background -->
                      </div>
                      <!-- /.card-simple -->
                    </div>
                    <!-- /.col-* -->
                  </div>
                  <!-- /.row -->
                </div>
                <!-- /.cards-simple-wrapper -->
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
export default {
  data() {
    return {
      page: 1,
      length:0,
      tableData: [],
      search: "",
      displayLists: [],
      pageSize: 12,
    };
  },

  mounted() {
    var that = this;
    //
    this.$store
      .dispatch("blog/getBlogList", this.$route.query.userid)
      /* eslint-disable */
      .then((res) => {
        this.$nextTick().then(function() {
          const blogInfo = that.$store.getters.get_content;
          that.tableData = blogInfo;

          that.length = Math.ceil(that.tableData.length/that.pageSize);
          that.displayLists = that.tableData.slice(0,that.pageSize);
        });
      })
      /* eslint-disable */
      .catch((err) => {
        console.log("err-------");
      });
  },

  methods: {
  pageChange: function(pageNumber){
    this.displayLists = this.tableData.slice(this.pageSize*(pageNumber -1), this.pageSize*(pageNumber));
  },

    getBlogList() {
      //apiからサーバーに命令をだす。(store action)
      this.$store
        .dispatch("blog/getBlogList")
        //成功の場合
        .then((res) => {
          let userid = res.userID;
          this.$router.push("/blog/blogList?userid=" + userid);
        })
        //失敗の場合
        .catch();
      console.log("err=====");
    },
  },
};
</script>
<style scoped></style>

<style>
@import "https://fonts.googleapis.com/css?family=Nunito:300,400,700";
@import "../../../public/assets/libraries/font-awesome/css/font-awesome.min.css";
@import "../../../public/assets/libraries/owl.carousel/assets/owl.carousel.css";
@import "../../../public/assets/libraries/colorbox/example1/colorbox.css";
@import "../../../public/assets/libraries/bootstrap-select/bootstrap-select.min.css";
@import "../../../public/assets/libraries/bootstrap-fileinput/fileinput.min.css";
@import "../../../public/assets/css/superlist.css";
</style>
