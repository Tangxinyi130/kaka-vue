<template>
    <div>
      <!--<router-link to="/activity/activitydetail"><activity-type></activity-type></router-link>-->
      <div class="container">
        <div class="row">
          <div class="content">
            <!--所有活动-->
            <div class="leftc col-md-8">
              <div class="contList">
                <ul class="cont-list">
                  <li class="am-gallery-item">
                    <div class="img_box col-md-4">
                      <a href="">
                        <img width="100%" height="180" src="../../assets/picture.jpg">
                      </a>
                    </div>
                    <div class="intro col-md-8">
                      <h3>
                        <a href="./news.php?art_id=10473">
                          独特又有个性的明信片发布啦，快来看看											</a>
                      </h3>
                      <p>饭解决不了的，如果有那就再喝一顿。在太平洋彼岸的美国人们同样重视“吃” “喝” 这两件事，同时他们更多关注吃喝的匹配。包括啤酒和食物的搭配，为此他们还出了课程，写了指南，其中就有将啤酒和餐搭配到极致的两位。一位是 Cicerone 的亚洲市场负责人 Caleb， 在考察中国市...</p>
                      <div class="iconCon" data-art-id="10473">
											<span><i class="iconfont glyphicon glyphicon-heart-empty"></i><b>0</b>
											</span>
                        <span><i class="iconfont glyphicon glyphicon-shopping-cart" ></i><b>0</b></span>
                        <span><i class="iconfont share"></i><b>0</b></span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="rightc col-md-4">

            </div>
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
    export default {
        name: "ActivityType",
      components:{
          'activity-type':ActivityType

      }
    }
</script>

<style scoped>
/*div{*/
  /*width: 1000px;*/
  /*height: 500px;*/
  /*background-color: aqua;*/
  /*float:left;*/
/*}*/
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
