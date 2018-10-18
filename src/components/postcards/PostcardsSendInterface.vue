<template>
  <div style="width:100%;height:590px;background-color:#ebf6df">
    <div class="container" style=" height: 500px;background-color:lightgoldenrodyellow">
      <div class="row" style="height:53px;background-color:#528970">
        <div class="col-sm-12" style="width:200px;height:53px;line-height: 52px;font-size: 18px;color: white">发送明信片
        </div>
      </div>
      <div class="row" style="height:447px;">

        <div class="container col-sm-10 col-sm-offset-1" style="height:380px;background-color:#fafafa;margin-top:30px;">
          <div class="row" style="height:133px">
            <div class="col-sm-2 col-sm-offset-1" style="border: 1px solid black;width:150px;height:150px;margin-top: 30px;border-radius:50%">
              <h3>头像</h3>
            </div>
            <div class="col-sm-7 col-sm-offset-1" style="border: 1px solid black;height:150px;margin-top:30px">
              <div class="row" style="height: 10px"></div>
              <div class="row ">
                  <div class="col-sm-3 ">
                    <span style="font-weight: bold; margin-top: 10px"> 用户介绍: </span>

                  </div>
                </div>
              <div class="row">
                <div class="col-sm-3 col-sm-offset-2" > 姓名:{{userNickname}}  </div>
              </div>
              <div class="row" style="height: 10px"></div>
              <div class="row">
                <div class="col-sm-3 col-sm-offset-2" > 性别:{{userSex}} </div>
                <div class="col-sm-5 " > 生日:{{userBirthday}} </div>
              </div>
              <div class="row" style="height: 10px"></div>
              <div class="row">
                <div class="col-sm-3 col-sm-offset-2 " >   <p>地址:{{userProvince}}{{userCity}}</p></div>
                <div class="col-sm-4 " ><p>邮箱:{{userEmail}}</p></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-10 col-sm-offset-1" style="height:30px;"></div>
          </div>
          <div class="row">
            <div class="col-sm-10 col-sm-offset-1" style="border: 1px solid black;height:50px;">
              <div class="row">
                <div class="col-sm-8 col-sm-offset-3" style="font-size: 14px">
                  <div style="height: 15px"></div>
                  您已经成功给{{userNickname}}发送了一张明信片，明信片ID:{{cardId}}
                </div>
              </div>
            </div>

          </div>
          <!--<div class="row">-->
            <!--<div class="col-sm-10 col-sm-offset-1 text-center"-->
                 <!--style="border: 1px solid black;height:35px;margin-top: 10px">-->
              <!--您已经发送了一张明信片-->
            <!--</div>-->
          <!--</div>-->
          <div class="row">
            <div class="col-sm-10 col-sm-offset-5" style="height:30px;margin-top:30px">
              <form>
                <button type="button" class="btn btn-primary btn-lg" style="width:180px;" @click="submit">
                  <span style="color: white">返回首页</span>
                </button>
                <br>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PostcardsSendInterface",
    methods: {
        submit:function () {
          this.$router.replace({path:"/"})
        },
    },
    data() {
      return {
          cardId:'',
          cardReceive:0,
          userBirthday:'',
          userCity:'',
          userEmail:'',
          userHeadPic:'',
          userNickname:'',
          userProvince:'',
          userSex:0,
      }
    },
    created() {
      let _this = this;
      this.$ajax.get(`http://localhost:3000/send/sendPostcard/`+(localStorage.userId)
      ).then(function (result) {
        // console.log(result.data.data.userHeadPic);
        console.log(result.data.data);
        _this.userNickname = result.data.data.userNickname;
        _this.userHeadPic = result.data.data.userHeadPic;
        _this.userProvince = result.data.data.userProvince;
        _this.userCity = result.data.data.userCity;
        _this.userSex = result.data.data.userSex;
        _this.userEmail = result.data.data.userEmail;
        _this.cardId = result.data.data.cardId;
        _this.userBirthday = result.data.data.userBirthday.substring(0, 10);
      }, function (err) {
        console.log(err);
      })
    }
  }

</script>

<style scoped>

</style>
