<template>
    <div id="aboutme">
        <div class="row">
          <div class="col-sm-5" id="detail">
            <!--用户详情-->
            <div>
              <p class="text">寄出的明信片数量：{{sendNum}} 张</p>
              <p class="text">收到的明信片数量：{{receiveNum}} 张</p>
              <p class="text">寄出的明信片经过的总距离：{{distance}} km</p>
              <p class="text">加入网站的天数：{{joinTime}} 天</p>
            </div>
          </div>
          <div class="col-sm-offset-1 col-sm-6" id="map">
            <!--用户地图-->
            <user-myaddress></user-myaddress>
          </div>
        </div>
        <div class="about">
          <app-detail></app-detail>
        </div>

    </div>
</template>

<script>
    import UserAboutmeDetail from "@/components/user/UserAboutmeDetail"
    import UserMyAddress from "@/components/user/UserMyAddress"
    export default {
        name: "UserAboutme",
        components: {
          "app-detail": UserAboutmeDetail,
          "user-myaddress": UserMyAddress
        },
        data() {
          return {
            id: this.$route.params.id,
            sendNum: 0,
            receiveNum: 0,
            distance: 0,
            joinTime: 0,
          }
        },
        created() {
          let _this = this;
          this.$ajax.get(`http://localhost:3000/users/introduction/${this.id}`
          ).then(function (result) {
            _this.sendNum = result.data.data.userSendNum;
            _this.receiveNum = result.data.data.userReceiveNum;
            _this.distance = result.data.data.userSendDistance;
            _this.joinTime = result.data.data.userJoinTime;
          }, function (err) {
            console.log(err);
          });
        },
    }
</script>

<style scoped>
  #aboutme {
    /*margin-top: 10px;*/
  }
  .text {
    color: #5E5E5E;
    font-size: 14px;
  }
  #detail, #map {
    border-radius: 3px;
  }
  #detail div {
    padding-left: 20px;
    padding-bottom: 10px;
  }
  .about {
    margin-top: 20px;
  }
</style>
