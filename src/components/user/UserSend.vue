<template>
    <div class="userSend">
      <!--已发送的明信片-->
      <div class="row">
        <table class="table" border="1" style="text-align: center; border-radius: 3px">
          <tr class="first_tr">
            <td class="stitle">明信片ID</td>
            <td class="stitle">收取方</td>
            <td class="stitle">地区</td>
            <td class="stitle">发送时间</td>
            <td class="stitle">收到时间</td>
            <td class="stitle">图片</td>
          </tr>
          <tr v-for="data in sendCard">
            <td>{{data.cardId}}</td>
            <td>{{data.userNickname}}</td>
            <td>{{data.cardReceiveRegion}}</td>
            <td>{{data.cardSendTime.substring(0, 10)}}</td>
            <td v-if="data.cardReceiveTime">{{data.cardReceiveTime.substring(0, 10)}}</td>
            <td v-if="!data.cardReceiveTime"></td>
            <td>
              <router-link :to="'/user/' + id + '/send/' + data.cardId" v-if="data.cardPic">
                <img src="../../assets/images/usercenter/userpostcard.png" alt="">
              </router-link>
            </td>
          </tr>
        </table>
        <router-view></router-view>
      </div>

    </div>

</template>

<script>
    export default {
        name: "UserSend",
        data() {
          return {
            id: this.$route.params.id,
            sendCard: []
          }
        },
        created() {
          // this.getSend();
            let _this = this;
            this.$ajax.get(`http://localhost:3000/users/userSend/${this.$route.params.id}`
            ).then(function (result) {
              _this.sendCard = result.data.data;
              // var time = result.data.data[0].cardSendTime;
              // var d = new Date(time);
              // var times=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
              //
              // console.log("times:     " + times);
              //
              // console.log(_this.sendCard);
            }, function (err) {
              console.log(err);
            });
        }
    }
</script>

<style scoped>
  .top {
    height: 32px;
    line-height: 32px;
    margin-left: 20px;
    margin-right: 20px;
    border-bottom: 2px solid #797979;
  }
  .topTitle {
    font-size: 18px;
    color: #5E5E5E;
    font-weight: bold;
    padding-left: 20px;
  }
  .userSend {
    margin-top: -20px;
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
    /*border: 1px solid black;*/
  }
  table .first_tr {
    background-color: #528970;
  }
</style>
