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
import { mapActions } from "vuex";
import { getToken } from "@/utils/auth";

export default {
  name: "Login",
  components: {
    Header,
    Footer
  },
  mounted: function() {
    let token = getToken();
    if (token) {
      this.getUserInfo()
        .then(() => {})
        .catch(() => {
          this.logout();
        });
    }
  },
  methods: {
    ...mapActions({ getUserInfo: "user/getInfo", logout: "user/logout" })
  }
};
</script>
<style lang="scss">
// Import Main styles for this application
// @import "assets/css/main";
</style>
