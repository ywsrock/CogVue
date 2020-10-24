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
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="../../assets/favicon.png"
      />
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
                    <h3 class="page-title">
                      メンテナンスのお知らせ (2020/09/18)
                    </h3>
                    <p>
                      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </p>

                    <div
                      style="text-align: right;margin-bottom: 0;position: absolute;bottom: 20px;right: 20px;"
                    >
                      <button
                        @click="isModalShow = false"
                        type="button"
                        class="btn btn-primary mr-2"
                      >
                        閉じる
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- モーダル -->

              <!-- スライダー -->
              <div class="container">
                <div class="hero-slider">
                  <div
                    id="carousel-example-generic"
                    class="carousel slide"
                    data-ride="carousel"
                  >
                    <div class="carousel-inner" role="listbox">
                      <div class="item active">
                        <div
                          class="item-bg"
                          style="background-image: url('assets/img/tmp/slider-1.jpg')"
                        ></div>
                        <img
                          src="../../assets/img/tmp/20200920rutein.png"
                          style="height:450px; width:100vw;"
                          alt
                        />

                        <div class="carousel-caption">
                          <div class="hero-slider-content">
                            <h1>
                              ぼやけを解消し、はっきり見る力（コントラスト感度）を改善します
                            </h1>

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

                      <div class="item">
                        <div
                          class="item-bg"
                          style="background-image: url('assets/img/tmp/slider-3.jpg')"
                        ></div>
                        <img
                          src="../../assets/img/tmp/20200920tbcwebinar.png"
                          alt
                          style="height:450px; width:100vw;"
                        />

                        <div class="carousel-caption">
                          <div class="hero-slider-content">
                            <h1>
                              今月のテーマは「５つの認知機能を知る～注意力編～」、お見逃しなく!!
                            </h1>

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
                          src="../../assets/img/tmp/20200920amino.png"
                          style="height:450px; width:100vw;"
                          alt
                        />

                        <div class="carousel-caption">
                          <div class="hero-slider-content">
                            <h1>
                              認知機能改善に運動を!!aminoVITALは運動の強い味方です
                            </h1>

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
                          src="../../assets/img/tmp/20200920tbcseminar.png"
                          alt
                          style="height:450px; width:100vw;"
                        />

                        <div class="carousel-caption">
                          <div class="hero-slider-content">
                            <h1>
                              Withコロナ時代の生涯現役に向けた認知症予防セミナーが開催予定です
                            </h1>

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
                                >{{ information.content }}</a
                              >
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div style="text-align:right;">
                        <a class="mt-5">お知らせ一覧>></a>
                      </div>
                    </div>

                    <div class="col-sm-4 background-white p20 img_outer">
                      <img
                        class="inner_photo"
                        src="../../assets/img/tmp/20200920imuse.png"
                      />
                    </div>
                  </div>
                </div>

                <div class="page-header" style="margin-top: 20px !important;">
                  <h1 class="mb-5">新着ブログ & 新着商品</h1>
                  <ul
                    id="listing-detail-location"
                    class="nav nav-tabs"
                    role="tablist"
                  >
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
                      style="padding: 10px !important;margin: 5px !important;height: 140px;"
                    >
                      <div
                        class="post-image"
                        style="height: 120px;object-fit: contain;"
                      >
                        <img
                          src="../../assets/img/tmp/20200920cogevo.png"
                          alt="A Clockwork Origin"
                        />
                        <a
                          class="read-more"
                          href="#"
                          style="font-size: 8px !important; "
                          >詳しく読む</a
                        >
                      </div>
                      <!-- /.post-image -->

                      <div class="post-content">
                        <h2>
                          <a href>私もコグエボデビューしました！</a>
                        </h2>
                        <p>
                          噂のコグエボを初めて見ました。今年で70歳ですが、何事にも挑戦していきたいと考えています...
                        </p>

                        <div class="post-meta-author">
                          By
                          <a href="blog-detail.html">のり</a>
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
                      style="padding: 10px !important;margin: 5px !important;height: 140px;"
                    >
                      <div
                        class="post-image"
                        style="height: 120px;object-fit: contain;"
                      >
                        <img
                          src="../../assets/img/tmp/20200920park.png"
                          alt="A Clockwork Origin"
                        />
                        <a
                          class="read-more"
                          href="#"
                          style="font-size: 8px !important; "
                          >詳しく読む</a
                        >
                      </div>
                      <!-- /.post-image -->

                      <div class="post-content">
                        <h2>
                          <a href>昔、よく行く公園で</a>
                        </h2>
                        <p>
                          昔、旦那さんとよく行った公園に行きました。いっぱい昔のことを思い出しました。...
                        </p>

                        <div class="post-meta-author">
                          By
                          <a href="blog-detail.html">千代</a>
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
                      style="padding: 10px !important;margin: 5px !important;height: 140px;"
                    >
                      <div
                        class="post-image"
                        style="height: 120px;object-fit: contain;"
                      >
                        <img
                          src="../../assets/img/tmp/20200920cd.jpg"
                          alt="A Clockwork Origin"
                        />
                        <a
                          class="read-more"
                          href="#"
                          style="font-size: 8px !important; "
                          >詳しく読む</a
                        >
                      </div>
                      <!-- /.post-image -->

                      <div class="post-content">
                        <h2>
                          <a href>懐かしい！</a>
                        </h2>
                        <p>
                          今日久々に音楽を聴きました。本棚で昔のCDを見つけたんです。聴くと...
                        </p>

                        <div class="post-meta-author">
                          By
                          <a href="blog-detail.html">とおる</a>
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
                      style="padding: 10px !important;margin: 5px !important;height: 140px;"
                    >
                      <div
                        class="post-image"
                        style="height: 120px;object-fit: contain;"
                      >
                        <img
                          src="../../assets/img/tmp/3352188_s.jpg"
                          alt="A Clockwork Origin"
                        />
                        <a
                          class="read-more"
                          href="#"
                          style="font-size: 8px !important; "
                          >詳しく読む</a
                        >
                      </div>
                      <!-- /.post-image -->

                      <div class="post-content">
                        <h2>
                          <a href>いい天気！</a>
                        </h2>
                        <p>
                          旦那さんとひまわりを見に行きました。いい天気、いい景色でした。
                        </p>

                        <div class="post-meta-author">
                          By
                          <a href="blog-detail.html">さちこ</a>
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
                      style="padding: 10px !important;margin: 5px !important;height: 140px;"
                    >
                      <div
                        class="post-image"
                        style="height: 120px;object-fit: contain;"
                      >
                        <img
                          src="../../assets/img/tmp/1963252_s.jpg"
                          alt="A Clockwork Origin"
                        />
                        <a
                          class="read-more"
                          href="#"
                          style="font-size: 8px !important; "
                          >詳しく読む</a
                        >
                      </div>
                      <!-- /.post-image -->

                      <div class="post-content">
                        <h2>
                          <a href>こんなに笑ったのは久しぶり</a>
                        </h2>
                        <p>
                          大学の同級生と久しぶりにあってきました。楽しかったことをたくさん話してこんなに笑っ...
                        </p>

                        <div class="post-meta-author">
                          By
                          <a href="blog-detail.html">けんぞう</a>
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
                      style="padding: 10px !important;margin: 5px !important;height: 140px;"
                    >
                      <div
                        class="post-image"
                        style="height: 120px;object-fit: contain;"
                      >
                        <img
                          style="height: 120px;"
                          src="../../assets/img/tmp/20200920oyasumi.png"
                          alt="A Clockwork Origin"
                        />
                        <a
                          class="read-more"
                          href="#"
                          style="font-size: 8px !important; "
                          >商品を知る</a
                        >
                      </div>
                      <!-- /.post-image -->

                      <div class="post-content">
                        <h2>
                          <a href>おやすみオルニチン 良眠プラス</a>
                        </h2>
                        <p>
                          日本で初めて3つのアミノ酸を機能性関与成分
                          として配合した睡眠ケアサプリメントです。
                        </p>

                        <div class="post-meta-author">購入する</div>
                        <div class="post-meta-author">口コミをみる</div>
                      </div>
                      <!-- /.post-content -->
                    </div>

                    <div
                      class="post post-boxed"
                      style="padding: 10px !important;margin: 5px !important;height: 140px;"
                    >
                      <div
                        class="post-image"
                        style="height: 120px;object-fit: contain;"
                      >
                        <img
                          src="../../assets/img/tmp/20200920imuseeye.png"
                          alt="A Clockwork Origin"
                        />
                        <a
                          class="read-more"
                          href="#"
                          style="font-size: 8px !important; "
                          >商品を知る</a
                        >
                      </div>
                      <!-- /.post-image -->

                      <div class="post-content">
                        <h2>
                          <a href>iMUSE eye（イミューズ アイ）</a>
                        </h2>
                        <p>
                          目の疲労感を軽減する「ＫＷ乳酸菌」が５００億個、さらにうれしいビタミンＥも配合しています。
                        </p>

                        <div class="post-meta-author">購入する</div>
                        <div class="post-meta-author">口コミをみる</div>
                      </div>
                      <!-- /.post-content -->
                    </div>

                    <div
                      class="post post-boxed"
                      style="padding: 10px !important;margin: 5px !important;height: 140px;"
                    >
                      <div
                        class="post-image"
                        style="height: 120px;object-fit: contain;"
                      >
                        <img
                          src="../../assets/img/tmp/20200920candle.jpg"
                          alt="A Clockwork Origin"
                        />
                        <a
                          class="read-more"
                          href="#"
                          style="font-size: 8px !important; "
                          >商品を知る</a
                        >
                      </div>
                      <!-- /.post-image -->

                      <div class="post-content">
                        <h2>
                          <a href>アロマキャンドル</a>
                        </h2>
                        <p>アロマにはヒーリング効果があります。</p>

                        <div class="post-meta-author">購入する</div>
                        <div class="post-meta-author">口コミをみる</div>
                      </div>
                      <!-- /.post-content -->
                    </div>

                    <div
                      class="post post-boxed"
                      style="padding: 10px !important;margin: 5px !important;height: 140px;"
                    >
                      <div
                        class="post-image"
                        style="height: 120px;object-fit: contain;"
                      >
                        <img
                          src="../../assets/img/tmp/20200920candle2.jpg"
                          alt="A Clockwork Origin"
                        />
                        <a
                          class="read-more"
                          href="#"
                          style="font-size: 8px !important; "
                          >商品を知る</a
                        >
                      </div>
                      <!-- /.post-image -->

                      <div class="post-content">
                        <h2>
                          <a href>アロマキャンドル 3個セット</a>
                        </h2>
                        <p>
                          アロマにはヒーリング効果があります。お得な3個セットです。
                        </p>

                        <div class="post-meta-author">購入する</div>
                        <div class="post-meta-author">口コミをみる</div>
                      </div>
                      <!-- /.post-content -->
                    </div>

                    <div
                      class="post post-boxed"
                      style="padding: 10px !important;margin: 5px !important;height: 140px;"
                    >
                      <div
                        class="post-image"
                        style="height: 120px;object-fit: contain;"
                      >
                        <img
                          src="../../assets/img/tmp/20200920kurumi.jpg"
                          alt="A Clockwork Origin"
                        />
                        <a
                          class="read-more"
                          href="#"
                          style="font-size: 8px !important; "
                          >商品を知る</a
                        >
                      </div>
                      <!-- /.post-image -->

                      <div class="post-content">
                        <h2>
                          <a href>国産クルミ</a>
                        </h2>
                        <p>記憶力の向上に効果的です。500円/パック</p>

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
                    <h1>認知機能を学ぶ</h1>
                  </div>
                  <div>
                    <div style="margin: 0 100px 50px 100px; color: black;">
                      <center>
                        <h3>- 概説 -</h3>
                      </center>
                      <p>
                        一億総活躍、生涯現役という言葉にあるように、高齢者でも病気や障害があっても、いつまでも社会参加ができる世の中の到来が報じられています。しかしながら、加齢やストレスにともない認知機能をはじめ様々な機能低下から、心身に不調をきたしたり生活に支障が出たりすることがあります。そして、その結果自立した生活の維持が難しくなる場合があります。
                      </p>
                      <p>
                        &nbsp;&nbsp;認知機能は、認知症や高次脳機能障害、発達障害、統合失調症、うつ病などの医療や支援において重要な概念ですが、介護や育児、ひきこもり、スポーツ障害など私たちの身近にある社会課題とも深く関係があるものです。
                      </p>
                      <div style="text-align:right;">
                        <a
                          href="http://cogniscale.jp/%e3%83%97%e3%83%ad%e3%82%b8%e3%82%a7%e3%82%af%e3%83%88%e3%81%ae%e7%9b%ae%e7%9a%84/"
                          class="mt-5"
                          target="_blank"
                          rel="noopener noreferrer"
                          >引用：株式会社トータルブレインケア
                          認知機能の見える化研究所</a
                        >
                      </div>
                    </div>
                  </div>
                  <!-- 認知機能の説明 -->
                  <div class="row">
                    <div class="col-sm-6" style="position: relative;">
                      <h3 style="margin-top: 0 !important;">認知機能とは</h3>
                      <div class="posts">
                        <div
                          class="post"
                          style="height: 120px; padding-bottom: 5px !important;margin-bottom: 10px !important;position: relative;"
                        >
                          <div
                            class="post-image"
                            style="height: 110px;object-fit: contain;border: solid 1px #e0e0e0;"
                          >
                            <img
                              src="../../assets/img/tmp/kentousiki.png"
                              alt="A Clockwork Origin"
                            />
                            <a
                              class="read-more"
                              target="_blank"
                              rel="noopener noreferrer"
                              href="http://cogniscale.jp/function/disorientation/"
                              style="font-size: 8px !important; "
                              >詳しく読む</a
                            >
                          </div>
                          <!-- /.post-image -->

                          <div class="post-content">
                            <h2>認知機能と見当識</h2>
                            <p>
                              見当識は、現在自身が生活している状況を、周囲との関係と個人経験を結び付けてとらえる能力であり、視覚認知、意識、知覚、注意、記憶、思考などの機能...
                            </p>
                          </div>
                          <!-- /.post-content -->
                        </div>
                        <!-- /.post -->

                        <div
                          class="post"
                          style="height: 120px; padding-bottom: 5px !important;margin-bottom: 10px !important;position: relative;"
                        >
                          <div
                            class="post-image"
                            style="height: 110px;object-fit: contain;border: solid 1px #e0e0e0;"
                          >
                            <img
                              src="../../assets/img/tmp/chuui.png"
                              alt="A Clockwork Origin"
                            />
                            <a
                              class="read-more"
                              href="http://cogniscale.jp/function/attention/"
                              style="font-size: 8px !important;"
                              target="_blank"
                              rel="noopener noreferrer"
                              >詳しく読む</a
                            >
                          </div>
                          <!-- /.post-image -->

                          <div class="post-content">
                            <h2>認知機能と注意機能</h2>
                            <p>
                              注意はその定義が非常に難儀であるが、多くの情報の中から情報を選択する心的機能であり、脳の限られた処理資源を有効に活用するために...
                            </p>
                          </div>
                          <!-- /.post-content -->
                        </div>
                        <!-- /.post -->

                        <div
                          class="post"
                          style="height: 120px; padding-bottom: 5px !important;margin-bottom: 10px !important;position: relative;"
                        >
                          <div
                            class="post-image"
                            style="height: 110px;object-fit: contain;border: solid 1px #e0e0e0;"
                          >
                            <img
                              src="../../assets/img/tmp/kioku.png"
                              alt="A Clockwork Origin"
                            />
                            <a
                              class="read-more"
                              href="http://cogniscale.jp/function/memory/"
                              style="font-size: 8px !important;"
                              target="_blank"
                              rel="noopener noreferrer"
                              >詳しく読む</a
                            >
                          </div>
                          <!-- /.post-image -->

                          <div class="post-content">
                            <h2>認知機能と記憶</h2>
                            <p>
                              私たちの生活の中で「記憶」は、約束の実行やものごとを学ぶ際に必要なだけでなく、思い出や希望など、心の支えとしても大切な役割を...
                            </p>
                          </div>
                          <!-- /.post-content -->
                        </div>
                        <!-- /.post -->

                        <div
                          class="post"
                          style="height: 120px; padding-bottom: 5px !important;margin-bottom: 10px !important;position: relative;"
                        >
                          <div
                            class="post-image"
                            style="height: 110px;object-fit: contain;border: solid 1px #e0e0e0;"
                          >
                            <img
                              src="../../assets/img/tmp/suikou.png"
                              alt="A Clockwork Origin"
                            />
                            <a
                              class="read-more"
                              href="http://cogniscale.jp/function/executive-function/"
                              style="font-size: 8px !important;"
                              target="_blank"
                              rel="noopener noreferrer"
                              >詳しく読む</a
                            >
                          </div>
                          <!-- /.post-image -->

                          <div class="post-content">
                            <h2>認知機能と遂行機能</h2>
                            <p>
                              遂行機能は、ある目標を達成させるために計画的に段取りをつけて行動する機能で、人が社会的、自立的、創造的な活動を行うのに非常な重要な機能とされてます...
                            </p>
                          </div>
                          <!-- /.post-content -->
                        </div>
                        <!-- /.post -->

                        <div
                          class="post"
                          style="height: 120px; padding-bottom: 5px !important;margin-bottom: 10px !important;position: relative;"
                        >
                          <div
                            class="post-image"
                            style="height: 110px;object-fit: contain;border: solid 1px #e0e0e0;"
                          >
                            <img
                              src="../../assets/img/tmp/kuukan.png"
                              alt="A Clockwork Origin"
                            />
                            <a
                              class="read-more"
                              href="http://cogniscale.jp/function/spatial-perception/"
                              style="font-size: 8px !important;"
                              target="_blank"
                              rel="noopener noreferrer"
                              >詳しく読む</a
                            >
                          </div>
                          <!-- /.post-image -->

                          <div class="post-content">
                            <h2>認知機能と空間認知機能</h2>
                            <p>
                              空間認知とは「3次元空間において自己と空間の相対的位置関係を把握すること」と定義されています。3次元における空間認知能力は日常生活に...
                            </p>
                          </div>
                          <!-- /.post-content -->
                        </div>
                        <!-- /.post -->
                      </div>
                      <!-- /.posts -->
                      <div style="position: absolute; right: 0;">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="http://cogniscale.jp/%e3%83%97%e3%83%ad%e3%82%b8%e3%82%a7%e3%82%af%e3%83%88%e3%81%ae%e7%9b%ae%e7%9a%84/"
                          class="mt-5"
                          >認知機能をもっと学ぶ>></a
                        >
                      </div>
                    </div>
                    <!-- /.col-* -->

                    <div class="col-sm-6" style="position: relative;">
                      <h3 style="margin-top: 0 !important;">
                        認知機能改善・最新情報
                      </h3>
                      <div class="events">
                        <div
                          class="event"
                          style="margin-bottom: 10px; padding-bottom: 5px;"
                        >
                          <div class="event-date">
                            <span class="day">25</span>
                            <span class="month">9月</span>
                          </div>
                          <!-- /.event-date -->

                          <div class="event-content">
                            <h2 style="margin-bottom: 0;">
                              認知機能向上に効果が見られた事例をご紹介
                            </h2>
                            <p>
                              CogEvo測定結果データとブログデータから認知機能向上に効果があった事例をPickUpしてご紹介いたします。
                            </p>
                          </div>
                          <!-- /.event-content -->
                        </div>
                        <!-- /.event -->

                        <div
                          class="event"
                          style="margin-bottom: 10px; padding-bottom: 5px;"
                        >
                          <div class="event-date">
                            <span class="day">18</span>
                            <span class="month">9月</span>
                          </div>
                          <!-- /.event-date -->

                          <div class="event-content">
                            <h2 style="margin-bottom: 0;">
                              第8回 CogniSolutionマガジン
                            </h2>
                            <p>
                              今回の記事では、認知機能を低下させてしまうような生活習慣と、その対策について掲載させていただきました。
                            </p>
                          </div>
                          <!-- /.event-content -->
                        </div>
                        <!-- /.event -->

                        <div
                          class="event"
                          style="margin-bottom: 10px; padding-bottom: 5px;"
                        >
                          <div class="event-date">
                            <span class="day">10</span>
                            <span class="month">9月</span>
                          </div>
                          <!-- /.event-date -->

                          <div class="event-content">
                            <h2 style="margin-bottom: 0;">
                              ストレス軽減で認知機能向上を
                            </h2>
                            <p>
                              認知機能はストレスのような外的要因によっても低下するとされています。ストレスを軽減することで認知機能向上をはかりましょう。
                            </p>
                          </div>
                          <!-- /.event-content -->
                        </div>
                        <!-- /.event -->
                        <div
                          class="event"
                          style="margin-bottom: 10px; padding-bottom: 5px;"
                        >
                          <div class="event-date">
                            <span class="day">03</span>
                            <span class="month">9月</span>
                          </div>
                          <!-- /.event-date -->

                          <div class="event-content">
                            <h2 style="margin-bottom: 0;">
                              第7回 CogniSolutionマガジン
                            </h2>
                            <p>
                              今回の記事では、認知機能の向上に関するサプリメントを特集させていただきました。
                            </p>
                            <!-- /.event-time -->
                          </div>
                          <!-- /.event-content -->
                        </div>
                        <!-- /.event -->

                        <div
                          class="event"
                          style="margin-bottom: 10px; padding-bottom: 5px;"
                        >
                          <div class="event-date">
                            <span class="day">21</span>
                            <span class="month">8月</span>
                          </div>
                          <!-- /.event-date -->

                          <div class="event-content">
                            <h2 style="margin-bottom: 0;">
                              認知機能をもっとよく知ろう
                            </h2>
                            <p>
                              認知機能に関する基礎知識を動画形式で配信いたします。是非、ご覧になってください。
                            </p>
                          </div>
                          <!-- /.event-content -->
                        </div>
                        <!-- /.event -->

                        <div
                          class="event"
                          style="margin-bottom: 10px; padding-bottom: 5px;"
                        >
                          <div class="event-date">
                            <span class="day">07</span>
                            <span class="month">8月</span>
                          </div>
                          <!-- /.event-date -->

                          <div class="event-content">
                            <h2 style="margin-bottom: 0;">
                              第6回 CogniSolutionマガジン
                            </h2>
                            <p>
                              今回の記事では、Cogevoを使った効果的な認知機能トレーニングの方法を特集させていただきました。
                            </p>
                          </div>
                          <!-- /.event-content -->
                        </div>
                      </div>

                      <!-- /.events -->
                      <div style="position: absolute; right: 0;">
                        <a class="mt-5">これまで配信された情報を確認する>></a>
                      </div>
                    </div>
                    <!-- /.col-* -->
                  </div>
                  <!-- /.row -->
                  <!-- 認知機能の説明 -->
                </div>
                <!-- ボトムバナー -->
                <div class="row">
                  <div class="col-sm-4 img_outer" style="height: 150px;">
                    <img
                      class="inner_photo"
                      style="max-width: 95%;"
                      src="../../assets/img/tmp/20200920orunitin.png"
                    />
                  </div>
                  <div class="col-sm-4 img_outer" style="height: 150px;">
                    <img
                      class="inner_photo"
                      style="max-width: 95%;"
                      src="../../assets/img/tmp/20200920sitorurin.png"
                    />
                  </div>
                  <div class="col-sm-4 img_outer" style="height: 150px;">
                    <img
                      class="inner_photo"
                      style="max-width: 95%;"
                      src="../../assets/img/tmp/20200920orunitinplus.png"
                    />
                  </div>
                </div>

                <!-- ボトムバナー -->
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
      isModalShow: false,
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
    },
  },
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
