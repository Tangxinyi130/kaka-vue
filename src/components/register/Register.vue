<template>
  <div>
    <h3>注册</h3>
    <app-registeragreement></app-registeragreement>
  </div>
</template>

<script>
  import  RegisterAgreement from "./RegisterAgreement";
    export default {
        name: "Register",
      components: {
        "app-registeragreement":RegisterAgreement,
      },
    }
</script>

<style scoped>

</style>
