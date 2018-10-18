<template>
    <div>
      <activity-test></activity-test>
    </div>
</template>

<script>
  import ActivityDetail from "./ActivityDetail"
    export default {
        name: "test",
      component: {
          "activity-test": ActivityDetail
      }
    }
</script>

<style scoped>

</style>
