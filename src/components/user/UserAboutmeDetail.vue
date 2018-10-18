<template>
    <div class="row">
      <div class="col-sm-offset-1 col-sm-10" style="background-color: lightblue">
        <h5>关于我的</h5>
        <button v-if="userId == id">编辑</button>
      </div>
    </div>

</template>

<script>
  import {mapGetters} from "vuex"   //必须导入
    export default {
        name: "UserAboutmeDetail",
        computed: mapGetters([    //使用store.js中的数据模板，不变
        "isLogin",   //判断是否有用户登录，登录为true，未登录为false
        "userId"    //登录进去的用户id
        ]),
      data() {
        return {
          id: this.$route.params.id     //路由上的参数id
        }
      }
    }
</script>

<style scoped>

</style>
