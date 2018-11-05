<template>
  <div class="con">
    <div class="container">
      <div class="row con-nav">
        <div class="col-sm-1 con-nav-body">查询明信片 </div>
      </div>
      <div class=" bc row">
        <div class="row col-sm-4">
          <div style="height: 303px"></div>
          <img src="../../assets/hu.png" width="450px" height="250px"/>
        </div>
        <div class="col-sm-8">
          <div style="height:30px"></div>
          <div class="row " style="">
            <div class="col-sm-3 col-sm-offset-8">
              <select id="opt" class="form-control" @change="dosearch">
                <option>{{this.str}}</option>
                <option v-for="city in this.allCityName">{{city}}</option>
              </select>
            </div>
          </div>
          <div style="height: 30px"></div>
          <div class="row" style="">
                 <!--****************-->
                <!--<div class=""v-if="cz">-->
                  <!--<ul class="col-sm-10 col-sm-offset-1">-->
                    <!--<div class="row body-nav">-->
                      <!--<div class="col-sm-3"> <p>发送人</p></div>-->
                      <!--<div class="col-sm-3"> <p>发送时间</p></div>-->
                      <!--<div class="col-sm-3"> <p>发送地区</p></div>-->
                      <!--<div class="col-sm-3"> <p>明信片ID</p></div>-->
                    <!--</div>-->
                    <!--<li v-for="data in allda">-->
                      <!--<div style="height:20px"></div>-->
                      <!--<div class="row">-->
                        <!--<div class="col-sm-3">-->
                          <!--<img :src="pa+data.userHeadPic" class="mag" alt="">-->
                          <!--<p>昵称:{{data.userNickname}}</p>-->
                        <!--</div>-->
                        <!--<div class="col-sm-3 li-div"> <p>{{data.cardSendTime.substring(0, 10)}}</p></div>-->
                        <!--<div class="col-sm-3 li-div"> <p>{{data.cardSendRegion}}</p></div>-->
                        <!--<div class="col-sm-3 li-div"><p>{{data.cardId}}</p></div>-->
                      <!--</div>-->
                    <!--</li>-->
                  <!--</ul>-->
                <!--</div>-->
                <!--**********************-->
            <div class="">
              <ul class="col-sm-10 col-sm-offset-1">
                <div class="row body-nav">
                  <div class="col-sm-3"> <p>发送人</p></div>
                  <div class="col-sm-3"> <p>发送时间</p></div>
                  <div class="col-sm-3"> <p>发送地区</p></div>
                  <div class="col-sm-3"> <p>明信片ID</p></div>
                </div>
                <li v-for="data in da">
                  <div style="height:20px"></div>
                  <div class="row">
                    <div class="col-sm-3">
                      <img :src="pa+data.userHeadPic" class="mag" alt="">
                      <p>昵称:{{data.userNickname}}</p>
                    </div>
                    <div class="col-sm-3 li-div"> <p>{{data.cardSendTime.substring(0, 10)}}</p></div>
                    <div class="col-sm-3 li-div"> <p>{{data.cardSendRegion}}</p></div>
                    <div class="col-sm-3 li-div"><p>{{data.cardId}}</p></div>
                  </div>
                </li>
              </ul>
              <!--<div class="row text-center">-->
                  <!--<button type="button" class="btn bt btn-lg"  @click="tocx" style="margin-top: 30px">-->
                  <!--<span  style="color: white">查询所有</span>-->
                <!--</button>-->
              <!--</div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
      data(){
        return {
          cardId:'',
          cardSendRegion:'',
          cardSendTime:'',
          userNickname:'',
          cardSender:'',
          allCityId:[],
          allCityName:[],
          allCards:[],
          allSends:[],
          allUserNickname:[],
          allCardSendTime:[],
          allCardSendRegion:[],
          da:[],
          pa:'',
          cz:true,
          str:'请选择地区:',
          vau:'',
          allda:[],
        }
      },
      methods: {
        tocx:function(){
          this.cz=true;
          $("#opt").val(this.str);
        },
        dosearch:function () {
          this.pa=`${axios.defaults.baseURL}`;
          console.log("我是路径啊"+this.pa);
          this.$store.state.city= $("#opt").val();
          console.log(this.$store.state.city);
          console.log(localStorage.userId)
          let _this =this;
          axios.post(`${axios.defaults.baseURL}/users/searchMyPostcards`,
            {
              userId:localStorage.userId,
              province:this.$store.state.city
            }).then(function (result) {
              if(result.data.data.length==0){
                alert('当前该地区没有发来的明信片');
                _this.cz=true;
              }else {
                _this.cz=false;
                console.log(result.data.data.length);
                console.log(result.data.data);
                for(let i=0;i<result.data.data.length;i++){
                  _this.da = result.data.data;
                  console.log("我是第"+i+"个值"+_this.da);
                }
              }
          }, function (err) {
            console.log(err);
          })
        }
      },
      name: "UserSearchcard",
      created() {
        this.pa=`${axios.defaults.baseURL}`;
        this.$ajax({
          method: 'get',
          url: `${axios.defaults.baseURL}/wall`
        }).then(res => {
          for(let i=0;i<res.data.data.allCity.length;i++){
            this.allCityId.push(res.data.data.allCity[i].regionId);
            this.allCityName.push(res.data.data.allCity[i].regionName);
            // console.log(this.allCityId[i])
          }
        });
        // ****************
        let _this =this;
        axios.post(`${axios.defaults.baseURL}/users/UserPostcards`,
          {
            userId:localStorage.userId,
          }).then(function (result) {
            console.log(result.data.data.length);
            console.log(result.data.data);
            for(let i=0;i<result.data.data.length;i++){
              _this.allda = result.data.data;
            }
        }, function (err) {
          console.log(err);
        })
      },

    }
</script>

<style scoped>
  span {
    color: #5E5E5E;
  }
  .con{
    width:100%;
    /*height:590px;*/
    background-color:#ebf6df
  }
  .con-nav{
    height:53px;
    background-color:#528970;
  }
  .con-nav-body{
    width:200px;
    height:53px;
    line-height:52px;
    font-size:18px;
    color:white
  }
.bc{
  /*height: 550px;*/
  background-color:#f6f6f6;
  /*border: 1px solid red;*/
}
ul {
  list-style: none;
  text-align: center;
  background-color: #fafafa;
}
ul>li{
  border-bottom: 1px dashed #ccc
  }
  .bt{
    background-color: #BDD1C5;
  }
  .mag{
    width:60px;
    height:60px;
    border-radius:50%;
  }
  .co2{
    background-color:#f6f6f6;
  }
  .li-div{
    /*border: 1px solid red;*/
    line-height:80px;
    font-size: 16px;
    color: #5e5e5e;
  }
  .body-nav{
    font-size: 18px;
    color: white;
    height: 50px;
    /*border: 1px solid red;*/
    line-height: 50px;
    background-color:#D5D5AB;
  }
</style>
