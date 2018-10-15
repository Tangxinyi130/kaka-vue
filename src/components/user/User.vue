<template>
    <div class="container">
      <!--<h3>用户</h3>-->
      <div class="row" style="border: 1px solid black">
        <app-userpersonal></app-userpersonal>
        <div class="row">
          <div class="col-sm-offset-1 col-sm-2">
            <router-link role="presentation" :to="'/user/' + id + '/aboutme'">
              <button>关于我</button>
            </router-link>
          </div>
          <div class="col-sm-2">
            <router-link role="presentation" :to="'/user/' + id + '/send'">
              <button>已发送的明信片</button>
            </router-link>
          </div>
          <div class="col-sm-2">
            <router-link role="presentation" :to="'/user/' + id + '/receive'">
              <button>已收到的明信片</button>
            </router-link>
          </div>
          <div class="col-sm-2">
            <router-link role="presentation" :to="'/user/' + id + '/wall'">
              <button>我的明信片墙</button>
            </router-link>
          </div>
          <div class="col-sm-2">
            <router-link role="presentation" :to="'/user/' + id + '/map'">
              <button>我的地图</button>
            </router-link>
          </div>
        </div>

        <router-view></router-view>
      </div>

    </div>

</template>

<script>
    import UserPersonal from "@/components/user/UserPersonal";
    export default {
        name: "User",
        components: {
          "app-userpersonal": UserPersonal,
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
