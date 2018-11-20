<template>
    <div>
      <div class="row">
        <!--<div class="top">详情</div>-->
        <div class="top" id="top">明信片ID：{{cardId}}</div>
      </div>
      <div class="row twoPeople">
        <li class="col-xs-12 col-md-6" style="list-style: none">
          <ul class="cont-list list-unstyled" style="border: 3px dashed #bdd1ff; height: 320px">
            <li class="am-gallery-item" style="margin-top: 30px">
                <div class="img_box col-md-2" style="margin-left: 10px">
                  <router-link :to="'/user/' + cardsInformation.userId + '/aboutme'">
                    <img :src="cardsInformation.userHeadPic" class="head">
                  </router-link>
                </div>
                <div class="intro col-md-3" style="padding-left: 30px; ">
                  <div class="pUserInfo">
                    <p class="text" style="padding-right: 15px; font-size: 14px">
                      ID:{{cardsInformation.userId}}
                    </p>
                    <!--<div style="clear: both"></div>-->
                    <p class="text" style="margin-top: 9px; font-size: 14px">昵称：{{cardsInformation.userNickname}}</p>
                    <div class="iconCon">
                      <button style="font-size: 10px" v-if="userId != null && sendAtt == false && cardsInformation.userId != userId" class="btn" data-toggle="modal" data-target="#att" @click="getModalId(cardsInformation.userId)">关注</button>
                      <button style="font-size: 10px" v-if="userId != null && sendAtt == true && cardsInformation.userId != userId" class="btn"  data-toggle="modal" data-target="#fan" @click="getModalId(cardsInformation.userId)">取消关注</button>
                    </div>

                  </div>
                </div>
            </li>

            <li class="am-gallery-item " >
              <div class="img_box col-md-2" style="margin-left: 80px">
                <router-link :to="'/user/' + cardsInformation.userId1 + '/aboutme'">
                  <img :src="cardsInformation.userHeadPic1" class="head">
                </router-link>
              </div>
              <div class="intro col-md-3" style=" padding-left: 30px;" >
                <div class="pUserInfo">
                  <p class="text" style="padding-right: 15px; font-size: 14px">
                    ID:{{cardsInformation.userId1}}
                  </p>
                  <!--<div style="clear: both" ></div>-->
                  <p class="text" style="margin-top: 9px;font-size: 14px">昵称：{{cardsInformation.userNickname1}}</p>
                  <div class="iconCon">
                    <button style="font-size: 10px" v-if="userId != null && receiveAtt == false && cardsInformation.userId1 != userId" class="btn" data-toggle="modal" data-target="#att" @click="getModalId(cardsInformation.userId1)">关注</button>
                    <button style="font-size: 10px" v-if="userId != null && receiveAtt == true && cardsInformation.userId1 != userId" class="btn"  data-toggle="modal" data-target="#fan" @click="getModalId(cardsInformation.userId1)">取消关注</button>
                  </div>
                </div>
              </div>
            </li>

            <li class="am-gallery-item " style="margin-top: -20px">
              <div id="introduction">
                <!--<p class="text">相关介绍</p>-->
                <div class="text addressDiv addStart">
                  <span class="textT">起始地</span><br>
                  <span>{{cardsInformation.userProvince}}&nbsp;&nbsp;{{cardsInformation.userCity}}</span>
                </div>
                <div class="addressDiv addPic">
                  <img src="../../assets/images/line.png" alt="" width="259px" height="31px">
                </div>
                <div class="text addressDiv addEnd">
                  <span class="textT">目的地</span><br>
                  <span>{{cardsInformation.userProvince1}}&nbsp;&nbsp;{{cardsInformation.userCity1}}</span>
                </div>
                <div style="clear: both"></div>
                <div id="km_days">
                  <p class="text">{{cardsInformation.cardDistance}} km  </p>
                  <p class="text" v-if="cardsInformation.DAY != '?'">{{cardsInformation.DAY}} days</p>
                  <p class="text" v-if="cardsInformation.DAY == '?'">在途中</p>
                </div>
              </div>
            </li>
          </ul>
        </li>

        <!-- 关注模态框 -->
        <div class="modal fade bs-example-modal-sm" id="att" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog modal-sm" role="document" style="z-index: 9999">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">提示</h4>
              </div>
              <div class="modal-body">
                是否关注？
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-primary" @click="toAtt(clickId)">确定</button>
              </div>
            </div>
          </div>
        </div>


        <!-- 取消关注模态框 -->
        <div class="modal fade bs-example-modal-sm" id="fan" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog modal-sm" role="document" style="z-index: 9999">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 class="modal-title">提示</h4>
                </div>
                <div class="modal-body">
                  是否取消关注？
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                  <button type="button" class="btn btn-primary" @click="cancelAtt(clickId)">确定</button>
                </div>
              </div>
            </div>
          </div>


        <div class="col-xs-12 col-md-6">
            <div class="twoPeopleMap">
              <div id="container"
                   style="position: absolute;
                    width: 540px;
                    height: 320px;
                    border: 1px solid #ccc;
                    overflow:hidden;
              ">
              </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapGetters} from "vuex"
  import start from "../../assets/images/start4.png"
  import end from "../../assets/images/end4.png"
    export default {
        name: "cardDetail",
        computed: mapGetters([
          "isLogin",
          "userId"
        ]),
        data(){
          return {
            cardId:this.$route.params.cardId,
            cardsInformation:{},
            sendAtt: "",
            receiveAtt: "",
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
          document.documentElement.scrollTop = document.body.scrollTop = 0;
          let _this = this;
          this.$ajax({
            method:'get',
            url:`${axios.defaults.baseURL}/postcards/`+this.cardId
          }).then((res)=>{
            _this.cardsInformation = res.data.data.cardInformation[0];
            if (!_this.cardsInformation.cardDistance) {
              _this.cardsInformation.cardDistance = "?";
            }
            if (!_this.cardsInformation.DAY) {
              _this.cardsInformation.DAY = "?";
            }
            _this.cardsInformation.userHeadPic = `${axios.defaults.baseURL}${_this.cardsInformation.userHeadPic}`;
            _this.cardsInformation.userHeadPic1 = `${axios.defaults.baseURL}${_this.cardsInformation.userHeadPic1}`;
          });

          setTimeout(() => {
            this.isSend();
            this.isReceive();
          }, 20);
        },
        mounted() {
          //地图显示
          setTimeout(() => {
            setTimeout(() => {
              let _this = this;
              //获取两地的地址
              this.$ajax.get(`${axios.defaults.baseURL}/receive/getAddress/${this.cardsInformation.userId}/${this.cardsInformation.userId1}`
              ).then(function (result) {
                _this.a.address = result.data.data[0].userAddress;
                _this.b.address = result.data.data[1].userAddress;
                // console.log("a的地址：" + _this.a.address);
                // console.log("b的地址：" + _this.b.address);
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
                // console.log(data.title + ": "+ data.point.lng + ", " + data.point.lat);
                setTimeout(() => {
                  _this.a.title = data.title;
                  _this.a.lng = data.point.lng;
                  _this.a.lat = data.point.lat;
                }, 20);

                // //获取b的经纬度
                _this.SearchByStationName(_this.b.address, async function (data) {
                  var point2;
                  point2 = data;
                  // console.log(data.title + ": " + data.point.lng + ", " + data.point.lat);
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

                    // var points = [point1,point2];
                    // var curve = new BMapLib.CurveLine(points, {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.5}); //创建弧线对象
                    // map.addOverlay(curve); //添加到地图中
                    // curve.enableEditing(); //开启编辑功能


                    var polyline = new BMap.Polyline([
                      point1,
                      point2,
                    ], {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});   //创建折线
                    map.addOverlay(polyline);   //增加折线

                    var myIcon1 = new BMap.Icon(start, new BMap.Size(36,36));
                    var marker1 = new BMap.Marker(point1,{icon:myIcon1});  // 创建标注
                    map.addOverlay(marker1);              // 将标注添加到地图中

                    var myIcon2 = new BMap.Icon(end, new BMap.Size(36,36));
                    var marker2 = new BMap.Marker(point2,{icon:myIcon2});  // 创建标注
                    map.addOverlay(marker2);              // 将标注添加到地图中
                  }, 1000)
                })

              })
            }, 1000)
          }, 20)
        },
        methods: {
          //获取两地经纬度
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
              // map.centerAndZoom(poi.point, 13);
              // var marker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point.lat));  // 创建标注，为要查询的地方对应的经纬度
              // map.addOverlay(marker);
              callback(poi);
            });
            localSearch.search(keyword);
          },

          //判断是否关注了发送方
          isSend() {
            //判断登录的用户是否关注发送方
            setTimeout(() => {
              let _this = this;
              this.$ajax({
                method:'get',
                url:`${axios.defaults.baseURL}/users/isAttention/${this.$store.state.userId}/${this.cardsInformation.userId}`
              }).then((res)=>{
                console.log("判断发送方的数据" + res.data.data.sum);
                if (res.data.data.sum == 1) {
                  _this.sendAtt = true;
                } else {
                  _this.sendAtt = false;
                }
              });
            }, 50);
          },
          isReceive() {
            //判断登录的用户是否关注收件方
            setTimeout(() => {
              let _this = this;
              this.$ajax({
                method:'get',
                url:`${axios.defaults.baseURL}/users/isAttention/${this.$store.state.userId}/${this.cardsInformation.userId1}`
              }).then((res)=>{
                console.log("判断接收方的数据" + res.data.data.sum);
                if (res.data.data.sum == 0) {
                  _this.receiveAtt = false;
                } else {
                  _this.receiveAtt = true;
                }
              });
            }, 50);
          },

          getModalId(x) {
            console.log(x);
            this.clickId = x;
          },
          //关注用户
          toAtt(otherId) {
            let _this = this;
            this.$ajax.get(`${axios.defaults.baseURL}/users/attention/focus/${this.$store.state.userId}/${otherId}`
            ).then(function (result) {
              location.href = `/attention/${_this.$store.state.userId}/att`;
            }, function (err) {
              console.log(err);
            });
          },
          //取消关注
          cancelAtt(otherId) {
            let _this = this;
            this.$ajax.get(`${axios.defaults.baseURL}/users/attention/unfollow/${this.$store.state.userId}/${otherId}`
            ).then(function (result) {
              location.href = `/attention/${_this.$store.state.userId}/att`;
            }, function (err) {
              console.log(err);
            });
          }
        }
    }
