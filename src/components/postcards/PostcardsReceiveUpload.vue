<template>
  <div style="width: 300px;height: 300px;background-color:lightgrey" v-if="$store.state.upload">
    <div class="container" style="width: 300px;height: 300px;">
      <div class="row" style="height:53px;background-color:#528970">
        <div class="col-sm-12" style="width:200px;height:53px;line-height: 52px;font-size: 18px;color: white">上传图片</div>
      </div>
      <form>
        <div class="row" style="height: 30px"></div>
        <div class="row">
          <div class="col-sm-6 col-sm-offset-1">
            <input type="file"/>
          </div>
        </div>
        <div class="row" style="height: 30px"></div>
        <div class="row">
          <div class="col-sm-6 col-sm-offset-1">
            <button type="button" class="btn btn-primary btn-lg" style="width:180px;" @click="up">
              <span style="color: white">确定上传</span>
            </button>
          </div>
        </div>
        <div class="row" style="height: 30px"></div>
        <div class="row">
          <div class="col-sm-6 col-sm-offset-1">
            <button type="button" class="btn btn-primary btn-lg" style="width:180px;" @click="cancel">
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

</style>
