<template>
  <div id="app">
    <headerC></headerC>
    <router-view />
    <footerC></footerC>
  </div>
</template>

<script>
// Add Header/Footer
import headerC from "./components/General/Navbar";
import footerC from "./components/General/Footer";

export default {
  components: {
    headerC,
    footerC
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  height: 100vh;
}
#nav {
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
