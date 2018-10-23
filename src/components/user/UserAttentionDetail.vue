<template>
    <div>
      <!-- 用户信息 -->
      <app-attention-info></app-attention-info>
    </div>
</template>

<script>
    import UserAttentionInfo from "./UserAttentionInfo"
    import UserAttentionSearch from "./UserAttentionSearch"
    export default {
        name: "UserAttentionDetail",
        components: {
          "app-attention-info": UserAttentionInfo,  //用户个人的信息
          "app-attention-search": UserAttentionSearch
        },
        data() {
          return {
            id: this.$route.params.id
          }
        }
    }
</script>

<style scoped>

</style>
