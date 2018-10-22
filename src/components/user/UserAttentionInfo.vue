<template>
    <div>
      <!--<h5>用户信息简介</h5>-->
      <div class="contant">
        <div id="userDiv">
          <div class="row head">
            <img :src="user.userHeadPic" alt="" class="headPic">
          </div>
          <div class="row head">
            <span>昵称：{{user.userNickname}}</span>
            <span style="margin-left: 30px">ID：{{user.userId}}</span>
          </div>
          <div class="row head">
            <router-link :to="'/attention/' + id + '/att'">
              <span>关注：{{user.userAttentionNum}}</span>
            </router-link>
            <router-link :to="'/attention/' + id + '/fan'">
              <span style="margin-left: 30px">粉丝：{{user.userFansNum}}</span>
            </router-link>
          </div>
          <!--<div class="row">-->
            <!--<input type="text" class="col-sm-offset-8">-->
          <!--</div>-->
        </div>
        <router-view></router-view>
      </div>

    </div>
</template>

<script>
    export default {
        name: "UserAttentionInfo",
        data() {
          return {
            id: this.$route.params.id,
            user: {},
          }
        },
      created() {
        let _this = this;
        this.$ajax.get(`http://localhost:3000/users/attention/${this.id}`
        ).then(function (result) {
          _this.user = result.data.data;
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

  #set {

    padding-bottom: 30px;
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
  .headPic {
    width: 122px;
    height: 122px;
    border-radius: 122px;
    border: 1px solid #797979;
  }
  .row.head {
    text-align: center;
    padding-top: 30px;
  }

  .others {
    border: 1px solid #797979;
    border-radius: 3px;
    height: 140px;
    padding-top: 8px;
    margin-bottom: 5px;
  }
  .othersHead {
    margin-left: 20px;
  }
  .othersInfo {
    padding-top: 10px;
  }
  .othersInfo div {
    padding-bottom: 5px;
  }
  .othersBtn {
    padding-top: 10px;
  }
  .showOthers {
    margin-top: 20px;
  }
</style>
