<template>
    <div class="con" >
        <div class="container con-body" >
            <div class="row body-nav">
                <div class="col-sm-12 body-nav-con">登录</div>
            </div>
            <div class="row body-con">
                <div class="container col-sm-10 col-sm-offset-1 body-con-con">
                    <div class="row body-con-con-row">
                        <div class="col-sm-3 col-sm-offset-1 body-con-con-row-col1"><app-loginslogan></app-loginslogan></div>
                        <div class="col-sm-4 col-sm-offset-3 body-con-con-row-col2"><app-loginlist></app-loginlist></div>
                    </div>
                </div>
            </div>
      </div>
    </div>
</template>
<script>
  import LoginList from "./LoginList";
  import LoginSlogan from "./LoginSlogan";
    export default {
        name: "Login",
        components: {
                      "app-loginslogan":LoginSlogan,
                      "app-loginlist": LoginList,
        },
    }
</script>
<style scoped>
  .con{
    width:100%;
    height:590px;
    background-color:#ebf6df
  }
  .con-body{
    height: 560px;
    background-color:lightgoldenrodyellow
  }
  .body-nav{
    height:53px;
    background-color:#528970
  }
  .body-nav-con{
    width:200px;
    height:53px;
    line-height:52px;
    font-size:18px;
    color: white
  }
  .body-con{
    height:447px;
  }
  .body-con-con{
    margin-top:30px;
    height:400px;
    background-color:#fafafa;
    /*background-image: url("../../assets/p12.jpg");*/
  }
  .body-con-con-row{
    font-size:18px;
    margin-top:30px;
    height:300px
  }
  .body-con-con-row-col1{
    height:200px;
    margin-top:50px;
  }
  .body-con-con-row-col2{
    height:300px;
  }





</style>
