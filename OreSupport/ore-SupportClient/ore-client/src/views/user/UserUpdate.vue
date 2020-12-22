<template>
  <div id="InfoManage">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      />
      <title>oreSupport ユーザプロフィール編集</title>
    </head>

    <body class style>
      <div class="page-wrapper">
        <div class="main">
          <div class="main-inner">
            <div class="orig-row">
              <div class="col-sm-4 col-lg-3">
                <div class="sidebar">
                  <div class="widget">
                    <!--avatar情報-->
                    <Avatar ref="avatarCpn"></Avatar>
                    <!--/avatar情報-->
                    <!-- /.user-photo -->
                  </div>
                  <!-- /.widget -->

                  <div class="widget">
                    <ul class="menu-advanced">
                      <li
                        id="userInfo-li"
                        v-bind:class="{ active: isActive_userInfo }"
                      >
                        <a
                          href="#"
                          @click.prevent="
                            current = 0;
                            activeSwitch(0);
                          "
                        >
                          <i class="fa fa-user"></i> ユーザ情報管理
                        </a>
                      </li>
                      <!-- <li
                        id="action-li"
                        v-bind:class="{ active: isActive_action }"
                      >
                        <a
                          href="#"
                          @click.prevent="
                            current = 1;
                            activeSwitch(1);
                          "
                        >
                          <i class="fa fa-key"></i> 行動履歴管理
                        </a>
                      </li>-->
                      <li
                        id="blog-li"
                        v-bind:class="{ active: isActive_Variouse }"
                      >
                        <a
                          href="#"
                          @click.prevent="
                            current = 2;
                            activeSwitch(2);
                          "
                        >
                          <i class="fa fa-sign-out"></i>各種設定
                        </a>
                      </li>
                      <li>
                        <a href="#"> <i class="fa fa-sign-out"></i>退会 </a>
                      </li>
                    </ul>
                  </div>
                  <!-- /.widget -->
                </div>
                <!-- /.sidebar -->
              </div>
              <!-- /.col-* -->

              <div class="col-sm-8 col-lg-9">
                <!-- 情報内容-->
                <keep-alive>
                  <component v-bind:is="currentCompo" />
                </keep-alive>
                <!-- /情報内容-->
                <!-- /.content -->
              </div>
              <!-- /.col-* -->
            </div>
            <!-- /.row -->
            <!-- /.container -->
          </div>
          <!-- /.main-inner -->
        </div>
        <!-- /.main -->

        <!-- /.footer -->
      </div>
      <!-- /.page-wrapper -->
    </body>
  </div>
</template>

<script>
// import schema from "async-validator";
// import { Message } from "element-ui";
import ProfileInfo from "./components/profileInfo";
import ActionManage from "./components/actionInfo";
import VariousSetting from "./components/VariousSetting";
import Avatar from "./components/avatarInfo";
export default {
  watch: {
    avatarSrc: {
      handler: function(newV, oldV) {
        if (newV !== oldV) {
          this.$refs.avatarCpn.avatar = newV;
        }
      },
    },
  },
  components: {
    ProfileInfo,
    Avatar,
    ActionManage,
    VariousSetting,
  },
  data() {
    return {
      avatarSrc: "",
      isActive_userInfo: true,
      isActive_action: false,
      isActive_Variouse: false,
      current: 0,
      components: ["ProfileInfo", "ActionManage", "VariousSetting"],
    };
  },
  computed: {
    currentCompo: function() {
      return this.components[this.current];
    },
  },

  created() {},
  mounted() {},
  methods: {
    activeSwitch: function(activeIndex) {
      switch (activeIndex) {
        case 1:
          this.isActive_userInfo = false;
          this.isActive_action = true;
          this.isActive_Variouse = false;
          break;
        case 2:
          this.isActive_userInfo = false;
          this.isActive_action = false;
          this.isActive_Variouse = true;
          break;
        default:
          this.isActive_userInfo = true;
          this.isActive_action = false;
          this.isActive_Variouse = false;
      }
    },
  },
};
</script>
