<template>
    <div class="container">
      <div class="row">
        <div class="col-sm-offset-1 col-sm-2" style="background-color: lightsalmon">用户头像</div>
        <div class="col-sm-8" style="background-color: lightblue">
          用户简介
          <br>
          <router-link :to="'/attention/' + id"><a>我的关注</a></router-link>
          <!--<router-link >我的关注</router-link>-->
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "UserInfo",
        data() {
          return {
            id: this.$route.params.id
          }
        }
    }
</script>

<style scoped>

</style>
