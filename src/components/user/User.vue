<template>
    <div>
      <div  class="container" id="set">
        <div class="row top">
          <div class="col-sm-12 topTitle">个人中心</div>
        </div>
        <div class="row bottom">
          <app-userpersonal></app-userpersonal>
          <div class="row btns">
            <div class="col-sm-offset-1 col-sm-2">
              <router-link role="presentation" :to="'/user/' + id + '/aboutme'" style="margin-left: -14px">
                <button class="btn aboutme">关于我</button>
              </router-link>
            </div>
            <div class="col-sm-2">
              <router-link role="presentation" :to="'/user/' + id + '/send'" style="margin-left: -10px">
                <button class="btn send">已发送的明信片</button>
              </router-link>
            </div>
            <div class="col-sm-2">
              <router-link role="presentation" :to="'/user/' + id + '/receive'" style="margin-left: -6px">
                <button class="btn receive">已收到的明信片</button>
              </router-link>
            </div>
            <div class="col-sm-2">
              <router-link role="presentation" :to="'/user/' + id + '/wall/receive'" style="margin-left: -4px">
                <button class="btn wall">我的明信片墙</button>
              </router-link>
            </div>
            <div class="col-sm-2">
              <router-link role="presentation" :to="'/user/' + id + '/map'">
                <button class="btn map">我的地图</button>
              </router-link>
            </div>
          </div>

          <div class="row userView">
            <div class="col-sm-offset-1 col-sm-10" id="view">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>

      <div style="height: 200px"></div>
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
  #set {
    background-color: #fafafa;
    padding-bottom: 30px;
  }
  .top {
    height: 53px;
    background-color: #528970;
  }
  .topTitle {
    height: 53px;
    line-height: 52px;
    font-size: 18px;
    color: white;
  }
  .bottom {
    /*background-color: #ebf6df;*/
  }

  .btn {
    width: 180px;
    height: 50px;
    border: 1px solid #797979;
    border-radius: 3px;
    color: #5E5E5E;
    font-size: 14px;
  }
 .btn.aboutme {
   background-color: #91BFBF;
 }
  .btn.send {
    background-color: #BCD0C5;
  }
  .btn.receive {
    background-color: #D4D4AA;
  }
  .btn.wall {
    background-color: #BAD4AA;
  }
  .btn.map {
    background-color: #FDECD0;
    width: 185px;
  }

  .userView {
    margin-top: 20px;
  }

  #view {
    border: 1px solid #797979;
    border-radius: 3px;
    padding: 30px;
    /*box-sizing: border-box;*/
    /*padding-bottom: 30px;*/
    /*padding-left: 30px;*/
    /*padding-right: 30px;*/
  }
  /*.btns {*/
    /*margin-left: 70px;*/
  /*}*/
  /*.btn div {*/
    /*margin-right: 20px;*/
  /*}*/
</style>
