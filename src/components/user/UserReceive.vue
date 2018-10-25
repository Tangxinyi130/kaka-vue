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
            <td><router-link :to="'/postcards/' + data.cardId" style="color: #5E5E5E; text-underline: none">{{data.cardId}}</router-link></td>
            <td>{{data.userNickname}}</td>
            <td>{{data.cardSendRegion}}</td>
            <td>{{data.cardSendTime}}</td>
            <td>{{data.cardReceiveTime}}</td>
            <td>
              <div v-if="data.cardPic" @click="showThis(data.cardId)" class="point">
                <img src="../../assets/images/usercenter/userpostcard.png" alt="">
              </div>
              <!--<div v-if="!data.cardPic" @click="upPic(data.cardId)" class="point">-->
                <!--<img src="../../assets/images/usercenter/upload4.png" alt="">-->
              <!--</div>-->
            </td>
          </tr>
        </table>
        <div v-if="showPic">
          <div class="fade"></div>
          <div class="succ-pop">
            <!--<h3>查看明信片图片id:{{postcardId}}</h3>-->
            <img :src="postcardStr" alt="" id="show">
            <button @click="showPic = !showPic" class="btn">关闭</button>
          </div>
        </div>

    </div>
    </div>

</template>

<script>
  import {mapGetters} from "vuex"
    export default {
        name: "UserReceive",
      computed: mapGetters([
        "isLogin",
        "userId"
      ]),
      data() {
        return {
          id: this.$route.params.id,
          receiveCard: [],
          showPic: false,
          postcardStr: "",
          upath:'',  //保存选中的文件
          mydata: "",
        }
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
        changeArrTime(x) {
          for (var key in x) {
            x[key].cardSendTime = this.changeTime(x[key].cardSendTime);
            if (x[key].cardReceiveTime) {
              x[key].cardReceiveTime = this.changeTime(x[key].cardReceiveTime);
            }
          }
        },

        // //上传图片
        // upPic:function () {
        //   setTimeout(() => {
        //     let _this = this;
        //     // console.log(this.upath);
        //     // console.log("this.mydata:  " + this.mydata)
        //     var zipFormData = new FormData();
        //     //依次添加多个文件
        //     for(var i = 0 ; i< this.upath.length ; i++){
        //       zipFormData.append('filename', this.upath[i]);
        //     }
        //     //添加其他的表单元素
        //     // zipFormData.append('mydata',this.mydata)
        //     zipFormData.append("mydata", this.$store.state.cardId);
        //     let config = { headers: { 'Content-Type': 'multipart/form-data' } };
        //     this.$ajax.post('http://localhost:3000/receive/uploadfile', zipFormData,config
        //     ).then(function (response) {
        //       console.log(response);
        //       console.log(response.data);
        //       console.log(response.bodyText);
        //     });
        //     setTimeout(() => {
        //       if (this.upath) {
        //         location.href = `/user/${_this.$store.state.userId}/aboutme`;
        //       } else {
        //         alert("请选择图片!");
        //       }
        //     }, 20);
        //   }, 1000);
        // },
        //
        // //选中文件后，将文件保存到实例的变量中
        // changeImage(e) {
        //   this.upath = e.target.files;
        // }


      },
      created() {
        let _this = this;
        this.$ajax.get(`${axios.defaults.baseURL}/users/userReceived/${this.$route.params.id}`
        ).then(function (result) {
          _this.receiveCard = result.data.data;
          _this.changeArrTime(_this.receiveCard);
        }, function (err) {
          console.log(err);
        });
      }
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
    /*top: 100px;*/
    /*left: 400px;*/
  /*}*/
  /*.btn {*/
    /*position: absolute;*/
    /*top: 70px;*/
  /*}*/


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

  .point {
    cursor: pointer;
  }
</style>
