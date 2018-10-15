<template>
    <div>
      <h3>我的地图</h3>
      <app-mapcollection></app-mapcollection>
      <app-maplist></app-maplist>
    </div>

</template>

<script>
    import UserMapCollection from "./UserMapCollection.vue"
    import UserMapList from "./UserMapList.vue"
    export default {
        name: "UserMap",
        components: {
          "app-mapcollection": UserMapCollection,
          "app-maplist": UserMapList
        }
    }
</script>

<style scoped>

</style>
