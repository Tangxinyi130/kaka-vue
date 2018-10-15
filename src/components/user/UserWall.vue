<template>
    <div>
      <h3>我的明信片墙</h3>
      <router-link role="presentation" :to="'/user/' + id + '/wall/receive'">
        <button>收到</button>
      </router-link>
      <router-link role="presentation" :to="'/user/' + id + '/wall/send'">
        <button>发送</button>
      </router-link>
      <router-link role="presentation" :to="'/user/' + id + '/wall/collection'">
        <button>收藏</button>
      </router-link>
      <router-view></router-view>
    </div>

</template>

<script>
    export default {
        name: "UserWall",
        data() {
          return {
            id: this.$route.params.id
          }
        },
    }
</script>

<style scoped>

</style>
