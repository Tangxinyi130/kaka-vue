<template>
  <div class="container ">
    <div class="row activityDetail text-center">{{activityInfor.activityName}}</div>
    <div class="row con">
      <div style="height: 50px;" ></div>
      <div class="col-sm-10 col-sm-offset-1 con-con">
        <div class="text-center t-name" >
          {{activityInfor.activityName}}
          <p>活动时间:{{activityInfor.activityStartDate.substring(0,10)}}至{{activityInfor.activityEndDate.substring(0,10)}}</p>
        </div>
        <div class="col-sm-offset-1 t-detail">
            {{activityInfor.activityDetails}}
          </div>
        <div class="im">
            <img  :src="activityInfor.goodsPic" alt="">
          </div>
      </div>
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
  .con{
    height:540px;
    /*border: 1px solid red;*/
    background-color: #fafafa;
  }
  .con-con{
    height: 440px;
    /*border: 1px solid red;*/
    color: #5e5e5e;
  }
  .im{
   height: 300px;
    /*border:1px solid red;*/
  }
  .t-name{
    font-size: 18px;
    font-weight: bold;
  }
  .t-name p{
    font-size: 14px;
    font-weight: normal;
  }
  .t-detail{
    font-size: 16px;
  }
  .activityStart{
    margin-top: 20px;
    font-size:16px;
  }
</style>
