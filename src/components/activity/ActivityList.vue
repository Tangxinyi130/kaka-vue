<template>
    <div>
      <router-link to="/activity/activitydetail"><activity-type></activity-type></router-link>
    </div>
</template>

<script>
  import ActivityType from './ActivityType'
    export default {
        name: "ActivityType",
      components:{
          'activity-type':ActivityType

      }
    }
</script>

<style scoped>
div{
  width: 1000px;
  height: 500px;
  background-color: aqua;
  float:left;
}

</style>
