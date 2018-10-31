<template>
    <div>
      <!--用户地图-->
      <div id="container"
           style="
                width: 445px;
                height: 300px;
                border: 1px solid gray;
                overflow:hidden;">
      </div>
    </div>
</template>

<script>
    export default {
        name: "UserMyAddress",
        data() {
          return {
            id: this.$route.params.id,
            address: ""
          }
        },
        created() {
          let _this = this;
          this.$ajax.get(`${axios.defaults.baseURL}/users/map/${this.id}`
          ).then(function (result) {
            _this.address = result.data.data.userAddress;
          }, function (err) {
            console.log(err);
          });
        },
        mounted() {
          let _this = this;
          setTimeout(() => {
            // this.getMap();
            this.SearchByStationName(_this.address, function (data) {})
          }, 20)

        },
        methods: {
          SearchByStationName(keyword, callback) {
            var map = new BMap.Map("container");
            var map = new BMap.Map("container",{minZoom:4,maxZoom:13}); // 创建Map实例,设置地图允许的最小/大级别

            map.centerAndZoom(new BMap.Point(116.404, 39.915), 10);
            map.enableScrollWheelZoom();    //启用滚轮放大缩小，默认禁用
            // map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用

            map.addControl(new BMap.NavigationControl());  //添加默认缩放平移控件
            map.addControl(new BMap.OverviewMapControl()); //添加默认缩略地图控件
            // map.addControl(new BMap.OverviewMapControl({ isOpen: true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT }));   //右下角，打开

            var localSearch = new BMap.LocalSearch(map);
            localSearch.enableAutoViewport(); //允许自动调节窗体大小
            localSearch.setSearchCompleteCallback(function (searchResult) {
              let poi = searchResult.getPoi(0);
              map.centerAndZoom(poi.point, 13);
              var marker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point.lat));  // 创建标注，为要查询的地方对应的经纬度
              map.addOverlay(marker);
              callback(poi);
            });
            localSearch.search(keyword);
          },
        }
    }
</script>

<style scoped>

</style>
