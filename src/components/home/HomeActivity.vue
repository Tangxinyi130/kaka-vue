<template>
  <div id="homeActivity">
    <div style="width: 740px; height: 240px; margin: 0 auto;position: absolute; top: 35px">
      <ul class="cont-list">
        <li class="am-gallery-item">
          <router-link :to="'/activitydetail/' + activityData[0].activityId">
            <div class="img_box col-md-4">
              <a href="">
                <img width="100%" height="162" :src='activityData[0].goodsPic'>
              </a>
            </div>
            <div class="intro col-md-8">
              <h3>
                <a href="/">
                  {{activityData[0].activityName}}
                </a>
              </h3>
              <p style="height: 100px">{{activityData[0].activityDetails}}</p>
              <div class="iconCon">
                <span>
                  <i class="iconfont glyphicon glyphicon-heart-empty"></i><b>0</b>
                </span>
                <span><i class="iconfont glyphicon glyphicon-shopping-cart" ></i><b>0</b></span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
    export default {
        name: "HomeActivity",
      data(){
        return {
          activityData:{}
        }
      },
      created(){
        this.$ajax({
          method: 'get',
          url: 'http://localhost:3000/activity'
        }).then(res => {
          // for(let i=0;i<res.data.data.allData.length;i++){
          this.activityData=res.data.data.allData;
          // }
          console.log("this.activityData"+this.activityData[0].activityId)
        })
      }
    }
</script>

<style scoped>
  #homeActivity{
    margin-top: 15px;
    height: 270px;
    background-color: whitesmoke;
  }
  ul{
    list-style: none;
  }
  .iconCon{
    text-align: right;
    margin-right: 20px;
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
