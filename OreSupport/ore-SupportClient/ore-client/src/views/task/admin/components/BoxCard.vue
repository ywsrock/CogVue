<template>
  <el-card class="box-card-component" style="margin-left:8px;">
    <div slot="header" class="box-card-header">
      <img src="http://img-cdn.jg.jugem.jp/26a/1305672/20171229_2579681.png">
    </div>
    <div style="position:relative;">
      <OreSupportThumb :image="avatar" class="oreSupportThumb" />
      <mallki class-name="mallki-text" text="黒ちゃん" />
      <div style="padding-top:35px;" class="progress-item">
        <span>記憶力</span>
        <el-progress :percentage="70" />
      </div>
      <div class="progress-item">
        <span>空間認知力</span>
        <el-progress :percentage="18" />
      </div>
      <div class="progress-item">
        <span>見当識</span>
        <el-progress :percentage="12" />
      </div>
      <div class="progress-item">
        <span>計画力</span>
        <el-progress :percentage="100" status="success" />
      </div>
      <div class="progress-item">
        <span>注意力</span>
        <el-progress :percentage="100" status="success" />
      </div>
    </div>
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex'
import OreSupportThumb from '@/components/OreSupportThumb'
import Mallki from '@/components/TextHoverEffect/Mallki'

export default {
  components: { OreSupportThumb, Mallki },

  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      statisticsData: {
        article_count: 1024,
        pageviews_count: 1024
      }
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  }
}
</script>

<style lang="scss" >
.box-card-component{
  .el-card__header {
    padding: 0px!important;
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
    height: 70px!important;
    width: 70px!important;
    position: absolute!important;
    top: -45px;
    left: 0px;
    border: 5px solid #ffffff;
    background-color: #fff;
    margin: auto;
    box-shadow: none!important;
    /deep/ .pan-info {
      box-shadow: none!important;
    }
  }
  .progress-item {
    margin-bottom: 10px;
    font-size: 14px;
  }
  @media only screen and (max-width: 1510px){
    .mallki-text{
      display: none;
    }
  }
}
</style>
