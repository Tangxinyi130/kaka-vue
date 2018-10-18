<template>
    <div>
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
  .row {
    margin-top: 30px;
  }
</style>
