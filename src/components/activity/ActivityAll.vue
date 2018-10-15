<template>
  <div class="container" style="background-color: antiquewhite">
    <div class="row">
      <activity-list></activity-list>
      <activity-data></activity-data>
    </div>
    <router-view></router-view>
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
