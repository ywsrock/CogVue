<template>
<div class="page-wrapper">
  <header class="header" :key="key">
    <div class="header-wrapper">
      <div class="container">
        <div class="header-inner">
          <div class="header-logo">
            <a href="index.html">
              <img src="../../assets/img/logo.png" alt="Logo" />
              <span>Superlist</span>
            </a>
          </div>
          <!-- /.header-logo -->
          <div class="header-content">
            <div class="header-top">
              <div class="header-search"  v-if="isLogin">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search for..."
                />
              </div>
              <!-- /.header-search -->

              <ul class="header-nav-social social-links nav nav-pills" v-if="!isLogin">
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-google-plus"></i></a>
                </li>
              </ul>
              <!-- /.header-nav-social -->

              <ul class="header-nav-secondary nav nav-pills">
                <li v-if="!isLogin">
                  <router-link v-bind:to="{ name: 'login' }" key="key"
                    >Login</router-link
                  >
                </li>
                <li v-if="!isLogin">
                  <router-link v-bind:to="{ name: 'register' }" key="key"
                    >Register</router-link
                  >
                </li>
                <li v-if="isLogin">
                  <!--<el-button type="text" @click.native="logout">Logout</el-button>-->
                  <a href="" @click.prevent.stop="logout">Logout</a>
                </li>
                <li v-if="isLogin">
                  <a href="" @click.prevent.stop="getProfileInfo">Profile</a>
                </li>
              </ul>
            </div>
            <!-- /.header-top -->

            <div class="header-bottom">
              <div class="header-action">
                <a
                  href="listing-submit.html"
                  class="header-action-inner"
                  title="Add Listing"
                  data-toggle="tooltip"
                  data-placement="bottom"
                >
                  <i class="fa fa-plus"></i> </a
                ><!-- /.header-action-inner -->
              </div>
              <!-- /.header-action -->

              <ul
                class="header-nav-primary nav nav-pills collapse navbar-collapse"
              >
                <li class="active">
                  <a href="#">Home <i class="fa fa-chevron-down"></i></a>

                  <ul class="sub-menu">
                    <li><a href="index-video.html">Video v1</a></li>
                    <li>
                      <a href="index-video-transparent-header.html">Video v2</a>
                    </li>
                    <li><a href="index-google-map.html">Google Map V1</a></li>
                    <li>
                      <a href="index-google-map-transparent-header.html"
                        >Google Map v2</a
                      >
                    </li>
                    <li><a href="index-image.html">Image v1</a></li>
                    <li><a href="index.html">Image v2</a></li>
                    <li>
                      <a href="index-bootstrap-slider.html">Boxed Slider</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#">Listing <i class="fa fa-chevron-down"></i></a>

                  <ul class="sub-menu">
                    <li><a href="listing-detail.html">Detail</a></li>
                    <li><a href="listing-map.html">Row + Map</a></li>
                    <li><a href="listing-grid.html">Grid</a></li>
                    <li>
                      <a href="listing-grid-sidebar.html">Grid Sidebar</a>
                    </li>
                    <li><a href="listing-row.html">Row</a></li>
                    <li><a href="listing-row-sidebar.html">Row Sidebar</a></li>
                  </ul>
                </li>

                <li class="has-mega-menu ">
                  <a href="#">Pages <i class="fa fa-chevron-down"></i></a>

                  <ul class="mega-menu">
                    <li>
                      <a href="#">General</a>

                      <ul>
                        <li><a href="faq.html">FAQ</a></li>
                        <li><a href="invoice.html">Invoice</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                        <li><a href="grid.html">Grid System</a></li>
                        <li><a href="testimonials.html">Testimonials</a></li>
                      </ul>
                    </li>

                    <li>
                      <a href="#">User Account</a>
                      <ul>
                        <li>
                          <a href="user-profile-edit.html">Profile Edit</a>
                        </li>
                        <li><a href="login.html">Login Form</a></li>
                        <li><a href="register.html">Register Form</a></li>
                        <li>
                          <a href="change-password.html"
                            >Change Password Form</a
                          >
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="#">Miscellaneous</a>

                      <ul>
                        <li><a href="sticky-footer.html">Sticky Footer</a></li>
                        <li>
                          <a href="terms-conditions.html"
                            >Terms &amp; Conditions</a
                          >
                        </li>
                        <li><a href="error-403.html">403 - Forbidden</a></li>
                        <li><a href="error-404.html">404 - Not Found</a></li>
                        <li>
                          <a href="error-500.html">500 - Internal Error</a>
                        </li>
                      </ul>
                    </li>

                    <li class="hidden-xs">
                      <div class="special">
                        <a href="register.html">Sign Up Now</a>
                      </div>
                      <!-- /.special-->
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#">Blog <i class="fa fa-chevron-down"></i></a>

                  <ul class="sub-menu">
                    <li>
                      <a href="blog-standard-right-sidebar.html"
                        >Standard Right Sidebar</a
                      >
                    </li>
                    <li>
                      <a href="blog-standard-left-sidebar.html"
                        >Standard Left Sidebar</a
                      >
                    </li>
                    <li><a href="blog-boxed.html">Boxed Style</a></li>
                    <li><a href="blog-condensed.html">Condensed Style</a></li>
                    <li><a href="blog-detail.html">Detail Fullwidth</a></li>
                    <li>
                      <a href="blog-detail-right-sidebar.html"
                        >Detail Right Sidebar</a
                      >
                    </li>
                    <li>
                      <a href="blog-detail-left-sidebar.html"
                        >Detail Left Sidebar</a
                      >
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#">Admin <i class="fa fa-chevron-down"></i></a>

                  <ul class="sub-menu">
                    <li><a href="admin-dashboard.html">Dashboard</a></li>
                    <li><a href="admin-grid.html">Grid System</a></li>
                    <li><a href="admin-tables.html">Tables</a></li>
                    <li><a href="admin-forms.html">Forms</a></li>
                    <li>
                      <a href="admin-notifications.html">Notifications</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#">Contact <i class="fa fa-chevron-down"></i></a>
                  <ul class="sub-menu">
                    <li><a href="contact-1.html">Contact v1</a></li>
                    <li><a href="contact-2.html">Contact v2</a></li>
                    <li><a href="contact-3.html">Contact v3</a></li>
                  </ul>
                </li>
              </ul>

              <button
                class="navbar-toggle collapsed"
                type="button"
                data-toggle="collapse"
                data-target=".header-nav-primary"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <!-- /.header-bottom -->
          </div>
          <!-- /.header-content -->
        </div>
        <!-- /.header-inner -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.header-wrapper -->
  </header>
  <!-- /.header -->
