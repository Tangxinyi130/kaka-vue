<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  // const isLogin = false;
  // const userId = 1;
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
  export default {
    name: 'App',
    components: {
      "app-header": Header,
      "app-footer":Footer,
    },
    created() {
      let loading = document.getElementById("Loading");
      if (loading != null) {
        document.body.removeChild(loading);
      }
    }
  }
</script>

<style>
  #app {
    background-color: #ebf6df;
  }
</style>
