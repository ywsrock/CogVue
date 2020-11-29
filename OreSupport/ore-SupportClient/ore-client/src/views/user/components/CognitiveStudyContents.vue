<template>
  <div class="contents-area">
    <v-card
      elevation="2"
      tile
      class="contens-title-area"
      :style="{ backgroundColor: TitleBackgroundColor }"
    >
      <p class="contens-title"><strong>{{ Title }}</strong><br />{{ SubTitle }}</p>
    </v-card>
    <v-card
      elevation="2"
      tile
      class="contens-area"
      :style="{ backgroundColor: ContentsBackgroundColor }"      
    >
      <div style="overflow: hidden;">
        <template v-for="n of 4">
          <div style="padding: 12px 5px; float: left;" :key="n">
            <v-hover v-slot="{ hover }">
              <v-card
                max-width="150px"
                :elevation="hover ? 8 : 2"
                :class="{ 'on-hover': hover }"
                tile
                style="margin-left: 5px;"
              >
                <v-img
                  height="100px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                </v-img>
                <v-card-title>Title</v-card-title>
                <!-- <v-card-text class="text--primary">
                  <div>Whitehaven Beach</div>
                </v-card-text> -->
                <div style="text-align: right; margin: 5px 10px 5px 0;">
                  <v-icon color="yellow" size="35" style="padding-bottom: 5px; margin-right: 5px;">mdi-book-open</v-icon>
                  <span style="font-size: 15px;">READ MORE</span>
                </div>
              </v-card>
            </v-hover>
          </div>
        </template>
      </div>
    </v-card>
  </div>  
</template>

<script>
export default {
  props: {
    Title: {
      type: String,
      require: true
    },
    SubTitle: {
      type: String,
      require: true
    },
    TitleBackgroundColor: {
      type: String,
      require: true
    },
    ContentsBackgroundColor: {
      type: String,
      require: true
    }
  },
  data() {
    return {
    };
  },
  methods: {
  }
}
</script>

<style>
.contents-area {
  overflow: hidden;
  margin: 10px 0;
}

.contens-title-area {
  height: 220px;
  width: 20%;
  float: left;  
}

.contens-title {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 10px;
  font-size: 18px;
}

.contens-area {
  height: 220px;
  margin-left: 5px;
  float: left;
  width: 78%;
}
</style>