<template>
    <div class="container">
      <div class="row">
        <div class="col-sm-offset-1 col-sm-2">
          <!--用户头像-->
          <img :src="headpic" alt="">
        </div>
        <div class="col-sm-2">
          <!--用户简介-->
          <p class="text">ID：{{id}}</p>
          <p class="text">昵称：{{nickname}}</p>
          <p class="text">性别：{{sex}}</p>
          <p class="text">生日：{{birthday}}</p>
          <br>
        </div>
        <div class="col-sm-6">
          <router-link :to="'/attention/' + id + '/att'"><a class="text">我的关注：{{attentionnum}}</a></router-link>
          <br>
          <router-link :to="'/attention/' + id + '/fan'"><a class="text">我的粉丝：{{fansnum}}</a></router-link>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "UserInfo",
        data() {
          return {
            id: this.$route.params.id,
            nickname: "",
            headpic: "",
            userid: 0,
            sex: "",
            birthday: "",
            attentionnum: 0,
            fansnum: 0
          }
        },
        created() {
          let _this = this;
          this.$ajax.get(`http://localhost:3000/users/synopsis/${this.id}`
          ).then(function (result) {
            // console.log(result.data.data.userHeadPic);
            _this.nickname = result.data.data.userNickname;
            _this.headpic = result.data.data.userHeadPic;
            _this.userid = result.data.data.userId;
            _this.sex = result.data.data.userSex;
            // _this.birthday = result.data.data.userBirthday.substring(0, 10);
            _this.birthday = _this.changeTime(result.data.data.userBirthday);
            _this.attentionnum = result.data.data.userAttentionNum;
            _this.fansnum = result.data.data.userFansNum;
          }, function (err) {
            console.log(err);
          })
        },
        // computed: {
        //   changeTime: {
        //     get(id){
        //       let date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
        //         return date;
        //     }
        //   }
        // },

        methods: {
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
            return y + '-' + m + '-' + d;
          },
        }
    }
</script>

<style scoped>
  img{
    width: 122px;
    height: 122px;
    border-radius: 122px;
  }
  .text {
    color: #5E5E5E;
    font-size: 14px;
  }
</style>
