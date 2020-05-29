<template>
  <div class="social-signup-container">
    <div class="sign-btn" @click="googleClickHandle('Google')">
      <span class="google-svg-container">
      </span>
      Google
    </div>
    <div class="sign-btn" @click="facebookClickHandle('Fac')">
      <span class="facebook-svg-container">
        <!--<svg-icon icon-class="facebook" class="icon" />-->
      </span>
      FaceBook
    </div>
  </div>
</template>

<script>
// import openWindow from '@/utils/open-window'

export default {
  name: 'SocialSignin',
  methods: {
    googleClickHandle(thirdpart) {
      alert('ok')
      console.log(thirdpart)
      // this.$store.commit('SET_AUTH_TYPE', thirdpart)
      // const appid = 'xxxxx'
      // const redirect_uri = encodeURIComponent('xxx/redirect?redirect=' + window.location.origin + '/auth-redirect')
      // const url = 'https://open.weixin.facebook.com/connect/qrconnect?appid=' + appid + '&redirect_uri=' + redirect_uri + '&response_type=code&scope=snsapi_login#wechat_redirect'
      // openWindow(url, thirdpart, 540, 540)
    },
    facebookClickHandle(thirdpart) {
      alert('ok')
      console.log(thirdpart)
      // this.$store.commit('SET_AUTH_TYPE', thirdpart)
      // const client_id = 'xxxxx'
      // const redirect_uri = encodeURIComponent('xxx/redirect?redirect=' + window.location.origin + '/auth-redirect')
      // const url = 'https://graph.facebook.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirect_uri
      // openWindow(url, thirdpart, 540, 540)
    }
  }
}
</script>

<style lang="scss" scoped>
  .social-signup-container {
    margin: 20px 0;
    .sign-btn {
      display: inline-block;
      cursor: pointer;
    }
    .icon {
      color: #fff;
      font-size: 24px;
      margin-top: 8px;
    }
    .google-svg-container,
    .facebook-svg-container {
      display: inline-block;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      padding-top: 1px;
      border-radius: 4px;
      margin-bottom: 20px;
      margin-right: 5px;
    }
    .google-svg-container {
      background-color: #24da70;
    }
    .facebook-svg-container {
      background-color: #6BA2D6;
      margin-left: 50px;
    }
  }
</style>
