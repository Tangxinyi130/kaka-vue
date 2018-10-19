<template>
  <div class="container text-center" style="height: 600px;background-color: antiquewhite">
    <div>
      <wall-picture></wall-picture>
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


</style>
