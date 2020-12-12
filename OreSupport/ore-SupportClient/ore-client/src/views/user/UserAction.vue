<template>
  <div id="Top">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      />
      <title>測定結果</title>
    </head>
    <body class="orig-row">
      <div class="page-wrapper">
        <div id="header" class="header"></div>
        <div class="main">
          <div class="main-inner" style="padding: 0px !important;">
            <div class="content">
              <div class="container">
                <div class="row">
                  <div class="col-lg-9">
                    <!--アクション結果結果表示-->
                    <ActionManage ref="child" />
                  </div>

                  <!-- サイドメニュー -->
                  <div class="col-lg-3">
                    <SideMenu />
                  </div>
                </div>
                <!-- /.container -->
              </div>

              <!-- フッター -->
            </div>
            <!-- /.content -->
          </div>
          <!-- /.main-inner -->
        </div>
        <!-- /.main -->
      </div>
      <!-- /.page-wrapper -->
    </body>
  </div>
</template>

<script>
import SideMenu from "./ActionsideMenu";
import ActionManage from "./components/actionInfo";
export default {
  name: "userAction",
  props: {
    openCreat: {
      type: Boolean,
      default: function() {
        return false;
      },
    },
  },
  watch: {
    createOpen: {
      handler: function(newV) {
        // if (newV !== oldV) {
        this.$refs.child.creatOpen = newV;
        // }
      },
    },
  },
  components: {
    SideMenu,
    ActionManage,
  },
  data: () => ({
    createOpen: false,
  }),
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

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.information-border {
  padding: 5px 20px;
  border: 1px solid #de0000;
}

.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card.on-hover {
  opacity: 0.8;
}
</style>
