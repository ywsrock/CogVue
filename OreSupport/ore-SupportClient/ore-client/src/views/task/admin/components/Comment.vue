<template>
  <div slot="header" class="box-card-header">
    <div style="background-color:#FFFFFF" width="100%">
      <el-tag type="success">評価点数</el-tag>
      <span>
        <el-rate
          v-model="value"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}"
        >
        </el-rate>
      </span>
      <template>
        <el-carousel
          height="430px"
          width="90%"
          style="background-color:#FFFFFF;"
          indicator-position="outside"
        >
          <el-carousel-item
            v-for="item in 4"
            :key="item"
            style="background-color:#FFFFFF"
          >
            <div>
              <h4 style="margin-top:20px;text-align: center">
                <strong>{{ content.title }}</strong>
              </h4>
              <p
                style="margin:12px;font-size: 14px;font-family: 'Nunito'; word-wrap: break-word;text-indent: 1em;"
              >
                {{ content.content }}
              </p>
              <p
                style="margin:12px;font-size: 14px;font-family: 'Nunito'; word-wrap: break-word;text-indent: 1em;"
              >
                {{ content.other }}
              </p>
            </div>
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import OreSupportThumb from "@/components/OreSupportThumb";
// import Mallki from "@/components/TextHoverEffect/Mallki";

export default {
  // components: { OreSupportThumb, Mallki },

  filters: {
    statusFilter(status) {
      const statusMap = {
        success: "success",
        pending: "danger",
      };
      return statusMap[status];
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$http.get("/api/personal/CogEvo/comment").then(
        (res) => {
          this.content = res.data.commentChartData.content;
          this.value = res.data.commentChartData.value;
          this.initChart();
        },
        (error) => {
          console.log(error);
        }
      );
    });
  },
  data() {
    return {
      statisticsData: {
        article_count: 1024,
        pageviews_count: 1024,
      },
      value: 0,
      content: {},
    };
  },
  computed: {
    ...mapGetters(["name", "avatar", "roles"]),
  },
};
</script>

<style lang="scss">
.box-card-component {
  .el-card__header {
    padding: 0px !important;
  }
}
</style>
<style lang="scss" scoped>
.box-card-component {
  .box-card-header {
    position: relative;
    height: 220px;
    img {
      width: 100%;
      height: 100%;
      transition: all 0.2s linear;
      &:hover {
        transform: scale(1.1, 1.1);
        filter: contrast(130%);
      }
    }
  }
  .mallki-text {
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 20px;
    font-weight: bold;
  }
  .oreSupportThumb {
    z-index: 100;
    height: 70px !important;
    width: 70px !important;
    position: absolute !important;
    top: -45px;
    left: 0px;
    border: 5px solid #ffffff;
    background-color: #fff;
    margin: auto;
    box-shadow: none !important;
    /deep/ .pan-info {
      box-shadow: none !important;
    }
  }
  .progress-item {
    margin-bottom: 10px;
    font-size: 14px;
  }
  @media only screen and (max-width: 1510px) {
    .mallki-text {
      display: none;
    }
  }
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
</style>
