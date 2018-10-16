<template>
    <div>
      <h3>已收到的明信片</h3>
      <router-link :to="'/user/' + id + '/receive/10'">查看收到的图片</router-link>
      <router-view></router-view>
    </div>


</template>

<script>
    export default {
        name: "UserReceive",
        data() {
          return {
            id: this.$route.params.id
          }
        }
    }
</script>

<style scoped>

</style>
