<template>
    <div id="userSetPwd">
      <!--密码设置-->
      <div class="row">
        <form class="form-horizontal" method="post" >
          <div class="form-group">
            <label class="col-sm-2 control-label">旧密码</label>
            <div class="col-sm-10">
              <input type="password" name="oldpwd" class="form-control myText" v-model="oldpwd">
              <span :oldpwd="oldpwd" class="tipe">&nbsp;{{tipeOld}}</span>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">新密码</label>
            <div class="col-sm-10">
              <input type="password" name="newpwd" class="form-control myText" v-model="newpwd">
              <span :newpwd="newpwd" class="tipe">&nbsp;{{tipeNew}}</span>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">确定密码</label>
            <div class="col-sm-10">
              <input type="password" name="ensurepwd" class="form-control myText" v-model="ensurepwd">
              <span :ensurepwd="ensurepwd" class="tipe">&nbsp;{{tipeEnsure}}</span>
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-12 saveText">
              <button type="button" class="btn btn-default saveBtn" @click="setNewPwd" v-if="isTrueOld && isTrueNew && isTrueEnsure">确定修改密码</button>
              <button type="button" class="btn btn-default saveBtn" disabled="false" v-if="!(isTrueOld && isTrueNew && isTrueEnsure)">请继续完善信息</button>
            </div>
          </div>
        </form>
      </div>

    </div>
</template>

<script>
    export default {
        name: "UserSetPwd",
      data() {
          return {
            oldpwd: "",
            newpwd: "",
            ensurepwd: "",
            tipeOld: "",
            tipeNew: "",
            tipeEnsure: "",
            isTrueOld: false,
            isTrueNew: false,
            isTrueEnsure: false,
          }
      },
      created() {

      },

      watch: {
        oldpwd() {
          let _this = this;
          this.$ajax.post(`${axios.defaults.baseURL}/users/getUserOldPwd`,
            {
              userId: this.$store.state.userId,
              oldpwd: _this.oldpwd,
            }
          ).then(function (result) {
            if (result.data.data == 0) {
              _this.tipeOld = "旧密码错误";
            } else if (result.data.data == 1) {
              _this.tipeOld = "";
              _this.isTrueOld = true;
            }
          }, function (err) {
            console.log(err);
          });
        },

        newpwd(){
          const _this = this;
          const reg = /^([a-zA-Z0-9]|[._]){6,12}$/;
          if(!reg.test(_this.newpwd)){
            _this.tipeNew = "请输入6-12个数字、字母或者带“_”、“.”的密码";
          }else {
            _this.tipeNew = "";
            _this.isTrueNew = true;
          }
        },

        ensurepwd(){
          const _this = this;
          const reg = /^([a-zA-Z0-9]|[._]){6,12}$/;
          if(!reg.test(_this.ensurepwd)){
            _this.tipeEnsure = "请输入6-12个数字、字母或者带“_”、“.”的密码";
          } else if (_this.ensurepwd != _this.newpwd) {
            _this.tipeEnsure = "密码不一致"
          } else {
            _this.tipeEnsure = "";
            _this.isTrueEnsure = true;
          }
        },

      },

      methods: {
        setNewPwd() {
          let _this = this;
          this.$ajax.post(`${axios.defaults.baseURL}/users/setUserNewPwd`,
            {
              userId: this.$store.state.userId,
              userPwd: _this.newpwd,
            }
          ).then(function (result) {
            alert("修改成功！请重新登录！");
            localStorage.clear();
            location.href = "/login";
          }, function (err) {
            console.log(err);
          });
        }
      }
    }
</script>

<style scoped>
  #userSetPwd {
    margin-top: 50px;
    padding-left: 30%;
  }

  #userSetInfo {
    margin-top: 50px;
  }

  .saveBtn {
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 18%;
    width: 180px;
    /*margin-left: -185px;*/
  }

  #set {
    background-color: #fafafa;
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
  }
  .bottom {
    background-color: #fafafa;
  }

  .setForm {
    margin-top: 50px;
  }

  .myText {
    width: 280px;
  }

  #loginHead {
    width: 150px;
    height: 150px;
    border-radius: 150px;
    margin-bottom: 20px;
  }
  .saveHead {
    margin-top: 10px;
    margin-left: 33px;
    background-color: transparent;
    color: #5E5E5E;
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
    width: 150px;
    height: 150px;
    border: 1px solid transparent;
    border-radius: 150px;
    background-color: #ccc;
    opacity: 0.5;
    box-sizing: border-box;
    position: absolute;
    top: -1px;
    left: 15px;
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

  .saveText {
    /*margin-left: 200px;*/
  }

  .tipe {
    color: red;
  }

</style>
