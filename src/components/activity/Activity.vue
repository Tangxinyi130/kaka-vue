<template>
  <div>
    <activity-carousel></activity-carousel>
    <activity-all></activity-all>
  </div>

</template>

<script>
  import ActivityCarousel from './ActivityCarousel'
  import ActivityAll from './ActivityAll'
    export default {
        name: "Activity",
      components:{
        'activity-carousel':ActivityCarousel,
        'activity-all':ActivityAll
      },
     created(){
          localStorage.setItem("route",this.$route.path)
     }
    }
</script>

<style scoped>

</style>
