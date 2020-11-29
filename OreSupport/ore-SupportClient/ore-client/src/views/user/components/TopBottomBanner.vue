<template>
  <div class="col-sm-4">
    <v-hover v-slot="{ hover }">
      <v-card
        max-width="100%"
        :elevation="hover ? 8 : 2"
        :class="{ 'on-hover': hover }"
        tile
      >
        <img
          style="max-width: 100%;"
          :src="bannerImage"
        />

      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  props: {
    bannerImage: {
      type: String,
      require: true
    },
  },
  methods: {
  },
};
</script>
