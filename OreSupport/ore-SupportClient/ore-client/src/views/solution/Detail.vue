<template>
  <div class="container-fluid h-100">
    <div class="page-wrapper">
      <div class="main">
        <div class="main-inner">
          <div class="content">
            <div class="mt-80 mb80">
              <div
                class="detail-banner"
                style="background-image: url(../../assets/img/tmp/detail-banner-1.jpg);"
              >
                <div class="container">
                  <div class="detail-banner-left">
                    <div class="detail-banner-info">
                      <div class="detail-label">食品・サプリ</div>
                      <div class="detail-verified">夏セール実施中</div>
                    </div>
                    <!-- /.detail-banner-info -->

                    <h2 class="detail-title">
                      記憶力に効く！！国産クルミ
                    </h2>

                    <div class="detail-banner-address">
                      <p>提供元：加藤食品株式会社</p>
                      <i class="fa fa-map-o"></i> 長野県長野市舘山町3-5-7
                    </div>
                    <!-- /.detail-banner-address -->

                    <div class="detail-banner-rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-half-o"></i>
                    </div>
                    <!-- /.detail-banner-rating -->

                    <div class="detail-banner-btn bookmark">
                      <i class="fa fa-bookmark-o"></i>
                      <span data-toggle="Bookmarked">お気に入り</span>
                    </div>
                    <!-- /.detail-claim -->

                    <div class="detail-banner-btn heart">
                      <i class="fa fa-heart-o"></i>
                      <span data-toggle="I Love It">いいねを押す</span>
                    </div>
                    <!-- /.detail-claim -->
                  </div>
                  <!-- /.detail-banner-left -->
                </div>
                <!-- /.container -->
              </div>
              <!-- /.detail-banner -->
            </div>

            <div class="container">
              <div class="row detail-content">
                <div class="col-sm-7">
                  <div class="detail-gallery">
                    <div class="detail-gallery-preview">
                      <a href="../../assets/img/tmp/gallery-1.jpg">
                        <img src="../../assets/img/tmp/gallery-1.jpg" />
                      </a>
                    </div>

                    <ul class="detail-gallery-index">
                      <li class="detail-gallery-list-item active">
                        <a data-target="../../assets/img/tmp/gallery-1.jpg">
                          <img
                            src="../../assets/img/tmp/gallery-1.jpg"
                            alt="..."
                          />
                        </a>
                      </li>
                      <li class="detail-gallery-list-item active">
                        <a data-target="../../assets/img/tmp/gallery-2.jpg">
                          <img
                            src="../../assets/img/tmp/gallery-2.jpg"
                            alt="..."
                          />
                        </a>
                      </li>
                      <li class="detail-gallery-list-item active">
                        <a data-target="../../assets/img/tmp/gallery-3.jpg">
                          <img
                            src="../../assets/img/tmp/gallery-3.jpg"
                            alt="..."
                          />
                        </a>
                      </li>
                      <li class="detail-gallery-list-item active">
                        <a data-target="../../assets/img/tmp/gallery-4.jpg">
                          <img
                            src="../../assets/img/tmp/gallery-4.jpg"
                            alt="..."
                          />
                        </a>
                      </li>
                      <li class="detail-gallery-list-item active">
                        <a data-target="../../assets/img/tmp/gallery-5.jpg">
                          <img
                            src="../../assets/img/tmp/gallery-5.jpg"
                            alt="..."
                          />
                        </a>
                      </li>
                      <li class="detail-gallery-list-item active">
                        <a data-target="../../assets/img/tmp/gallery-6.jpg">
                          <img
                            src="../../assets/img/tmp/gallery-6.jpg"
                            alt="..."
                          />
                        </a>
                      </li>
                      <li class="detail-gallery-list-item active">
                        <a data-target="../../assets/img/tmp/gallery-7.jpg">
                          <img
                            src="../../assets/img/tmp/gallery-7.jpg"
                            alt="..."
                          />
                        </a>
                      </li>
                      <li class="detail-gallery-list-item active">
                        <a data-target="../../assets/img/tmp/gallery-8.jpg">
                          <img
                            src="../../assets/img/tmp/gallery-8.jpg"
                            alt="..."
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <!-- /.detail-gallery -->

                  <h2>We Are Here</h2>
                  <div class="background-white p20">
                    <!-- Nav tabs -->
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
                          <i class="fa fa-map"></i>Map
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#street-view-panel"
                          aria-controls="street-view-panel"
                          role="tab"
                          data-toggle="tab"
                        >
                          <i class="fa fa-street-view"></i>Street View
                        </a>
                      </li>
                    </ul>

                    <!-- Tab panes -->
                    <div class="tab-content">
                      <div
                        role="tabpanel"
                        class="tab-pane fade in active"
                        id="simple-map-panel"
                      >
                        <div class="detail-map">
                          <div class="map-position">
                            <div
                              id="listing-detail-map"
                              data-transparent-marker-image="../../assets/img/transparent-marker-image.png"
                              data-styles='[{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"labels.text.fill","stylers":[{"color":"#b43b3b"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"lightness":"8"},{"color":"#bcbec0"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#5b5b5b"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7cb3c9"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#abb9c0"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"color":"#fff1f1"},{"visibility":"off"}]}]'
                              data-zoom="15"
                              data-latitude="40.779995"
                              data-longitude="-73.969133"
                              data-icon="fa fa-coffee"
                            ></div>
                            <!-- /#map-property -->
                          </div>
                          <!-- /.map-property -->
                        </div>
                        <!-- /.detail-map -->
                      </div>
                      <div
                        role="tabpanel"
                        class="tab-pane fade"
                        id="street-view-panel"
                      >
                        <div
                          id="listing-detail-street-view"
                          data-latitude="40.758896"
                          data-longitude="-73.985135"
                          data-heading="225"
                          data-pitch="0"
                          data-zoom="1"
                        ></div>
                      </div>
                    </div>
                  </div>

                  <h2>Video</h2>
                  <div class="detail-video">
                    <iframe
                      src="https://player.vimeo.com/video/36911719?color=009f8b&byline=0&portrait=0"
                      width="653"
                      height="366"
                      frameborder="0"
                      webkitallowfullscreen
                      mozallowfullscreen
                      allowfullscreen
                    ></iframe>
                  </div>
                  <!-- /.detail-video -->

                  <h2 id="reviews">All Reviews</h2>
                  <div class="reviews">
                    <div class="review">
                      <div class="review-image">
                        <img src="../../assets/img/tmp/agent-1.jpg" alt="" />
                      </div>
                      <!-- /.review-image -->

                      <div class="review-inner">
                        <div class="review-title">
                          <h2>Nancy Collins</h2>

                          <span class="report">
                            <span class="separator">&#8226;</span
                            ><i
                              class="fa fa-flag"
                              title="Report"
                              data-toggle="tooltip"
                              data-placement="top"
                            ></i>
                          </span>

                          <div class="review-overall-rating">
                            <span class="overall-rating-title"
                              >Total Score:</span
                            >
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                            <i class="fa fa-star-o"></i>
                          </div>
                          <!-- /.review-rating -->
                        </div>
                        <!-- /.review-title -->

                        <div class="review-content-wrapper">
                          <div class="review-content">
                            <div class="review-pros">
                              <p>
                                Quisque aliquet ornare nunc in viverra. Nullam
                                ornare molestie ligula in luctus. Suspendisse ac
                                cursus elit. In congue mattis felis, non
                                hendrerit orci dictum id.
                              </p>
                            </div>
                            <!-- /.pros -->
                            <div class="review-cons">
                              <p>
                                Duis et magna vel est tempus vehicula vitae sit
                                amet enim. Sed vitae ligula congue.
                              </p>
                            </div>
                            <!-- /.cons -->
                          </div>
                          <!-- /.review-content -->

                          <div class="review-rating">
                            <dl>
                              <dt>Food</dt>
                              <dd>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                              </dd>
                              <dt>Staff</dt>
                              <dd>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                              </dd>
                              <dt>Value</dt>
                              <dd>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                              </dd>
                              <dt>Atmosphere</dt>
                              <dd>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                              </dd>
                            </dl>
                          </div>
                          <!-- /.review-rating -->
                        </div>
                        <!-- /.review-content-wrapper -->
                      </div>
                      <!-- /.review-inner -->
                    </div>
                    <!-- /.review -->

                    <div class="review">
                      <div class="review-image">
                        <img src="../../assets/img/tmp/agent-2.jpg" alt="" />
                      </div>
                      <!-- /.review-image -->

                      <div class="review-inner">
                        <div class="review-title">
                          <h2>Kim Glove</h2>
                          <span class="report">
                            <span class="separator">&#8226;</span
                            ><i
                              class="fa fa-flag"
                              title="Report"
                              data-toggle="tooltip"
                              data-placement="top"
                            ></i>
                          </span>

                          <div class="review-overall-rating">
                            <span class="overall-rating-title"
                              >Total Score:</span
                            >
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                          </div>
                          <!-- /.review-rating -->
                        </div>
                        <!-- /.review-title -->

                        <div class="review-content-wrapper">
                          <div class="review-content">
                            <div class="review-pros">
                              <p>
                                Quisque aliquet ornare nunc in viverra. Nullam
                                ornare molestie ligula in luctus.
                              </p>
                            </div>
                            <!-- /.pros -->
                            <div class="review-cons">
                              <p>
                                Suspendisse ac cursus elit. In congue mattis
                                felis, non hendrerit orci dictum id. Duis et
                                magna vel est tempus vehicula vitae sit amet
                                enim. Sed vitae ligula congue.
                              </p>
                            </div>
                            <!-- /.cons -->
                          </div>
                          <!-- /.review-content -->

                          <div class="review-rating">
                            <dl>
                              <dt>Food</dt>
                              <dd>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                              </dd>
                              <dt>Staff</dt>
                              <dd>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                              </dd>
                              <dt>Value</dt>
                              <dd>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                              </dd>
                              <dt>Atmosphere</dt>
                              <dd>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                              </dd>
                            </dl>
                          </div>
                          <!-- /.review-rating -->
                        </div>
                        <!-- /.review-content-wrapper -->
                      </div>
                      <!-- /.review-inner -->
                    </div>
                    <!-- /.review -->

                    <div class="review">
                      <div class="review-image">
                        <img src="../../assets/img/tmp/agent-5.jpg" alt="" />
                      </div>
                      <!-- /.review-image -->

                      <div class="review-inner">
                        <div class="review-title">
                          <h2>Richard Peterson</h2>
                          <span class="report">
                            <span class="separator">&#8226;</span
                            ><i
                              class="fa fa-flag"
                              title="Report"
                              data-toggle="tooltip"
                              data-placement="top"
                            ></i>
                          </span>

                          <div class="review-overall-rating">
                            <span class="overall-rating-title"
                              >Total Score:</span
                            >
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                          </div>
                          <!-- /.review-rating -->
                        </div>
                        <!-- /.review-title -->

                        <div class="review-content-wrapper">
                          <div class="review-content">
                            <div class="review-pros">
                              <p>
                                Quisque aliquet ornare nunc in viverra. Nullam
                                ornare molestie ligula in luctus. Suspendisse ac
                                cursus elit. In congue mattis felis, non
                                hendrerit orci dictum id.
                              </p>
                            </div>
                            <!-- /.pros -->
                            <div class="review-cons">
                              <p>
                                Duis et magna vel est tempus vehicula vitae sit
                                amet enim. Sed vitae ligula congue.
                              </p>
                            </div>
                            <!-- /.cons -->
                          </div>
                          <!-- /.review-content -->

                          <div class="review-rating">
                            <dl>
                              <dt>Food</dt>
                              <dd>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                              </dd>
                              <dt>Staff</dt>
                              <dd>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                              </dd>
                              <dt>Value</dt>
                              <dd>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                              </dd>
                              <dt>Atmosphere</dt>
                              <dd>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                              </dd>
                            </dl>
                          </div>
                          <!-- /.review-rating -->
                        </div>
                        <!-- /.review-content-wrapper -->
                      </div>
                      <!-- /.review-inner -->
                    </div>
                    <!-- /.review -->
                  </div>
                  <!-- /.reviews -->
                </div>
                <!-- /.col-sm-7 -->

                <div class="col-sm-5">
                  <div class="background-white p20">
                    <div class="detail-overview-hearts">
                      <i class="fa fa-heart"></i>
                      <strong>213 </strong>人がいいねを押しています
                    </div>
                    <div class="detail-overview-rating">
                      <i class="fa fa-star"></i> <strong>4.3 / 5 </strong>
                      <a href="#reviews">316人がレビューをしています</a>
                    </div>

                    <div class="detail-actions row">
                      <div class="col-sm-4">
                        <div class="btn btn-primary btn-book">
                          <i class="fa fa-shopping-cart"></i>
                          購入する
                        </div>
                      </div>
                      <!-- /.col-sm-4 -->
                      <div class="col-sm-4">
                        <div class="btn btn-secondary btn-share">
                          <i class="fa fa-share-square-o"></i> シェアする
                          <div class="share-wrapper">
                            <ul class="share">
                              <li><i class="fa fa-facebook"></i> Facebook</li>
                              <li><i class="fa fa-twitter"></i> Twitter</li>
                              <li><i class="fa fa-google-plus"></i> Google+</li>
                              <li><i class="fa fa-pinterest"></i> Pinterest</li>
                              <li><i class="fa fa-chain"></i> Link</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <!-- /.col-sm-4 -->
                      <div class="col-sm-4">
                        <div class="btn btn-secondary btn-claim">
                          <i class="fa fa-hand-peace-o"></i>
                          レビューする
                        </div>
                      </div>
                      <!-- /.col-sm-4 -->
                    </div>
                    <!-- /.detail-actions -->
                  </div>

                  <h2>
                    <span class="text-secondary"
                      >記憶力に効く！！国産クルミ
                    </span>
                    <br />商品情報をチェック
                  </h2>
                  <div class="background-white p20">
                    <div class="detail-vcard">
                      <div class="detail-logo">
                        <img
                          src="../../assets/img/tmp/pragmaticmates-logo.png"
                        />
                      </div>
                      <!-- /.detail-logo -->

                      <div class="detail-contact">
                        <div class="detail-contact-email">
                          <i class="fa fa-envelope-o"></i>
                          <a href="mailto:#">company@example.com</a>
                        </div>
                        <div class="detail-contact-phone">
                          <i class="fa fa-mobile-phone"></i>
                          <a href="tel:#">+01-23-456-789</a>
                        </div>
                        <div class="detail-contact-website">
                          <i class="fa fa-globe"></i>
                          <a href="#">www.superlist.com</a>
                        </div>
                        <div class="detail-contact-address">
                          <i class="fa fa-map-o"></i>
                          347/26 22nd Avenue<br />
                          NYC AZ 85705, USA
                        </div>
                      </div>
                      <!-- /.detail-contact -->
                    </div>
                    <!-- /.detail-vcard -->

                    <div class="detail-description">
                      <p>【クルミが脳にいい！？】</p>
                      <p>
                        おつまみに食べることが多いクルミ。実は脳にとてもよい食品なのです。クルミに含まれている〇〇
                      </p>
                    </div>

                    <div class="detail-follow">
                      <h5>Follow Us:</h5>
                      <div class="follow-wrapper">
                        <a class="follow-btn facebook" href="#"
                          ><i class="fa fa-facebook"></i
                        ></a>
                        <a class="follow-btn youtube" href="#"
                          ><i class="fa fa-youtube"></i
                        ></a>
                        <a class="follow-btn twitter" href="#"
                          ><i class="fa fa-twitter"></i
                        ></a>
                        <a class="follow-btn tripadvisor" href="#"
                          ><i class="fa fa-tripadvisor"></i
                        ></a>
                        <a class="follow-btn google-plus" href="#"
                          ><i class="fa fa-google-plus"></i
                        ></a>
                      </div>
                      <!-- /.follow-wrapper -->
                    </div>
                    <!-- /.detail-follow -->
                  </div>

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

                  <h2>Amenities</h2>

                  <div class="background-white p20">
                    <ul class="detail-amenities">
                      <li class="yes">WiFi</li>
                      <li class="yes">Parking</li>
                      <li class="no">Vine</li>
                      <li class="yes">Terrace</li>
                      <li class="no">Bar</li>
                      <li class="yes">Take Away Coffee</li>
                      <li class="no">Catering</li>
                      <li class="yes">Raw Food</li>
                      <li class="no">Delivery</li>
                      <li class="yes">No-smoking room</li>
                      <li class="no">Reservations</li>
                    </ul>
                  </div>
                  <!-- /.detail-amenities -->

                  <h2>Enquire Form</h2>

                  <div class="detail-enquire-form background-white p20">
                    <form method="post" action="?">
                      <div class="form-group">
                        <label for="">Name</label>
                        <input type="text" class="form-control" name="" id="" />
                      </div>
                      <!-- /.form-group -->

                      <div class="form-group">
                        <label for=""
                          >Email <span class="required">*</span></label
                        >
                        <input
                          type="email"
                          class="form-control"
                          name=""
                          id=""
                          required
                        />
                      </div>
                      <!-- /.form-group -->

                      <div class="form-group">
                        <label for=""
                          >Message <span class="required">*</span></label
                        >
                        <textarea
                          class="form-control"
                          name=""
                          id=""
                          rows="5"
                          required
                        ></textarea>
                      </div>
                      <!-- /.form-group -->

                      <p>
                        Required fields are marked
                        <span class="required">*</span>
                      </p>

                      <button class="btn btn-primary btn-block" type="submit">
                        <i class="fa fa-paper-plane"></i>Send Message
                      </button>
                    </form>
                  </div>
                  <!-- /.detail-enquire-form -->

                  <h2>3 Reasons Why Choose Us</h2>

                  <div class="background-white p20 reasons">
                    <div class="reason">
                      <div class="reason-icon">
                        <i class="fa fa-trophy"></i>
                      </div>
                      <!-- /.reason-icon -->
                      <div class="reason-content">
                        <h4>Coffee House of the Year 2015</h4>
                        <p>
                          Fusce at venenatis lorem. Quisque volutpat aliquam
                          leo, a pellentesque orci varius sit amet.
                        </p>
                      </div>
                      <!-- /.reason-content -->
                    </div>
                    <!-- /.reason -->
                    <div class="reason">
                      <div class="reason-icon">
                        <i class="fa fa-coffee"></i>
                      </div>
                      <!-- /.reason-icon -->
                      <div class="reason-content">
                        <h4>High Quality Coffee Beans</h4>
                        <p>
                          Fusce at venenatis lorem. Quisque volutpat aliquam
                          leo, a pellentesque orci varius sit amet.
                        </p>
                      </div>
                      <!-- /.reason-content -->
                    </div>
                    <!-- /.reason -->
                    <div class="reason">
                      <div class="reason-icon">
                        <i class="fa fa-cutlery"></i>
                      </div>
                      <!-- /.reason-icon -->
                      <div class="reason-content">
                        <h4>Snacks & Deserts</h4>
                        <p>
                          Fusce at venenatis lorem. Quisque volutpat aliquam
                          leo, a pellentesque orci varius sit amet.
                        </p>
                      </div>
                      <!-- /.reason-content -->
                    </div>
                    <!-- /.reason -->
                  </div>

                  <div class="detail-payments">
                    <h3>Accepted Payments</h3>

                    <ul>
                      <li>
                        <a href="#"><i class="fa fa-paypal"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="fa fa-cc-amex"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="fa fa-cc-mastercard"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="fa fa-cc-stripe"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="fa fa-cc-visa"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- /.col-sm-5 -->

                <div class="col-sm-12">
                  <h2>Submit a Review</h2>

                  <form
                    class="background-white p20 add-review"
                    method="post"
                    action="?"
                  >
                    <div class="row">
                      <div class="form-group col-sm-6">
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
                      <!-- /.col-sm-6 -->

                      <div class="form-group col-sm-6">
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
                      <!-- /.col-sm-6 -->
                    </div>
                    <!-- /.row -->

                    <div class="row">
                      <div class="form-group input-rating col-sm-3">
                        <div class="rating-title">Food</div>

                        <input
                          type="radio"
                          value="1"
                          name="food"
                          id="rating-food-1"
                        />
                        <label for="rating-food-1"></label>
                        <input
                          type="radio"
                          value="2"
                          name="food"
                          id="rating-food-2"
                        />
                        <label for="rating-food-2"></label>
                        <input
                          type="radio"
                          value="3"
                          name="food"
                          id="rating-food-3"
                        />
                        <label for="rating-food-3"></label>
                        <input
                          type="radio"
                          value="4"
                          name="food"
                          id="rating-food-4"
                        />
                        <label for="rating-food-4"></label>
                        <input
                          type="radio"
                          value="5"
                          name="food"
                          id="rating-food-5"
                        />
                        <label for="rating-food-5"></label>
                      </div>
                      <!-- /.col-sm-3 -->
                      <div class="form-group input-rating col-sm-3">
                        <div class="rating-title">Staff</div>

                        <input
                          type="radio"
                          value="1"
                          name="staff"
                          id="rating-staff-1"
                        />
                        <label for="rating-staff-1"></label>
                        <input
                          type="radio"
                          value="2"
                          name="staff"
                          id="rating-staff-2"
                        />
                        <label for="rating-staff-2"></label>
                        <input
                          type="radio"
                          value="3"
                          name="staff"
                          id="rating-staff-3"
                        />
                        <label for="rating-staff-3"></label>
                        <input
                          type="radio"
                          value="4"
                          name="staff"
                          id="rating-staff-4"
                        />
                        <label for="rating-staff-4"></label>
                        <input
                          type="radio"
                          value="5"
                          name="staff"
                          id="rating-staff-5"
                        />
                        <label for="rating-staff-5"></label>
                      </div>
                      <!-- /.col-sm-3 -->
                      <div class="form-group input-rating col-sm-3">
                        <div class="rating-title">Value</div>

                        <input
                          type="radio"
                          value="1"
                          name="value"
                          id="rating-value-1"
                        />
                        <label for="rating-value-1"></label>
                        <input
                          type="radio"
                          value="2"
                          name="value"
                          id="rating-value-2"
                        />
                        <label for="rating-value-2"></label>
                        <input
                          type="radio"
                          value="3"
                          name="value"
                          id="rating-value-3"
                        />
                        <label for="rating-value-3"></label>
                        <input
                          type="radio"
                          value="4"
                          name="value"
                          id="rating-value-4"
                        />
                        <label for="rating-value-4"></label>
                        <input
                          type="radio"
                          value="5"
                          name="value"
                          id="rating-value-5"
                        />
                        <label for="rating-value-5"></label>
                      </div>
                      <!-- /.col-sm-3 -->
                      <div class="form-group input-rating col-sm-3">
                        <div class="rating-title">Atmosphere</div>

                        <input
                          type="radio"
                          value="1"
                          name="atmosphere"
                          id="rating-atmosphere-1"
                        />
                        <label for="rating-atmosphere-1"></label>
                        <input
                          type="radio"
                          value="2"
                          name="atmosphere"
                          id="rating-atmosphere-2"
                        />
                        <label for="rating-atmosphere-2"></label>
                        <input
                          type="radio"
                          value="3"
                          name="atmosphere"
                          id="rating-atmosphere-3"
                        />
                        <label for="rating-atmosphere-3"></label>
                        <input
                          type="radio"
                          value="4"
                          name="atmosphere"
                          id="rating-atmosphere-4"
                        />
                        <label for="rating-atmosphere-4"></label>
                        <input
                          type="radio"
                          value="5"
                          name="atmosphere"
                          id="rating-atmosphere-5"
                        />
                        <label for="rating-atmosphere-5"></label>
                      </div>
                      <!-- /.col-sm-3 -->
                    </div>
                    <!-- /.row -->

                    <div class="row">
                      <div class="form-group col-sm-6">
                        <label for="">Pros</label>
                        <textarea
                          class="form-control"
                          rows="5"
                          id=""
                        ></textarea>
                      </div>
                      <!-- /.col-sm-6 -->
                      <div class="form-group col-sm-6">
                        <label for="">Cons</label>
                        <textarea
                          class="form-control"
                          rows="5"
                          id=""
                        ></textarea>
                      </div>
                      <!-- /.col-sm-6 -->

                      <div class="col-sm-8">
                        <p>
                          Required fields are marked
                          <span class="required">*</span>
                        </p>
                      </div>
                      <!-- /.col-sm-8 -->
                      <div class="col-sm-4">
                        <button class="btn btn-primary btn-block" type="submit">
                          <i class="fa fa-star"></i>Submit Review
                        </button>
                      </div>
                      <!-- /.col-sm-4 -->
                    </div>
                    <!-- /.row -->
                  </form>
                </div>
                <!-- /.col-* -->
              </div>
              <!-- /.row -->
            </div>
            <!-- /.container -->
          </div>
        </div>
        <!-- /.content -->
      </div>
      <!-- /.main-inner -->
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
