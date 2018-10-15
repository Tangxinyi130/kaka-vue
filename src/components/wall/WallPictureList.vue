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
<<<<<<< Updated upstream
    export default {
        name: "WallPicture"
=======
  import wallpicture from './Wallpicture'
    export default {
        name: "WallPicture",
      components:{
        'wall-picture':wallpicture
      }
>>>>>>> Stashed changes
    }
</script>

<style scoped>
<<<<<<< Updated upstream
  li{
    width: 300px;
    height: 200px;
    background-color: aquamarine;
  }
=======

>>>>>>> Stashed changes
</style>
