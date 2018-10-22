<template>
    <!--<h3>我的活动</h3>-->
  <div class="con">
    <div class="container con1">
      <div class="row con-nav">
        <div class="col-sm-12 con-nav-col">我的活动</div>
      </div>
      <div class="row con-body">
        <div class="container col-sm-8 col-sm-offset-2 con-body-con text-center">
          <div style="height: 30px"></div>
          <!--*********************-->
          <div class="leftc col-sm-10">
            <div class="contList">
              <ul class="cont-list">
                <li class="am-gallery-item" v-for="data in myactivityData">
                  <router-link :to="'/activitydetail/' + data.activityId">
                    <div class="row col-sm-offset-1" style="border: 1px solid #ccc">
                      <div class="img_box col-md-4">
                      <a href="">
                        <img width="100%" height="162px" :src='data.goodsPic'>
                      </a>
                    </div>
                      <div class="intro col-md-8" style="text-align: left">
                          <div class="row"><p>活动名称:{{data.activityName}}</p></div>
                          <div class="row"><p>活动详情:{{data.activityDetails}}</p></div>
                          <div class="row"><p>活动对应的商品名称:{{data.goodsName}}</p></div>
                          <div class="row"><p>在该活动中购买的商品名称:{{data.goodsName}}</p></div>
                          <div class="row"><p>商品的价格:{{data.goodsPrice}}</p></div>
                          <div class="row"><p>商品的介绍:{{data.goodsDetails}}</p></div>
                     </div>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <!--***************************-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "UserMyactivity",
      data(){
        return {
          myactivityData:{}
        }
      },
      created(){
        this.$ajax({
          method: 'get',
          url: 'http://localhost:3000/users/myActivity/'+localStorage.userId
        }).then(res => {
          this.myactivityData=res.data.data;
          console.log("我的活动的个数"+this.myactivityData.length)
        })
      }
    }
</script>

<style scoped>
  .con{
    width:100%;
    height:800px;
    background-color:#ebf6df
  }
  .con1{
    height:800px;
    background-color:lightgoldenrodyellow
  }
  .con-nav{
    height:53px;
    background-color:#528970
  }
  .con-nav-col{
    width:200px;
    height:53px;
    line-height:52px;
    font-size: 18px;
    color: white
  }
  .con-body{
    height:750px;

  }
  .con-body-con{
    margin-top:30px;
    height:650px;
    background-color:#fafafa;
    /*border: 1px solid red;*/
    /*background-image: url("../../assets/reg2.jpg");*/
  }
  ul{
    list-style: none;
  }
  img{
    margin: 12px -20px;
  }
  .cont-list>li{
    padding: 0;
  }
  .intro{
    margin-left: -10px;
  }
</style>
