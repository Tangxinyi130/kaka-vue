<template>
    <div>
      <!--<h3>关注用户的排行榜</h3>-->
      <div class="top">
        <div class="topTitle">关注的用户排行榜</div>
      </div>
      <div class="contant">
        <!--粉丝与关注-->
        <div>
          <!-- 关注的用户排行榜 -->
          <!--<div class="row">-->
            <!--<div class="maplist_top">-->
              <!--<img src="../../assets/images/maplist/list.png" alt="">-->
              <!--<span class="maplist_titile">关注的用户排行榜</span>-->
            <!--</div>-->
          <!--</div>-->
          <div class="row">
            <div class="maplist_bottom">
              <table class="table" border="0" style="text-align: center;">
                <tr>
                  <td class="col-sm-2">
                    <!--<img src="../../assets/images/maplist/top.png" alt="">-->
                    <span class="stitle">排名</span>
                  </td>

                  <td class="col-sm-2"><span class="maplist_region stitle">用户名</span></td>
                  <td class="col-sm-5"><span class="maplist_num stitle">收到的明信片数量</span></td>
                </tr>
                <tr v-if="list[0].region">
                  <td><img src="../../assets/images/maplist/first.png" alt=""></td>
                  <td><span class="maplist_region">{{list[0].region}}</span></td>
                  <td><span class="maplist_num">{{list[0].num}}</span></td>
                </tr>
                <tr v-if="list[1].region">
                  <td><img src="../../assets/images/maplist/second.png" alt=""></td>
                  <td><span class="maplist_region">{{list[1].region}}</span></td>
                  <td><span class="maplist_num">{{list[1].num}}</span></td>
                </tr>
                <tr v-if="list[2].region">
                  <td><img src="../../assets/images/maplist/third.png" alt=""></td>
                  <td><span class="maplist_region">{{list[2].region}}</span></td>
                  <td><span class="maplist_num">{{list[2].num}}</span></td>
                </tr>
                <tr v-if="list[3].region">
                  <td><img src="../../assets/images/maplist/4.png" alt=""></td>
                  <td><span class="maplist_region">{{list[3].region}}</span></td>
                  <td><span class="maplist_num">{{list[3].num}}</span></td>
                </tr>
                <tr v-if="list[4].region">
                  <td><img src="../../assets/images/maplist/5.png" alt=""></td>
                  <td><span class="maplist_region">{{list[4].region}}</span></td>
                  <td><span class="maplist_num">{{list[4].num}}</span></td>
                </tr>
                <tr v-if="list[5].region">
                  <td><img src="../../assets/images/maplist/6.png" alt=""></td>
                  <td><span class="maplist_region">{{list[5].region}}</span></td>
                  <td><span class="maplist_num">{{list[5].num}}</span></td>
                </tr>
                <tr v-if="list[6].region">
                  <td><img src="../../assets/images/maplist/7.png" alt=""></td>
                  <td><span class="maplist_region">{{list[6].region}}</span></td>
                  <td><span class="maplist_num">{{list[6].num}}</span></td>
                </tr>
                <tr v-if="list[7].region">
                  <td><img src="../../assets/images/maplist/8.png" alt=""></td>
                  <td><span class="maplist_region">{{list[7].region}}</span></td>
                  <td><span class="maplist_num">{{list[7].num}}</span></td>
                </tr>
              </table>
            </div>
          </div>

        </div>
      </div>
        <!--<div class="topTitle top">关注的用户排行榜</div>-->
        <!--<div class="contant">-->
        <!--粉丝与关注-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "UserAttentionList",
      data() {
        return {
          list: [
            {region:"", num: ""},
            {region:"", num: ""},
            {region:"", num: ""},
            {region:"", num: ""},
            {region:"", num: ""},
            {region:"", num: ""},
            {region:"", num: ""},
            {region:"", num: ""}
          ]
        }

      },
      created() {
        let _this = this;
        this.$ajax.get(`http://localhost:3000/users/list/${this.$store.state.userId}`
        ).then(function (result) {
          for(var key in result.data.data) {
            _this.list[key].region = result.data.data[key].userNickname;
            _this.list[key].num = result.data.data[key].receiveNum;
          }
        }, function (err) {
          console.log(err);
        });
      }
    }
</script>

<style scoped>
  div {
    color: #5E5E5E;;
  }

  .contant {
    background-color: #fafafa;
    padding-bottom: 30px;
  }
  .top {
    height: 53px;
    background-color: #528970;
  }
  .topTitle {
    height: 53px;
    line-height: 52px;
    font-size: 18px;
    color: white;
    margin-left: 20px;
  }

  .othersInfo div {
    padding-bottom: 5px;
  }


  .maplist_top {
    /*background-color: lightsalmon;*/
    height: 40px;
    line-height: 40px;
    border-bottom: 2px solid #797979;
  }
  .maplist_top img {
    margin-top: -10px;
    margin-left: 25px;
  }
  .maplist_titile {
    /*display: inline-block;*/
    font-size: 20px;
    height: 32px;
    /*line-height: 32px;*/
    color: #5E5E5E;
    padding-left: 10px;
  }
  .maplist_bottom {
    margin-top: 20px;
    margin-left: 10px;
  }
  .maplist_bottom div {
    /*margin-bottom: 10px;*/
  }
  .maplist_bottom .number {
    /*margin-left: 2px;*/
  }
  .maplist_region {
    /*margin-left: 30px;*/
    color: #5E5E5E;
  }
  .stitle {
    font-weight: bold;
    color: #5E5E5E;
    font-size: 16px;
  }
  .maplist_num {
    /*margin-left: 20px;*/
    color: #5E5E5E;
  }
  table td {
    line-height: 40px;
  }
</style>
