<template>
    <div>
      <h3>关注和粉丝id:{{id}}</h3>
      <hr>
      <app-attention-detail></app-attention-detail>
      <hr>
      <app-attention-list></app-attention-list>
    </div>
</template>

<script>
    import UserAttentionDetail from "./UserAttentionDetail"
    import UserAttentionList from "./UserAttentionList"
    export default {
        name: "UserAttention",
        components: {
          "app-attention-detail": UserAttentionDetail,
          "app-attention-list": UserAttentionList
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
