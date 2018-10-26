<template>
  <div>
    <my-search></my-search>
    <!--<my-picturelist></my-picturelist>-->
    <wall-newpicture></wall-newpicture>
  </div>
</template>

<script>
  import mysearch from './WallSearch'
  import WallNewPicture from './WallNewPicture'

    export default {
        name: "Wall",
      components:{
        'my-search':mysearch,
        'wall-newpicture':WallNewPicture
      }
    }
</script>

<style scoped>

</style>
