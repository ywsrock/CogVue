<template>
  <div class="container-fluid h-100">
    <div class="page-wrapper">
      <div class="main">
        <div class="main-inner">
          <div class="container">
            <div class="content">
              <div class="document-title">
                <h1>商品・サービス購入</h1>

                <ul class="breadcrumb">
                  <li><a href="#">Solutions Store</a></li>
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
                      <select class="form-control" title="値段">
                        <option>～1,000円</option>
                        <option>1,000円～5,000円</option>
                        <option>5,000円～10,000円</option>
                        <option>10,000円～50,000円</option>
                        <option>50,000円～</option>
                      </select>
                    </div>
                    <!-- /.form-group -->
                  </div>
                  <!-- /.col-* -->

                  <div class="col-sm-12 col-md-4">
                    <div class="form-group">
                      <select class="form-control" title="カテゴリ">
                        <option value="">全て</option>
                        <option value="">食品・サプリ</option>
                        <option value="">健康器具</option>
                        <option value="">癒し</option>
                        <option value="">知識・教養</option>
                        <option value="">サービス</option>
                      </select>
                    </div>
                    <!-- /.form-group -->
                  </div>
                  <!-- /.col-* -->
                </div>
                <!-- /.orig-row -->

                <hr />

                <div class="orig-row">
                  <div class="col-sm-8">
                    <div class="filter-actions">
                      <a href="#"
                        ><i class="fa fa-close"></i>検索条件リセット</a
                      >
                      <a href="#"><i class="fa fa-save"></i> 検索条件の保存</a>
                    </div>
                    <!-- /.filter-actions -->
                  </div>
                  <!-- /.col-* -->

                  <div class="col-sm-4">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      href="/#/solution/index"
                    >
                      検索
                    </button>
                  </div>
                  <!-- /.col-* -->
                </div>
                <!-- /.orig-row -->
              </form>

              <h2 class="page-title">
                人気商品・サービス

                <form method="get" action="?" class="filter-sort">
                  <div class="form-group">
                    <select title="Sort by">
                      <option name="price">Price</option>
                      <option name="rating">Rating</option>
                      <option name="title">Title</option>
                    </select>
                  </div>
                  <!-- /.form-group -->

                  <div class="form-group">
                    <select title="Order">
                      <option name="ASC">Asc</option>
                      <option name="DESC">Desc</option>
                    </select>
                  </div>
                  <!-- /.form-group -->
                </form>
              </h2>
              <!-- /.page-title -->

              <div class="cards-simple-wrapper">
                <div class="orig-row">
                  <div class="col-sm-6 col-md-4 col-lg-3">
                    <div
                      class="card-simple"
                      data-background-image="../../assets/img/tmp/product-1.jpg"
                    >
                      <div class="card-simple-background">
                        <div class="card-simple-content">
                          <h2>
                            <a href="/#/solution/detail"
                              >記憶力に効く！！<br />国産クルミ<br />500円/パック</a
                            >
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
                            <a href="#" class="fa fa-star-o"></a>
                            <a
                              href="/#/solution/detail"
                              class="fa fa-search"
                            ></a>
                            <a href="#" class="fa fa-heart-o"></a>
                          </div>
                          <!-- /.card-simple-actions -->
                        </div>
                        <!-- /.card-simple-content -->

                        <div class="card-simple-label">食品・サプリ</div>

                        <div class="card-simple-price">あなたにおススメ</div>
                      </div>
                      <!-- /.card-simple-background -->
                    </div>
                    <!-- /.card-simple -->
                  </div>
                  <!-- /.col-* -->

                  <div class="col-sm-6 col-md-4 col-lg-3">
                    <div
                      class="card-simple"
                      data-background-image="../../assets/img/tmp/product-2.jpg"
                    >
                      <div class="card-simple-background">
                        <div class="card-simple-content">
                          <h2>
                            <a href="/#/solution/detail"
                              >ボールを握って<br />脳に刺激を！！<br />300円/個</a
                            >
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
                            <a href="#" class="fa fa-star-o"></a>
                            <a
                              href="/#/solution/detail"
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

                  <div class="col-sm-6 col-md-4 col-lg-3">
                    <div
                      class="card-simple"
                      data-background-image="../../assets/img/tmp/product-3.jpg"
                    >
                      <div class="card-simple-background">
                        <div class="card-simple-content">
                          <h2>
                            <a href="/#/solution/detail"
                              >熟睡できるBGM<br />聞き放題<br />100円/月</a
                            >
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
                            <a href="#" class="fa fa-star-o"></a>
                            <a
                              href="/#/solution/detail"
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

                  <div class="col-sm-6 col-md-4 col-lg-3">
                    <div
                      class="card-simple"
                      data-background-image="../../assets/img/tmp/product-4.jpg"
                    >
                      <div class="card-simple-background">
                        <div class="card-simple-content">
                          <h2>
                            <a href="/#/solution/detail"
                              >アロマで脳を癒そう<br />アロマキャンドル<br />1,000円/50個</a
                            >
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
                            <a href="#" class="fa fa-star-o"></a>
                            <a
                              href="/#/solution/detail"
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

                  <div class="col-sm-6 col-md-4 col-lg-3">
                    <div
                      class="card-simple"
                      data-background-image="../../assets/img/tmp/product-5.jpg"
                    >
                      <div class="card-simple-background">
                        <div class="card-simple-content">
                          <h2>
                            <a href="/#/solution/detail"
                              >脳を理解する活用する！<br />王先生の脳講座DVD<br />5,000円/3枚</a
                            >
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
                            <a href="#" class="fa fa-star-o"></a>
                            <a
                              href="/#/solution/detail"
                              class="fa fa-search"
                            ></a>
                            <a href="#" class="fa fa-heart-o"></a>
                          </div>
                          <!-- /.card-simple-actions -->
                        </div>
                        <!-- /.card-simple-content -->

                        <div class="card-simple-label">知識・教養</div>
                      </div>
                      <!-- /.card-simple-background -->
                    </div>
                    <!-- /.card-simple -->
                  </div>
                  <!-- /.col-* -->

                  <div class="col-sm-6 col-md-4 col-lg-3">
                    <div
                      class="card-simple"
                      data-background-image="../../assets/img/tmp/product-6.jpg"
                    >
                      <div class="card-simple-background">
                        <div class="card-simple-content">
                          <h2>
                            <a href="/#/solution/detail"
                              >脳を活性化するサプリ<br />一か月分無料！<br />0円/1ボトル</a
                            >
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
                            <a href="#" class="fa fa-star-o"></a>
                            <a
                              href="/#/solution/detail"
                              class="fa fa-search"
                            ></a>
                            <a href="#" class="fa fa-heart-o"></a>
                          </div>
                          <!-- /.card-simple-actions -->
                        </div>
                        <!-- /.card-simple-content -->

                        <div class="card-simple-label">食品・サプリ</div>

                        <div class="card-simple-price">おススメ試供品</div>
                      </div>
                      <!-- /.card-simple-background -->
                    </div>
                    <!-- /.card-simple -->
                  </div>
                  <!-- /.col-* -->

                  <div class="col-sm-6 col-md-4 col-lg-3">
                    <div
                      class="card-simple"
                      data-background-image="../../assets/img/tmp/product-7.jpg"
                    >
                      <div class="card-simple-background">
                        <div class="card-simple-content">
                          <h2>
                            <a href="/#/solution/detail">Best Brazil Coffee</a>
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
                            <a href="#" class="fa fa-star-o"></a>
                            <a
                              href="/#/solution/detail"
                              class="fa fa-search"
                            ></a>
                            <a href="#" class="fa fa-heart-o"></a>
                          </div>
                          <!-- /.card-simple-actions -->
                        </div>
                        <!-- /.card-simple-content -->

                        <div class="card-simple-label">Pub</div>
                      </div>
                      <!-- /.card-simple-background -->
                    </div>
                    <!-- /.card-simple -->
                  </div>
                  <!-- /.col-* -->

                  <div class="col-sm-6 col-md-4 col-lg-3">
                    <div
                      class="card-simple"
                      data-background-image="../../assets/img/tmp/product-8.jpg"
                    >
                      <div class="card-simple-background">
                        <div class="card-simple-content">
                          <h2><a href="/#/solution/detail">Retro Shop</a></h2>
                          <div class="card-simple-rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                          </div>
                          <!-- /.card-rating -->

                          <div class="card-simple-actions">
                            <a href="#" class="fa fa-star-o"></a>
                            <a
                              href="/#/solution/detail"
                              class="fa fa-search"
                            ></a>
                            <a href="#" class="fa fa-heart-o"></a>
                          </div>
                          <!-- /.card-simple-actions -->
                        </div>
                        <!-- /.card-simple-content -->

                        <div class="card-simple-label">Shop</div>

                        <div class="card-simple-price">$3 / cup</div>
                      </div>
                      <!-- /.card-simple-background -->
                    </div>
                    <!-- /.card-simple -->
                  </div>
                  <!-- /.col-* -->

                  <div class="col-sm-6 col-md-4 col-lg-3">
                    <div
                      class="card-simple"
                      data-background-image="../../assets/img/tmp/product-9.jpg"
                    >
                      <div class="card-simple-background">
                        <div class="card-simple-content">
                          <h2>
                            <a href="/#/solution/detail">Wine Tasting</a>
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
                            <a href="#" class="fa fa-star-o"></a>
                            <a
                              href="/#/solution/detail"
                              class="fa fa-search"
                            ></a>
                            <a href="#" class="fa fa-heart-o"></a>
                          </div>
                          <!-- /.card-simple-actions -->
                        </div>
                        <!-- /.card-simple-content -->

                        <div class="card-simple-label">Event</div>

                        <div class="card-simple-price">$13 / ticket</div>
                      </div>
                      <!-- /.card-simple-background -->
                    </div>
                    <!-- /.card-simple -->
                  </div>
                  <!-- /.col-* -->

                  <div class="col-sm-6 col-md-4 col-lg-3">
                    <div
                      class="card-simple"
                      data-background-image="../../assets/img/tmp/product-10.jpg"
                    >
                      <div class="card-simple-background">
                        <div class="card-simple-content">
                          <h2>
                            <a href="/#/solution/detail">Affordable Office</a>
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
                            <a href="#" class="fa fa-star-o"></a>
                            <a
                              href="/#/solution/detail"
                              class="fa fa-search"
                            ></a>
                            <a href="#" class="fa fa-heart-o"></a>
                          </div>
                          <!-- /.card-simple-actions -->
                        </div>
                        <!-- /.card-simple-content -->

                        <div class="card-simple-label">Coworking</div>
                      </div>
                      <!-- /.card-simple-background -->
                    </div>
                    <!-- /.card-simple -->
                  </div>
                  <!-- /.col-* -->

                  <div class="col-sm-6 col-md-4 col-lg-3">
                    <div
                      class="card-simple"
                      data-background-image="../../assets/img/tmp/product-11.jpg"
                    >
                      <div class="card-simple-background">
                        <div class="card-simple-content">
                          <h2>
                            <a href="/#/solution/detail">Quick Breakfast</a>
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
                            <a href="#" class="fa fa-star-o"></a>
                            <a
                              href="/#/solution/detail"
                              class="fa fa-search"
                            ></a>
                            <a href="#" class="fa fa-heart-o"></a>
                          </div>
                          <!-- /.card-simple-actions -->
                        </div>
                        <!-- /.card-simple-content -->

                        <div class="card-simple-label">Food</div>

                        <div class="card-simple-price">$8 / person</div>
                      </div>
                      <!-- /.card-simple-background -->
                    </div>
                    <!-- /.card-simple -->
                  </div>
                  <!-- /.col-* -->

                  <div class="col-sm-6 col-md-4 col-lg-3">
                    <div
                      class="card-simple"
                      data-background-image="../../assets/img/tmp/product-12.jpg"
                    >
                      <div class="card-simple-background">
                        <div class="card-simple-content">
                          <h2>
                            <a href="/#/solution/detail">Monumental City</a>
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
                            <a href="#" class="fa fa-star-o"></a>
                            <a
                              href="/#/solution/detail"
                              class="fa fa-search"
                            ></a>
                            <a href="#" class="fa fa-heart-o"></a>
                          </div>
                          <!-- /.card-simple-actions -->
                        </div>
                        <!-- /.card-simple-content -->

                        <div class="card-simple-label">Landmark</div>
                      </div>
                      <!-- /.card-simple-background -->
                    </div>
                    <!-- /.card-simple -->
                  </div>
                  <!-- /.col-* -->
                </div>
                <!-- /.orig-row -->
              </div>
              <!-- /.cards-simple-wrapper -->

              <div class="pager">
                <ul>
                  <li><a href="#">Prev</a></li>
                  <li><a href="#">5</a></li>
                  <li class="active"><a>6</a></li>
                  <li><a href="#">7</a></li>
                  <li><a href="#">Next</a></li>
                </ul>
              </div>
              <!-- /.pagination -->
            </div>
            <!-- /.content -->
          </div>
          <!-- /.container -->
        </div>
        <!-- /.main-inner -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
