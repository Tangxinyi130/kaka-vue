<template>
  <div style="width:100%;height:590px;background-color:#ebf6df">
    <div class="container" style="">
      <div class="row" style="height:53px;background-color:#528970;">
        <div class="col-sm-12" style="width:200px;height:53px;line-height: 52px;font-size: 18px;color: white">发送明信片
        </div>
      </div>
      <div class="row" style="height:447px;background-color:lightgoldenrodyellow">
        <div class="container col-sm-8 col-sm-offset-2">
          <div class="row" style="height:380px;margin-top:30px;background-color:#fafafa">
            <ol style="font-size: 13px">
              <li>请将地址填写准确。</li>
              <li>请及时发送明信片。</li>
              <li>请勿随意透露他人信息。</li>
              <li>一切解释权由本网站决定。</li>
            </ol>
            <form>
            <div class="row" style="height:230px"></div>
            <div class="row" style="text-align: center">
              <button type="button" class="btn btn-primary btn-lg " style="width:200px;" @click="submit" >
                <span style="color: white">阅读并同意相关事项</span>
              </button>
            </div>
          </form>
          </div>

        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      submit: function () {
        this.$router.replace({path: "/postcardssendinterface"})
      },
    },
    name: "PostcardsSendAnnouncements",
  }
</script>
<style scoped>
</style>
