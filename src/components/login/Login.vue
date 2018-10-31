<template>
    <div class="con" >
        <div class="container con-body" >
            <div class="row body-nav">
                <div class="col-sm-12 body-nav-con">登录</div>
            </div>
            <div class="row body-con">
                <div class="logo text-center"><p>拾.笺</p></div>
                <div class="container col-sm-10 col-sm-offset-1 body-con-con">
                    <div class="row body-con-con-row">
                        <div class="col-sm-3 col-sm-offset-1 body-con-con-row-col1"><app-loginslogan></app-loginslogan></div>
                        <div class="col-sm-4 col-sm-offset-4 body-con-con-row-col2"><app-loginlist></app-loginlist></div>
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
    /*background-image: url("");*/
    background-color:#fafafa;
  }
  .body-nav{
    height:53px;
    background-color:#528970;

  }
  .body-nav-con{
    width:200px;
    /*height:53px;*/
    line-height:52px;
    font-size:18px;
    color: white
  }
  .body-con{
    height:447px;
  }
  .body-con-con{
    /*margin-top:30px;*/
    height:360px;
    /*background-color:#fafafa;*/
    /*opacity: 0.5;*/
    /*background-image: url("../../assets/p12.jpg");*/
  }
  .body-con-con-row{
    font-size:18px;
    margin-top:30px;
    height:300px;

  }
  .body-con-con-row-col1{
    height:200px;
    margin-top:50px;

  }
  .body-con-con-row-col2{
    height:300px;
  }
  .logo{
    margin-top:40px;
    height:40px;
    /*border: 1px solid red;*/
    color: #5e5e5e;
    font-size: 28px;
    font-weight: bold;
  }





</style>
