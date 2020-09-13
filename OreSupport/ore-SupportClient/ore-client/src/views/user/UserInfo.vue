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
          <div class="main-inner">
            <div class="content">
              <div class="mt-80">
                <div class="hero-video">
                  <video preload="metadata" autoplay="" muted="" loop="">
                    <source
                      src="../../assets/img/tmp/video.mp4"
                      type="video/mp4"
                    />
                  </video>

                  <div class="video-overlay"></div>

                  <div class="container">
                    <div
                      class="col-sm-6 col-xs-12 col-sm-push-6 col-xs-offset-0 "
                    >
                      <h1>おれさぽ</h1>
                      <p>認知機能ソリューション</p>
                    </div>
                    <!-- /.col-* -->

                    <div class="orig-row">
                      <div class="col-sm-6 col-xs-12 col-sm-pull-6">
                        <button
                          class="btn btn-primary col-md-5 col-xs-12 "
                          type="button"
                          onclick="location.href='./cogevo/cogevo_dashbord.html'"
                        >
                          自分の状態を測る
                        </button>

                        <button
                          class="btn btn-primary col-md-5 col-xs-12 "
                          type="button"
                          onclick="location.href='./blog/blog_top.html'"
                        >
                          体験談を読む
                        </button>

                        <button
                          class="btn btn-primary col-md-5 col-xs-12"
                          type="button"
                          onclick="location.href='./solution/solution_top.html'"
                        >
                          商品を購入する
                        </button>

                        <button
                          class="btn btn-primary col-md-5 col-xs-12"
                          type="button"
                          onclick="location.href='./index.html'"
                        >
                          認知機能を知る
                        </button>
                      </div>
                      <!-- /.col-* -->
                    </div>
                    <!-- /.row -->
                  </div>
                  <!-- /.container -->
                </div>
                <!-- /.hero-video -->
              </div>

              <div class="container">
                <div class="block background-white fullwidth pt0 pb0">
                  <div class="background-white p20">
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
                            <span
                              ><strong>
                                {{ information.title }}
                              </strong>
                              {{ "(" + information.from + ")" }} </span
                            ><br />
                            <span>
                              {{ information.content }}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="page-header">
                  <h1>最新ブログ記事 &amp; 商品</h1>
                  <p>５つの認知機能に関する記事と商品</p>
                </div>
                <!-- /.page-header -->

                <div class="cards-simple-wrapper">
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
                <!-- /.cards-simple-wrapper -->

                <div class="block background-white fullwidth mt80">
                  <div class="orig-row">
                    <div class="col-sm-6">
                      <div class="posts">
                        <template v-for="(blog, index) in blogList">
                          <div v-if="index < 3" class="post" :key="blog.id">
                            <div class="post-image">
                              <img
                                src="../../assets/img/tmp/tablet_family.png"
                                alt=""
                              />
                              <a
                                class="read-more"
                                :href="'/#/blog/blogDetail?id=' + blog.id"
                                >閲覧</a
                              >
                            </div>
                            <!-- /.post-image -->

                            <div class="post-content">
                              <div class="post-label">記憶力</div>
                              <!-- /.post-label -->
                              <div class="post-date">07/12/2020</div>
                              <!-- /.post-date -->
                              <h2>
                                {{ blog.title }}<br /><small
                                  >{{ blog.userName }}さん</small
                                >
                              </h2>
                              <p>{{ blog.content.substr(0, 20) }}...</p>
                            </div>
                            <!-- /.post-content -->
                          </div>
                        </template>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <!-- level 1 -->
                      <div class="col-lg-6 col-md-12">
                        <div
                          class="card-simple"
                          data-background-image="../../assets/img/product/3.jpg"
                        >
                          <div class="card-simple-background">
                            <div class="card-simple-content">
                              <h2>
                                <a href="blog/blog_detail.html">
                                  記憶力に効く！！<br />国産クルミ<br />500円/パック
                                </a>
                              </h2>
                              <div class="card-simple-rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                              </div>
                              <!-- /.card-rating -->

                              <div class="card-simple-actions">
                                <a href="#" class="fa fa-bookmark-o"></a>
                                <a
                                  href="blog/blog_detail.html"
                                  class="fa fa-search"
                                ></a>
                                <a href="#" class="fa fa-heart-o"></a>
                              </div>
                              <!-- /.card-simple-actions -->
                            </div>
                            <!-- /.card-simple-content -->

                            <div class="card-simple-label">食品・サプリ</div>

                            <div class="card-simple-price">
                              あなたにおススメ
                            </div>
                          </div>
                          <!-- /.card-simple-background -->
                        </div>
                        <!-- /.card-simple -->
                      </div>
                      <!-- /.col-* -->

                      <div class="col-lg-6 col-md-12">
                        <div
                          class="card-simple"
                          data-background-image="../../assets/img/product/5.jpg"
                        >
                          <div class="card-simple-background">
                            <div class="card-simple-content">
                              <h2>
                                <a href="listing-detail.html">
                                  ボールを握って<br />脳に刺激を！！<br />300円/個
                                </a>
                              </h2>
                              <div class="card-simple-rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                              </div>
                              <!-- /.card-rating -->

                              <div class="card-simple-actions">
                                <a href="#" class="fa fa-bookmark-o"></a>
                                <a
                                  href="listing-detail.html"
                                  class="fa fa-search"
                                ></a>
                                <a href="#" class="fa fa-heart-o"></a>
                              </div>
                              <!-- /.card-simple-actions -->
                            </div>
                            <!-- /.card-simple-content -->

                            <div class="card-simple-label">健康器具</div>
                          </div>
                          <!-- /.card-simple-background -->
                        </div>
                        <!-- /.card-simple -->
                      </div>
                      <!-- /.col-* -->

                      <div class="col-lg-6 col-md-12">
                        <div
                          class="card-simple"
                          data-background-image="../../assets/img/product/4.jpg"
                        >
                          <div class="card-simple-background">
                            <div class="card-simple-content">
                              <h2>
                                <a href="listing-detail.html">
                                  熟睡できるBGM<br />聞き放題<br />100円/月
                                </a>
                              </h2>
                              <div class="card-simple-rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                              </div>
                              <!-- /.card-rating -->

                              <div class="card-simple-actions">
                                <a href="#" class="fa fa-bookmark-o"></a>
                                <a
                                  href="listing-detail.html"
                                  class="fa fa-search"
                                ></a>
                                <a href="#" class="fa fa-heart-o"></a>
                              </div>
                              <!-- /.card-simple-actions -->
                            </div>
                            <!-- /.card-simple-content -->

                            <div class="card-simple-label">サービス</div>
                            <div class="card-simple-price">人気商品★★★★★</div>
                          </div>
                          <!-- /.card-simple-background -->
                        </div>
                        <!-- /.card-simple -->
                      </div>
                      <!-- /.col-* -->

                      <div class="col-lg-6 col-md-12">
                        <div
                          class="card-simple"
                          data-background-image="../../assets/img/product/1.jpg"
                        >
                          <div class="card-simple-background">
                            <div class="card-simple-content">
                              <h2>
                                <a href="listing-detail.html">
                                  アロマで脳を癒そう<br />アロマキャンドル<br />1,000円/50個
                                </a>
                              </h2>
                              <div class="card-simple-rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                              </div>
                              <!-- /.card-rating -->

                              <div class="card-simple-actions">
                                <a href="#" class="fa fa-bookmark-o"></a>
                                <a
                                  href="listing-detail.html"
                                  class="fa fa-search"
                                ></a>
                                <a href="#" class="fa fa-heart-o"></a>
                              </div>
                              <!-- /.card-simple-actions -->
                            </div>
                            <!-- /.card-simple-content -->

                            <div class="card-simple-label">癒し</div>
                          </div>
                          <!-- /.card-simple-background -->
                        </div>
                        <!-- /.card-simple -->
                      </div>
                      <!-- /.col-* -->
                    </div>
                    <!-- level1 -->
                  </div>
                  <!-- /.row -->
                </div>
                <!-- /.block -->

                <div class="page-header">
                  <h1>基礎知識</h1>
                  <p>認知機能塾ではお気に入りの内容を見ることができますよ！</p>
                </div>
                <!-- /.page-header -->

                <div class="block background-black-light fullwidth">
                  <div class="orig-row">
                    <div class="col-md-3">
                      <div class="box">
                        <div class="box-icon">
                          <i class="fa fa-life-ring"></i>
                        </div>
                        <!-- /.box-icon -->

                        <div class="box-content">
                          <h2>５つの認知機能</h2>
                          <p>認知機能についてご紹介します。</p>

                          <a href="#"
                            >Read More <i class="fa fa-chevron-right"></i
                          ></a>
                        </div>
                        <!-- /.box-content -->
                      </div>
                    </div>
                    <!-- /.col-sm-4 -->

                    <div class="col-md-3">
                      <div class="box">
                        <div class="box-icon">
                          <i class="fa fa-flask"></i>
                        </div>
                        <!-- /.box-icon -->

                        <div class="box-content">
                          <h2>研究成果</h2>
                          <p>最新の研究成果をご紹介します。</p>

                          <a href="#"
                            >Read More <i class="fa fa-chevron-right"></i
                          ></a>
                        </div>
                        <!-- /.box-content -->
                      </div>
                    </div>
                    <!-- /.col-sm-4 -->

                    <div class="col-md-3">
                      <div class="box">
                        <div class="box-icon">
                          <i class="fa fa-thumbs-o-up"></i>
                        </div>
                        <!-- /.box-icon -->

                        <div class="box-content">
                          <h2>お悩み</h2>
                          <p>認知機能のお悩みをまとめました。</p>

                          <a href="#"
                            >Read More <i class="fa fa-chevron-right"></i
                          ></a>
                        </div>
                        <!-- /.box-content -->
                      </div>
                    </div>
                    <!-- /.col-sm-4 -->

                    <div class="col-md-3">
                      <div class="box">
                        <div class="box-icon">
                          <i class="fa fa-users"></i>
                        </div>
                        <!-- /.box-icon -->

                        <div class="box-content">
                          <h2>事例</h2>
                          <p>認知機能の改善が見られた方を紹介します。</p>

                          <a href="#"
                            >Read More <i class="fa fa-chevron-right"></i
                          ></a>
                        </div>
                        <!-- /.box-content -->
                      </div>
                    </div>
                    <!-- /.col-sm-4 -->
                  </div>
                  <!-- /.row -->
                </div>
                <!-- /.block -->

                <div
                  class="block background-secondary fullwidth mt80 mb-80 pt60 pb60"
                >
                  <div class="orig-row">
                    <div class="col-sm-12">
                      <div class="contact-info-wrapper">
                        <h2>Do You Have Any Questions?</h2>

                        <div class="contact-info">
                          <span class="contact-info-item">
                            <i class="fa fa-at"></i>
                            <span>support@sitename.com</span> </span
                          ><!-- /.contact-info-item -->

                          <span class="contact-info-item">
                            <i class="fa fa-phone"></i>
                            <span>+123-456-789</span> </span
                          ><!-- /.contact-info-item -->
                        </div>
                        <!-- /.contact-info-->
                      </div>
                      <!-- /.contact-info-wrapper -->
                    </div>
                    <!-- /.col-* -->
                  </div>
                  <!-- /.row -->
                </div>
                <!-- /.block -->
              </div>
              <!-- /.container -->
            </div>
            <!-- /.content -->
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
      informations: [],
      blogList: [],
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
  },
};
</script>
