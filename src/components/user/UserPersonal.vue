<template>
    <div class="container">
      <div class="row" style="background-color: #528970">
        <h3>用户个人中心id:{{id}}</h3>
      </div>
      <div class="row">
        <app-userinfo></app-userinfo>
      </div>
    </div>

</template>

<script>
    import UserInfo from "./UserInfo";
    export default {
        name: "UserPersonal",
        components: {
          "app-userinfo": UserInfo
        },
        data() {
          return {
            id: this.$route.params.id
          }
        },
    }
</script>

<style scoped>

</style>
