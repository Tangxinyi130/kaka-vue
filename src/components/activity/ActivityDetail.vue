<template>
    <div class="container ">
      <div class="row activityDetail text-center">
        活动标题
      </div>
      <div class="row">
        <p>活动日期：</p>
        <p>活动时间：</p>
      </div>
      <div class="row">
        <div class="col-md-offset-2 col-md-8">
          <img width="100%" src="../../assets/picture.jpg" alt="">
        </div>
      </div>
      <div class="activity-content">
        活动简介
      </div>
      <div class="row">
        <router-link to="/activity/activityconfire"><button class="btn btn-default btn-lg ">立即预约</button></router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ActivityDetail"
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
