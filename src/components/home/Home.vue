<template>
    <div class="container">
      <div class="row" v-if="!isLogin">
        <div class="col-xs-12 col-sm-12  col-lg-8">
          <app-homesynopsis></app-homesynopsis>
        </div>
        <div class="hidden-xs hidden-sm  hidden-md col-lg-4">
          <div class="login">
            <app-homelogin></app-homelogin>
          </div>
        </div>
      </div>

      <div class="row" v-if="isLogin">
        <div class="min-user col-sm-4">
          <app-homeuser></app-homeuser>
        </div>
        <div class="col-sm-8" >
          <app-homepostcard></app-homepostcard>
        </div>
        <div class="model-user col-sm-4">
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
        <div class="col-sm-5" >
          <app-homeinformation></app-homeinformation>
        </div>
        <div class="col-sm-7">
          <app-homeactivity1></app-homeactivity1>
          <!--<app-homeactivity></app-homeactivity>-->
        </div>
      </div>

      <div class="row" >
        <app-homewall></app-homewall>
      </div>
      <!--<div class="row">-->
        <!--<div class="col-sm-10">-->
          <!--<app-homeactivity1></app-homeactivity1>-->
        <!--</div>-->
      <!--</div>-->

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
  import HomeActivity1 from "@/components/home/HomeActivity1.vue"
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
          "app-homeactivity1":HomeActivity1,
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
    .min-user{
      display: block;
    }
    .model-user{
      display: none;
    }
  }
  @media screen and (min-width: 480px) and (max-width: 767px){
    .min-user{
      display: none;
    }
  }
  @media screen and (min-width:768px) and (max-width:991px ){
    .min-user{
      display: none;
    }
  }
  @media screen and (min-width:992px) and (max-width:1199px ){
    .min-user{
      display: none;
    }
  }
  @media screen and (min-width: 1200px){
    .min-user{
      display: none;
    }
  }
</style>
