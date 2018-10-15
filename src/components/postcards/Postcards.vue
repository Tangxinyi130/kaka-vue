<template>
    <div class="container">
      <postcards-detail></postcards-detail>
      <postcards-detailPic></postcards-detailPic>
    </div>
</template>

<script>
  import postcardsDetailPeople from './postcardsDetailPeople'
  import postcardsDetailPicture from './postcardsDetailPicture'
    export default {
        name: "Postcards",
        components: {
          'postcards-detail':postcardsDetailPeople,
          'postcards-detailPic':postcardsDetailPicture
        }
    }
</script>

<style scoped>

</style>
