<template>
    <div class="container ">
      <div class="row activityDetail text-center">
        活动标题
      </div>
      <div class="row">
        <p>活动开始：{{activityInfor.activityStartDate}}</p>
        <p>活动结束：{{activityInfor.activityEndDate}}</p>
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
      created(){
          this.$ajax({
            method:"get",
            url:`http://localhost:3000/activity/topic/${this.activityId}`
          }).then((res)=>{
            this.activityInfor=res.data.data[0]
            console.log(this.activityInfor.activityStartDate)
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
</style>
