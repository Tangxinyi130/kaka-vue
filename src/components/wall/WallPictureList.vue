<template>
  <div class="container text-center" style="height: 600px;background-color: antiquewhite">
<<<<<<< Updated upstream
  <div>

  </div>
=======
    <div>
      <router-link to="/postcards"><wall-picture></wall-picture></router-link>
    </div>
>>>>>>> Stashed changes
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
