<template>
  <div>
    <section class="app-main">
      <transition name="fade-transform" mode="out-in">
        <router-view :key="routeKey" />
      </transition>
    </section>
  </div>
</template>

<script>
export default {
  name: "MainForm",
  data() {
    return {
      routeKey: this.$route.path,
    };
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
  watch: {
    $route(to, from) {
      if (to != from) {
        this.routeKey = to.key;
      }
    },
  },
};
</script>
