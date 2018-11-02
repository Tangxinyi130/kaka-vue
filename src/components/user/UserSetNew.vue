<template>
  <div>
    <div  class="container" id="set">
      <div class="row top">
        <div class="col-sm-12 topTitle">设置</div>
      </div>
      <div class="row bottom">
        <div class="row">
          <user-setheadpic></user-setheadpic>
        </div>
        <div class="row text-center">
          <div class="setForm">
            <!--tab切换选择设置内容-->
            <div class="tab tabFirst">
              <router-link to="/userset/info" active-class="set" exact class="tabText">
                设置资料
              </router-link>
            </div>
            <div class="tab tabLast">
              <router-link to="/userset/pwd" active-class="set" class="tabText">
                设置密码
              </router-link>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <router-view></router-view>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import UserSetHeadpic from "@/components/user/UserSetHeadpic"
  import {mapGetters} from "vuex"
  export default {
    name: "UserSetNew",
    components: {
      "user-setheadpic": UserSetHeadpic,
    },
    computed: mapGetters([
      "isLogin",
      "userId"
    ]),
  }
</script>

<style scoped>
  #set {
    background-color: #fafafa;
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
    background-color: #fafafa;
    /*height: 800px;*/
  }

  .setForm {
    margin-top: 20px;
  }



  .tabText {
    color: #5e5e5e;
    font-size: 16px;
    text-decoration: none;
  }
  .tab {
    display: inline-block;
  }


  /*#setInfo:focus {*/
    /*color: #4e91ff;*/
  /*}*/

  /*#setPwd:focus {*/
    /*color: #4e91ff;*/
  /*}*/

  /*#setPwd:focus #setInfo {*/
    /*color: #5e5e5e;*/
  /*}*/

  .tab.tabLast {
    margin-top: 20px;
    margin-left: 80px;
  }

  .set {
    color: #4e91ff;
  }
</style>
