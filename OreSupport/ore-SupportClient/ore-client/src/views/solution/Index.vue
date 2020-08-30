<template>
  <div class="page-wrapper">
    <div class="main">
      <div class="main-inner">
        <div class="container">
          <div class="row">
            <div class="document-title">
              <h1>Grid Version with Sidebar</h1>

              <ul class="breadcrumb">
                <li>
                  <a href="#">Superlist</a>
                </li>
                <li>
                  <a href="#">Listing</a>
                </li>
              </ul>
            </div>
            <!-- /.document-title -->

            <div class="col-sm-8 col-lg-9">
              <div class="content">
                <form class="filter" method="post" action="?">
                  <div class="row">
                    <div class="col-sm-12 col-md-4">
                      <div class="form-group">
                        <input type="text" placeholder="Keyword" class="form-control" />
                      </div>
                      <!-- /.form-group -->
                    </div>
                    <!-- /.col-* -->

                    <div class="col-sm-12 col-md-4">
                      <div class="form-group">
                        <select class="form-control" title="Select Location">
                          <option>Bronx</option>
                          <option>Brooklyn</option>
                          <option>Manhattan</option>
                          <option>Staten Island</option>
                          <option>Queens</option>
                        </select>
                      </div>
                      <!-- /.form-group -->
                    </div>
                    <!-- /.col-* -->

                    <div class="col-sm-12 col-md-4">
                      <div class="form-group">
                        <select class="form-control" title="Select Category">
                          <option value>Automotive</option>
                          <option value>Jobs</option>
                          <option value>Nightlife</option>
                          <option value>Services</option>
                        </select>
                      </div>
                      <!-- /.form-group -->
                    </div>
                    <!-- /.col-* -->
                  </div>
                  <!-- /.row -->

                  <hr />

                  <div class="row">
                    <div class="col-sm-8">
                      <div class="filter-actions">
                        <a href="#">
                          <i class="fa fa-close"></i> Reset Filter
                        </a>
                        <a href="#">
                          <i class="fa fa-save"></i> Save Search
                        </a>
                      </div>
                      <!-- /.filter-actions -->
                    </div>
                    <!-- /.col-* -->

                    <div class="col-sm-4">
                      <button type="submit" class="btn btn-primary">
                        Redefine Search
                        Result
                      </button>
                    </div>
                    <!-- /.col-* -->
                  </div>
                  <!-- /.row -->
                </form>

                <h2 class="page-title">
                  1802 results matching your query
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
                  <div class="row">
                    <div class="col-sm-6 col-lg-4">
                      <div
                        class="card-simple"
                        data-background-image="../../assets/img/tmp/product-1.jpg"
                      >
                        <div class="card-simple-background">
                          <div class="card-simple-content">
                            <h2>
                              <a href="listing-detail.html">Trip To Paris, France</a>
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
                              <a href="listing-detail.html" class="fa fa-search"></a>
                              <a href="#" class="fa fa-heart-o"></a>
                            </div>
                            <!-- /.card-simple-actions -->
                          </div>
                          <!-- /.card-simple-content -->

                          <div class="card-simple-label">Vacation</div>

                          <div class="card-simple-price">$100 / night</div>
                        </div>
                        <!-- /.card-simple-background -->
                      </div>
                      <!-- /.card-simple -->
                    </div>
                    <!-- /.col-* -->

                    <div class="col-sm-6 col-lg-4">
                      <div
                        class="card-simple"
                        data-background-image="../../assets/img/tmp/product-2.jpg"
                      >
                        <div class="card-simple-background">
                          <div class="card-simple-content">
                            <h2>
                              <a href="listing-detail.html">Tasty Brazil Coffee</a>
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
                              <a href="listing-detail.html" class="fa fa-search"></a>
                              <a href="#" class="fa fa-heart-o"></a>
                            </div>
                            <!-- /.card-simple-actions -->
                          </div>
                          <!-- /.card-simple-content -->

                          <div class="card-simple-label">Coffee</div>
                        </div>
                        <!-- /.card-simple-background -->
                      </div>
                      <!-- /.card-simple -->
                    </div>
                    <!-- /.col-* -->

                    <div class="col-sm-6 col-lg-4">
                      <div
                        class="card-simple"
                        data-background-image="../../assets/img/tmp/product-3.jpg"
                      >
                        <div class="card-simple-background">
                          <div class="card-simple-content">
                            <h2>
                              <a href="listing-detail.html">Healthy Breakfast</a>
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
                              <a href="listing-detail.html" class="fa fa-search"></a>
                              <a href="#" class="fa fa-heart-o"></a>
                            </div>
                            <!-- /.card-simple-actions -->
                          </div>
                          <!-- /.card-simple-content -->

                          <div class="card-simple-label">Food</div>

                          <div class="card-simple-price">$12 / person</div>
                        </div>
                        <!-- /.card-simple-background -->
                      </div>
                      <!-- /.card-simple -->
                    </div>
                    <!-- /.col-* -->

                    <div class="col-sm-6 col-lg-4">
                      <div
                        class="card-simple"
                        data-background-image="../../assets/img/tmp/product-4.jpg"
                      >
                        <div class="card-simple-background">
                          <div class="card-simple-content">
                            <h2>
                              <a href="listing-detail.html">Coffee &amp; Newspaper</a>
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
                              <a href="listing-detail.html" class="fa fa-search"></a>
                              <a href="#" class="fa fa-heart-o"></a>
                            </div>
                            <!-- /.card-simple-actions -->
                          </div>
                          <!-- /.card-simple-content -->

                          <div class="card-simple-label">Restaurant</div>
                        </div>
                        <!-- /.card-simple-background -->
                      </div>
                      <!-- /.card-simple -->
                    </div>
                    <!-- /.col-* -->

                    <div class="col-sm-6 col-lg-4">
                      <div
                        class="card-simple"
                        data-background-image="../../assets/img/tmp/product-5.jpg"
                      >
                        <div class="card-simple-background">
                          <div class="card-simple-content">
                            <h2>
                              <a href="listing-detail.html">Boat Trip</a>
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
                              <a href="listing-detail.html" class="fa fa-search"></a>
                              <a href="#" class="fa fa-heart-o"></a>
                            </div>
                            <!-- /.card-simple-actions -->
                          </div>
                          <!-- /.card-simple-content -->

                          <div class="card-simple-label">Vacation</div>
                        </div>
                        <!-- /.card-simple-background -->
                      </div>
                      <!-- /.card-simple -->
                    </div>
                    <!-- /.col-* -->

                    <div class="col-sm-6 col-lg-4">
                      <div
                        class="card-simple"
                        data-background-image="../../assets/img/tmp/product-6.jpg"
                      >
                        <div class="card-simple-background">
                          <div class="card-simple-content">
                            <h2>
                              <a href="listing-detail.html">Italian Restaurant</a>
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
                              <a href="listing-detail.html" class="fa fa-search"></a>
                              <a href="#" class="fa fa-heart-o"></a>
                            </div>
                            <!-- /.card-simple-actions -->
                          </div>
                          <!-- /.card-simple-content -->

                          <div class="card-simple-label">Restaurant</div>

                          <div class="card-simple-price">$28 / person</div>
                        </div>
                        <!-- /.card-simple-background -->
                      </div>
                      <!-- /.card-simple -->
                    </div>
                    <!-- /.col-* -->

                    <div class="col-sm-6 col-lg-4">
                      <div
                        class="card-simple"
                        data-background-image="../../assets/img/tmp/product-7.jpg"
                      >
                        <div class="card-simple-background">
                          <div class="card-simple-content">
                            <h2>
                              <a href="listing-detail.html">Best Brazil Coffee</a>
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
                              <a href="listing-detail.html" class="fa fa-search"></a>
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

                    <div class="col-sm-6 col-lg-4">
                      <div
                        class="card-simple"
                        data-background-image="../../assets/img/tmp/product-8.jpg"
                      >
                        <div class="card-simple-background">
                          <div class="card-simple-content">
                            <h2>
                              <a href="listing-detail.html">Retro Shop</a>
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
                              <a href="listing-detail.html" class="fa fa-search"></a>
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

                    <div class="col-sm-6 col-lg-4">
                      <div
                        class="card-simple"
                        data-background-image="../../assets/img/tmp/product-9.jpg"
                      >
                        <div class="card-simple-background">
                          <div class="card-simple-content">
                            <h2>
                              <a href="listing-detail.html">Wine Tasting</a>
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
                              <a href="listing-detail.html" class="fa fa-search"></a>
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

                    <div class="col-sm-6 col-lg-4">
                      <div
                        class="card-simple"
                        data-background-image="../../assets/img/tmp/product-10.jpg"
                      >
                        <div class="card-simple-background">
                          <div class="card-simple-content">
                            <h2>
                              <a href="listing-detail.html">Affordable Office</a>
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
                              <a href="listing-detail.html" class="fa fa-search"></a>
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

                    <div class="col-sm-6 col-lg-4">
                      <div
                        class="card-simple"
                        data-background-image="../../assets/img/tmp/product-11.jpg"
                      >
                        <div class="card-simple-background">
                          <div class="card-simple-content">
                            <h2>
                              <a href="listing-detail.html">Quick Breakfast</a>
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
                              <a href="listing-detail.html" class="fa fa-search"></a>
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

                    <div class="col-sm-6 col-lg-4">
                      <div
                        class="card-simple"
                        data-background-image="../../assets/img/tmp/product-12.jpg"
                      >
                        <div class="card-simple-background">
                          <div class="card-simple-content">
                            <h2>
                              <a href="listing-detail.html">Monumental City</a>
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
                              <a href="listing-detail.html" class="fa fa-search"></a>
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
                  <!-- /.row -->
                </div>
                <!-- /.cards-simple-wrapper -->

                <div class="pager">
                  <ul>
                    <li>
                      <a href="#">Prev</a>
                    </li>
                    <li>
                      <a href="#">5</a>
                    </li>
                    <li class="active">
                      <a>6</a>
                    </li>
                    <li>
                      <a href="#">7</a>
                    </li>
                    <li>
                      <a href="#">Next</a>
                    </li>
                  </ul>
                </div>
                <!-- /.pagination -->
              </div>
              <!-- /.content -->
            </div>
            <!-- /.col-* -->

            <div class="col-sm-4 col-lg-3">
              <div class="sidebar">
                <div class="widget">
                  <h2 class="widgettitle">Recent Listings</h2>

                  <div class="cards-small">
                    <div class="card-small">
                      <div class="card-small-image">
                        <a href="listing-detail.html">
                          <img src="../../assets/img/tmp/product-2.jpg" alt="Tasty Brazil Coffee" />
                        </a>
                      </div>
                      <!-- /.card-small-image -->

                      <div class="card-small-content">
                        <h3>
                          <a href="listing-detail.html">Tasty Brazil Coffee</a>
                        </h3>
                        <h4>
                          <a href="listing-detail.html">New York / Village</a>
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
                          <img src="../../assets/img/tmp/product-3.jpg" alt="Healthy Breakfast" />
                        </a>
                      </div>
                      <!-- /.card-small-image -->

                      <div class="card-small-content">
                        <h3>
                          <a href="listing-detail.html">Healthy Breakfast</a>
                        </h3>
                        <h4>
                          <a href="listing-detail.html">New York / Village</a>
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
                          <a href="listing-detail.html">Coffee &amp; Newspaper</a>
                        </h3>
                        <h4>
                          <a href="listing-detail.html">New York / Village</a>
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
                  <h2 class="widgettitle">Filter</h2>

                  <div class="background-white p20">
                    <form method="post" action="?">
                      <div class="form-group">
                        <label for>Keyword</label>
                        <input type="text" class="form-control" name id />
                      </div>
                      <!-- /.form-group -->

                      <div class="form-group">
                        <label for>Category</label>

                        <select class="form-control" title="Select Category">
                          <option>Automotive</option>
                          <option>Real Estate</option>
                        </select>
                      </div>
                      <!-- /.form-group -->

                      <div class="form-group">
                        <label for>Location</label>
                        <select class="form-control" title="Select Location">
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

                      <button class="btn btn-primary btn-block" type="submit">Search</button>
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
                          07:00 AM - 07:00
                          PM
                        </span>
                      </div>
                      <!-- /.day -->

                      <div class="day clearfix">
                        <span class="name">Tue</span>
                        <span class="hours">
                          07:00 AM - 07:00
                          PM
                        </span>
                      </div>
                      <!-- /.day -->

                      <div class="day clearfix">
                        <span class="name">Wed</span>
                        <span class="hours">
                          07:00 AM - 07:00
                          PM
                        </span>
                      </div>
                      <!-- /.day -->

                      <div class="day clearfix">
                        <span class="name">Thu</span>
                        <span class="hours">
                          07:00 AM - 07:00
                          PM
                        </span>
                      </div>
                      <!-- /.day -->

                      <div class="day clearfix">
                        <span class="name">Fri</span>
                        <span class="hours">
                          07:00 AM - 07:00
                          PM
                        </span>
                      </div>
                      <!-- /.day -->

                      <div class="day clearfix">
                        <span class="name">Sat</span>
                        <span class="hours">
                          07:00 AM - 02:00
                          PM
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
  </div>
  <!-- /.page-wrapper -->
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
