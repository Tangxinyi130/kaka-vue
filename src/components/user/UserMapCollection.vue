<template>
    <div>
      <!--我的地图板块点亮-->
        <div class="map">
          <img src="../../assets/images/map/map.jpg" width="716" height="595" usemap="#Map" border="0"/>
          <div class="city">
            <div class="citybg"  style="top:314px;left:523px;width:75px;height:90px;display:block;"
                 :style="{backgroundImage:`url(${anhui.prov})`,zIndex:anhui.show}"></div>
            <!--<a style=" position:absolute; top:355px; left:555px; z-index:10;" href="#">安徽</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:9px; left:296px; width:318px; height:272px; display:block;"
                 :style="{backgroundImage:`url(${neimeng.prov})`,zIndex:neimeng.show}"></div>
            <!--<a style="position:absolute; top:211px; left:424px; z-index:10;" href="#">内蒙</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:1px; left:550px; width:165px; height:151px; display:block;"
                 :style="{backgroundImage:`url(${heilongjiang.prov})`,zIndex:heilongjiang.show}"></div>
            <!--<a style="position:absolute;top:81px; left:624px; z-index:10;" href="#">黑龙江</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:73px; left:0px; width:292px; height:223px; display:block;"
                 :style="{backgroundImage:`url(${xinjiang.prov})`,zIndex:xinjiang.show}"></div>
            <!--<a style="position:absolute;top:211px; left:124px; z-index:10;" href="#">新疆</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:275px; left:31px; width:281px; height:175px; display:block;"
                 :style="{backgroundImage:`url(${xizang.prov})`,zIndex:xizang.show}"></div>
            <!--<a style="position:absolute;top:361px; left:145px; z-index:10;" href="index.html">西藏</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:240px; left:182px; width:185px; height:135px; display: block"
                 :style="{backgroundImage:`url(${qinghai.prov})`,zIndex:qinghai.show}"></div>
            <!--<a style="position:absolute;top:300px; left:254px; z-index:10;" href="index.html">青海</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:187px; left:236px; width:207px; height:177px; display: block"
                 :style="{backgroundImage:`url(${gansu.prov})`,zIndex:gansu.show}"></div>
            <!--<a style="position:absolute;top:310px; left:364px; z-index:10;" href="index.html">甘肃</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:245px; left:379px; width:49px; height:75px; display: block"
                 :style="{backgroundImage:`url(${ningxia.prov})`,zIndex:ningxia.show}"></div>
            <!--<a style="position:absolute;top:272px; left:390px; z-index:10;" href="index.html">宁夏</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:354px; left:610px; width:23px; height:22px; display: block"
                 :style="{backgroundImage:`url(${shanghai.prov})`,zIndex:shanghai.show}"></div>
            <!--<a style="position:absolute;top:352px; left:615px;; z-index:10;" href="index.html">上海</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:161px; left:557px; width:91px; height:87px; display: block"
                 :style="{backgroundImage:`url(${liaoning.prov})`,zIndex:liaoning.show}"></div>
            <!--<a style="position:absolute;top:180px; left:600px; z-index:10;" href="index.html">辽宁</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:470px; left:464px; width:111px; height:88px; display: block"
                 :style="{backgroundImage:`url(${guangdong.prov})`,zIndex:guangdong.show}"></div>
            <!--<a style="position:absolute;top:490px; left:500px; z-index:10;" href="index.html">广东</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:454px; left:382px; width:118px; height:92px; display: block"
                 :style="{backgroundImage:`url(${guangxi.prov})`,zIndex:guangxi.show}"></div>
            <!--<a style="position:absolute;top:488px; left:432px; z-index:10;" href="index.html">广西</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:288px; left:461px; width:89px; height:88px; display: block"
                 :style="{backgroundImage:`url(${henan.prov})`,zIndex:henan.show}"></div>
            <!--<a style="position:absolute;top:320px; left:490px; z-index:10;" href="index.html">河南</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:242px; left:396px; width:79px; height:134px; display: block"
                 :style="{backgroundImage:`url(${shanxi.prov})`,zIndex:shanxi.show}"></div>
            <!--<a style="position:absolute;top:321px; left:430px; z-index:10;" href="index.html">陕西</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:219px; left:458px; width:56px; height:112px; display: block"
                 :style="{backgroundImage:`url(${shanxi2.prov})`,zIndex:shanxi2.show}"></div>
            <!--<a style="position:absolute;top:271px; left:470px; z-index:10;" href="index.html">山西</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:184px; left:497px; width:85px; height:118px; display: block"
                 :style="{backgroundImage:`url(${hebei.prov})`,zIndex:hebei.show}"></div>
            <!--<a style="position:absolute;top:247px; left:508px; z-index:10;" href="index.html">河北</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:113px; left:575px; width:125px; height:88px; display: block"
                 :style="{backgroundImage:`url(${jilin.prov})`,zIndex:jilin.show}"></div>
            <!--<a style="position:absolute;top:150px; left:642px; z-index:10;" href="index.html">吉林</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:210px; left:512px; width:50px; height:38px; display: block"
                 :style="{backgroundImage:`url(${beijing.prov})`,zIndex:beijing.show}"></div>
            <!--<a style="position:absolute;top:215px; left:515px; z-index:10;" href="index.html">北京</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:222px; left:536px; width:26px; height:34px; display: block"
                 :style="{backgroundImage:`url(${tianjin.prov})`,zIndex:tianjin.show}"></div>
            <!--<a style="position:absolute;top:229px; left:535px; z-index:10;" href="index.html">天津</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:256px; left:521px; width:103px; height:68px; display: block"
                 :style="{backgroundImage:`url(${shandong.prov})`,zIndex:shandong.show}"></div>
            <!--<a style="position:absolute;top:281px; left:540px; z-index:10;" href="index.html">山东</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:305px; left:539px; width:93px; height:72px; display: block"
                 :style="{backgroundImage:`url(${jiangsu.prov})`,zIndex:jiangsu.show}"></div>
            <!--<a style="position:absolute;top:321px; left:570px; z-index:10;" href="index.html">江苏</a>-->
          </div>
          <!--<div class="city">-->
          <!--<div class="citybg" style="top:556px; left:442px; width:89px; height:88px; display: block"-->
          <!--:style="{backgroundImage:`url(${hainan.prov})`,zIndex:hainan.show}"></div>-->
          <!--&lt;!&ndash;<a style="position:absolute;top:565px; left:450px; z-index:10;" href="index.html">海南</a>&ndash;&gt;-->
          <!--</div>-->

          <div class="city">
            <div class="citybg" style="top:556px; left:442px; width:43px; height:39px; display: block"
                 :style="{backgroundImage:`url(${hainan.prov})`,zIndex:hainan.show}"></div>
            <!--<a style="position:absolute;top:565px; left:450px; z-index:10;" href="index.html">海南</a>-->
          </div>

          <div class="city">
            <div class="citybg" style="top:345px; left:438px; width:115px; height:75px; display: block"
                 :style="{backgroundImage:`url(${hubei.prov})`,zIndex:hubei.show}"></div>
            <!--<a style="position:absolute;top:365px; left:480px; z-index:10;" href="index.html">湖北</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:412px; left:280px; width:132px; height:138px; display: block"
                 :style="{backgroundImage:`url(${yunnan.prov})`,zIndex:yunnan.show}"></div>
            <!--<a style="position:absolute;top:485px; left:320px; z-index:10;" href="index.html">云南</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:328px; left:284px; width:161px; height:143px; display: block"
                 :style="{backgroundImage:`url(${sichuan.prov})`,zIndex:sichuan.show}"></div>
            <!--<a style="position:absolute;top:385px; left:345px; z-index:10;" href="index.html">四川</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:409px; left:367px; width:93px; height:81px; display: block"
                 :style="{backgroundImage:`url(${guizhou.prov})`,zIndex:guizhou.show}"></div>
            <!--<a style="position:absolute;top:445px; left:405px; z-index:10;" href="index.html">贵州</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:456px; left:613px; width:32px; height:65px; display: block"
                 :style="{backgroundImage:`url(${taiwan.prov})`,zIndex:taiwan.show}"></div>
            <!--<a style="position:absolute;top:475px; left:620px; z-index:10;" href="index.html">台湾</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:415px; left:548px; width:70px; height:84px; display: block"
                 :style="{backgroundImage:`url(${fujian.prov})`,zIndex:fujian.show}"></div>
            <!--<a style="position:absolute;top:445px; left:565px; z-index:10;" href="index.html">福建</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:394px; left:445px; width:83px; height:96px; display: block"
                 :style="{backgroundImage:`url(${hunan.prov})`,zIndex:hunan.show}"></div>
            <!--<a style="position:absolute;top:425px; left:475px; z-index:10;" href="index.html">湖南</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:367px; left:574px; width:62px; height:70px; display: block"
                 :style="{backgroundImage:`url(${zhejiang.prov})`,zIndex:zhejiang.show}"></div>
            <!--<a style="position:absolute;top:395px; left:588px; z-index:10;" href="index.html">浙江</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:390px; left:513px; width:76px; height:98px; display: block"
                 :style="{backgroundImage:`url(${jiangxi.prov})`,zIndex:jiangxi.show}"></div>
            <!--<a style="position:absolute;top:425px; left:525px; z-index:10;" href="index.html">江西</a>-->
          </div>
          <div class="city">
            <div class="citybg" style="top:363px; left:397px; width:70px; height:80px; display: block;"
                 :style="{backgroundImage:`url(${chongqing.prov})`,zIndex:chongqing.show}"></div>
            <!--<a style="position:absolute;top:390px; left:420px; z-index:10;" href="index.html">重庆</a>-->
          </div>
        </div>
        <div style="height: 1px; margin-top: -185px"></div>
    </div>
