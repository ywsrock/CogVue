<template>
  <div class="row">
    <template v-for="n of 4">
      <div class="col-lg-3" :key="n">
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
    }
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>