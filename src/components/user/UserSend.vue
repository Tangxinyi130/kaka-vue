<template>
    <div class="userSend">
      <!--已发送的明信片-->
      <div class="row">
        <table class="table" border="1" style="text-align:center; border-radius: 3px">
          <tr class="first_tr">
            <td class="stitle">明信片ID</td>
            <td class="stitle">收取方</td>
            <td class="stitle">地区</td>
            <td class="stitle">发送时间</td>
            <td class="stitle">收到时间</td>
            <td class="stitle">图片</td>
          </tr>
          <tr v-for="data in myActData1">
            <td><router-link :to="'/postcards/' + data.cardId" style="color: #5E5E5E; text-underline: none">{{data.cardId}}</router-link></td>
            <td>{{data.userNickname}}</td>
            <td>{{data.cardReceiveRegion}}</td>
            <td>{{data.cardSendTime}}</td>
            <td v-if="data.cardReceiveTime">{{data.cardReceiveTime}}</td>
            <td v-if="!data.cardReceiveTime"></td>
            <td>
              <div v-if="data.cardPic" @click="showThis(data.cardId)" class="point">
                <img src="../../assets/images/usercenter/userpostcard.png" alt="">
              </div>
            </td>
          </tr>
        </table>
        <div class="block text-right">
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
        <div v-if="showPic">
          <div class="fade"></div>
          <div class="succ-pop">
            <!--<h3>查看明信片图片id:{{postcardId}}</h3>-->
            <img :src="postcardStr" alt="" id="show">
            <button @click="showPic = !showPic">关闭</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "UserSend",
        data() {
          return {
            id: this.$route.params.id,
            sendCard: [],
            showPic: false,
            postcardStr: "",
            pageIndex: 1,
            pagesize: 10,
            pageCount:0,
            activitys: [],
            myActData: []
          }
        },
      computed: {
        myActData1() {
          return this.activitys
        }
      },
      mounted() {
        let _this=this
        this.$ajax.get(`${axios.defaults.baseURL}/users/userSend/${this.$route.params.id}`
        ).then((result) =>{
          _this.myActData= result.data.data;
          _this.changeArrTime(_this.myActData);
          // console.log(result.data)
          _this.pageCount=_this.myActData.length
          _this.loadData()
        })
      },
      methods: {
        showThis(id) {
          this.showPic = true;
          this.postcardId = id;
          let _this = this;
          this.$ajax.get(`${axios.defaults.baseURL}/users/showPic/${this.postcardId}`
          ).then(function (result) {
            _this.postcardStr = `${axios.defaults.baseURL}${result.data.data.cardPic}`;
          }, function (err) {
            console.log(err);
          });
        },
        changeArrTime(x) {
          for (var key in x) {
            x[key].cardSendTime = this.changeTime(x[key].cardSendTime);
            if (x[key].cardReceiveTime) {
              x[key].cardReceiveTime = this.changeTime(x[key].cardReceiveTime);
            }
          }
        },
        loadData() {
          this.activitys = [];
          let start = (this.pageIndex - 1) * this.pagesize;
          let end = start + this.pagesize;
          // console.log(this.myActData[1]);
          if(end>=this.pageCount){
            end=this.pageCount
          }
          for (var i = start; i < end; i++) {
            this.activitys.push(this.myActData[i])
          }
        },
        change() {
          this.loadData();
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
        },
      },
    }
</script>

<style scoped>
  /*灰色遮罩层*/
  .fade{
    width:100%;
    height:100%;
    background:rgba(0, 0, 0, 0.5);
    /*background-color: #ccc;*/
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
  }
  /*弹出层*/
  .succ-pop{
    width: 100%;
    height: 100%;
    /*background: #fff;*/
    background:rgba(0, 0, 0, 0.3);
    position: fixed;
    text-align: center;
    left: 0px;
    top: 0px;
    /*left: 50%;*/
    /*top: 50%;*/
    /*margin-left: -200px;*/
    /*margin-top: -200px;*/
    z-index: 999;
    border-radius: 5px;
  }
  /*#show {*/
    /*position: fixed;*/
    /*margin-top: 200px;*/
  /*}*/

  /*.succ-pop h3.title{*/
    /*text-align: center;*/
    /*font-size: 22px;*/
    /*color: #ce002c;*/
  /*}*/
  .userSend {
    margin-top: -30px;
    margin-left: -16px;
    margin-right: -16px;
  }
  .stitle {
    /*font-weight: bold;*/
    font-size: 16px;
    color: white;
    /*color: #5E5E5E;*/
    line-height: 30px;
  }
  .table {
    color: #5E5E5E;
    border-radius: 3px;
    line-height: 30px;
  }
  table .first_tr {
    background-color: #528970;
  }
  .point {
    cursor: pointer;
  }
  #show {
    width: 750px;
    height: 450px;
  }
</style>
