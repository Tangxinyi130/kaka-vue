<template>
  <div class="container text-center" style="height: 600px;background-color: antiquewhite">
    <div>
      <router-link to="/postcards"><wall-picture></wall-picture></router-link>
    </div>
  </div>
</template>

<script>
  import wallpicture from './Wallpicture'
    export default {
        name: "WallPicture",
      components:{
        'wall-picture':wallpicture
      }
    }
</script>

<style scoped>

  li{
    width: 300px;
    height: 200px;
    background-color: aquamarine;
  }

</style>
