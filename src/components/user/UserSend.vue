<template>
    <div class="container">
      <h3>已发送的明信片</h3>
      <router-link :to="'/user/' + id + '/send/10'">查看发送的图片</router-link>
      <router-view></router-view>
    </div>

</template>

<script>
    export default {
        name: "UserSend",
        data() {
          return {
            id: this.$route.params.id
          }
        },
    }
</script>

<style scoped>

</style>