</script>

<style scoped>
  /*.iconCon {*/
    /*margin-left: 20px;*/
  /*}*/
  #km_days {
    margin-left: -20px;
  }
  .btn {
    background: transparent;
    border: 1px solid #797979;
    color: #5E5E5E;
  }
  .btn:hover {
    color: #4e91ff;
  }
  .textT {
    font-size: 20px;
    font-weight: bold;
  }
  .addressDiv {
    float: left;
    text-align: center;
  }
  .addressDiv span {
    padding-top: 10px;
  }

  .addStart {
    margin-left: 23px;
    margin-top: 12px;
  }
  .addEnd {
    margin-top: 12px;
  }
  .addPic {
    margin-top: 20px;
    /*margin-left: 6px;*/
  }
  #introduction {
    width: 90%;
    height: 150px;
    margin-top:170px;
    margin-left:20px;
    /*border: 4px dashed #bdd1ff;*/
    text-align: center;
  }

  .text {
    color: #5E5E5E;
    font-size: 16px;
  }
  .pUserInfo {
    margin-top: 12px;
    margin-left: 5px;
  }

  .twoPeople{
    padding-top: 30px;
    /*background-color: #fafafa;*/
  }
  .top{
    height: 52px;
    font-size: 20px;
    line-height: 52px;
    text-align: center;
    color: white;
    background-color: rgb(82,137,112);
    }
    .head{
      width: 90px;
      height: 90px;
      border-radius: 90px;
      margin-top: 10px;
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
  }

</style>
