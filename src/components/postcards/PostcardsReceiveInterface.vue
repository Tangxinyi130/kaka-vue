<template>
  <div style="width:100%;height:590px;background-color:#ebf6df">
    <div id="container" style="display: none"></div>
    <div class="container" style=" height: 500px;background-color:lightgoldenrodyellow">
      <div class="row" style="height:53px;background-color:#528970">
        <div class="col-sm-12" style="width:200px;height:53px;line-height: 52px;font-size: 18px;color: white">接收明信片
        </div>
      </div>
      <div class="row" style="height:447px;">
        <div class="container col-sm-10 col-sm-offset-1" style="margin-top:30px;height:400px;background-color:#fafafa">
          <form>
            <div v-if="send">
              <div class="row" style="font-size: 18px;margin-top: 30px">
                <div class="col-sm-5 col-sm-offset-5">接收一张明信片</div>
              </div>
              <div class="row" style="margin-top: 20px">
                <div class="col-sm-5 col-sm-offset-5">
                  <span style="font-size: 18px">请输入明信片的ID:</span><br><br>
                  <input type="text" class="form-control" id="cardId" placeholder="请输入明信片的ID">
                </div>
              </div>
              <!--<div class="row">-->
              <!--<div class="col-sm-10 col-sm-offset-5" style="height:35px;margin-top: 10px;font-size: 18px;">-->
              <!--<span>给对方的一段话：</span>-->
              <!--</div>-->
              <!--</div>-->
              <!--<div class="row">-->
              <!--<div class="col-sm-8 col-sm-offset-3 text-center" style="height:35px;margin-top:2px">-->
              <!--<textarea rows="6" cols="40"></textarea>-->
              <!--</div>-->
              <!--</div>-->
              <div class="row">
                <div class="col-sm-10 col-sm-offset-1" style="height:80px;"></div>
              </div>
              <div class="row">
                <div class="col-sm-10 col-sm-offset-5" style="height:30px;">
                  <button type="button" class="btn btn-primary btn-lg" style="width:180px;" @click="submit">
                    <span style="color: white">提交</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-10 col-sm-offset-4" style="height:130px; margin-top:70px">
                <app-postcardsreceiveupload></app-postcardsreceiveupload>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import PostcardsReceiveUpload from "./PostcardsReceiveUpload";

  export default {
    name: "PostcardsReceiveInterface",
    components: {
      "app-postcardsreceiveupload": PostcardsReceiveUpload,
    },
    data() {
      return {
        receivecards:0,
        send: true,
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
        distance: 0,
      }
    },
    mounted: function () {
      this.reset();
    },
    methods: {
      submit: function () {
        this.$store.state.cardId = $("#cardId").val();
        console.log("this.$store.state.cardId" + this.$store.state.cardId );
        let _this = this;
        this.$ajax.get(`http://localhost:3000/receive/doReceive/` + (this.$store.state.cardId)+'/'+localStorage.userId
        ).then(function (result) {
          _this.receivecards = result.data.data.receivecards;
          if( _this.receivecards>0){
            _this.send = false;
            _this.$store.state.upload = true;

            setTimeout(() => {
              //获取两地用户的地址
              _this.getUserAddress();

            }, 20);
            setTimeout(() => {
              //计算距离
              _this.getDistance();
            }, 1000);



          }else {
            alert("您的明信片可能不小心输入错误了，请仔细检查哦！");
          }
          console.log("成功");
          console.log("我是receivcards"+_this.receivecards);
        }, function (err) {
          console.log(err);
        });

      },
      reset: function () {
        this.$store.state.upload = false;
      },

      //获取地区的经纬度
      SearchByStationName(keyword, callback) {
        var map = new BMap.Map("container");
        var localSearch = new BMap.LocalSearch(map);
        localSearch.setSearchCompleteCallback(function (searchResult) {
          let poi = searchResult.getPoi(0);
          callback(poi);
        });
        localSearch.search(keyword);
      },
      //获取两地的地址
      getUserAddress() {
        let _this = this;
        //根据明信片查询双方的id
        this.$ajax.get(`http://localhost:3000/users/getTwoUser/${this.$store.state.cardId}`
        ).then(function (result) {
          _this.a.userId = result.data.data.cardSender;
          _this.b.userId = result.data.data.cardReceiver;
          console.log("发送方" + _this.a.userId);
          console.log("接收方" + _this.b.userId);
        })

        setTimeout(() => {
          //获取两地的地址
          this.$ajax.get(`http://localhost:3000/receive/getAddress/${this.a.userId}/${this.b.userId}`
          ).then(function (result) {
            _this.a.address = result.data.data[0].userAddress;
            _this.b.address = result.data.data[1].userAddress;
            console.log("a的地址：" + _this.a.address);
            console.log("b的地址：" + _this.b.address);
          }, function (err) {
            console.log(err);
          });
        }, 20);

      },
      //计算距离
      getDistance() {
        setTimeout(() => {
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

            //获取b的经纬度
            _this.SearchByStationName(_this.b.address, async function (data) {
              var point2;
              point2 = data;
              console.log(data.title + ": "+ data.point.lng + ", " + data.point.lat);
              setTimeout(() => {
                _this.b.title = data.title;
                _this.b.lng = data.point.lng;
                _this.b.lat = data.point.lat;
              }, 20);

              //计算距离
              setTimeout(() => {
                var BMapLib = window.BMapLib = BMapLib || {};
                (function() {
                  /**
                   * 地球半径
                   */
                  var EARTHRADIUS = 6370996.81;
                  /**
                   * @exports GeoUtils as BMapLib.GeoUtils
                   */
                  var GeoUtils =
                    /**
                     * GeoUtils类，静态类，勿需实例化即可使用
                     * @class GeoUtils类的<b>入口</b>。
                     * 该类提供的都是静态方法，勿需实例化即可使用。
                     */
                    BMapLib.GeoUtils = function(){
                    };
                  /**
                   * 将度转化为弧度
                   * @param {degree} Number 度
                   * @returns {Number} 弧度
                   */
                  GeoUtils.degreeToRad =  function(degree){
                    return Math.PI * degree/180;
                  }
                  /**
                   * 将v值限定在a,b之间，纬度使用
                   */
                  function _getRange(v, a, b){
                    if(a != null){
                      v = Math.max(v, a);
                    }
                    if(b != null){
                      v = Math.min(v, b);
                    }
                    return v;
                  }
                  /**
                   * 将v值限定在a,b之间，经度使用
                   */
                  function _getLoop(v, a, b){
                    while( v > b){
                      v -= b - a
                    }
                    while(v < a){
                      v += b - a
                    }
                    return v;
                  }
                  /**
                   * 计算两点之间的距离,两点坐标必须为经纬度
                   * @param {point1} Point 点对象
                   * @param {point2} Point 点对象
                   * @returns {Number} 两点之间距离，单位为米
                   */
                  GeoUtils.getDistance = function(lng1, lat1, lng2 ,lat2){
                    let point1 = new BMap.Point(parseFloat(lng1) ,parseFloat(lat1));
                    let point2 =new BMap.Point(parseFloat(lng2) ,parseFloat(lat2));
                    //判断类型
                    if(!(point1 instanceof BMap.Point) ||
                      !(point2 instanceof BMap.Point)){
                      return 0;
                    }
                    point1.lng = _getLoop(point1.lng, -180, 180);
                    point1.lat = _getRange(point1.lat, -74, 74);
                    point2.lng = _getLoop(point2.lng, -180, 180);
                    point2.lat = _getRange(point2.lat, -74, 74);
                    let x1, x2, y1, y2;
                    x1 = GeoUtils.degreeToRad(point1.lng);
                    y1 = GeoUtils.degreeToRad(point1.lat);
                    x2 = GeoUtils.degreeToRad(point2.lng);
                    y2 = GeoUtils.degreeToRad(point2.lat);
                    return EARTHRADIUS * Math.acos((Math.sin(y1) * Math.sin(y2) + Math.cos(y1) * Math.cos(y2) * Math.cos(x2 - x1)));
                  }
                })();
                var map = new BMap.Map('map_canvas');
                var testDistance = BMapLib.GeoUtils.getDistance(_this.a.lng, _this.a.lat, _this.b.lng, _this.b.lat);
                console.log(testDistance);

                var distance = (testDistance / 1000).toFixed(1);
                if (distance >= 0) {
                  _this.distance = distance;
                  setTimeout(() => {
                    //将距离加入数据库
                    _this.updateDistance();
                  }, 20);
                  console.log(distance + " km");
                }
                console.log(_this.distance);
              }, 1000)
            });

          });
          
          console.log(this.a);
          console.log(this.b);
        }, 20)
      },
      //将两地的距离插入数据库
      updateDistance() {
        let _this = this;
        //根据明信片查询双方的id
        this.$ajax.get(`http://localhost:3000/receive/insertDistance/${this.distance}/${this.$store.state.cardId}`
        ).then(function (result) {

        })
      }
    },
  }
</script>
<style scoped>
</style>
