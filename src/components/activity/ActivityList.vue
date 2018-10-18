<template>
    <div>
      <!--<router-link to="/activity/activitydetail"><activity-type></activity-type></router-link>-->
      <div class="container">
        <div class="row">
          <div class="content">
            <!--所有活动-->

              <activity-alllist></activity-alllist>


              <activity-data></activity-data>

          </div>
        </div>
        <!--分页-->
        <div class="row">
          <nav class="paging">
            <ul class="pagination">
              <li>
                <a href="#" aria-label="Previous" title="上一页">
                  <span aria-hidden="true">«</span>
                </a>
              </li>
              <li>
                <a href="" title="第1页">1</a>
              </li>
              <li>
                <span style="color:red;">2</span>
              </li>
              <li>
                <a href="" title="第3页">3</a>
              </li>
              <li>
                <a href="" title="第4页">4</a>
              </li>
              <li>
                <a href="" aria-label="Next">
                  <span aria-hidden="true">»</span>
                </a>
              </li>
            </ul>
          </nav>
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
