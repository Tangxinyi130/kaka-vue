<template>
  <div>
    <h3>登录</h3>
    <app-loginlist></app-loginlist>
    <app-loginslogan></app-loginslogan>
  </div>
</template>

<script>
  import LoginList from "./LoginList";
  import LoginSlogan from "./LoginSlogan";
    export default {
        name: "Login",
      components: {
        "app-loginslogan":LoginSlogan,
        "app-loginlist": LoginList,
      },
    }
</script>

<style scoped>

</style>
