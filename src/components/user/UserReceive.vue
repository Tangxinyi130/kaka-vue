<template>
    <div class="userReceive">
      <!--已收到的明信片-->
      <div class="row">
        <table class="table" border="1" style="text-align: center; border-radius: 3px">
          <tr class="first_tr">
            <td class="stitle">明信片ID</td>
            <td class="stitle">发送方</td>
            <td class="stitle">地区</td>
            <td class="stitle">发送时间</td>
            <td class="stitle">收到时间</td>
            <td class="stitle">图片</td>
          </tr>
          <tr v-for="data in receiveCard">
            <td>{{data.cardId}}</td>
            <td>{{data.userNickname}}</td>
            <td>{{data.cardSendRegion}}</td>
            <td>{{data.cardSendTime.substring(0, 10)}}</td>
            <td>{{data.cardReceiveTime.substring(0, 10)}}</td>
            <td>
              <router-link :to="'/user/' + id + '/receive/' + data.cardId" v-if="data.cardPic">
                <img src="../../assets/images/usercenter/userpostcard.png" alt="">
              </router-link>
              <router-link :to="'/user/' + id + '/receive/' + data.cardId" v-if="!data.cardPic">
                <img src="../../assets/images/usercenter/upload4.png" alt="">
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
        name: "UserReceive",
      data() {
        return {
          id: this.$route.params.id,
          receiveCard: []
        }
      },
      created() {
        let _this = this;
        this.$ajax.get(`http://localhost:3000/users/userReceived/${this.$route.params.id}`
        ).then(function (result) {
          _this.receiveCard = result.data.data;
        }, function (err) {
          console.log(err);
        });
      }
    }
</script>

<style scoped>
  .userReceive {
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
  span {
    color: #5E5E5E;
  }
  table .first_tr {
    background-color: #528970;
  }
</style>
