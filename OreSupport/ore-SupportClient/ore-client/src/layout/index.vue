<template>
  <v-app>
    <div name="Layout">
      <TopHeader :key="key" />
      <MainForm />
      <Footer />
    </div>
  </v-app>
</template>

<script>
import MainForm from "./components/MainForm";
import TopHeader from "./components/TopHeader";
import Footer from "./components/Footer";

export default {
  name: "Layout",
  components: {
    MainForm,
    TopHeader,
    Footer
  },

  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>
