<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->

  <router-view />
  <PWAModal />
</template>

<script>
import PWAModal from "@/components/PWAModal.vue";

export default {
  name: "App",
  components: {
    PWAModal,
  },
};
</script>

<style lang="scss">
@import "@/styles/theme.scss";
@import "./../node_modules/normalize.css/normalize.css";

body {
  margin: 0;
  overflow-x: hidden;
  max-width: 100vw;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background-color: var(--app-background-color);
  color: var(--app-text-color);

  height: 100vh;
  // overflow-x: hidden;
  max-width: 100vw;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
