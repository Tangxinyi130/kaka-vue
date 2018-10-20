<template>
  <div style="width:100%;height:590px;background-color:#ebf6df">
    <div class="container" style="">
      <div class="row" style="height:53px;background-color:#528970;">
        <div class="col-sm-12" style="width:200px;height:53px;line-height: 52px;font-size: 18px;color: white">发送明信片
        </div>
      </div>
      <div class="row" style="height:447px;background-color:lightgoldenrodyellow">
        <div class="container col-sm-8 col-sm-offset-2">
          <div class="row"style="margin-top:60px;">
             <div class="col-sm-1 col-sm-offset-9">
             <select>
                 <option>省</option>
                 <option>江苏省</option>
                 <option>上海</option>
                 <option>海南</option>
               </select>
               </div>
            <span class="col-sm-1 glyphicon glyphicon-zoom-in" style="margin-left: 10px"></span>
          </div>
          <div class="row" style="height:300px;margin-top:20px;background-color:#fafafa">

          </div>

        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
    <!--<h3>查询明信片</h3>-->
</template>

<script>
    export default {
        name: "UserSearchcard"
    }
</script>

<style scoped>

</style>
