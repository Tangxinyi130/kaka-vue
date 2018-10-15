<template>
    <h3>用户信息id:{{userId}}</h3>
</template>

<script>
  import {mapGetters} from "vuex"
    export default {
        name: "HomeUser",
      computed: mapGetters([
        "isLogin",
        "userId"
      ])
    }
</script>

<style scoped>

</style>
