<template>
    <div class="container">
      <div class="row" v-if="!isLogin">
        <div class="col-xs-12 col-sm-12 col-md-8" style="background-color: lightblue">
          <app-homesynopsis></app-homesynopsis>
        </div>
        <div class="hidden-xs hidden-sm col-md-4">
          <div class="login" style="background-color: salmon">
            <app-homelogin></app-homelogin>
          </div>
        </div>
      </div>

      <div class="row" v-if="isLogin">
        <div class="col-sm-8" >
          <app-homepostcard></app-homepostcard>
        </div>
        <div class="col-sm-4">
          <app-homeuser></app-homeuser>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-8 ">
          <app-homedynamic></app-homedynamic>
        </div>
        <div class="col-sm-4" >
          <app-homeranking></app-homeranking>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4" style="background-color: lightcoral">
          <app-homeinformation></app-homeinformation>
        </div>
        <div class="col-sm-8" style="background-color: lightblue">
          <app-homeactivity></app-homeactivity>
        </div>
      </div>

      <div class="row" style="background-color: lightgoldenrodyellow">
        <app-homewall></app-homewall>
      </div>

    </div>

</template>

<script>
  import HomeSynopsis from "@/components/home/HomeSynopsis";
  import HomeLogin from "@/components/home/HomeLogin.vue";
  import HomeDynamic from "@/components/home/HomeDynamic.vue";
  import HomeRanking from "@/components/home/HomeRanking.vue";
  import HomeActivity from "@/components/home/HomeActivity.vue";
  import HomeInformation from "@/components/home/HomeInformation.vue";
  import HomeWall from "@/components/home/HomeWall.vue";
  import HomePostcard from "@/components/home/HomePostcard";
  import HomeUser from "@/components/home/HomeUser";
  import LoginList from "@/components/login/LoginList.vue"

  import {mapGetters} from "vuex"
    export default {
        name: "Home",
        components: {
          "app-homesynopsis": HomeSynopsis,
          "app-homelogin": HomeLogin,
          "app-homedynamic": HomeDynamic,
          "app-homeranking": HomeRanking,
          "app-homeactivity": HomeActivity,
          "app-homeinformation": HomeInformation,
          "app-homewall": HomeWall,
          "app-homepostcard": HomePostcard,
          "app-homeuser": HomeUser,
          "app-login":LoginList,
        },
      computed: mapGetters([
        "isLogin",
        "userId",
      ]),
      // data() {
      //     return {
      //       token: document.cookie
      //     }
      // }
    }
</script>

<style scoped>
  @media  screen and (max-width: 479px) {

  }
  @media screen and (min-width: 480px) and (max-width: 767px){

  }
  @media screen and (min-width:768px) and (max-width:991px ){

  }
  @media screen and (min-width:992px) and (max-width:1199px ){

  }
  @media screen and (min-width: 1200px){

  }
</style>
