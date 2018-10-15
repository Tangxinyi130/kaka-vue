<template>
      <nav class="navbar navbar-default" id="myHeader">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">LOGO</a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-left">
              <!--exact可以避免根路由使用始终激活的样式-->
              <router-link tag="li" active-class="active" role="presentation" to="/" exact><a class="text-color">首页</a></router-link>
              <!--<router-link tag="li" active-class="active" role="presentation" to="/postcards"><a class="text-color">明信片</a></router-link>-->
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">明信片 <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <router-link tag="li" role="presentation" to="/postcards/postcardssend"><a class="text-color">发送</a></router-link>
                  <router-link tag="li" role="presentation" to="/postcards/postcardsreceive"><a class="text-color">收到</a></router-link>
                </ul>
              </li>
              <router-link tag="li" active-class="active" role="presentation" to="/wall"><a class="text-color">展示墙</a></router-link>
              <router-link tag="li" active-class="active" role="presentation" to="/activity"><a class="text-color">主题活动</a></router-link>
            </ul>

            <ul class="nav navbar-nav navbar-right" v-if="!isLogin">
              <router-link tag="li" active-class="active" role="presentation" to="/login"><a class="text-color">登录</a></router-link>
              <router-link tag="li" active-class="active" role="presentation" to="/register"><a class="text-color">注册</a></router-link>
            </ul>

            <ul class="nav navbar-nav navbar-right" v-if="isLogin">
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-user"></span>  个人中心 <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <router-link tag="li" role="presentation" :to="'/user/' + userId + '/aboutme'"><a class="text-color">我的首页</a></router-link>
                  <router-link tag="li" role="presentation" to="/activity"><a class="text-color">我的活动</a></router-link>
                  <router-link tag="li" role="presentation" to="/postcard"><a class="text-color">查询明信片</a></router-link>
                  <router-link tag="li" role="presentation" to="/"><a class="text-color">退出登录</a></router-link>
                </ul>
              </li>
              <router-link tag="li" role="presentation" to="/"><a class="text-color"><span class="glyphicon glyphicon-cog"></span>  设置</a></router-link>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>

</template>

<script>
  import {mapGetters} from "vuex"
    export default {
        name: "Header",
        computed: mapGetters([
          "isLogin",
          "userId"
        ])
    }


</script>

<style scoped>
  .navbar, .dropdown-menu {
    background-color: #BDD1C5;
  }

  li .text-color, .dropdown .dropdown-toggle {
    /*color: #FFFEEE;*/
    font-size: 16px;
  }

  /*.active .text-color{*/
    /*color: #7C6354;*/
    /*font-weight: bold;*/
  /*}*/

  /*li {*/
    /*float: left;*/
  /*}*/

  /*li .text-color:hover, .dropdown .dropdown-toggle:hover {*/
    /*color: #7C6354;*/
    /*background-color: transparent;*/
  /*}*/

  /*li .text-color:focus {*/
    /*background-color: transparent;*/
  /*}*/

  /*.dropdown .dropdown-toggle a:focus {*/
    /*background-color: transparent;*/
  /*}*/
</style>
