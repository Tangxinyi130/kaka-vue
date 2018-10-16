<template>
  <div style="width:100%;height:590px;background-color:#fafafa">
    <div class="container" style="">
      <div class="row" style="height:53px;background-color:#528970;">
        <div class="col-sm-12" style="width:200px;height:53px;line-height: 52px;font-size: 18px;color: white">发送明信片
        </div>
      </div>
      <div class="row" style="height:381px;background-color:#ebf6df">
        <div class="container col-sm-8 col-sm-offset-2">
          <div class="row" style="height:230px;margin-top:30px;background-color:#fafafa">
            <ol style="font-size: 13px">
              <li>请将地址填写准确。</li>
              <li>请及时发送明信片。</li>
              <li>请勿随意透露他人信息。</li>
              <li>一切解释权由本网站决定。</li>
            </ol>
          </div>
          <div class="row">
            <div class="checkbox">
              <label>
                <input type="checkbox">阅读并同意相关事项
              </label>
            </div>
          </div>
          <div class="row" style="text-align: center">
            <button type="submit" class=" btn btn-default">
              <router-link to="/postcardssendinterface">去寄明信片</router-link>
            </button>
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    name: "PostcardsSendAnnouncements",
  }
</script>

<style scoped>


</style>
