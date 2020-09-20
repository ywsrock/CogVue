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
                        style="background-image: url('assets/img/tmp/slider-1.jpg')"
                      ></div>
                      <img
                        src="../../assets/img/tmp/20200920amino.png"
                        style="height:450px; width:100vw;"
                        alt
                      />

                      <div class="carousel-caption">
                        <div class="hero-slider-content">
                          <h1>認知機能改善に運動を!!aminoVITALは運動の強い味方です</h1>

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
                        style="background-image: url('../../assets/20200919houzi.png');"
                      ></div>
                      <img
                        src="../../assets/img/tmp/20200919houzi.png"
                        alt
                        style="height:450px; width:100vw;"
                      />

                      <div class="carousel-caption">
                        <div class="hero-slider-content">
                          <h1>ほうじ茶で「生」。華やかな香りを味わいませんか？</h1>

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
                        style="height:450px; width:100vw;"
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
                  <div class="col-sm-8 background-white p20">
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

                  <div class="col-sm-4 background-white p20 img_outer">
                    <img class="inner_photo" src="../../assets/img/tmp/20200920imuse.png" />
                  </div>
                </div>
              </div>

              <div class="page-header" style="margin-top: 20px !important;">
                <h1 class="mb-5">新着ブログ & 新着商品</h1>
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
                <div class="col-sm-6">
                  <h3 style="margin-top: 0 !important;">新着ブログ</h3>
                  <div
                    class="post post-boxed"
                    style="padding: 10px !important;margin: 5px !important;"
                  >
                    <div class="post-image">
                      <img
                        src="https://www.cells.co.jp/daityo-p/wp-content/themes/dp-fancie-note-business/img/post_thumbnail/noimage.png"
                        alt="A Clockwork Origin"
                      />
                      <a class="read-more" href="#" style="font-size: 8px !important; ">詳しく読む</a>
                    </div>
                    <!-- /.post-image -->

                    <div class="post-content">
                      <h2>
                        <a href>私もコグエボデビューしました！</a>
                      </h2>
                      <p>噂のコグエボを初めて見ました。今年で70歳ですが、何事にも挑戦していきたいと考えています...</p>

                      <div class="post-meta-author">
                        By
                        <a href="blog-detail.html">ユーザー1</a>
                      </div>
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
                    <!-- /.post-content -->
                  </div>
                  <!-- /.post -->

                  <div
                    class="post post-boxed"
                    style="padding: 10px !important;margin: 5px !important;"
                  >
                    <div class="post-image">
                      <img
                        src="https://www.cells.co.jp/daityo-p/wp-content/themes/dp-fancie-note-business/img/post_thumbnail/noimage.png"
                        alt="A Clockwork Origin"
                      />
                      <a class="read-more" href="#" style="font-size: 8px !important; ">詳しく読む</a>
                    </div>
                    <!-- /.post-image -->

                    <div class="post-content">
                      <h2>
                        <a href>昔、よく行く公園で</a>
                      </h2>
                      <p>昔、旦那さんとよく行った公園に行きました。いっぱい昔のことを思い出しました。...</p>

                      <div class="post-meta-author">
                        By
                        <a href="blog-detail.html">ユーザー2</a>
                      </div>
                      <div class="post-meta-categories">
                        <i class="fa fa-tags"></i>
                        <a href="blog-detail.html">記憶力</a>
                      </div>
                      <!-- /.post-meta-categories -->
                      <div class="post-meta-comments">
                        <i class="fa fa-comments"></i>
                        <a href="blog-detail.html">5 comments</a>
                      </div>
                    </div>
                    <!-- /.post-content -->
                  </div>
                  <!-- /.post -->
                  <div
                    class="post post-boxed"
                    style="padding: 10px !important;margin: 5px !important;"
                  >
                    <div class="post-image">
                      <img
                        src="https://www.cells.co.jp/daityo-p/wp-content/themes/dp-fancie-note-business/img/post_thumbnail/noimage.png"
                        alt="A Clockwork Origin"
                      />
                      <a class="read-more" href="#" style="font-size: 8px !important; ">詳しく読む</a>
                    </div>
                    <!-- /.post-image -->

                    <div class="post-content">
                      <h2>
                        <a href>懐かしい！</a>
                      </h2>
                      <p>今日久々に音楽を聴きました。本棚で昔のCDを見つけたんです。聴くと...</p>

                      <div class="post-meta-author">
                        By
                        <a href="blog-detail.html">ユーザー3</a>
                      </div>
                      <div class="post-meta-categories">
                        <i class="fa fa-tags"></i>
                        <a href="blog-detail.html">記憶力</a>
                      </div>
                      <!-- /.post-meta-categories -->
                      <div class="post-meta-comments">
                        <i class="fa fa-comments"></i>
                        <a href="blog-detail.html">2 comments</a>
                      </div>
                    </div>
                  </div>
                  <!-- /.post -->
                  <div
                    class="post post-boxed"
                    style="padding: 10px !important;margin: 5px !important;"
                  >
                    <div class="post-image">
                      <img
                        src="https://www.cells.co.jp/daityo-p/wp-content/themes/dp-fancie-note-business/img/post_thumbnail/noimage.png"
                        alt="A Clockwork Origin"
                      />
                      <a class="read-more" href="#" style="font-size: 8px !important; ">詳しく読む</a>
                    </div>
                    <!-- /.post-image -->

                    <div class="post-content">
                      <h2>
                        <a href>いい天気！</a>
                      </h2>
                      <p>旦那さんとひまわりを見に行きました。いい天気、いい景色でした。</p>

                      <div class="post-meta-author">
                        By
                        <a href="blog-detail.html">ユーザー4</a>
                      </div>
                      <div class="post-meta-categories">
                        <i class="fa fa-tags"></i>
                        <a href="blog-detail.html">記憶力</a>
                      </div>
                      <!-- /.post-meta-categories -->
                      <div class="post-meta-comments">
                        <i class="fa fa-comments"></i>
                        <a href="blog-detail.html">31 comments</a>
                      </div>
                    </div>
                    <!-- /.post-content -->
                  </div>
                  <div
                    class="post post-boxed"
                    style="padding: 10px !important;margin: 5px !important;"
                  >
                    <div class="post-image">
                      <img
                        src="https://www.cells.co.jp/daityo-p/wp-content/themes/dp-fancie-note-business/img/post_thumbnail/noimage.png"
                        alt="A Clockwork Origin"
                      />
                      <a class="read-more" href="#" style="font-size: 8px !important; ">詳しく読む</a>
                    </div>
                    <!-- /.post-image -->

                    <div class="post-content">
                      <h2>
                        <a href>こんなに笑ったのは久しぶり</a>
                      </h2>
                      <p>大学の同級生と久しぶりにあってきました。楽しかったことをたくさん話してこんなに笑っ...</p>

                      <div class="post-meta-author">
                        By
                        <a href="blog-detail.html">ユーザー5</a>
                      </div>
                      <div class="post-meta-categories">
                        <i class="fa fa-tags"></i>
                        <a href="blog-detail.html">記憶力</a>
                      </div>
                      <!-- /.post-meta-categories -->
                      <div class="post-meta-comments">
                        <i class="fa fa-comments"></i>
                        <a href="blog-detail.html">5 comments</a>
                      </div>
                    </div>
                    <!-- /.post-content -->
                  </div>
                  <div style="text-align:right;">
                    <a class="mt-5">ブログ一覧>></a>
                  </div>
                </div>
                <div class="col-sm-6">
                  <h3 style="margin-top: 0 !important;">新着商品</h3>

                  <div
                    class="post post-boxed"
                    style="padding: 10px !important;margin: 5px !important;"
                  >
                    <div class="post-image" style="width: 180px;">
                      <img
                        style="height: 120px;"
                        src="../../assets/img/tmp/20200919koutya.png"
                        alt="A Clockwork Origin"
                      />
                      <a class="read-more" href="#" style="font-size: 8px !important; ">商品を知る</a>
                    </div>
                    <!-- /.post-image -->

                    <div class="post-content">
                      <h2>
                        <a href>午後の紅茶 STRAIGHT TEA</a>
                      </h2>
                      <p>紅茶葉の華やかな香りと心地よい渋みを引き出した、本格アイスストレートティーです。</p>

                      <div class="post-meta-author">購入する</div>
                      <div class="post-meta-author">口コミをみる</div>
                    </div>
                    <!-- /.post-content -->
                  </div>

                  <div
                    class="post post-boxed"
                    style="padding: 10px !important;margin: 5px !important;"
                  >
                    <div class="post-image">
                      <img src="../../assets/img/tmp/20200920imuseeye.png" alt="A Clockwork Origin" />
                      <a class="read-more" href="#" style="font-size: 8px !important; ">商品を知る</a>
                    </div>
                    <!-- /.post-image -->

                    <div class="post-content">
                      <h2>
                        <a href>iMUSE eye（イミューズ アイ）</a>
                      </h2>
                      <p>新発想！ＫＷ(ケーダブリュ)乳酸菌が目の疲労感を軽減。</p>

                      <div class="post-meta-author">購入する</div>
                      <div class="post-meta-author">口コミをみる</div>
                    </div>
                    <!-- /.post-content -->
                  </div>

                  <div
                    class="post post-boxed"
                    style="padding: 10px !important;margin: 5px !important;"
                  >
                    <div class="post-image">
                      <img
                        src="https://www.cells.co.jp/daityo-p/wp-content/themes/dp-fancie-note-business/img/post_thumbnail/noimage.png"
                        alt="A Clockwork Origin"
                      />
                      <a class="read-more" href="#" style="font-size: 8px !important; ">商品を知る</a>
                    </div>
                    <!-- /.post-image -->

                    <div class="post-content">
                      <h2>
                        <a href>商品A</a>
                      </h2>
                      <p>テキストテキストテキストテキストテキストテキスト</p>

                      <div class="post-meta-author">購入する</div>
                      <div class="post-meta-author">口コミをみる</div>
                    </div>
                    <!-- /.post-content -->
                  </div>

                  <div
                    class="post post-boxed"
                    style="padding: 10px !important;margin: 5px !important;"
                  >
                    <div class="post-image">
                      <img
                        src="https://www.cells.co.jp/daityo-p/wp-content/themes/dp-fancie-note-business/img/post_thumbnail/noimage.png"
                        alt="A Clockwork Origin"
                      />
                      <a class="read-more" href="#" style="font-size: 8px !important; ">商品を知る</a>
                    </div>
                    <!-- /.post-image -->

                    <div class="post-content">
                      <h2>
                        <a href>商品B</a>
                      </h2>
                      <p>テキストテキストテキストテキストテキストテキスト</p>

                      <div class="post-meta-author">購入する</div>
                      <div class="post-meta-author">口コミをみる</div>
                    </div>
                    <!-- /.post-content -->
                  </div>

                  <div
                    class="post post-boxed"
                    style="padding: 10px !important;margin: 5px !important;"
                  >
                    <div class="post-image">
                      <img
                        src="https://www.cells.co.jp/daityo-p/wp-content/themes/dp-fancie-note-business/img/post_thumbnail/noimage.png"
                        alt="A Clockwork Origin"
                      />
                      <a class="read-more" href="#" style="font-size: 8px !important; ">商品を知る</a>
                    </div>
                    <!-- /.post-image -->

                    <div class="post-content">
                      <h2>
                        <a href>商品C</a>
                      </h2>
                      <p>テキストテキストテキストテキストテキストテキスト</p>

                      <div class="post-meta-author">購入する</div>
                      <div class="post-meta-author">口コミをみる</div>
                    </div>
                    <!-- /.post-content -->
                  </div>

                  <div style="text-align:right;">
                    <a class="mt-5">新着商品一覧>></a>
                  </div>

                  <!-- /.cards-system -->
                </div>
              </div>
              <div
                class="block background-white fullwidth"
                style="padding-top: 20px !important; margin-bottom: 0px !important;"
              >
                <div class="page-header">
                  <h1>５つの認知機能</h1>
                </div>

                <!-- test -->
                <div class="row" style="display: flex;justify-content: center;align-items: center;">
                  <div class="col-sm-4">
                    <div class="statusbox" style="text-align: center;">
                      <h2>記憶力</h2>
                      <div
                        class="statusbox-content"
                        style="text-align: left; height:150px;"
                      >テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</div>
                      <div style="text-align:right;">
                        <a class="mt-5">詳しく読む>></a>
                      </div>
                    </div>
                    <!-- /.statusbox -->
                  </div>
                  <div class="col-sm-4">
                    <div class="statusbox" style="text-align: center;">
                      <h2>注意力</h2>
                      <div
                        class="statusbox-content"
                        style="text-align: left; height:150px;"
                      >テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</div>
                      <div style="text-align:right;">
                        <a class="mt-5">詳しく読む>></a>
                      </div>
                    </div>
                    <!-- /.statusbox -->
                  </div>
                </div>
                <!-- /.row -->
                <div class="row">
                  <div class="col-sm-4">
                    <div class="statusbox" style="text-align: center;">
                      <h2>計画力</h2>
                      <div
                        class="statusbox-content"
                        style="text-align: left; height:150px;"
                      >テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</div>
                      <div style="text-align:right;">
                        <a class="mt-5">詳しく読む>></a>
                      </div>
                    </div>
                    <!-- /.statusbox -->
                  </div>
                  <div class="col-sm-4">
                    <div class="statusbox" style="text-align: center;">
                      <h2>見当識</h2>
                      <div
                        class="statusbox-content"
                        style="text-align: left; height:150px;"
                      >テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</div>
                      <div style="text-align:right;">
                        <a class="mt-5">詳しく読む>></a>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="statusbox" style="text-align: center;">
                      <h2>空間認識力</h2>
                      <div
                        class="statusbox-content"
                        style="text-align: left; height:150px;"
                      >テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</div>
                      <div style="text-align:right;">
                        <a class="mt-5">詳しく読む>></a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- test -->
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
/* 外枠に設定する class */
.img_outer {
  position: relative;
  margin: 1em 0;
  height: 300px;
  background-color: #9e9;
}

/* 画像に対して指定する class */
.inner_photo {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  height: auto;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
}

.statusbox h2 {
  color: black !important;
  font-size: 18px !important;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important;
}
</style>
