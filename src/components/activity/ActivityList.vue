<template>
    <div>
      <!--<router-link to="/activity/activitydetail"><activity-type></activity-type></router-link>-->
      <div class="container">
        <div class="row">
          <div class="content">
            <!--所有活动-->
            <!--<activity-alllist></activity-alllist>-->
            <router-view></router-view>
            <activity-data></activity-data>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import ActivityType from './ActivityType'
  import ActivityDate from './ActivityDate'
  import ActivityAllList from './ActivityAllList'
    export default {
        name: "ActivityType",
      components:{
          'activity-type':ActivityType,
          'activity-data':ActivityDate,
          'activity-alllist':ActivityAllList

      }
    }
</script>

<style scoped>

ul{
  list-style: none;
}
.iconCon{
  text-align: right;
}
.iconfont{
  margin-right: 10px;
}


</style>