</div>
</template>

<script>
import store from "@/store";
import { USER_INFO_STATIC_JS } from "../../utils/const";

export default {
  data() {
    return {
      username: "",
      isLogin: false,
    };
  },
  mounted() {
    // if (store.getters.token){
    if (this.$session.get("jwt")) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
    // VUEインスタン設定
    var that = this;
    // 外部JS引用、public/index.html中で、直接引用してもOK
    USER_INFO_STATIC_JS.forEach((p) => {
      that
        .$loadScriptaddBody(p)
        // .$loadScriptaddBody(p)
        .then(() => {})
        .catch(() => {
          console.log("外部IS引用失敗");
        });
    });
  },

  computed: {
    key() {
      return this.$route.path;
    },
    getusername: function() {
      if (this.isLogin) {
        return (
          store.getters.info.basicInfo.lastName +
          store.getters.info.basicInfo.firstName
        );
      } else {
        return "";
      }
    },
  },
  methods: {
    getProfileInfo() {
      this.$router.push("/userInfo/userUpdate");
    },

    logout() {
      this.$store.dispatch("user/logout");
      this.$session.destroy();
      this.isLogin = false;
      // this.$router.push(`/login?redirect=${this.$route.fullPath}`);
      this.$router.push(`/userInfo?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>
<style>
@import "http://fonts.googleapis.com/css?family=Nunito:300,400,700";
@import "../../../public/assets/libraries/font-awesome/css/font-awesome.min.css";
@import "../../../public/assets/libraries/owl.carousel/assets/owl.carousel.css";
@import "../../../public/assets/libraries/colorbox/example1/colorbox.css";
@import "../../../public/assets/libraries/bootstrap-select/bootstrap-select.min.css";
@import "../../../public/assets/libraries/bootstrap-fileinput/fileinput.min.css";
@import "../../../public/assets/css/superlist.css";
</style>
