<template>
  <div>
    <my-search></my-search>
    <my-picturelist></my-picturelist>
  </div>
</template>

<script>
  import mysearch from './WallSearch'
  import mypicturelist from './WallPictureList'
    export default {
        name: "Wall",
      components:{
        'my-search':mysearch,
        'my-picturelist':mypicturelist
      }
    }
</script>

<style scoped>

</style>
