<template>
    <div class="container ">
      <div class="row activityDetail text-center">
        活动标题
      </div>
      <div class="row">
        <p class="activityStart">活动开始：{{activityInfor.activityStartDate}}</p>
      </div>
      <div class="row">
        <div class="col-md-offset-2 col-md-8">
          <img width="100%" :src="activityInfor.goodsPic" alt="">
        </div>
      </div>
      <div class="activity-content">
        {{activityInfor.goodsDetails}}
      </div>
      <div class="row">
        <router-link to="/activity/activityconfire"><button class="btn btn-default btn-lg ">立即预约</button></router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ActivityDetail",
      data(){
          return {
            activityId:this.$route.params.activityId,
            activityInfor:[]
          }
      },
      methods:{
        changeTime(date){
          date = new Date(date);
          var y = date.getFullYear();
          var m = date.getMonth() + 1;
          m = m < 10 ? '0' + m : m;
          var d = date.getDate();
          d = d < 10 ? ('0' + d) : d;
          var h = date.getHours();
          h = h < 10 ? ('0' + h) : h;
          var mm = date.getMinutes();
          mm = mm < 10 ? ('0' + mm) : mm;
          var s = date.getSeconds();
          s = s < 10 ? ('0' + s) : s;
          return y + '-' + m + '-' + d + " " + h + ":" + mm + ":" + s;
        }
      },
      created(){
          this.$ajax({
            method:"get",
            url:`${axios.defaults.baseURL}/activity/topic/${this.activityId}`
          }).then((res)=>{
            this.activityInfor=res.data.data[0];
            this.activityInfor.goodsPic = `${axios.defaults.baseURL}${this.activityInfor.goodsPic}`;
            console.log(this.activityInfor.activityStartDate)
            this.activityInfor.activityStartDate=this.changeTime(this.activityInfor.activityStartDate);
          })
      }
    }
</script>

<style scoped>
.activityDetail{
  height: 52px;
  line-height: 52px;
  font-size:20px;
  color:white;
  background-color: rgb(82,137,112);
}
  .btn{
    margin:0 auto;
    display: table;
  }
  .activityStart{
    margin-top: 20px;
    font-size:16px;
  }
</style>
