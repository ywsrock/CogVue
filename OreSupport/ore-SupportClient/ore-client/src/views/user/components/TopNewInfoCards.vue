<template>
  <div class="row" style="margin-left: auto; margin-right: auto;">
    <template v-for="n of 4">
      <div class="col-sm-3 pc-card" :key="n">
        <v-hover v-slot="{ hover }">
          <v-card
            max-width="200px"
            :elevation="hover ? 8 : 2"
            :class="{ 'on-hover': hover }"
            tile
          >
            <v-img
              height="100px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
            </v-img>
            <v-card-title>Title</v-card-title>
            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>
            </v-card-text>
              <div style="text-align: right; margin: 5px 10px 5px 0;">
                <v-icon color="yellow" size="35" style="padding-bottom: 10px;">{{ iconName }}</v-icon>
                <span style="font-size: 20px;">{{ iconComment }}</span>
              </div>
          </v-card>
        </v-hover>
      </div>
    </template>

    <template v-for="n of 3">
      <div class="mobile-card" :key="n">
        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="hover ? 8 : 2"
            :class="{ 'on-hover': hover }"
            style="margin-bottom: 12px; height: 140px; width: 380px;"
            tile
          >
            <img
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              alt="popular blog image"
              style="width: 170px; margin: 0 5px; height: auto; max-height: 130px; position: absolute; top: 50%; transform: translateY(-50%);"
            />
            <div style="text-align: right; padding: 100px 10px 5px 0;">
              <v-icon color="yellow" size="35" style="padding-bottom: 10px;">{{ iconName }}</v-icon>
              <span style="font-size: 20px;">{{ iconComment }}</span>
            </div>
          </v-card>
        </v-hover>
      </div>
    </template>
    <div class="mobile-card">
      <v-hover v-if="buttonType === 'blog'" v-slot="{ hover }">                                                                                      
        <v-btn
          :elevation="hover ? 8 : 2"
          :class="{ 'on-hover': hover }"
          tile
          style="width: 380px; height: 60px; background-color: #8585FF; font-size: 20px;"
          href="/#/blog/blogList"
        > 
          <strong>ブログ一覧</strong>
        </v-btn>
      </v-hover>

      <v-hover v-else-if="buttonType === 'product'" v-slot="{ hover }">                                                                                      
        <v-btn
          :elevation="hover ? 8 : 2"
          :class="{ 'on-hover': hover }"
          tile
          style="width: 380px; height: 60px; background-color: #FC88F7; font-size: 20px;"
          href=""
        > 
          <strong>商品一覧</strong>
        </v-btn>
      </v-hover>

      <v-hover v-else v-slot="{ hover }">                                                                                      
        <v-btn
          :elevation="hover ? 8 : 2"
          :class="{ 'on-hover': hover }"
          tile
          style="width: 380px; height: 60px; background-color: #90EE90; font-size: 20px;"
          href=""
        > 
          <strong>セミナー一覧</strong>
        </v-btn>
      </v-hover>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      require: true
    },
    iconComment: {
      type: String,
      require: true
    },
    buttonType: {
      type: String,
      require: true
    },

  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style>
@media screen and (max-width:720px){
  .pc-card{
    display: none;
  }
}

@media screen and (min-width:721px){
  .mobile-card{
    display: none;
  }
}

</style>