<template>
  <div class="container" style="width: 1015px;height:434px;border: 1px solid red;">
    <div class="row" style="width: 1015px;height:53px;background-color: lightblue"></div>
    <div class="row" style="width: 1015px;height:381px;background-color: lightcoral">
      <div class="container">
        <div class="row"></div>
        <div class="row">
          <router-link to="/postcards/postcardssendinterface">去寄明信片</router-link>
          <router-view></router-view>
        </div>
      </div>
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
