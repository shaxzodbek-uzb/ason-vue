<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "Login",
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="scss">
// Import Main styles for this application
// @import "assets/css/main";
</style>
