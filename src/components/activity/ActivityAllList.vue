<template>
  <div>
    <!--所有活动列表、分页-->
    <div class="leftc col-md-8">
    <div class="row">
      <div class="contList">
        <div class="cont-list">
          <div class="am-gallery-item" v-for="data in myActData1">
            <div style="min-height: 210px;border-bottom: 1px solid #797979;padding-left: 25px;padding-top: 12px;margin-left: 25px;">
              <!--活动图片-->
              <div class="img_box col-md-4">
                <a href="">
                  <img width="100%" style="min-height:162px" :src='data.activityImage'>
                </a>
              </div>
              <!--活动介绍-->
              <div class="intro col-md-8">
                <router-link :to="'/activitydetail/' + data.activityId">
                <h3 style="color:#515151">
                  <a href="#" style="color:#515151">
                    {{data.activityName}}
                  </a>
                </h3>
                </router-link>
                <p class="p_detail">{{data.activityDetails}}</p>
                <div class="iconCon">
							    <span class="iconfont glyphicon glyphicon-time" style="color: #cccccc"></span>
                  <span style="color: #cccccc">{{data.activityStartDate}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--分页-->
    <div class="row text-center activityPage">
      <div class="block">
        <span class="demonstration" ></span>
        <el-pagination ref="elpage"
                       @current-change="change()"
                       :current-page.sync="pageIndex"
                       layout="prev, pager, next"
                       :total="pageCount"
                       :page-size = "pagesize"

        >
        </el-pagination>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
    export default {
      name: "AcyivityAllList",
      data(){
            return {
              activityData:{},
              pageIndex: 1,
              pagesize: 3,
              pageCount:0,
              myActData:[],
              activitys:[]
            }
        },
      computed:{
        myActData1() {
          return this.activitys
        }
      },
      watch:{
          "$route":"mounted"
      },
      created(){
          this.mounted();
      },
      methods:{
        activityPic(data){
          for(let i in data){
            data[i].activityImage = `${axios.defaults.baseURL}${data[i].activityImage}`
            data[i].activityStartDate=this.changeTime(data[i].activityStartDate)
            data[i].activityDetails=data[i].activityDetails.replace(/<[^<>]+>/gi,"")
          }
          console.log(data[0].activityDetails)
        },
        loadData() {
          this.activitys = [];
          let start = (this.pageIndex - 1) * this.pagesize;
          let end = start + this.pagesize;
          if (end >= this.pageCount){
            end = this.pageCount
          }
          for (var i = start; i < end; i++) {
            this.activitys.push(this.myActData[i])
          }
          console.log(this.activitys)
        },
        change(){
          this.loadData();
        },
        mounted(){
          let _this=this
          console.log("切换年份："+this.$route.params.year)
          console.log("切换月份："+this.$route.params.month)
          if(this.$route.params.year!=undefined){
            let year=this.$route.params.year
            let month=this.$route.params.month
            axios.get(`${axios.defaults.baseURL}/activity/${year}/${month}`).then((res) =>{
              _this.myActData= res.data.data;
              _this.activityPic(_this.myActData);
              _this.pageCount=_this.myActData.length;
              console.log("结果"+_this.pageCount)
              _this.loadData()
            })
          }else{
            axios.get(`${axios.defaults.baseURL}/activity`).then((res) =>{
              _this.myActData= res.data.data.allData;
              _this.activityPic(_this.myActData);
              _this.pageCount=_this.myActData.length
              console.log("结果"+_this.pageCount)
              _this.loadData()
            })
          }
        },
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
      // watch:{
      //    "$router":"created"
      // },
      //   created(){
      //     if(JSON.stringify(this.$route.params)==='{}'){
      //       this.$ajax({
      //         method: 'get',
      //         url: 'http://localhost:3000/activity'
      //       }).then(res => {
      //         // for(let i=0;i<res.data.data.allData.length;i++){
      //         this.activityData=res.data.data.allData;
      //         // }
      //         console.log("this.activityData"+this.activityData[0].activityId)
      //       })
      //     }else{
      //       this.year=this.$route.params.year
      //       this.month=this.$route.params.month
      //     this.$ajax({
      //       method: 'get',
      //       url: 'http://localhost:3000/activity/'+this.year+"/"+this.month
      //     }).then(res => {
      //       // for(let i=0;i<res.data.data.allData.length;i++){
      //         this.activityData=res.data.data;
      //       // }
      //     })
      //   }
      //   },
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
    margin-left: -15px;
  }
  .activityPage{
    padding:10px 0;
    /*padding-bottom: 10px;*/
  }
  .p_detail{
    overflow:hidden;
    display:-webkit-box;
    text-overflow:ellipsis;
    white-space:normal;
    max-height: 100px;
    -webkit-line-clamp:4;
    -webkit-box-orient:vertical;
    color:#5e5e5e;
  }
</style>
