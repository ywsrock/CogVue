<template>
<div id="Top">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
    />
    <!-- <link rel="shortcut icon" type="image/x-icon" href="assets/favicon.png">-->
    <link rel="shortcut icon" type="image/x-icon" href="../../assets/favicon.png" />
    <title>メイン</title>
  </head>

  <body class="orig-row">
    <div class="page-wrapper">
      <div id="header" class="header"></div>

      <div class="main">
        <div class="main-inner" style="padding: 0px !important;">
          <div class="content">
            <!-- モーダル -->
            <div class="container">
              <div v-if="isModalShow" class="modal-background">
                <div
                  class="background-white p20 mb30"
                  style="width: 70%; height: 70%; position: absolute; top: 15%; left: 15%;"
                >
                  <h3 class="page-title">メンテナンスのお知らせ (2020/09/18)</h3>
                  <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>

                  <div
                    style="text-align: right;margin-bottom: 0;position: absolute;bottom: 20px;right: 20px;"
                  >
                    <button
                      @click="isModalShow = false"
                      type="button"
                      class="btn btn-primary mr-2"
                    >閉じる</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- モーダル -->

            <!-- スライダー -->
            <div class="container">
              <div class="hero-slider">
                <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner" role="listbox">
                    <div class="item active">
                      <div
                        class="item-bg"
                        style="background-image: url('../../assets/slider-2.jpg');"
                      ></div>
                      <img
                        src="../../assets/img/tmp/slider-2.jpg"
                        alt
                        style="height:400px; width:100vw;"
                      />

                      <div class="carousel-caption">
                        <div class="hero-slider-content">
                          <h1>話題のサプリをプレゼント</h1>

                          <div class="hero-slider-rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                          </div>
                          <!-- /.card-simple-rating -->
                        </div>
                        <!-- /.hero-slider-content -->
                      </div>
                      <!-- /.carousel-caption -->
                    </div>
                    <!-- /.item -->

                    <div class="item">
                      <div
                        class="item-bg"
                        style="background-image: url('assets/img/tmp/slider-1.jpg')"
                      ></div>
                      <img
                        src="../../assets/img/tmp/slider-1.jpg"
                        style="height:400px; width:100vw;"
                        alt
                      />

                      <div class="carousel-caption">
                        <div class="hero-slider-content">
                          <h1>今だけお得!!半額キャンペーン!!</h1>

                          <div class="hero-slider-rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                          </div>
                          <!-- /.card-simple-rating -->
                        </div>
                        <!-- /.hero-slider-content -->
                      </div>
                      <!-- /.carousel-caption -->
                    </div>
                    <!-- /.item -->

                    <div class="item">
                      <div
                        class="item-bg"
                        style="background-image: url('assets/img/tmp/slider-3.jpg')"
                      ></div>
                      <img
                        src="../../assets/img/tmp/slider-3.jpg"
                        alt
                        style="height:400px; width:100vw;"
                      />

                      <div class="carousel-caption">
                        <div class="hero-slider-content">
                          <h1>口コミで注目を集める商品はコチラ!!</h1>

                          <div class="hero-slider-rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                          </div>
                          <!-- /.card-simple-rating -->
                        </div>
                        <!-- /.hero-slider-content -->
                      </div>
                      <!-- /.carousel-caption -->
                    </div>
                    <!-- /.item -->
                  </div>
                  <!-- /.carousel-inner -->

                  <!-- Controls -->
                  <a
                    class="left carousel-control"
                    href="#carousel-example-generic"
                    role="button"
                    data-slide="prev"
                  >
                    <i class="fa fa-long-arrow-left"></i>
                  </a>

                  <a
                    class="right carousel-control"
                    href="#carousel-example-generic"
                    role="button"
                    data-slide="next"
                  >
                    <i class="fa fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <!-- スライダー -->

            <div class="container">
              <div class="block background-white fullwidth pt0 pb0">
                <div class="row">
                  <div class="col-sm-6 background-white p20">
                    <div class="page-header">
                      <h1>お知らせ</h1>
                    </div>
                    <table class="table mb0" style="color:black;">
                      <tbody>
                        <tr
                          v-for="information in informations"
                          :key="information.id"
                          style="color:black;border-bottom: solid 1px #d8d8d8;"
                        >
                          <td>
                            <span>
                              <strong>{{ information.title }}</strong>
                              {{ "(" + information.from + ")" }}
                            </span>
                            <br />
                            <a
                              @click="sohwInfoModal($event)"
                              style="color:black;"
                            >{{ information.content }}</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div style="text-align:right;">
                      <a class="mt-5">お知らせ一覧>></a>
                    </div>
                  </div>

                  <div class="col-sm-6 background-white p20">
                    <div class="page-header">
                      <h1>新着商品</h1>
                    </div>

                    <div class="row cards-system">
                      <div class="card-system col-sm-6" style="margin: 0px;">
                        <div class="card-system-inner">
                          <div
                            class="card-system-image"
                            style="background-image: url('https://www.cells.co.jp/daityo-p/wp-content/themes/dp-fancie-note-business/img/post_thumbnail/noimage.png');background-size: contain;"
                          >
                            <a href="listing-detail.html"></a>
                          </div>
                          <!-- /.card-system-image -->

                          <div class="card-system-content">
                            <h2>
                              <a href="listing-detail.html">商品A</a>
                            </h2>
                            <h3>テキストテキストテキストテキスト</h3>
                          </div>
                        </div>
                      </div>
                      <!-- /.card-system -->

                      <div class="card-system col-sm-6" style="margin: 0px;">
                        <div class="card-system-inner">
                          <div
                            class="card-system-image"
                            style="background-image: url('https://www.cells.co.jp/daityo-p/wp-content/themes/dp-fancie-note-business/img/post_thumbnail/noimage.png');background-size: contain;"
                          >
                            <a href="listing-detail.html"></a>
                          </div>
                          <!-- /.card-system-image -->

                          <div class="card-system-content">
                            <h2>
                              <a href="listing-detail.html">商品B</a>
                            </h2>
                            <h3>テキストテキストテキストテキスト</h3>
                          </div>
                        </div>
                      </div>
                      <!-- /.card-system -->

                      <div class="card-system col-sm-6" style="margin: 0px;">
                        <div class="card-system-inner">
                          <div
                            class="card-system-image"
                            style="background-image: url('https://www.cells.co.jp/daityo-p/wp-content/themes/dp-fancie-note-business/img/post_thumbnail/noimage.png');background-size: contain;"
                          >
                            <a href="listing-detail.html"></a>
                          </div>
                          <!-- /.card-system-image -->

                          <div class="card-system-content">
                            <h2>
                              <a href="listing-detail.html">商品C</a>
                            </h2>
                            <h3>テキストテキストテキストテキスト</h3>
                          </div>
                        </div>
                      </div>
                      <!-- /.card-system -->

                      <div class="card-system col-sm-6" style="margin: 0px;">
                        <div class="card-system-inner">
                          <div
                            class="card-system-image"
                            style="background-image: url('https://www.cells.co.jp/daityo-p/wp-content/themes/dp-fancie-note-business/img/post_thumbnail/noimage.png');background-size: contain;"
                          >
                            <a href="listing-detail.html"></a>
                          </div>
                          <!-- /.card-system-image -->

                          <div class="card-system-content">
                            <h2>
                              <a href="listing-detail.html">商品D</a>
                            </h2>
                            <h3>テキストテキストテキストテキスト</h3>
                          </div>
                        </div>
                      </div>
                      <!-- /.card-system -->
                    </div>
                    <div style="text-align:right;">
                      <a class="mt-5">新着商品一覧>></a>
                    </div>

                    <!-- /.cards-system -->
                  </div>
                </div>
              </div>

              <div class="page-header" style="margin-top: 20px !important;">
                <h1>新着ブログ</h1>
                <ul id="listing-detail-location" class="nav nav-tabs" role="tablist">
                  <li role="presentation" class="active">
                    <a
                      href="#simple-map-panel"
                      aria-controls="simple-map-panel"
                      role="tab"
                      data-toggle="tab"
                    >
                      <i class="fa fa-database"></i>記憶力
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="#street-view-panel"
                      aria-controls="street-view-panel"
                      role="tab"
                      data-toggle="tab"
                    >
                      <i class="fa fa-car"></i>注意力
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="#street-view-panel"
                      aria-controls="street-view-panel"
                      role="tab"
                      data-toggle="tab"
                    >
                      <i class="fa fa-map"></i>計画力
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="#street-view-panel"
                      aria-controls="street-view-panel"
                      role="tab"
                      data-toggle="tab"
                    >
                      <i class="fa fa-book"></i>見当識
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="#street-view-panel"
                      aria-controls="street-view-panel"
                      role="tab"
                      data-toggle="tab"
                    >
                      <i class="fa fa-street-view"></i>空間認識力
                    </a>
                  </li>
                </ul>
              </div>
              <div class="posts row">
                <template v-for="(blog, index) in blogList">
                  <div v-if="index < 4" class="col-sm-6" :key="blog.id">
                    <div
                      class="post post-boxed"
                      style="padding: 20px !important;margin: 5px !important;"
                    >
                      <div class="post-image">
                        <img
                          src="https://www.cells.co.jp/daityo-p/wp-content/themes/dp-fancie-note-business/img/post_thumbnail/noimage.png"
                          alt="A Clockwork Origin"
                        />
                        <a
                          class="read-more"
                          :href="'/#/blog/blogDetail?id=' + blog.id"
                          style="font-size: 8px !important; "
                        >詳しく読む</a>
                      </div>
                      <!-- /.post-image -->

                      <div class="post-content">
                        <h2>
                          <a href>{{ blog.title }}</a>
                        </h2>
                        <p>{{ blog.content }}</p>
                      </div>
                      <!-- /.post-content -->

                      <div class="post-meta clearfix">
                        <div class="post-meta-author">
                          By
                          <a href="blog-detail.html">{{ blog.userName }}</a>
                        </div>
                        <!-- /.post-meta-author -->
                        <div class="post-meta-date">08/24/2015</div>
                        <!-- /.post-meta-date -->
                        <div class="post-meta-categories">
                          <i class="fa fa-tags"></i>
                          <a href="blog-detail.html">記憶力</a>
                        </div>
                        <!-- /.post-meta-categories -->
                        <div class="post-meta-comments">
                          <i class="fa fa-comments"></i>
                          <a href="blog-detail.html">3 comments</a>
                        </div>
                        <!-- /.post-meta-more -->
                      </div>
                      <!-- /.post-meta -->
                    </div>
                    <!-- /.post -->
                  </div>
                </template>
              </div>
              <div class="block background-white fullwidth" style="padding-top: 20px !important;">
                <div class="page-header">
                  <h1>カテゴリー</h1>
                </div>

                <div class="orig-row">
                  <div class="col-md-3">
                    <div class="box row">
                      <img
                        class="col-sm-6"
                        style="width: 30% !important;"
                        src="../../assets/img/tmp/u133.png"
                      />
                      <!-- /.box-icon -->
                      <div class="col-sm-6">
                        <h5 style="color:black !important">
                          <strong>５つの認知機能</strong>
                        </h5>
                        <p style="color:black !important">認知機能についてご紹介します。</p>

                        <a href="#">
                          もっと読む
                          <i class="fa fa-chevron-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <!-- /.col-sm-4 -->

                  <div class="col-md-3">
                    <div class="box row">
                      <img
                        class="col-sm-6"
                        style="width: 30% !important;"
                        src="../../assets/img/tmp/u136.png"
                      />

                      <!-- /.box-icon -->
                      <div class="col-sm-6">
                        <h5 style="color:black !important">
                          <strong>研究成果</strong>
                        </h5>
                        <p style="color:black !important">最新の研究成果をご紹介します。</p>

                        <a href="#">
                          もっと読む
                          <i class="fa fa-chevron-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <!-- /.col-sm-4 -->

                  <div class="col-md-3">
                    <div class="box row">
                      <img
                        class="col-sm-6"
                        style="width: 30% !important;"
                        src="../../assets/img/tmp/u138.png"
                      />

                      <div class="col-sm-6">
                        <h5 style="color:black !important">
                          <strong>お悩み</strong>
                        </h5>
                        <p style="color:black !important">認知機能のお悩みをまとめました。</p>

                        <a href="#">
                          もっと読む
                          <i class="fa fa-chevron-right"></i>
                        </a>
                      </div>
                      <!-- /.box-content -->
                    </div>
                  </div>
                  <!-- /.col-sm-4 -->

                  <div class="col-md-3">
                    <div class="box row">
                      <img
                        class="col-sm-6"
                        style="width: 30% !important;height: 80% !important;"
                        src="../../assets/img/tmp/u140.png"
                      />
                      <div class="col-sm-6">
                        <h5 style="color:black !important">
                          <strong>事例</strong>
                        </h5>
                        <p style="color:black !important">認知機能の改善が見られた方を紹介します。</p>

                        <a href="#">
                          もっと読む
                          <i class="fa fa-chevron-right"></i>
                        </a>
                      </div>
                      <!-- /.box-content -->
                    </div>
                  </div>
                  <!-- /.col-sm-4 -->
                </div>
              </div>
            </div>
            <!-- /.container -->
          </div>
          <!-- /.content -->
        </div>
        <!-- /.main-inner -->
      </div>
      <!-- /.main -->

      <div class="footer-bottom">
        <div class="container">
          <div class="footer-bottom-left">&copy; cognisolution</div>
          <!-- /.footer-bottom-left -->

          <div class="footer-bottom-right">
            <ul class="nav nav-pills">
              <li>
                <a href="terms-conditions.html">ご利用規約</a>
              </li>
              <li>
                <a href="contact-1.html">お問い合わせ</a>
              </li>
            </ul>
            <!-- /.nav -->
          </div>
          <!-- /.footer-bottom-right -->
        </div>
        <!-- /.container -->
      </div>
    </div>
    <!-- /.page-wrapper -->
  </body>
</div>
</template>

<script>
export default {
  data() {
    return {
      informations: [],
      blogList: [],
      isModalShow: false
    };
  },
  mounted() {
    this.fetchInformations();
    this.fetchBlogList();
  },
  methods: {
    // 公開されているお知らせを取得
    async fetchInformations() {
      try {
        const res = await this.$store.dispatch("information/getInformations");
        this.informations = res.informationList;
      } catch (err) {
        console.log("err:", err);
      }
    },

    // ブログを取得
    async fetchBlogList() {
      try {
        const res = await this.$store.dispatch("blog/getBlogList");
        this.blogList = res.content;
      } catch (err) {
        console.log("err:", err);
      }
    },
    sohwInfoModal: function($event) {
      $event.preventDefault();
      this.isModalShow = true;
    }
  }
};
</script>
<style>
.modal-background {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  display: block;
  overflow-y: auto;
}
</style>
