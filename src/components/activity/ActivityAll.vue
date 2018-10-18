<template>
  <div class="container" style="background-color: antiquewhite">
    <div class="row">
      <!--<router-view></router-view>-->
      <activity-list></activity-list>

    </div>
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

    }
</script>

<style scoped>

</style>
