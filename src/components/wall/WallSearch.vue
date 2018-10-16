<template>
  <div class="container">
    <div class="row">
      <button @click="flag=!flag">城市</button>
      我是搜索
      <div v-if="flag">所有城市</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "WallSearch",
      data(){
          return {flag:false}
      }
    }
</script>

<style scoped>
div{
  height: 40px;
  background-color: rgb(82,137,112);
}
</style>
