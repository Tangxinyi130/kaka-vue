<template>
  <div>
    <form con-form >
        <div class="row" style="height: 30px"></div>
        <div class="row text-center"> <p>请上传明信片的照片</p></div>
        <div class="row">
          <div class="col-sm-6 col-sm-offset-3">
            <input type="file"
                   name="avatar"
                   @change="changeImage($event)"
                   accept="image/gif,image/jpeg,image/jpg,image/png"
                   ref="avatarInput"/>
            <input type="text" v-model="mydata" style="display: none">
          </div>
        </div>
        <div class="row" style="height: 20px"></div>
        <div class="row">
          <div class="col-sm-6 col-sm-offset-3">
              <button type="button" class="btn btn-lg con-form-btn" @click="up">
              <span style="color: white">确定上传</span>
            </button>
          </div>
        </div>
        <div class="row" style="height: 20px"></div>
        <div class="row">
          <div class="col-sm-6 col-sm-offset-3">
            <button type="button" class="btn  btn-lg con-form-btn" @click="cancel">
              <span style="color: white">取消上传</span>
            </button>
          </div>
        </div>
      </form>
  </div>
</template>
<script>
  export default {
    name: "PostcardsReceiveUpload",
    data(){
      return {
        upath:'',  //保存选中的文件
        mydata: "",
        nodejsPath:"",
      }
    },
    created() {
      this.mydata = this.$store.state.cardId;
    },
    methods: {
      up:function () {
        setTimeout(() => {
          let _this = this;
          var zipFormData = new FormData();
          //依次添加多个文件
          for(var i = 0 ; i< this.upath.length ; i++){
            zipFormData.append('filename', this.upath[i]);
          }
          //添加其他的表单元素
          zipFormData.append("mydata", this.$store.state.cardId);
          let config = { headers: { 'Content-Type': 'multipart/form-data' } };
          this.$ajax.post(`${axios.defaults.baseURL}/receive/uploadfile`, zipFormData,config
          ).then(function (response) {
            console.log(response);
            console.log(response.data);
            console.log(response.bodyText);
          });
          setTimeout(() => {
            if (this.upath) {
              location.href = `/user/${_this.$store.state.userId}/aboutme`;
            } else {
              alert("请选择图片!");
            }
          }, 20);
        }, 1000);
      },
      cancel:function () {
        location.href = "/";
      },
      //选中文件后，将文件保存到实例的变量中
      changeImage(e) {
        this.upath = e.target.files;
      }
    },

  }
</script>
<style scoped>
  .con{
    width: 300px;
    height: 300px;
    background-color:#fafafa;
  }
  .con-form-btn{
    width:122px;
    background-color:#5e5e5e;
  }
  p{
    font-size: 16px;
    font-weight: bold;
    color: #5e5e5e;
  }
</style>
