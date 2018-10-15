<template>
  <div>
    <h3>收到明信片</h3>
    <app-postcardsreceiveinterface></app-postcardsreceiveinterface>
  </div>
</template>

<script>
  import PostcardsReceiveInterface from "./PostcardsReceiveInterface";
    export default {
        name: "PostcardsReceive",
        components: {
        "app-postcardsreceiveinterface":PostcardsReceiveInterface,
      },

    }
</script>

<style scoped>

</style>
