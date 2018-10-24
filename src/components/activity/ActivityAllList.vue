<template>
  <div>
    <!--所有活动列表、分页-->
    <div class="leftc col-md-8">
    <div class="row">
      <div class="contList">
        <ul class="cont-list">
          <li class="am-gallery-item" v-for="data in myActData1">
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
    <!--分页-->
    <div class="row text-center">
      <div class="block">
        <span class="demonstration"></span>
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
              pagesize: 2,
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
            data[i].goodsPic = `${axios.defaults.baseURL}${data[i].goodsPic}`
          }
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
              _this.pageCount=_this.myActData.length
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
  margin-left: -10px;
}
</style>
