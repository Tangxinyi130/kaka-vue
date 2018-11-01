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


  // import anhui1 from "../../assets/images/map1/anhui1.png"
  // import neimeng1 from '../../assets/images/map1/neimeng1.png'
  // import heilongjiang1 from '../../assets/images/map1/heilongjiang1.png'
  // import xinjiang1 from '../../assets/images/map1/xinjiang1.png'
  // import xizang1 from '../../assets/images/map1/xizang1.png'
  // import qinghai1 from '../../assets/images/map1/qinghai1.png'
  // import gansu1 from '../../assets/images/map1/gansu1.png'
  // import ningxia1 from '../../assets/images/map1/ningxia1.png'
  // import shanghai1 from '../../assets/images/map1/shanghai1.png'
  // import liaoning1 from '../../assets/images/map1/liaoning1.png'
  // import guangdong1 from '../../assets/images/map1/guangdong1.png'
  // import guangxi1 from '../../assets/images/map1/guangxi1.png'
  // import henan1 from '../../assets/images/map1/henan1.png'
  // import shanxi1 from '../../assets/images/map1/shanxi1.png'
  // import shanxi21 from '../../assets/images/map1/shanxi21.png'
  // import hebei1 from '../../assets/images/map1/hebei1.png'
  // import jilin1 from '../../assets/images/map1/jilin1.png'
  // import beijing1 from '../../assets/images/map1/beijing1.png'
  // import tianjin1 from '../../assets/images/map1/tianjin1.png'
  // import shandong1 from '../../assets/images/map1/shandong1.png'
  // import jiangsu1 from '../../assets/images/map1/jiangsu1.png'
  // import hainan1 from '../../assets/images/map1/hainan1.png'
  // import hubei1 from '../../assets/images/map1/hubei1.png'
  // import yunnan1 from '../../assets/images/map1/yunnan1.png'
  // import sichuan1 from '../../assets/images/map1/sichuan1.png'
  // import guizhou1 from '../../assets/images/map1/guizhou1.png'
  // import taiwan1 from '../../assets/images/map1/taiwan1.png'
  // import fujian1 from '../../assets/images/map1/fujian1.png'
  // import hunan1 from '../../assets/images/map1/hunan1.png'
  // import zhejiang1 from '../../assets/images/map1/zhejiang1.png'
  // import jiangxi1 from '../../assets/images/map1/jiangxi1.png'
  // import chongqing1 from '../../assets/images/map1/chongqing1.png'
  //
  //
  // import anhui2 from '../../assets/images/map2/anhui2.png'
  // import neimeng2 from '../../assets/images/map2/neimeng2.png'
  // import heilongjiang2 from '../../assets/images/map2/heilongjiang2.png'
  // import xinjiang2 from '../../assets/images/map2/xinjiang2.png'
  // import xizang2 from '../../assets/images/map2/xizang2.png'
  // import qinghai2 from '../../assets/images/map2/qinghai2.png'
  // import gansu2 from '../../assets/images/map2/gansu2.png'
  // import ningxia2 from '../../assets/images/map2/ningxia2.png'
  // import shanghai2 from '../../assets/images/map2/shanghai2.png'
  // import liaoning2 from '../../assets/images/map2/liaoning2.png'
  // import guangdong2 from '../../assets/images/map2/guangdong2.png'
  // import guangxi2 from '../../assets/images/map2/guangxi2.png'
  // import henan2 from '../../assets/images/map2/henan2.png'
  // import shanxi2 from '../../assets/images/map2/shanxi2.png'
  // import shanxi22 from '../../assets/images/map2/shanxi22.png'
  // import hebei2 from '../../assets/images/map2/hebei2.png'
  // import jilin2 from '../../assets/images/map2/jilin2.png'
  // import beijing2 from '../../assets/images/map2/beijing2.png'
  // import tianjin2 from '../../assets/images/map2/tianjin2.png'
  // import shandong2 from '../../assets/images/map2/shandong2.png'
  // import jiangsu2 from '../../assets/images/map2/jiangsu2.png'
  // import hainan2 from '../../assets/images/map2/hainan2.png'
  // import hubei2 from '../../assets/images/map2/hubei2.png'
  // import yunnan2 from '../../assets/images/map2/yunnan2.png'
  // import sichuan2 from '../../assets/images/map2/sichuan2.png'
  // import guizhou2 from '../../assets/images/map2/guizhou2.png'
  // import taiwan2 from '../../assets/images/map2/taiwan2.png'
  // import fujian2 from '../../assets/images/map2/fujian2.png'
  // import hunan2 from '../../assets/images/map2/hunan2.png'
  // import zhejiang2 from '../../assets/images/map2/zhejiang2.png'
  // import jiangxi2 from '../../assets/images/map2/jiangxi2.png'
  // import chongqing2 from '../../assets/images/map2/chongqing2.png'
  //
  //
  // import anhui3 from '../../assets/images/map3/anhui3.png'
  // import neimeng3 from '../../assets/images/map3/neimeng3.png'
  // import heilongjiang3 from '../../assets/images/map3/heilongjiang3.png'
  // import xinjiang3 from '../../assets/images/map3/xinjiang3.png'
  // import xizang3 from '../../assets/images/map3/xizang3.png'
  // import qinghai3 from '../../assets/images/map3/qinghai3.png'
  // import gansu3 from '../../assets/images/map3/gansu3.png'
  // import ningxia3 from '../../assets/images/map3/ningxia3.png'
  // import shanghai3 from '../../assets/images/map3/shanghai3.png'
  // import liaoning3 from '../../assets/images/map3/liaoning3.png'
  // import guangdong3 from '../../assets/images/map3/guangdong3.png'
  // import guangxi3 from '../../assets/images/map3/guangxi3.png'
  // import henan3 from '../../assets/images/map3/henan3.png'
  // import shanxi3 from '../../assets/images/map3/shanxi3.png'
  // import shanxi23 from '../../assets/images/map3/shanxi23.png'
  // import hebei3 from '../../assets/images/map3/hebei3.png'
  // import jilin3 from '../../assets/images/map3/jilin3.png'
  // import beijing3 from '../../assets/images/map3/beijing3.png'
  // import tianjin3 from '../../assets/images/map3/tianjin3.png'
  // import shandong3 from '../../assets/images/map3/shandong3.png'
  // import jiangsu3 from '../../assets/images/map3/jiangsu3.png'
  // import hainan3 from '../../assets/images/map3/hainan3.png'
  // import hubei3 from '../../assets/images/map3/hubei3.png'
  // import yunnan3 from '../../assets/images/map3/yunnan3.png'
  // import sichuan3 from '../../assets/images/map3/sichuan3.png'
  // import guizhou3 from '../../assets/images/map3/guizhou3.png'
  // import taiwan3 from '../../assets/images/map3/taiwan3.png'
  // import fujian3 from '../../assets/images/map3/fujian3.png'
  // import hunan3 from '../../assets/images/map3/hunan3.png'
  // import zhejiang3 from '../../assets/images/map3/zhejiang3.png'
  // import jiangxi3 from '../../assets/images/map3/jiangxi3.png'
  // import chongqing3 from '../../assets/images/map3/chongqing3.png'
  //
  // import anhui4 from '../../assets/images/map4/anhui4.png'
  // import neimeng4 from '../../assets/images/map4/neimeng4.png'
  // import heilongjiang4 from '../../assets/images/map4/heilongjiang4.png'
  // import xinjiang4 from '../../assets/images/map4/xinjiang4.png'
  // import xizang4 from '../../assets/images/map4/xizang4.png'
  // import qinghai4 from '../../assets/images/map4/qinghai4.png'
  // import gansu4 from '../../assets/images/map4/gansu4.png'
  // import ningxia4 from '../../assets/images/map4/ningxia4.png'
  // import shanghai4 from '../../assets/images/map4/shanghai4.png'
  // import liaoning4 from '../../assets/images/map4/liaoning4.png'
  // import guangdong4 from '../../assets/images/map4/guangdong4.png'
  // import guangxi4 from '../../assets/images/map4/guangxi4.png'
  // import henan4 from '../../assets/images/map4/henan4.png'
  // import shanxi4 from '../../assets/images/map4/shanxi4.png'
  // import shanxi24 from '../../assets/images/map4/shanxi24.png'
  // import hebei4 from '../../assets/images/map4/hebei4.png'
  // import jilin4 from '../../assets/images/map4/jilin4.png'
  // import beijing4 from '../../assets/images/map4/beijing4.png'
  // import tianjin4 from '../../assets/images/map4/tianjin4.png'
  // import shandong4 from '../../assets/images/map4/shandong4.png'
  // import jiangsu4 from '../../assets/images/map4/jiangsu4.png'
  // import hainan4 from '../../assets/images/map4/hainan4.png'
  // import hubei4 from '../../assets/images/map4/hubei4.png'
  // import yunnan4 from '../../assets/images/map4/yunnan4.png'
  // import sichuan4 from '../../assets/images/map4/sichuan4.png'
  // import guizhou4 from '../../assets/images/map4/guizhou4.png'
  // import taiwan4 from '../../assets/images/map4/taiwan4.png'
  // import fujian4 from '../../assets/images/map4/fujian4.png'
  // import hunan4 from '../../assets/images/map4/hunan4.png'
  // import zhejiang4 from '../../assets/images/map4/zhejiang4.png'
  // import jiangxi4 from '../../assets/images/map4/jiangxi4.png'
  // import chongqing4 from '../../assets/images/map4/chongqing4.png'



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
          chongqing: {prov:chongqing, show:-1},


          // anhui1:{prov:anhui1, show:-1},  //show为1表示显示
          // neimeng1:{prov:neimeng1, show:-1},//show为-1表示隐藏
          // heilongjiang1: {prov:heilongjiang1, show:-1},
          // xinjiang1: {prov:xinjiang1, show:-1},
          // xizang1: {prov:xizang1, show:-1},
          // qinghai1: {prov:qinghai1, show:-1},
          // gansu1: {prov:gansu1, show:-1},
          // ningxia1: {prov:ningxia1, show:-1},
          // shanghai1: {prov:shanghai1, show:-1},
          // liaoning1: {prov:liaoning1, show:-1},
          // guangdong1: {prov:guangdong1, show:-1},
          // guangxi1: {prov:guangxi1, show:-1},
          // henan1: {prov:henan1, show:-1},
          // shanxi1: {prov:shanxi1, show:-1},  //陕西
          // shanxi21: {prov:shanxi21, show:-1}, //山西
          // hebei1: {prov:hebei1, show:-1},
          // jilin1: {prov:jilin1, show:-1},
          // beijing1: {prov:beijing1, show:-1},
          // tianjin1: {prov:tianjin1, show:-1},
          // shandong1: {prov:shandong1, show:-1},
          // jiangsu1: {prov:jiangsu1, show:-1},
          // hainan1: {prov:hainan1, show:-1},
          // hubei1: {prov:hubei1, show:-1},
          // yunnan1: {prov:yunnan1, show:-1},
          // sichuan1: {prov:sichuan1, show:-1},
          // guizhou1: {prov:guizhou1, show:-1},
          // taiwan1: {prov:taiwan1, show:-1},
          // fujian1: {prov:fujian1, show:-1},
          // hunan1: {prov:hunan1, show:-1},
          // zhejiang1: {prov:zhejiang1, show:-1},
          // jiangxi1: {prov:jiangxi1, show:-1},
          // chongqing1: {prov:chongqing1, show:-1},
          //
          //
          // anhui2:{prov:anhui2, show:-1},  //show为1表示显示
          // neimeng2:{prov:neimeng2, show:-1},//show为-1表示隐藏
          // heilongjiang2: {prov:heilongjiang2, show:-1},
          // xinjiang2: {prov:xinjiang2, show:-1},
          // xizang2: {prov:xizang2, show:-1},
          // qinghai2: {prov:qinghai2, show:-1},
          // gansu2: {prov:gansu2, show:-1},
          // ningxia2: {prov:ningxia2, show:-1},
          // shanghai2: {prov:shanghai2, show:-1},
          // liaoning2: {prov:liaoning2, show:-1},
          // guangdong2: {prov:guangdong2, show:-1},
          // guangxi2: {prov:guangxi2, show:-1},
          // henan2: {prov:henan2, show:-1},
          // shanxi2: {prov:shanxi2, show:-1},  //陕西
          // shanxi22: {prov:shanxi22, show:-1}, //山西
          // hebei2: {prov:hebei2, show:-1},
          // jilin2: {prov:jilin2, show:-1},
          // beijing2: {prov:beijing2, show:-1},
          // tianjin2: {prov:tianjin2, show:-1},
          // shandong2: {prov:shandong2, show:-1},
          // jiangsu2: {prov:jiangsu2, show:-1},
          // hainan2: {prov:hainan2, show:-1},
          // hubei2: {prov:hubei2, show:-1},
          // yunnan2: {prov:yunnan2, show:-1},
          // sichuan2: {prov:sichuan2, show:-1},
          // guizhou2: {prov:guizhou2, show:-1},
          // taiwan2: {prov:taiwan2, show:-1},
          // fujian2: {prov:fujian2, show:-1},
          // hunan2: {prov:hunan2, show:-1},
          // zhejiang2: {prov:zhejiang2, show:-1},
          // jiangxi2: {prov:jiangxi2, show:-1},
          // chongqing2: {prov:chongqing2, show:-1},
          //
          // anhui3:{prov:anhui3, show:-1},  //show为1表示显示
          // neimeng3:{prov:neimeng3, show:-1},//show为-1表示隐藏
          // heilongjiang3: {prov:heilongjiang3, show:-1},
          // xinjiang3: {prov:xinjiang3, show:-1},
          // xizang3: {prov:xizang3, show:-1},
          // qinghai3: {prov:qinghai3, show:-1},
          // gansu3: {prov:gansu3, show:-1},
          // ningxia3: {prov:ningxia3, show:-1},
          // shanghai3: {prov:shanghai3, show:-1},
          // liaoning3: {prov:liaoning3, show:-1},
          // guangdong3: {prov:guangdong3, show:-1},
          // guangxi3: {prov:guangxi3, show:-1},
          // henan3: {prov:henan3, show:-1},
          // shanxi3: {prov:shanxi3, show:-1},  //陕西
          // shanxi23: {prov:shanxi23, show:-1}, //山西
          // hebei3: {prov:hebei3, show:-1},
          // jilin3: {prov:jilin3, show:-1},
          // beijing3: {prov:beijing3, show:-1},
          // tianjin3: {prov:tianjin3, show:-1},
          // shandong3: {prov:shandong3, show:-1},
          // jiangsu3: {prov:jiangsu3, show:-1},
          // hainan3: {prov:hainan3, show:-1},
          // hubei3: {prov:hubei3, show:-1},
          // yunnan3: {prov:yunnan3, show:-1},
          // sichuan3: {prov:sichuan3, show:-1},
          // guizhou3: {prov:guizhou3, show:-1},
          // taiwan3: {prov:taiwan3, show:-1},
          // fujian3: {prov:fujian3, show:-1},
          // hunan3: {prov:hunan3, show:-1},
          // zhejiang3: {prov:zhejiang3, show:-1},
          // jiangxi3: {prov:jiangxi3, show:-1},
          // chongqing3: {prov:chongqing3, show:-1},
          //
          //
          // anhui4:{prov:anhui4, show:-1},  //show为1表示显示
          // neimeng4:{prov:neimeng4, show:-1},//show为-1表示隐藏
          // heilongjiang4: {prov:heilongjiang4, show:-1},
          // xinjiang4: {prov:xinjiang4, show:-1},
          // xizang4: {prov:xizang4, show:-1},
          // qinghai4: {prov:qinghai4, show:-1},
          // gansu4: {prov:gansu4, show:-1},
          // ningxia4: {prov:ningxia4, show:-1},
          // shanghai4: {prov:shanghai4, show:-1},
          // liaoning4: {prov:liaoning4, show:-1},
          // guangdong4: {prov:guangdong4, show:-1},
          // guangxi4: {prov:guangxi4, show:-1},
          // henan4: {prov:henan4, show:-1},
          // shanxi4: {prov:shanxi4, show:-1},  //陕西
          // shanxi24: {prov:shanxi24, show:-1}, //山西
          // hebei4: {prov:hebei4, show:-1},
          // jilin4: {prov:jilin4, show:-1},
          // beijing4: {prov:beijing4, show:-1},
          // tianjin4: {prov:tianjin4, show:-1},
          // shandong4: {prov:shandong4, show:-1},
          // jiangsu4: {prov:jiangsu4, show:-1},
          // hainan4: {prov:hainan4, show:-1},
          // hubei4: {prov:hubei4, show:-1},
          // yunnan4: {prov:yunnan4, show:-1},
          // sichuan4: {prov:sichuan4, show:-1},
          // guizhou4: {prov:guizhou4, show:-1},
          // taiwan4: {prov:taiwan4, show:-1},
          // fujian4: {prov:fujian4, show:-1},
          // hunan4: {prov:hunan4, show:-1},
          // zhejiang4: {prov:zhejiang4, show:-1},
          // jiangxi4: {prov:jiangxi4, show:-1},
          // chongqing4: {prov:chongqing4, show:-1},


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
        this.$ajax.get(`${axios.defaults.baseURL}/users/mapCollection/${this.$route.params.id}`
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
