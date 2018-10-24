<template>
  <div class="con">
    <div class="container">
        <div class="row con-nav">
            <div class="col-sm-12 con-nav-body">查询明信片</div>
        </div>
        <div class="row con-body" >
            <div class="container col-sm-6 col-sm-offset-3" style="margin-top:50px;">
                <div class="row">
                  <div class="col-sm-2 col-sm-offset-9"  >
                      <select id="opt">
                          <option>请选择地区:</option>
                          <option v-for="city in this.allCityName">{{city}}</option>
                      </select>
                  </div>
                      <div class="col-sm-1">
                          <span class="glyphicon glyphicon-search" @click="dosearch"></span>
                      </div>
                </div>
                <div class="row row-tab">
                    <table class="table" border="1" style="text-align: center; border-radius:3px">
                        <tr class="first_tr">
                            <td class="stitle">明信片ID</td>
                            <td class="stitle">发送方ID</td>
                            <td class="stitle">发送方昵称</td>
                            <td class="stitle">发送地区</td>
                            <td class="stitle">发送时间</td>
                        </tr>
                        <tr v-for="data in da">
                            <td>{{data.cardId}}</td>
                            <td>{{data.cardSender}}</td>
                            <td>{{data.userNickname}}</td>
                            <td>{{data.cardSendRegion}}</td>
                            <td>{{data.cardSendTime.substring(0, 10)}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <router-view></router-view>
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
          da:[]
        }
      },
      methods: {
        dosearch:function () {
          this.$store.state.city= $("#opt").val();
          console.log(this.$store.state.city);
          console.log(localStorage.userId)
          let _this =this;
          axios.post(`${axios.default.baseURL}/users/searchMyPostcards`,
            {
              userId:localStorage.userId,
              province:this.$store.state.city
            }).then(function (result) {
              console.log(result.data.data.length);
            console.log(result.data.data);
            for(let i=0;i<result.data.data.length;i++){
              _this.da = result.data.data;
            }
          }, function (err) {
            console.log(err);
          })
        }
      },
      name: "UserSearchcard",
      created() {
        this.$ajax({
          method: 'get',
          url: `${axios.default.baseURL}/wall`
        }).then(res => {
          for(let i=0;i<res.data.data.allCity.length;i++){
            this.allCityId.push(res.data.data.allCity[i].regionId);
            this.allCityName.push(res.data.data.allCity[i].regionName);
            // console.log(this.allCityId[i])
          }
        });
           console.log(this.$store.state.city)
      },

    }
</script>

<style scoped>
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
    /*border: 1px solid black;*/
  }
  span {
    color: #5E5E5E;
  }
  table .first_tr {
    background-color: #528970;
  }
  .con{
    width:100%;
    height:590px;
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
  .con-body{
    height:500px;
    background-color:lightgoldenrodyellow
  }
  .row-tab{
    height:300px;
    margin-top:10px;
    background-color:#fafafa;
    /*border: 1px solid red*/
  }
  .glyphicon{
    font-size:18px;
  }
</style>
