<template>
  <!-- フッター -->
  <v-footer
    color="#FFAA01"
    padless
    style="height: 180px;"
  >
    <v-row
      justify="center"
      no-gutters
      style="margin: 30px 0;"
    >
      <span class="footer-left-border"></span>
      <div v-for="link in links" class="footer-contents footer-right-border" :key="link.tag">
          <v-btn
            color="#FFFFFF"
            text
            rounded
            class="my-2"
            style="font-size: 14px; padding-bottom: 10px"
            :href="link.url"
            target="_blank"
          >
            {{ link.tag }}  
          </v-btn>
        </div>
      <img
        style="width:200px;"
        class='logo_blank'
        src="../../assets/img/tmp/footer_logo.png"
        alt="Logo"
      />
    </v-row>
  </v-footer>
</template>

<script>
/* eslint-disable */

export default {
  data() {
    return {
      links: [{ tag: '企業情報', url: 'https://www.cognisolution.com/'}, { tag: '利用規約', url: '' }, { tag: 'プライバシーポリシー', url: '' }, { tag: 'お問い合わせ', url:'' }],
    };
  },
};
</script>
<style scoped>
.footer-contents {
  width: 200px;
  height: 40px;
  text-align: center;
}

@media screen and (min-width:1024px){
  .footer-right-border{
    border-right: 1px solid #FFFFFF;
  }
  .footer-left-border {
    height: 40px;
    text-align: center;
    border-left: 1px solid #FFFFFF;
  }
  
  .logo_blank {
    margin-left: 50px
  }
}
</style>
