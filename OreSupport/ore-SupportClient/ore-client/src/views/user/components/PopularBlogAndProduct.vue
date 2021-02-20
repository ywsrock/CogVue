<template>
  <div>
    <div class="row">
      <div class="col-lg-6">
        <div>
          <h3 style="margin-bottom: 10px; border-bottom: solid 3px #FFFF00; padding-left: 15px; padding-bottom: 5px; margin-top: 0;">
            人気ブログ
            <div style="text-align: right;float:right;">                                                
              <a href="/#/blog/blogList" style="font-size: 14px; color: black;">もっと見る＞</a>
            </div>
          </h3>   
        </div>
        <template v-for="n of number">
          <v-hover v-slot="{ hover }" :key="n">                                                        
            <v-card
              :elevation="hover ? 8 : 2"
              :class="{ 'on-hover': hover }"
              style="margin-bottom: 12px; height: 140px; width: 380px;"
              tile
            >
              <img
                src="../../../assets/img/tmp/20200920park.png"
                alt="popular blog image"
                style="width: 170px; margin: 0 5px; height: auto; max-height: 130px; position: absolute; top: 50%; transform: translateY(-50%);"
              />
              <div style="text-align: right; padding: 100px 10px 5px 0;">
                <v-icon color="yellow" size="35" style="padding-bottom: 10px;">mdi-thumb-up</v-icon>
                <span style="font-size: 25px;">20</span>
              </div>
            </v-card>
          </v-hover>                              
        </template>
      </div>
      <div class="col-lg-6">
        <div>
          <h3 style="margin-bottom: 10px; border-bottom: solid 3px #FA60F4; padding-left: 15px; padding-bottom: 5px; margin-top: 0;">
            人気商品
            <div style="text-align: right;float:right;">                                                                                
              <a href="#" style="font-size: 14px; color: black;">もっと見る＞</a>
            </div>
          </h3>            
        </div>                                            
        <template v-for="n of number">
          <v-hover v-slot="{ hover }" :key="n">                                                                                      
            <v-card
              :elevation="hover ? 8 : 2"
              :class="{ 'on-hover': hover }"
              style="margin-bottom: 12px; height: 140px; width: 380px;"
              tile
            >
              <img
                src="../../../assets/img/tmp/20200920imuseeye.png"
                alt="popular blog image"
                style="width: 170px; margin: 0 5px; height: auto; max-height: 130px; position: absolute; top: 50%; transform: translateY(-50%);"
              />
              <div style="text-align: right; padding: 100px 10px 5px 0;">
                <v-icon color="yellow" size="35" style="padding-bottom: 15px;">mdi-cursor-pointer</v-icon>
                <span style="font-size: 20px;">CHECK!!</span>
              </div>
            </v-card>
          </v-hover>
        </template>
      </div>
    </div>
    <v-hover v-slot="{ hover }">                                                                                      
      <v-btn
        :elevation="hover ? 8 : 2"
        :class="{ 'on-hover': hover }"
        tile
        style="width: 100%; height: 60px; background-color: #90EE90; font-size: 20px;"
        @click="moreCheck"
      > 
        <strong>もっと見る</strong>
        <v-icon color="black" size="35">mdi-dots-horizontal-circle-outline</v-icon>
      </v-btn>
    </v-hover>
  </div>
</template>

<script>
export default {
  props: {
  },
  data() {
    return {
      number: 3
    };
  },
  methods: {
    moreCheck() {
      if (this.number <= 15) {
        this.number += 3;
      }
    }
  },
};
</script>