<template>
  <div style="width: 300px;height: 300px;background-color:lightgrey" v-if="$store.state.upload">
    <div class="container con">
      <div class="row con-nav" >
        <div class="col-sm-12 con-nav-body">上传图片</div>
      </div>
      <form con-form >
        <div class="row" style="height: 30px"></div>
        <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
            <input type="file"/>
          </div>
        </div>
        <div class="row" style="height: 30px"></div>
        <div class="row">
          <div class="col-sm-6 col-sm-offset-3">
              <button type="button" class="btn btn-lg con-form-btn" @click="up">
              <span style="color: white">确定上传</span>
            </button>
          </div>
        </div>
        <div class="row" style="height: 30px"></div>
        <div class="row">
          <div class="col-sm-6 col-sm-offset-3">
            <button type="button" class="btn  btn-lg con-form-btn" @click="cancel">
              <span style="color: white">取消上传</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      up:function () {
        console.log(this.$store.state.cardId);
        this.$ajax.get(`http://localhost:3000/receive/uploadPic/` + this.$store.state.cardId+"/上传图片"
        ).then(function (result) {
          console.log("图片上传成功")
        }, function (err) {
          console.log(err);
        });
        this.$router.replace({path:"/user"})
      },
      cancel:function () {
        this.$router.replace({path: "/"})
      }
    },
    name: "PostcardsReceiveUpload"
  }
</script>
<style scoped>
  .con{
    width: 300px;
    height: 300px;
    background-color:lavender;
  }
  .con-nav{
    height:53px;
    background-color:#528970
  }
  .con-nav-body{
    width:200px;
    height:53px;
    line-height:52px;
    font-size:18px;
    color: white;
  }
  .con-form-btn{
    width:140px;
    background-color:lightskyblue;
  }
</style>
