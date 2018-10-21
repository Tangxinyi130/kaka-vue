<template>
    <div>
      <!--<h3>关注和粉丝块id: {{id}}</h3>-->
      <!--<div>用户信息</div>-->
      <app-attention-info></app-attention-info>
      <!--<app-attention-search></app-attention-search>-->
      <hr>

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
