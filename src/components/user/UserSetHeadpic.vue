<template>
    <div id="userSetHeadpic">
      <form class="form-horizontal" id="updateHead" method="post" enctype="multipart/form-data"></form>
      <input type="text" name="id" v-model="userid" style="display: none" form="updateHead">
      <div id="myPic">
        <img :src="headpic" alt="" id="loginHead" class="img-responsive" form="updateHead">
        <div id="myFile">
          <input type="file"
                 name="avatar"
                 @change="changeImage($event)"
                 accept="image/gif,image/jpeg,image/jpg,image/png"
                 form="updateHead"
                 ref="avatarInput"
                 class="btn"/>
        </div>
      </div>
      <div>
        <span style="color: #5E5E5E" v-if="!isSaveHead">点击头像修改</span>
      </div>
      <button v-if="isSaveHead" type="button" form="updateHead" @click="up" class="btn saveHead btn-default">保存头像</button>
    </div>
</template>

<script>
    import UserSetHeadpic from "./UserSetHeadpic.vue"
    import {mapGetters} from "vuex"
    export default {
      name: "UserSetHeadpic",
      components: {
        "app-set-headpic": UserSetHeadpic
      },
      computed: mapGetters([
        "isLogin",
        "userId"
      ]),
      created() {
        this.selectLogin();
      },
      data() {
        return {
          upath: '',  //保存选中的文件
          userid: this.$store.state.userId,
          headpic: "",
          isSaveHead: false,
        }
      },
      methods: {
        //选中文件后，将文件保存到实例的变量中
        changeImage(e) {
          this.upath = e.target.files;
          var inputFile = document.querySelector("[type='file']");
          var reader = new FileReader();
          reader.onload = function (event) {
            document.querySelector("img").src = `${event.target.result}`;
            document.querySelector("#myPic").style.backgroundColor = "transparent";
          };
          reader.readAsDataURL(inputFile.files[0]);
          this.isSaveHead = true;
        },
        //上传头像
        up: function () {
          setTimeout(() => {
            let _this = this;
            // console.log(this.upath);
            // console.log("this.mydata:  " + this.mydata)
            var zipFormData = new FormData();
            //依次添加多个文件
            for (var i = 0; i < this.upath.length; i++) {
              zipFormData.append('filename', this.upath[i]);
            }
            //添加其他的表单元素
            zipFormData.append("mydata", this.$store.state.userId);

            let config = {headers: {'Content-Type': 'multipart/form-data'}};
            this.$ajax.post(`${axios.defaults.baseURL}/users/uploadfile`, zipFormData, config
            ).then(function (response) {
              console.log(response);
              console.log(response.data);
              console.log(response.bodyText);
            });
            setTimeout(() => {
              if (this.upath) {
                alert("修改成功");
                // location.href = `/user/${_this.$store.state.userId}/aboutme`;
              } else {
                alert("请选择图片!");
              }
            }, 20);
          }, 1000);
        },

        selectLogin() {
          let _this = this;
          this.$ajax.get(`${axios.defaults.baseURL}/users/${this.$store.state.userId}`
          ).then(function (result) {
            _this.headpic = `${axios.defaults.baseURL}${result.data.data.userHeadPic}`;
          }, function (err) {
            console.log(err);
          });
        },
      },
    }
</script>

<style scoped>
  #userSetHeadpic {
    margin-top: 20px;
    position: relative;
    text-align: center;
    /*margin: 0 auto;*/
  }

  #loginHead {
    width: 130px;
    height: 130px;
    border-radius: 130px;
    position: absolute;
    left: 50%;
    margin-left: -65px;
    margin-bottom: 20px;
  }
  .saveHead {
    /*margin-top: 0px;*/
    /*margin-left: 33px;*/
    background-color: transparent;
    color: #5E5E5E;
    margin-top: -10px;
    border: none;
  }
  .saveHead:hover {
    color: #4e91ff;
  }
  #myPic {
    width: 150px;
    height: 150px;
    border: 1px solid transparent;
    border-radius: 150px;
  }

  #myFile {
    width: 130px;
    height: 130px;
    border: 1px solid transparent;
    border-radius: 130px;
    background-color: #ccc;
    opacity: 0.5;
    box-sizing: border-box;
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 540px;*/
    position: absolute;
    left: 50%;
    margin-left: -65px;
    display: none;
  }

  #myPic:hover #myFile {
    display: block;
  }

  [type = "file"] {
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .btn-default {
    background-color: transparent;
    color: #5E5E5E;
  }
  .btn-default:hover {
    color: #4e91ff;
  }
</style>
