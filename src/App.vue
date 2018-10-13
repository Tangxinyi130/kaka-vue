<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  const isLogin = false;
  const userId = 1;
  import Header from "./components/Header.vue";
  export default {
    name: 'App',
    components: {
      "app-header": Header,
    },
    isLogin,
    userId,
  }
</script>

<style>

</style>
