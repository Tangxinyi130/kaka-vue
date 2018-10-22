<template>
  <div class="leftc col-md-8">
    <div class="contList">
    <ul class="cont-list">
      <li class="am-gallery-item" v-for="data in activityData">
        <router-link :to="'/activitydetail/' + data.activityId">
          <div class="img_box col-md-4">
            <a href="">
              <img width="100%" height="162" :src='data.goodsPic'>
            </a>
          </div>
          <div class="intro col-md-8">
            <h3>
              <a href="/">
                {{data.activityName}}
              </a>
            </h3>
            <p style="height: 100px">{{data.activityDetails}}</p>
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
        name: "AcyivityAllList",
        data(){
            return {
              activityData:{}
            }
        },
        created(){
          if(JSON.stringify(this.$route.params)==='{}'){
            this.$ajax({
              method: 'get',
              url: 'http://localhost:3000/activity'
            }).then(res => {
              // for(let i=0;i<res.data.data.allData.length;i++){
              this.activityData=res.data.data.allData;
              // }
              console.log("this.activityData"+this.activityData[0].activityId)
            })
          }else{
            this.year=this.$route.params.year
            this.month=this.$route.params.month
          this.$ajax({
            method: 'get',
            url: 'http://localhost:3000/activity/'+this.year+"/"+this.month
          }).then(res => {
            // for(let i=0;i<res.data.data.allData.length;i++){
              this.activityData=res.data.data;
            // }
          })
        }
        }
    }
</script>

<style scoped>

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
</style>
