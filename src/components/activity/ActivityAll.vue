<template>
<<<<<<< Updated upstream
    $END$
</template>

<script>
    export default {
        name: "ActivityAll"
=======
  <div class="container" style="background-color: antiquewhite">
    <activity-list></activity-list>
    <activity-data></activity-data>
  </div>

</template>

<script>
  import ActivityList from './ActivityList'
  import ActivityDate from './ActivityDate'
    export default {
        name: "ActivityAll",
       components:{
          'activity-list':ActivityList,
          'activity-data':ActivityDate
        }
>>>>>>> Stashed changes
    }
</script>

<style scoped>

</style>
