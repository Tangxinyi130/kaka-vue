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
      },
      created() {
        let loading = document.getElementById("Loading");
        localStorage.setItem("route",this.$route.path)
        if (loading != null) {
          document.body.removeChild(loading);
        }
      }
    }
</script>

<style scoped>

</style>
