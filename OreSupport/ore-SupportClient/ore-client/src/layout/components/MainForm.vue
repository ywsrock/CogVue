<template>
  <div>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key"/>
    </transition>
  </section>
  </div>
</template>

<script>
export default {
  name: 'MainForm',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
