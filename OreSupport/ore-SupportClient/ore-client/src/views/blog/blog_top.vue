<template>


    <div id="blog_top">
<head>

   
    <link rel="shortcut icon" type="image/x-icon" href="../../assets/favicon.png">

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
                        </div><!-- /.document-title -->

                        <form class="filter" method="post" action="?">
                            <h2>詳細検索</h2>
                            <div class="row">
                                <div class="col-sm-12 col-md-4">
                                    <div class="form-group">
                                        <input type="text" placeholder="例) 健康食品など" class="form-control">
                                    </div><!-- /.form-group -->
                                </div><!-- /.col-* -->

                                <div class="col-sm-12 col-md-4">
                                    <div class="form-group">
                                        <select class="form-control" title="年齢">
                                            <option>40代以下</option>
                                            <option>40-50代</option>
                                            <option>50-60代</option>
                                            <option>60-70代</option>
                                            <option>70代以上</option>
                                        </select>
                                    </div><!-- /.form-group -->
                                </div><!-- /.col-* -->

                                <div class="col-sm-12 col-md-4">
                                    <div class="form-group">
                                        <select class="form-control" title="カテゴリ">
                                            <option value="">記憶力</option>
                                            <option value="">注意力</option>
                                            <option value="">見当識</option>
                                            <option value="">空間認識力</option>
                                            <option value="">計画力</option>
                                        </select>
                                    </div><!-- /.form-group -->
                                </div><!-- /.col-* -->
                            </div><!-- /.row -->

                            <hr>

                            <div class="row">
                                <div class="col-sm-8">
                                    <div class="filter-actions">
                                        <a href="#"><i class="fa fa-close"></i>検索条件リセット</a>
                                        <a href="#"><i class="fa fa-save"></i> 検索条件の保存</a>
                                    </div><!-- /.filter-actions -->
                                </div><!-- /.col-* -->

                                <div class="col-sm-4">
                                    <button type="submit" class="btn btn-primary"
                                        onclick="location.href='blog_list.html';return false;">検　索</button>
                                </div><!-- /.col-* -->
                            </div><!-- /.row -->
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
                                </div><!-- /.form-group -->

                                <div class="form-group">
                                    <select>
                                        <option name="ASC" selected>昇順</option>
                                        <option name="DESC">降順</option>
                                    </select>
                                </div><!-- /.form-group -->
                            </form>
                        </h2><!-- /.page-title -->

                        <div class="cards-simple-wrapper">
                            <div class="row">

                                <div class="col-sm-6 col-md-4 col-lg-3">
                                    <div class="card-simple"
                                        data-background-image="../../../assets/img/tmp/product-1.jpg">
                                        <div class="card-simple-background">
                                            <div class="card-simple-content">
                                                <a href="blog_detail.html">
                                                    <h2>
                                                        ついにコグエボに<br>デビューしました！<br>
                                                        <small style="color: white;">40代 女性 にゃっきーさん</small>
                                                    </h2>
                                                </a>
                                                <div class="card-simple-rating">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star-o"></i>
                                                </div><!-- /.card-rating -->

                                                <div class="card-simple-actions">
                                                    <a href="#" class="fa fa-star-o"></a>
                                                    <a href="listing-detail.html" class="fa fa-search"></a>
                                                    <a href="#" class="fa fa-heart-o"></a>
                                                </div><!-- /.card-simple-actions -->
                                            </div><!-- /.card-simple-content -->

                                            <div class="card-simple-label">記憶力</div>

                                            <div class="card-simple-price">投稿1週間以内</div>

                                        </div><!-- /.card-simple-background -->
                                    </div><!-- /.card-simple -->
                                </div><!-- /.col-* -->

                                <div class="col-sm-6 col-md-4 col-lg-3">
                                    <div class="card-simple" data-background-image="../../assets/img/tmp/product-2.jpg">
                                        <div class="card-simple-background">
                                            <div class="card-simple-content">
                                                <h2>
                                                    継続は力なり！<br>
                                                    <small style="color: white;">60代 男性 がんばろうさん</small>
                                                </h2>
                                                <div class="card-simple-rating">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star-o"></i>
                                                    <i class="fa fa-star-o"></i>
                                                </div><!-- /.card-rating -->

                                                <div class="card-simple-actions">
                                                    <a href="#" class="fa fa-star-o"></a>
                                                    <a href="listing-detail.html" class="fa fa-search"></a>
                                                    <a href="#" class="fa fa-heart-o"></a>
                                                </div><!-- /.card-simple-actions -->
                                            </div><!-- /.card-simple-content -->

                                            <div class="card-simple-label">記憶力</div>

                                        </div><!-- /.card-simple-background -->
                                    </div><!-- /.card-simple -->
                                </div><!-- /.col-* -->

                                <div class="col-sm-6 col-md-4 col-lg-3">
                                    <div class="card-simple" data-background-image="../../assets/img/tmp/product-3.jpg">
                                        <div class="card-simple-background">
                                            <div class="card-simple-content">
                                                <h2>
                                                    母の認知機能について<br>
                                                    <small style="color: white;">50代 男性 ichiroさん</small>
                                                </h2>
                                                <div class="card-simple-rating">
                                                    <i class="fa fa-star-o"></i>
                                                    <i class="fa fa-star-o"></i>
                                                    <i class="fa fa-star-o"></i>
                                                    <i class="fa fa-star-o"></i>
                                                    <i class="fa fa-star-o"></i>
                                                </div><!-- /.card-rating -->

                                                <div class="card-simple-actions">
                                                    <a href="#" class="fa fa-star-o"></a>
                                                    <a href="listing-detail.html" class="fa fa-search"></a>
                                                    <a href="#" class="fa fa-heart-o"></a>
                                                </div><!-- /.card-simple-actions -->
                                            </div><!-- /.card-simple-content -->

                                            <div class="card-simple-label">全般</div>

                                            <div class="card-simple-price">新規会員</div>

                                        </div><!-- /.card-simple-background -->
                                    </div><!-- /.card-simple -->
                                </div><!-- /.col-* -->

                                <div class="col-sm-6 col-md-4 col-lg-3">
                                    <div class="card-simple" data-background-image="../../assets/img/tmp/product-4.jpg">
                                        <div class="card-simple-background">
                                            <div class="card-simple-content">
                                                <h2>
                                                    運動はいいね～！<br>
                                                    <small style="color: white;">70代 女性 涼子さん</small>
                                                </h2>
                                                <div class="card-simple-rating">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div><!-- /.card-rating -->

                                                <div class="card-simple-actions">
                                                    <a href="#" class="fa fa-star-o"></a>
                                                    <a href="listing-detail.html" class="fa fa-search"></a>
                                                    <a href="#" class="fa fa-heart-o"></a>
                                                </div><!-- /.card-simple-actions -->
                                            </div><!-- /.card-simple-content -->

                                            <div class="card-simple-label">見当識</div>

                                        </div><!-- /.card-simple-background -->
                                    </div><!-- /.card-simple -->
                                </div><!-- /.col-* -->

                                <div class="col-sm-6 col-md-4 col-lg-3">
                                    <div class="card-simple" data-background-image="../../assets/img/tmp/product-5.jpg">
                                        <div class="card-simple-background">
                                            <div class="card-simple-content">
                                                <h2>
                                                    たまには家族と<br>温泉旅行にいこう！<br>
                                                    <small style="color: white;">40代 男性 信也さん</small>
                                                </h2>
                                                <div class="card-simple-rating">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div><!-- /.card-rating -->

                                                <div class="card-simple-actions">
                                                    <a href="#" class="fa fa-star-o"></a>
                                                    <a href="listing-detail.html" class="fa fa-search"></a>
                                                    <a href="#" class="fa fa-heart-o"></a>
                                                </div><!-- /.card-simple-actions -->
                                            </div><!-- /.card-simple-content -->

                                            <div class="card-simple-label">計画力</div>

                                        </div><!-- /.card-simple-background -->
                                    </div><!-- /.card-simple -->
                                </div><!-- /.col-* -->

                                <div class="col-sm-6 col-md-4 col-lg-3">
                                    <div class="card-simple" data-background-image="../../assets/img/tmp/product-6.jpg">
                                        <div class="card-simple-background">
                                            <div class="card-simple-content">
                                                <h2>
                                                    息子と一緒に<br>若年性認知症を考える<br>
                                                    <small style="color: white;">50代 女性 akiさん</small>
                                                </h2>
                                                <div class="card-simple-rating">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div><!-- /.card-rating -->

                                                <div class="card-simple-actions">
                                                    <a href="#" class="fa fa-star-o"></a>
                                                    <a href="listing-detail.html" class="fa fa-search"></a>
                                                    <a href="#" class="fa fa-heart-o"></a>
                                                </div><!-- /.card-simple-actions -->
                                            </div><!-- /.card-simple-content -->

                                            <div class="card-simple-label">全般</div>

                                            <div class="card-simple-price">新規会員</div>

                                        </div><!-- /.card-simple-background -->
                                    </div><!-- /.card-simple -->
                                </div><!-- /.col-* -->

                                <div class="col-sm-6 col-md-4 col-lg-3">
                                    <div class="card-simple" data-background-image="../../assets/img/tmp/product-7.jpg">
                                        <div class="card-simple-background">
                                            <div class="card-simple-content">
                                                <h2>
                                                    この歳で全国ランキング<br>100位に！？<br>
                                                    <small style="color: white;">70代以上 男性 tatsuoさん</small>
                                                </h2>
                                                <div class="card-simple-rating">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div><!-- /.card-rating -->

                                                <div class="card-simple-actions">
                                                    <a href="#" class="fa fa-star-o"></a>
                                                    <a href="listing-detail.html" class="fa fa-search"></a>
                                                    <a href="#" class="fa fa-heart-o"></a>
                                                </div><!-- /.card-simple-actions -->
                                            </div><!-- /.card-simple-content -->

                                            <div class="card-simple-label">注意力</div>

                                        </div><!-- /.card-simple-background -->
                                    </div><!-- /.card-simple -->
                                </div><!-- /.col-* -->

                                <div class="col-sm-6 col-md-4 col-lg-3">
                                    <div class="card-simple" data-background-image="../../assets/img/tmp/product-8.jpg">
                                        <div class="card-simple-background">
                                            <div class="card-simple-content">
                                                <h2>
                                                    認知機能セミナーに<br>参加してみませんか？<br>
                                                    <small style="color: white;">60代 男性 釣り大好きさん</small>
                                                </h2>
                                                <div class="card-simple-rating">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div><!-- /.card-rating -->

                                                <div class="card-simple-actions">
                                                    <a href="#" class="fa fa-star-o"></a>
                                                    <a href="listing-detail.html" class="fa fa-search"></a>
                                                    <a href="#" class="fa fa-heart-o"></a>
                                                </div><!-- /.card-simple-actions -->
                                            </div><!-- /.card-simple-content -->

                                            <div class="card-simple-label">全般</div>

                                            <div class="card-simple-price">ヘビーユーザー</div>

                                        </div><!-- /.card-simple-background -->
                                    </div><!-- /.card-simple -->
                                </div><!-- /.col-* -->

                                <div class="col-sm-6 col-md-4 col-lg-3">
                                    <div class="card-simple" data-background-image="../../assets/img/tmp/product-9.jpg">
                                        <div class="card-simple-background">
                                            <div class="card-simple-content">
                                                <h2><a href="listing-detail.html">Wine Tasting</a></h2>
                                                <div class="card-simple-rating">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div><!-- /.card-rating -->

                                                <div class="card-simple-actions">
                                                    <a href="#" class="fa fa-star-o"></a>
                                                    <a href="listing-detail.html" class="fa fa-search"></a>
                                                    <a href="#" class="fa fa-heart-o"></a>
                                                </div><!-- /.card-simple-actions -->
                                            </div><!-- /.card-simple-content -->

                                            <div class="card-simple-label">Event</div>

                                            <div class="card-simple-price">$13 / ticket</div>

                                        </div><!-- /.card-simple-background -->
                                    </div><!-- /.card-simple -->
                                </div><!-- /.col-* -->

                                <div class="col-sm-6 col-md-4 col-lg-3">
                                    <div class="card-simple"
                                        data-background-image="../../assets/img/tmp/product-10.jpg">
                                        <div class="card-simple-background">
                                            <div class="card-simple-content">
                                                <h2><a href="listing-detail.html">Affordable Office</a></h2>
                                                <div class="card-simple-rating">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div><!-- /.card-rating -->

                                                <div class="card-simple-actions">
                                                    <a href="#" class="fa fa-star-o"></a>
                                                    <a href="listing-detail.html" class="fa fa-search"></a>
                                                    <a href="#" class="fa fa-heart-o"></a>
                                                </div><!-- /.card-simple-actions -->
                                            </div><!-- /.card-simple-content -->

                                            <div class="card-simple-label">Coworking</div>

                                        </div><!-- /.card-simple-background -->
                                    </div><!-- /.card-simple -->
                                </div><!-- /.col-* -->

                                <div class="col-sm-6 col-md-4 col-lg-3">
                                    <div class="card-simple"
                                        data-background-image="../../assets/img/tmp/product-11.jpg">
                                        <div class="card-simple-background">
                                            <div class="card-simple-content">
                                                <h2><a href="listing-detail.html">Quick Breakfast</a></h2>
                                                <div class="card-simple-rating">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div><!-- /.card-rating -->

                                                <div class="card-simple-actions">
                                                    <a href="#" class="fa fa-star-o"></a>
                                                    <a href="listing-detail.html" class="fa fa-search"></a>
                                                    <a href="#" class="fa fa-heart-o"></a>
                                                </div><!-- /.card-simple-actions -->
                                            </div><!-- /.card-simple-content -->

                                            <div class="card-simple-label">Food</div>

                                            <div class="card-simple-price">$8 / person</div>

                                        </div><!-- /.card-simple-background -->
                                    </div><!-- /.card-simple -->
                                </div><!-- /.col-* -->

                                <div class="col-sm-6 col-md-4 col-lg-3">
                                    <div class="card-simple"
                                        data-background-image="../../assets/img/tmp/product-12.jpg">
                                        <div class="card-simple-background">
                                            <div class="card-simple-content">
                                                <h2><a href="listing-detail.html">Monumental City</a></h2>
                                                <div class="card-simple-rating">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div><!-- /.card-rating -->

                                                <div class="card-simple-actions">
                                                    <a href="#" class="fa fa-star-o"></a>
                                                    <a href="listing-detail.html" class="fa fa-search"></a>
                                                    <a href="#" class="fa fa-heart-o"></a>
                                                </div><!-- /.card-simple-actions -->
                                            </div><!-- /.card-simple-content -->

                                            <div class="card-simple-label">Landmark</div>

                                        </div><!-- /.card-simple-background -->
                                    </div><!-- /.card-simple -->
                                </div><!-- /.col-* -->

                            </div><!-- /.row -->
                        </div><!-- /.cards-simple-wrapper -->


                        <div class="pager">
                            <ul>
                                <li><a href="#">Prev</a></li>
                                <li><a href="#">5</a></li>
                                <li class="active"><a>6</a></li>
                                <li><a href="#">7</a></li>
                                <li><a href="#">Next</a></li>
                            </ul>
                        </div><!-- /.pagination -->


                    </div><!-- /.content -->
                </div><!-- /.container -->
            </div><!-- /.main-inner -->
        </div><!-- /.main -->

        <div id="footer" class="footer"></div>

    </div><!-- /.page-wrapper -->



</body>
</div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
</style>

<style>
 @import "http://fonts.googleapis.com/css?family=Nunito:300,400,700" ;
 @import "../../assets/libraries/font-awesome/css/font-awesome.min.css" ;
 @import "../../assets/libraries/owl.carousel/assets/owl.carousel.css" ;
 @import "../../assets/libraries/colorbox/example1/colorbox.css" ;
 @import "../../assets/libraries/bootstrap-select/bootstrap-select.min.css" ;
 @import "../../assets/libraries/bootstrap-fileinput/fileinput.min.css" ;
 @import "../../assets/css/superlist.css" ;
 @import "../../assets/css/superlist.css" ;

</style>





