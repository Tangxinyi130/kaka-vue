<template>
    <div class="container">
      <div class="row">
        确认预约
      </div>
      <div class="row">
        确认收货地址
      </div>
      <div class="row">
        预约商品简介
      </div>
      <div class="row">
        商品金额和支付方式
      </div>
      <div class="row text-right">
        <router-link to="/activity/activityconfire/activitysucess"><button>确认支付</button></router-link>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "ActivityConfire",
      data(){
          return {

          }
      }
    }
</script>

<style scoped>

</style>
