<template>
    <div style="background-color: lightblue">
      <h5>用户信息简介</h5>
      <router-link :to="'/attention/' + id + '/att'"><a>关注：10</a></router-link>
      <router-link :to="'/attention/' + id + '/fan'"><a>粉丝：20</a></router-link>
    </div>
</template>

<script>
    export default {
        name: "UserAttentionInfo",
        data() {
          return {
            id: this.$route.params.id
          }
        }
    }
</script>

<style scoped>

</style>
