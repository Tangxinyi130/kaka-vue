<template>
    <div >
      <div class="row">
        <div class="top">详情</div>
      </div>
      <div class="row twoPeople" >
        <div class="col-xs-12 col-md-6 ">
          <ul class="cont-list list-unstyled ">
            <li class="am-gallery-item" >
                <div class="img_box col-md-3">
                  <a href="">
                    <img :src="cardsInformation.userHeadPic">
                  </a>
                </div>
                <div class="intro col-md-3">
                  <h3>
                    <a href="/">
                     ID:{{cardsInformation.userId}}
                    </a>
                  </h3>
                 <p>昵称：{{cardsInformation.userNickname}}</p><div class="iconCon">
                  <button>+关注</button>
                </div>
                </div>
            </li>
            <li class="am-gallery-item ">
              <div class="img_box col-md-3">
                <a href="">
                  <img :src="cardsInformation.userHeadPic1">
                </a>
              </div>
              <div class="intro col-md-3">
                <h3>
                  <a href="/">
                    ID:{{cardsInformation.userId1}}
                  </a>
                </h3>
                <p>昵称：{{cardsInformation.userNickname1}}</p>
                <button>+关注</button>
              </div>

            </li>
          </ul>
          <div style="width: 90%;height: 200px;background-color: white;margin-top:130px;margin-left:20px;border: 4px dashed ghostwhite">
            <h3>相关介绍</h3>
            <p>发送：{{cardsInformation.userCity}} <span style="margin-left: 40px">接受：{{cardsInformation.userCuty1}}</span></p>
            <p>两地相距：{{cardsInformation.cardDistance}}</p>
            <p>天数：{{cardsInformation.DAY}}</p>
          </div>
        </div>
        <div class="col-xs-12 col-md-6">
            <div class="twoPeopleMap">
              <div id="container"
                   style="position: absolute;
                    width: 430px;
                    height: 350px;
                    border: 1px solid gray;
                    overflow:hidden;">
              </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "cardDetail",
        data(){
          return {
            cardId:this.$route.params.cardId,
            cardsInformation:{},
            a: {
              title: "",
              lng: 0,
              lat: 0,
              userId: "",
              address: "",
            },
            b: {
              title: "",
              lng: 0,
              lat: 0,
              userId: "",
              address: ""
            },
          }
        },
        created(){
          this.$ajax({
            method:'get',
            url:'http://localhost:3000/postcards/'+this.cardId
          }).then((res)=>{
            this.cardsInformation=res.data.data.cardInformation[0]
          });


        },
        mounted() {
          setTimeout(() => {
            setTimeout(() => {
              let _this = this;
              //获取两地的地址
              this.$ajax.get(`http://localhost:3000/receive/getAddress/${this.cardsInformation.userId}/${this.cardsInformation.userId1}`
              ).then(function (result) {
                _this.a.address = result.data.data[0].userAddress;
                _this.b.address = result.data.data[1].userAddress;
                console.log("a的地址：" + _this.a.address);
                console.log("b的地址：" + _this.b.address);
              }, function (err) {
                console.log(err);
              });
            }, 20);
            setTimeout(() => {
              //地图
              let _this = this;
              this.SearchByStationName(_this.a.address, async function (data) {
                var point1;
                point1 = data;
                console.log(data.title + ": "+ data.point.lng + ", " + data.point.lat);
                setTimeout(() => {
                  _this.a.title = data.title;
                  _this.a.lng = data.point.lng;
                  _this.a.lat = data.point.lat;
                }, 20);

                // //获取b的经纬度
                _this.SearchByStationName(_this.b.address, async function (data) {
                  var point2;
                  point2 = data;
                  console.log(data.title + ": " + data.point.lng + ", " + data.point.lat);
                  setTimeout(() => {
                    _this.b.title = data.title;
                    _this.b.lng = data.point.lng;
                    _this.b.lat = data.point.lat;
                  }, 20);
                  setTimeout(() => {
                    var map = new BMap.Map("container",{minZoom:4,maxZoom:13}); // 创建Map实例,设置地图允许的最小/大级别
                    map.centerAndZoom(new BMap.Point(116.404, 39.915), 10);
                    map.enableScrollWheelZoom();    //启用滚轮放大缩小，默认禁用
                    // map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用

                    map.addControl(new BMap.NavigationControl());  //添加默认缩放平移控件
                    map.addControl(new BMap.OverviewMapControl()); //添加默认缩略地图控件
                    map.centerAndZoom(new BMap.Point(104.403119, 38.028658), 3);
                    point1 = new BMap.Point(_this.a.lng, _this.a.lat);
                    point2 = new BMap.Point(_this.b.lng, _this.b.lat);
                    var points = [point1,point2];
                    var curve = new BMapLib.CurveLine(points, {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.5}); //创建弧线对象
                    map.addOverlay(curve); //添加到地图中
                    curve.enableEditing(); //开启编辑功能
                  }, 1000)

                })

              })
            }, 1000)
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
  .twoPeople{
    margin-top: 30px;
  }
.top{
  height: 52px;
  font-size: 20px;
  line-height: 52px;
  text-align: center;
  color: white;
  background-color: rgb(82,137,112);
  }
img{
  width: 122px;
  height: 122px;
  border-radius: 122px;

}
 .send-text>p,.receive>p{
   text-align: center;
   margin-left: -45px;
   margin-top: 15px;
 }
  .send-text>button,.receive>button{
    margin-left: 50px;
  }
  .twoPeopleMap{
    width: 100%;
    height: 400px;
    /*background-color: blue;*/
  }

</style>
