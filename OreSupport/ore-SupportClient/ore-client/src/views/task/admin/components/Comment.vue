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
                <strong>注意力は情報の選択的処理機能</strong>
              </h4>
              <p
                style="margin:12px;font-size: 14px;font-family: 'Nunito'; word-wrap: break-word;text-indent: 1em;"
              >
                注意はその定義が非常に難儀であるが、多くの情報の中から情報を選択する心的機能であり、脳の限られた処理資源を有効に活用するために、不要な情報には処理資源を割り当てず、必要な情報だけを優先的に処理するといった資源の最適化を行う情報の選択的処理機能であると考えられています。
              </p>
              <p
                style="margin:12px;font-size: 14px;font-family: 'Nunito'; word-wrap: break-word;text-indent: 1em;"
              >
                膨大な量の感覚情報が大脳に届きますが、脳の情報処理量には限界があるので、そのうちの一部分の感覚情報だけを取捨選択して、いわば焦点を当てて情報処理しています。この特定の対象に意識を向ける働き「大切なことに意識を集中する働き」が注意機能の役割です。
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
  data() {
    return {
      statisticsData: {
        article_count: 1024,
        pageviews_count: 1024,
      },
      value: 3.7,
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
