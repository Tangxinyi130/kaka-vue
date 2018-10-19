<template>
    <div>
      <!--我的地图-->
      <div class="row">
        <div class="col-sm-6">
          <app-mapcollection></app-mapcollection>
        </div>
        <div class="col-sm-offset-1 col-sm-4">
          <app-maplist></app-maplist>
        </div>
      </div>
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