</template>

<script>
  //导入省份图片
  import anhui from '../../assets/images/map/anhui.png'
  import neimeng from '../../assets/images/map/neimeng.png'
  import heilongjiang from '../../assets/images/map/heilongjiang.png'
  import xinjiang from '../../assets/images/map/xinjiang.png'
  import xizang from '../../assets/images/map/xizang.png'
  import qinghai from '../../assets/images/map/qinghai.png'
  import gansu from '../../assets/images/map/gansu.png'
  import ningxia from '../../assets/images/map/ningxia.png'
  import shanghai from '../../assets/images/map/shanghai.png'
  import liaoning from '../../assets/images/map/liaoning.png'
  import guangdong from '../../assets/images/map/guangdong.png'
  import guangxi from '../../assets/images/map/guangxi.png'
  import henan from '../../assets/images/map/henan.png'
  import shanxi from '../../assets/images/map/shanxi.png'
  import shanxi2 from '../../assets/images/map/shanxi2.png'
  import hebei from '../../assets/images/map/hebei.png'
  import jilin from '../../assets/images/map/jilin.png'
  import beijing from '../../assets/images/map/beijing.png'
  import tianjin from '../../assets/images/map/tianjin.png'
  import shandong from '../../assets/images/map/shandong.png'
  import jiangsu from '../../assets/images/map/jiangsu.png'
  import hainan from '../../assets/images/map/hainan.png'
  import hubei from '../../assets/images/map/hubei.png'
  import yunnan from '../../assets/images/map/yunnan.png'
  import sichuan from '../../assets/images/map/sichuan.png'
  import guizhou from '../../assets/images/map/guizhou.png'
  import taiwan from '../../assets/images/map/taiwan.png'
  import fujian from '../../assets/images/map/fujian.png'
  import hunan from '../../assets/images/map/hunan.png'
  import zhejiang from '../../assets/images/map/zhejiang.png'
  import jiangxi from '../../assets/images/map/jiangxi.png'
  import chongqing from '../../assets/images/map/chongqing.png'
    export default {
        name: "UserMapCollection",
      data(){
        return {
          anhui:{prov:anhui, show:-1},  //show为1表示显示
          neimeng:{prov:neimeng, show:-1},//show为-1表示隐藏
          heilongjiang: {prov:heilongjiang, show:-1},
          xinjiang: {prov:xinjiang, show:-1},
          xizang: {prov:xizang, show:-1},
          qinghai: {prov:qinghai, show:-1},
          gansu: {prov:gansu, show:-1},
          ningxia: {prov:ningxia, show:-1},
          shanghai: {prov:shanghai, show:-1},
          liaoning: {prov:liaoning, show:-1},
          guangdong: {prov:guangdong, show:-1},
          guangxi: {prov:guangxi, show:-1},
          henan: {prov:henan, show:-1},
          shanxi: {prov:shanxi, show:-1},  //陕西
          shanxi2: {prov:shanxi2, show:-1}, //山西
          hebei: {prov:hebei, show:-1},
          jilin: {prov:jilin, show:-1},
          beijing: {prov:beijing, show:-1},
          tianjin: {prov:tianjin, show:-1},
          shandong: {prov:shandong, show:-1},
          jiangsu: {prov:jiangsu, show:-1},
          hainan: {prov:hainan, show:-1},
          hubei: {prov:hubei, show:-1},
          yunnan: {prov:yunnan, show:-1},
          sichuan: {prov:sichuan, show:-1},
          guizhou: {prov:guizhou, show:-1},
          taiwan: {prov:taiwan, show:-1},
          fujian: {prov:fujian, show:-1},
          hunan: {prov:hunan, show:-1},
          zhejiang: {prov:zhejiang, show:-1},
          jiangxi: {prov:jiangxi, show:-1},
          chongqing: {prov:chongqing, show:-1}
        }
      },
      methods:{
          toShowMap(region) {
            switch(region) {
              case "安徽": this.anhui.show = 1; break;
              case "内蒙": this.neimeng.show = 1; break;
              case "黑龙江": this.heilongjiang.show = 1; break;
              case "新疆": this.xinjiang.show = 1; break;
              case "西藏": this.xizang.show = 1; break;
              case "青海": this.qinghai.show = 1; break;
              case "甘肃": this.gansu.show = 1; break;
              case "宁夏": this.ningxia.show = 1; break;
              case "上海": this.shanghai.show = 1; break;
              case "辽宁": this.liaoning.show = 1; break;
              case "广东": this.guangdong.show = 1; break;
              case "广西": this.guangxi.show = 1; break;
              case "河南": this.henan.show = 1; break;
              case "陕西": this.shanxi.show = 1; break;
              case "山西": this.shanxi2.show = 1; break;
              case "河北": this.hebei.show = 1; break;
              case "吉林": this.jilin.show = 1; break;
              case "北京": this.beijing.show = 1; break;
              case "天津": this.tianjin.show = 1; break;
              case "山东": this.shandong.show = 1; break;
              case "江苏": this.jiangsu.show = 1; break;
              case "海南": this.hainan.show = 1; break;
              case "湖北": this.hubei.show = 1; break;
              case "云南": this.yunnan.show = 1; break;
              case "四川": this.sichuan.show = 1; break;
              case "贵州": this.guizhou.show = 1; break;
              case "台湾": this.taiwan.show = 1; break;
              case "福建": this.fujian.show = 1; break;
              case "湖南": this.hunan.show = 1; break;
              case "浙江": this.zhejiang.show = 1; break;
              case "江西": this.jiangxi.show = 1; break;
              case "重庆": this.chongqing.show = 1; break;
              default:
                break;
            }
          }
      },
      created() {
        let _this = this;
        this.$ajax.get(`http://localhost:3000/users/mapCollection/${this.$route.params.id}`
        ).then(function (result) {
          for(var key in result.data.data) {
              _this.toShowMap(result.data.data[key].cardSendRegion);
          }
        }, function (err) {
          console.log(err);
        });
      }
    }
</script>

<style scoped>
  .map{
    position:relative;
    width:856px;
    transform-origin:top left;
    /*zoom:0.5;*/
    transform: scale(0.7);
    text-align: center;
    margin-left: -40px;
    /*margin-top: -30px;*/
  }
  .map a{ color:#5b5a5a; font-size:14px; text-decoration:none;}
  .map a:hover{ color:#fff;}
  .city{position:absolute;left:70px;top:0}
  .citybg{ position:absolute; display:none; z-index:3; }
  .city a.active .citybg{ display:block; z-index:3;}
</style>
