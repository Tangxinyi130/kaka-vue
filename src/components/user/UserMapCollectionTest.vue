<template>
  <div>
    <!--我的地图板块点亮-->
    <div class="map">
      <img src="../../assets/images/map/map.jpg" width="716" height="595" usemap="#Map" border="0"/>

      <!-- 安徽 -->
      <div class="city">
        <div class="citybg"  style="top:314px;left:523px;width:75px;height:90px;display:block;"
             :style="{backgroundImage:`url(${anhui1.prov})`,zIndex:anhui1.show}"></div>
        <!--<a style=" position:absolute; top:355px; left:555px; z-index:10;" href="#">安徽</a>-->
      </div>
      <div class="city">
        <div class="citybg"  style="top:314px;left:523px;width:75px;height:90px;display:block;"
             :style="{backgroundImage:`url(${anhui2.prov})`,zIndex:anhui2.show}"></div>
        <!--<a style=" position:absolute; top:355px; left:555px; z-index:10;" href="#">安徽</a>-->
      </div>
      <div class="city">
        <div class="citybg"  style="top:314px;left:523px;width:75px;height:90px;display:block;"
             :style="{backgroundImage:`url(${anhui3.prov})`,zIndex:anhui3.show}"></div>
        <!--<a style=" position:absolute; top:355px; left:555px; z-index:10;" href="#">安徽</a>-->
      </div>
      <div class="city">
        <div class="citybg"  style="top:314px;left:523px;width:75px;height:90px;display:block;"
             :style="{backgroundImage:`url(${anhui4.prov})`,zIndex:anhui4.show}"></div>
        <!--<a style=" position:absolute; top:355px; left:555px; z-index:10;" href="#">安徽</a>-->
      </div>

      <!-- 内蒙 -->
      <div class="city">
        <div class="citybg" style="top:9px; left:296px; width:318px; height:272px; display:block;"
             :style="{backgroundImage:`url(${neimeng1.prov})`,zIndex:neimeng1.show}"></div>
        <!--<a style="position:absolute; top:211px; left:424px; z-index:10;" href="#">内蒙</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:9px; left:296px; width:318px; height:272px; display:block;"
             :style="{backgroundImage:`url(${neimeng2.prov})`,zIndex:neimeng2.show}"></div>
        <!--<a style="position:absolute; top:211px; left:424px; z-index:10;" href="#">内蒙</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:9px; left:296px; width:318px; height:272px; display:block;"
             :style="{backgroundImage:`url(${neimeng3.prov})`,zIndex:neimeng3.show}"></div>
        <!--<a style="position:absolute; top:211px; left:424px; z-index:10;" href="#">内蒙</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:9px; left:296px; width:318px; height:272px; display:block;"
             :style="{backgroundImage:`url(${neimeng4.prov})`,zIndex:neimeng4.show}"></div>
        <!--<a style="position:absolute; top:211px; left:424px; z-index:10;" href="#">内蒙</a>-->
      </div>


      <!--黑龙江-->
      <div class="city">
        <div class="citybg" style="top:1px; left:550px; width:165px; height:151px; display:block;"
             :style="{backgroundImage:`url(${heilongjiang1.prov})`,zIndex:heilongjiang1.show}"></div>
        <!--<a style="position:absolute;top:81px; left:624px; z-index:10;" href="#">黑龙江</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:1px; left:550px; width:165px; height:151px; display:block;"
             :style="{backgroundImage:`url(${heilongjiang2.prov})`,zIndex:heilongjiang2.show}"></div>
        <!--<a style="position:absolute;top:81px; left:624px; z-index:10;" href="#">黑龙江</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:1px; left:550px; width:165px; height:151px; display:block;"
             :style="{backgroundImage:`url(${heilongjiang3.prov})`,zIndex:heilongjiang3.show}"></div>
        <!--<a style="position:absolute;top:81px; left:624px; z-index:10;" href="#">黑龙江</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:1px; left:550px; width:165px; height:151px; display:block;"
             :style="{backgroundImage:`url(${heilongjiang4.prov})`,zIndex:heilongjiang4.show}"></div>
        <!--<a style="position:absolute;top:81px; left:624px; z-index:10;" href="#">黑龙江</a>-->
      </div>


      <!--新疆-->
      <div class="city">
        <div class="citybg" style="top:73px; left:0px; width:292px; height:223px; display:block;"
             :style="{backgroundImage:`url(${xinjiang1.prov})`,zIndex:xinjiang1.show}"></div>
        <!--<a style="position:absolute;top:211px; left:124px; z-index:10;" href="#">新疆</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:73px; left:0px; width:292px; height:223px; display:block;"
             :style="{backgroundImage:`url(${xinjiang2.prov})`,zIndex:xinjiang2.show}"></div>
        <!--<a style="position:absolute;top:211px; left:124px; z-index:10;" href="#">新疆</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:73px; left:0px; width:292px; height:223px; display:block;"
             :style="{backgroundImage:`url(${xinjiang3.prov})`,zIndex:xinjiang3.show}"></div>
        <!--<a style="position:absolute;top:211px; left:124px; z-index:10;" href="#">新疆</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:73px; left:0px; width:292px; height:223px; display:block;"
             :style="{backgroundImage:`url(${xinjiang4.prov})`,zIndex:xinjiang4.show}"></div>
        <!--<a style="position:absolute;top:211px; left:124px; z-index:10;" href="#">新疆</a>-->
      </div>

      <!--西藏-->
      <div class="city">
        <div class="citybg" style="top:275px; left:31px; width:281px; height:175px; display:block;"
             :style="{backgroundImage:`url(${xizang1.prov})`,zIndex:xizang1.show}"></div>
        <!--<a style="position:absolute;top:361px; left:145px; z-index:10;" href="index.html">西藏</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:275px; left:31px; width:281px; height:175px; display:block;"
             :style="{backgroundImage:`url(${xizang2.prov})`,zIndex:xizang2.show}"></div>
        <!--<a style="position:absolute;top:361px; left:145px; z-index:10;" href="index.html">西藏</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:275px; left:31px; width:281px; height:175px; display:block;"
             :style="{backgroundImage:`url(${xizang3.prov})`,zIndex:xizang3.show}"></div>
        <!--<a style="position:absolute;top:361px; left:145px; z-index:10;" href="index.html">西藏</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:275px; left:31px; width:281px; height:175px; display:block;"
             :style="{backgroundImage:`url(${xizang4.prov})`,zIndex:xizang4.show}"></div>
        <!--<a style="position:absolute;top:361px; left:145px; z-index:10;" href="index.html">西藏</a>-->
      </div>


      <!--青海-->
      <div class="city">
        <div class="citybg" style="top:240px; left:182px; width:185px; height:135px; display: block"
             :style="{backgroundImage:`url(${qinghai1.prov})`,zIndex:qinghai1.show}"></div>
        <!--<a style="position:absolute;top:300px; left:254px; z-index:10;" href="index.html">青海</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:240px; left:182px; width:185px; height:135px; display: block"
             :style="{backgroundImage:`url(${qinghai2.prov})`,zIndex:qinghai2.show}"></div>
        <!--<a style="position:absolute;top:300px; left:254px; z-index:10;" href="index.html">青海</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:240px; left:182px; width:185px; height:135px; display: block"
             :style="{backgroundImage:`url(${qinghai3.prov})`,zIndex:qinghai3.show}"></div>
        <!--<a style="position:absolute;top:300px; left:254px; z-index:10;" href="index.html">青海</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:240px; left:182px; width:185px; height:135px; display: block"
             :style="{backgroundImage:`url(${qinghai4.prov})`,zIndex:qinghai4.show}"></div>
        <!--<a style="position:absolute;top:300px; left:254px; z-index:10;" href="index.html">青海</a>-->
      </div>


      <!--甘肃-->
      <div class="city">
        <div class="citybg" style="top:187px; left:236px; width:207px; height:177px; display: block"
             :style="{backgroundImage:`url(${gansu1.prov})`,zIndex:gansu1.show}"></div>
        <!--<a style="position:absolute;top:310px; left:364px; z-index:10;" href="index.html">甘肃</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:187px; left:236px; width:207px; height:177px; display: block"
             :style="{backgroundImage:`url(${gansu2.prov})`,zIndex:gansu2.show}"></div>
        <!--<a style="position:absolute;top:310px; left:364px; z-index:10;" href="index.html">甘肃</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:187px; left:236px; width:207px; height:177px; display: block"
             :style="{backgroundImage:`url(${gansu3.prov})`,zIndex:gansu3.show}"></div>
        <!--<a style="position:absolute;top:310px; left:364px; z-index:10;" href="index.html">甘肃</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:187px; left:236px; width:207px; height:177px; display: block"
             :style="{backgroundImage:`url(${gansu4.prov})`,zIndex:gansu4.show}"></div>
        <!--<a style="position:absolute;top:310px; left:364px; z-index:10;" href="index.html">甘肃</a>-->
      </div>

      <!--宁夏-->
      <div class="city">
        <div class="citybg" style="top:245px; left:379px; width:49px; height:75px; display: block"
             :style="{backgroundImage:`url(${ningxia1.prov})`,zIndex:ningxia1.show}"></div>
        <!--<a style="position:absolute;top:272px; left:390px; z-index:10;" href="index.html">宁夏</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:245px; left:379px; width:49px; height:75px; display: block"
             :style="{backgroundImage:`url(${ningxia2.prov})`,zIndex:ningxia2.show}"></div>
        <!--<a style="position:absolute;top:272px; left:390px; z-index:10;" href="index.html">宁夏</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:245px; left:379px; width:49px; height:75px; display: block"
             :style="{backgroundImage:`url(${ningxia3.prov})`,zIndex:ningxia3.show}"></div>
        <!--<a style="position:absolute;top:272px; left:390px; z-index:10;" href="index.html">宁夏</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:245px; left:379px; width:49px; height:75px; display: block"
             :style="{backgroundImage:`url(${ningxia4.prov})`,zIndex:ningxia4.show}"></div>
        <!--<a style="position:absolute;top:272px; left:390px; z-index:10;" href="index.html">宁夏</a>-->
      </div>


      <!--上海-->
      <div class="city">
        <div class="citybg" style="top:354px; left:610px; width:23px; height:22px; display: block"
             :style="{backgroundImage:`url(${shanghai1.prov})`,zIndex:shanghai1.show}"></div>
        <!--<a style="position:absolute;top:352px; left:615px;; z-index:10;" href="index.html">上海</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:354px; left:610px; width:23px; height:22px; display: block"
             :style="{backgroundImage:`url(${shanghai2.prov})`,zIndex:shanghai2.show}"></div>
        <!--<a style="position:absolute;top:352px; left:615px;; z-index:10;" href="index.html">上海</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:354px; left:610px; width:23px; height:22px; display: block"
             :style="{backgroundImage:`url(${shanghai3.prov})`,zIndex:shanghai3.show}"></div>
        <!--<a style="position:absolute;top:352px; left:615px;; z-index:10;" href="index.html">上海</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:354px; left:610px; width:23px; height:22px; display: block"
             :style="{backgroundImage:`url(${shanghai4.prov})`,zIndex:shanghai4.show}"></div>
        <!--<a style="position:absolute;top:352px; left:615px;; z-index:10;" href="index.html">上海</a>-->
      </div>


      <!--辽宁-->
      <div class="city">
        <div class="citybg" style="top:161px; left:557px; width:91px; height:87px; display: block"
             :style="{backgroundImage:`url(${liaoning1.prov})`,zIndex:liaoning1.show}"></div>
        <!--<a style="position:absolute;top:180px; left:600px; z-index:10;" href="index.html">辽宁</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:161px; left:557px; width:91px; height:87px; display: block"
             :style="{backgroundImage:`url(${liaoning2.prov})`,zIndex:liaoning2.show}"></div>
        <!--<a style="position:absolute;top:180px; left:600px; z-index:10;" href="index.html">辽宁</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:161px; left:557px; width:91px; height:87px; display: block"
             :style="{backgroundImage:`url(${liaoning3.prov})`,zIndex:liaoning3.show}"></div>
        <!--<a style="position:absolute;top:180px; left:600px; z-index:10;" href="index.html">辽宁</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:161px; left:557px; width:91px; height:87px; display: block"
             :style="{backgroundImage:`url(${liaoning4.prov})`,zIndex:liaoning4.show}"></div>
        <!--<a style="position:absolute;top:180px; left:600px; z-index:10;" href="index.html">辽宁</a>-->
      </div>

      <!--广东-->
      <div class="city">
        <div class="citybg" style="top:470px; left:464px; width:111px; height:88px; display: block"
             :style="{backgroundImage:`url(${guangdong1.prov})`,zIndex:guangdong1.show}"></div>
        <!--<a style="position:absolute;top:490px; left:500px; z-index:10;" href="index.html">广东</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:470px; left:464px; width:111px; height:88px; display: block"
             :style="{backgroundImage:`url(${guangdong2.prov})`,zIndex:guangdong2.show}"></div>
        <!--<a style="position:absolute;top:490px; left:500px; z-index:10;" href="index.html">广东</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:470px; left:464px; width:111px; height:88px; display: block"
             :style="{backgroundImage:`url(${guangdong3.prov})`,zIndex:guangdong3.show}"></div>
        <!--<a style="position:absolute;top:490px; left:500px; z-index:10;" href="index.html">广东</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:470px; left:464px; width:111px; height:88px; display: block"
             :style="{backgroundImage:`url(${guangdong4.prov})`,zIndex:guangdong4.show}"></div>
        <!--<a style="position:absolute;top:490px; left:500px; z-index:10;" href="index.html">广东</a>-->
      </div>


      <!--广西-->
      <div class="city">
        <div class="citybg" style="top:454px; left:382px; width:118px; height:92px; display: block"
             :style="{backgroundImage:`url(${guangxi1.prov})`,zIndex:guangxi1.show}"></div>
        <!--<a style="position:absolute;top:488px; left:432px; z-index:10;" href="index.html">广西</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:454px; left:382px; width:118px; height:92px; display: block"
             :style="{backgroundImage:`url(${guangxi2.prov})`,zIndex:guangxi2.show}"></div>
        <!--<a style="position:absolute;top:488px; left:432px; z-index:10;" href="index.html">广西</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:454px; left:382px; width:118px; height:92px; display: block"
             :style="{backgroundImage:`url(${guangxi3.prov})`,zIndex:guangxi3.show}"></div>
        <!--<a style="position:absolute;top:488px; left:432px; z-index:10;" href="index.html">广西</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:454px; left:382px; width:118px; height:92px; display: block"
             :style="{backgroundImage:`url(${guangxi4.prov})`,zIndex:guangxi4.show}"></div>
        <!--<a style="position:absolute;top:488px; left:432px; z-index:10;" href="index.html">广西</a>-->
      </div>

      <!--河南-->
      <div class="city">
        <div class="citybg" style="top:288px; left:461px; width:89px; height:88px; display: block"
             :style="{backgroundImage:`url(${henan1.prov})`,zIndex:henan1.show}"></div>
        <!--<a style="position:absolute;top:320px; left:490px; z-index:10;" href="index.html">河南</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:288px; left:461px; width:89px; height:88px; display: block"
             :style="{backgroundImage:`url(${henan2.prov})`,zIndex:henan2.show}"></div>
        <!--<a style="position:absolute;top:320px; left:490px; z-index:10;" href="index.html">河南</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:288px; left:461px; width:89px; height:88px; display: block"
             :style="{backgroundImage:`url(${henan3.prov})`,zIndex:henan3.show}"></div>
        <!--<a style="position:absolute;top:320px; left:490px; z-index:10;" href="index.html">河南</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:288px; left:461px; width:89px; height:88px; display: block"
             :style="{backgroundImage:`url(${henan4.prov})`,zIndex:henan4.show}"></div>
        <!--<a style="position:absolute;top:320px; left:490px; z-index:10;" href="index.html">河南</a>-->
      </div>


      <!--陕西-->
      <div class="city">
        <div class="citybg" style="top:242px; left:396px; width:79px; height:134px; display: block"
             :style="{backgroundImage:`url(${shanxi1.prov})`,zIndex:shanxi1.show}"></div>
        <!--<a style="position:absolute;top:321px; left:430px; z-index:10;" href="index.html">陕西</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:242px; left:396px; width:79px; height:134px; display: block"
             :style="{backgroundImage:`url(${shanxi2.prov})`,zIndex:shanxi2.show}"></div>
        <!--<a style="position:absolute;top:321px; left:430px; z-index:10;" href="index.html">陕西</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:242px; left:396px; width:79px; height:134px; display: block"
             :style="{backgroundImage:`url(${shanxi3.prov})`,zIndex:shanxi3.show}"></div>
        <!--<a style="position:absolute;top:321px; left:430px; z-index:10;" href="index.html">陕西</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:242px; left:396px; width:79px; height:134px; display: block"
             :style="{backgroundImage:`url(${shanxi4.prov})`,zIndex:shanxi4.show}"></div>
        <!--<a style="position:absolute;top:321px; left:430px; z-index:10;" href="index.html">陕西</a>-->
      </div>


      <!--山西-->
      <div class="city">
        <div class="citybg" style="top:219px; left:458px; width:56px; height:112px; display: block"
             :style="{backgroundImage:`url(${shanxi21.prov})`,zIndex:shanxi21.show}"></div>
        <!--<a style="position:absolute;top:271px; left:470px; z-index:10;" href="index.html">山西</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:219px; left:458px; width:56px; height:112px; display: block"
             :style="{backgroundImage:`url(${shanxi22.prov})`,zIndex:shanxi22.show}"></div>
        <!--<a style="position:absolute;top:271px; left:470px; z-index:10;" href="index.html">山西</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:219px; left:458px; width:56px; height:112px; display: block"
             :style="{backgroundImage:`url(${shanxi23.prov})`,zIndex:shanxi23.show}"></div>
        <!--<a style="position:absolute;top:271px; left:470px; z-index:10;" href="index.html">山西</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:219px; left:458px; width:56px; height:112px; display: block"
             :style="{backgroundImage:`url(${shanxi24.prov})`,zIndex:shanxi24.show}"></div>
        <!--<a style="position:absolute;top:271px; left:470px; z-index:10;" href="index.html">山西</a>-->
      </div>


      <!--河北-->
      <div class="city">
        <div class="citybg" style="top:184px; left:497px; width:85px; height:118px; display: block"
             :style="{backgroundImage:`url(${hebei1.prov})`,zIndex:hebei1.show}"></div>
        <!--<a style="position:absolute;top:247px; left:508px; z-index:10;" href="index.html">河北</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:184px; left:497px; width:85px; height:118px; display: block"
             :style="{backgroundImage:`url(${hebei2.prov})`,zIndex:hebei2.show}"></div>
        <!--<a style="position:absolute;top:247px; left:508px; z-index:10;" href="index.html">河北</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:184px; left:497px; width:85px; height:118px; display: block"
             :style="{backgroundImage:`url(${hebei3.prov})`,zIndex:hebei3.show}"></div>
        <!--<a style="position:absolute;top:247px; left:508px; z-index:10;" href="index.html">河北</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:184px; left:497px; width:85px; height:118px; display: block"
             :style="{backgroundImage:`url(${hebei4.prov})`,zIndex:hebei4.show}"></div>
        <!--<a style="position:absolute;top:247px; left:508px; z-index:10;" href="index.html">河北</a>-->
      </div>

      <!--吉林-->
      <div class="city">
        <div class="citybg" style="top:113px; left:575px; width:125px; height:88px; display: block"
             :style="{backgroundImage:`url(${jilin1.prov})`,zIndex:jilin1.show}"></div>
        <!--<a style="position:absolute;top:150px; left:642px; z-index:10;" href="index.html">吉林</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:113px; left:575px; width:125px; height:88px; display: block"
             :style="{backgroundImage:`url(${jilin2.prov})`,zIndex:jilin2.show}"></div>
        <!--<a style="position:absolute;top:150px; left:642px; z-index:10;" href="index.html">吉林</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:113px; left:575px; width:125px; height:88px; display: block"
             :style="{backgroundImage:`url(${jilin3.prov})`,zIndex:jilin3.show}"></div>
        <!--<a style="position:absolute;top:150px; left:642px; z-index:10;" href="index.html">吉林</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:113px; left:575px; width:125px; height:88px; display: block"
             :style="{backgroundImage:`url(${jilin4.prov})`,zIndex:jilin4.show}"></div>
        <!--<a style="position:absolute;top:150px; left:642px; z-index:10;" href="index.html">吉林</a>-->
      </div>


      <!--北京-->
      <div class="city">
        <div class="citybg" style="top:210px; left:512px; width:50px; height:38px; display: block"
             :style="{backgroundImage:`url(${beijing1.prov})`,zIndex:beijing1.show}"></div>
        <!--<a style="position:absolute;top:215px; left:515px; z-index:10;" href="index.html">北京</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:210px; left:512px; width:50px; height:38px; display: block"
             :style="{backgroundImage:`url(${beijing2.prov})`,zIndex:beijing2.show}"></div>
        <!--<a style="position:absolute;top:215px; left:515px; z-index:10;" href="index.html">北京</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:210px; left:512px; width:50px; height:38px; display: block"
             :style="{backgroundImage:`url(${beijing3.prov})`,zIndex:beijing3.show}"></div>
        <!--<a style="position:absolute;top:215px; left:515px; z-index:10;" href="index.html">北京</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:210px; left:512px; width:50px; height:38px; display: block"
             :style="{backgroundImage:`url(${beijing4.prov})`,zIndex:beijing4.show}"></div>
        <!--<a style="position:absolute;top:215px; left:515px; z-index:10;" href="index.html">北京</a>-->
      </div>


      <!--天津-->
      <div class="city">
        <div class="citybg" style="top:222px; left:536px; width:26px; height:34px; display: block"
             :style="{backgroundImage:`url(${tianjin1.prov})`,zIndex:tianjin1.show}"></div>
        <!--<a style="position:absolute;top:229px; left:535px; z-index:10;" href="index.html">天津</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:222px; left:536px; width:26px; height:34px; display: block"
             :style="{backgroundImage:`url(${tianjin2.prov})`,zIndex:tianjin2.show}"></div>
        <!--<a style="position:absolute;top:229px; left:535px; z-index:10;" href="index.html">天津</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:222px; left:536px; width:26px; height:34px; display: block"
             :style="{backgroundImage:`url(${tianjin3.prov})`,zIndex:tianjin3.show}"></div>
        <!--<a style="position:absolute;top:229px; left:535px; z-index:10;" href="index.html">天津</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:222px; left:536px; width:26px; height:34px; display: block"
             :style="{backgroundImage:`url(${tianjin4.prov})`,zIndex:tianjin4.show}"></div>
        <!--<a style="position:absolute;top:229px; left:535px; z-index:10;" href="index.html">天津</a>-->
      </div>


      <!--山东-->
      <div class="city">
        <div class="citybg" style="top:256px; left:521px; width:103px; height:68px; display: block"
             :style="{backgroundImage:`url(${shandong1.prov})`,zIndex:shandong1.show}"></div>
        <!--<a style="position:absolute;top:281px; left:540px; z-index:10;" href="index.html">山东</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:256px; left:521px; width:103px; height:68px; display: block"
             :style="{backgroundImage:`url(${shandong2.prov})`,zIndex:shandong2.show}"></div>
        <!--<a style="position:absolute;top:281px; left:540px; z-index:10;" href="index.html">山东</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:256px; left:521px; width:103px; height:68px; display: block"
             :style="{backgroundImage:`url(${shandong3.prov})`,zIndex:shandong3.show}"></div>
        <!--<a style="position:absolute;top:281px; left:540px; z-index:10;" href="index.html">山东</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:256px; left:521px; width:103px; height:68px; display: block"
             :style="{backgroundImage:`url(${shandong4.prov})`,zIndex:shandong4.show}"></div>
        <!--<a style="position:absolute;top:281px; left:540px; z-index:10;" href="index.html">山东</a>-->
      </div>

      <!--江苏-->
      <div class="city">
        <div class="citybg" style="top:305px; left:539px; width:93px; height:73px; display: block"
             :style="{backgroundImage:`url(${jiangsu1.prov})`,zIndex:jiangsu1.show}"></div>
        <!--<a style="position:absolute;top:321px; left:570px; z-index:10;" href="index.html">江苏</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:305px; left:539px; width:93px; height:73px; display: block"
             :style="{backgroundImage:`url(${jiangsu2.prov})`,zIndex:jiangsu2.show}"></div>
        <!--<a style="position:absolute;top:321px; left:570px; z-index:10;" href="index.html">江苏</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:305px; left:539px; width:93px; height:73px; display: block"
             :style="{backgroundImage:`url(${jiangsu3.prov})`,zIndex:jiangsu3.show}"></div>
        <!--<a style="position:absolute;top:321px; left:570px; z-index:10;" href="index.html">江苏</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:305px; left:539px; width:93px; height:73px; display: block"
             :style="{backgroundImage:`url(${jiangsu4.prov})`,zIndex:jiangsu4.show}"></div>
        <!--<a style="position:absolute;top:321px; left:570px; z-index:10;" href="index.html">江苏</a>-->
      </div>


      <!--海南-->
      <div class="city">
        <div class="citybg" style="top:556px; left:442px; width:43px; height:39px; display: block"
             :style="{backgroundImage:`url(${hainan1.prov})`,zIndex:hainan1.show}"></div>
        <!--<a style="position:absolute;top:565px; left:450px; z-index:10;" href="index.html">海南</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:556px; left:442px; width:43px; height:39px; display: block"
             :style="{backgroundImage:`url(${hainan2.prov})`,zIndex:hainan2.show}"></div>
        <!--<a style="position:absolute;top:565px; left:450px; z-index:10;" href="index.html">海南</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:556px; left:442px; width:43px; height:39px; display: block"
             :style="{backgroundImage:`url(${hainan3.prov})`,zIndex:hainan3.show}"></div>
        <!--<a style="position:absolute;top:565px; left:450px; z-index:10;" href="index.html">海南</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:556px; left:442px; width:43px; height:39px; display: block"
             :style="{backgroundImage:`url(${hainan4.prov})`,zIndex:hainan4.show}"></div>
        <!--<a style="position:absolute;top:565px; left:450px; z-index:10;" href="index.html">海南</a>-->
      </div>


      <!--湖北-->
      <div class="city">
        <div class="citybg" style="top:345px; left:438px; width:115px; height:75px; display: block"
             :style="{backgroundImage:`url(${hubei1.prov})`,zIndex:hubei1.show}"></div>
        <!--<a style="position:absolute;top:365px; left:480px; z-index:10;" href="index.html">湖北</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:345px; left:438px; width:115px; height:75px; display: block"
             :style="{backgroundImage:`url(${hubei2.prov})`,zIndex:hubei2.show}"></div>
        <!--<a style="position:absolute;top:365px; left:480px; z-index:10;" href="index.html">湖北</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:345px; left:438px; width:115px; height:75px; display: block"
             :style="{backgroundImage:`url(${hubei3.prov})`,zIndex:hubei3.show}"></div>
        <!--<a style="position:absolute;top:365px; left:480px; z-index:10;" href="index.html">湖北</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:345px; left:438px; width:115px; height:75px; display: block"
             :style="{backgroundImage:`url(${hubei4.prov})`,zIndex:hubei4.show}"></div>
        <!--<a style="position:absolute;top:365px; left:480px; z-index:10;" href="index.html">湖北</a>-->
      </div>



      <!--云南-->
      <div class="city">
        <div class="citybg" style="top:412px; left:280px; width:132px; height:138px; display: block"
             :style="{backgroundImage:`url(${yunnan1.prov})`,zIndex:yunnan1.show}"></div>
        <!--<a style="position:absolute;top:485px; left:320px; z-index:10;" href="index.html">云南</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:412px; left:280px; width:132px; height:138px; display: block"
             :style="{backgroundImage:`url(${yunnan2.prov})`,zIndex:yunnan2.show}"></div>
        <!--<a style="position:absolute;top:485px; left:320px; z-index:10;" href="index.html">云南</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:412px; left:280px; width:132px; height:138px; display: block"
             :style="{backgroundImage:`url(${yunnan3.prov})`,zIndex:yunnan3.show}"></div>
        <!--<a style="position:absolute;top:485px; left:320px; z-index:10;" href="index.html">云南</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:412px; left:280px; width:132px; height:138px; display: block"
             :style="{backgroundImage:`url(${yunnan4.prov})`,zIndex:yunnan4.show}"></div>
        <!--<a style="position:absolute;top:485px; left:320px; z-index:10;" href="index.html">云南</a>-->
      </div>



      <!--四川-->
      <div class="city">
        <div class="citybg" style="top:328px; left:284px; width:161px; height:143px; display: block"
             :style="{backgroundImage:`url(${sichuan1.prov})`,zIndex:sichuan1.show}"></div>
        <!--<a style="position:absolute;top:385px; left:345px; z-index:10;" href="index.html">四川</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:328px; left:284px; width:161px; height:143px; display: block"
             :style="{backgroundImage:`url(${sichuan2.prov})`,zIndex:sichuan2.show}"></div>
        <!--<a style="position:absolute;top:385px; left:345px; z-index:10;" href="index.html">四川</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:328px; left:284px; width:161px; height:143px; display: block"
             :style="{backgroundImage:`url(${sichuan3.prov})`,zIndex:sichuan3.show}"></div>
        <!--<a style="position:absolute;top:385px; left:345px; z-index:10;" href="index.html">四川</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:328px; left:284px; width:161px; height:143px; display: block"
             :style="{backgroundImage:`url(${sichuan4.prov})`,zIndex:sichuan4.show}"></div>
        <!--<a style="position:absolute;top:385px; left:345px; z-index:10;" href="index.html">四川</a>-->
      </div>


      <!--贵州-->
      <div class="city">
        <div class="citybg" style="top:409px; left:367px; width:93px; height:81px; display: block"
             :style="{backgroundImage:`url(${guizhou1.prov})`,zIndex:guizhou1.show}"></div>
        <!--<a style="position:absolute;top:445px; left:405px; z-index:10;" href="index.html">贵州</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:409px; left:367px; width:93px; height:81px; display: block"
             :style="{backgroundImage:`url(${guizhou2.prov})`,zIndex:guizhou2.show}"></div>
        <!--<a style="position:absolute;top:445px; left:405px; z-index:10;" href="index.html">贵州</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:409px; left:367px; width:93px; height:81px; display: block"
             :style="{backgroundImage:`url(${guizhou3.prov})`,zIndex:guizhou3.show}"></div>
        <!--<a style="position:absolute;top:445px; left:405px; z-index:10;" href="index.html">贵州</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:409px; left:367px; width:93px; height:81px; display: block"
             :style="{backgroundImage:`url(${guizhou4.prov})`,zIndex:guizhou4.show}"></div>
        <!--<a style="position:absolute;top:445px; left:405px; z-index:10;" href="index.html">贵州</a>-->
      </div>


      <!--台湾-->
      <div class="city">
        <div class="citybg" style="top:456px; left:613px; width:32px; height:65px; display: block"
             :style="{backgroundImage:`url(${taiwan1.prov})`,zIndex:taiwan1.show}"></div>
        <!--<a style="position:absolute;top:475px; left:620px; z-index:10;" href="index.html">台湾</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:456px; left:613px; width:32px; height:65px; display: block"
             :style="{backgroundImage:`url(${taiwan2.prov})`,zIndex:taiwan2.show}"></div>
        <!--<a style="position:absolute;top:475px; left:620px; z-index:10;" href="index.html">台湾</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:456px; left:613px; width:32px; height:65px; display: block"
             :style="{backgroundImage:`url(${taiwan3.prov})`,zIndex:taiwan3.show}"></div>
        <!--<a style="position:absolute;top:475px; left:620px; z-index:10;" href="index.html">台湾</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:456px; left:613px; width:32px; height:65px; display: block"
             :style="{backgroundImage:`url(${taiwan4.prov})`,zIndex:taiwan4.show}"></div>
        <!--<a style="position:absolute;top:475px; left:620px; z-index:10;" href="index.html">台湾</a>-->
      </div>


      <!--福建-->
      <div class="city">
        <div class="citybg" style="top:415px; left:548px; width:70px; height:84px; display: block"
             :style="{backgroundImage:`url(${fujian1.prov})`,zIndex:fujian1.show}"></div>
        <!--<a style="position:absolute;top:445px; left:565px; z-index:10;" href="index.html">福建</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:415px; left:548px; width:70px; height:84px; display: block"
             :style="{backgroundImage:`url(${fujian2.prov})`,zIndex:fujian2.show}"></div>
        <!--<a style="position:absolute;top:445px; left:565px; z-index:10;" href="index.html">福建</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:415px; left:548px; width:70px; height:84px; display: block"
             :style="{backgroundImage:`url(${fujian3.prov})`,zIndex:fujian3.show}"></div>
        <!--<a style="position:absolute;top:445px; left:565px; z-index:10;" href="index.html">福建</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:415px; left:548px; width:70px; height:84px; display: block"
             :style="{backgroundImage:`url(${fujian4.prov})`,zIndex:fujian4.show}"></div>
        <!--<a style="position:absolute;top:445px; left:565px; z-index:10;" href="index.html">福建</a>-->
      </div>



      <!--湖南-->
      <div class="city">
        <div class="citybg" style="top:394px; left:445px; width:83px; height:96px; display: block"
             :style="{backgroundImage:`url(${hunan1.prov})`,zIndex:hunan1.show}"></div>
        <!--<a style="position:absolute;top:425px; left:475px; z-index:10;" href="index.html">湖南</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:394px; left:445px; width:83px; height:96px; display: block"
             :style="{backgroundImage:`url(${hunan2.prov})`,zIndex:hunan2.show}"></div>
        <!--<a style="position:absolute;top:425px; left:475px; z-index:10;" href="index.html">湖南</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:394px; left:445px; width:83px; height:96px; display: block"
             :style="{backgroundImage:`url(${hunan3.prov})`,zIndex:hunan3.show}"></div>
        <!--<a style="position:absolute;top:425px; left:475px; z-index:10;" href="index.html">湖南</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:394px; left:445px; width:83px; height:96px; display: block"
             :style="{backgroundImage:`url(${hunan4.prov})`,zIndex:hunan4.show}"></div>
        <!--<a style="position:absolute;top:425px; left:475px; z-index:10;" href="index.html">湖南</a>-->
      </div>

      <!--浙江-->
      <div class="city">
        <div class="citybg" style="top:367px; left:574px; width:62px; height:70px; display: block"
             :style="{backgroundImage:`url(${zhejiang1.prov})`,zIndex:zhejiang1.show}"></div>
        <!--<a style="position:absolute;top:395px; left:588px; z-index:10;" href="index.html">浙江</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:367px; left:574px; width:62px; height:70px; display: block"
             :style="{backgroundImage:`url(${zhejiang2.prov})`,zIndex:zhejiang2.show}"></div>
        <!--<a style="position:absolute;top:395px; left:588px; z-index:10;" href="index.html">浙江</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:367px; left:574px; width:62px; height:70px; display: block"
             :style="{backgroundImage:`url(${zhejiang3.prov})`,zIndex:zhejiang3.show}"></div>
        <!--<a style="position:absolute;top:395px; left:588px; z-index:10;" href="index.html">浙江</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:367px; left:574px; width:62px; height:70px; display: block"
             :style="{backgroundImage:`url(${zhejiang4.prov})`,zIndex:zhejiang4.show}"></div>
        <!--<a style="position:absolute;top:395px; left:588px; z-index:10;" href="index.html">浙江</a>-->
      </div>


      <!--江西-->
      <div class="city">
        <div class="citybg" style="top:390px; left:513px; width:76px; height:98px; display: block"
             :style="{backgroundImage:`url(${jiangxi1.prov})`,zIndex:jiangxi1.show}"></div>
        <!--<a style="position:absolute;top:425px; left:525px; z-index:10;" href="index.html">江西</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:390px; left:513px; width:76px; height:98px; display: block"
             :style="{backgroundImage:`url(${jiangxi2.prov})`,zIndex:jiangxi2.show}"></div>
        <!--<a style="position:absolute;top:425px; left:525px; z-index:10;" href="index.html">江西</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:390px; left:513px; width:76px; height:98px; display: block"
             :style="{backgroundImage:`url(${jiangxi3.prov})`,zIndex:jiangxi3.show}"></div>
        <!--<a style="position:absolute;top:425px; left:525px; z-index:10;" href="index.html">江西</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:390px; left:513px; width:76px; height:98px; display: block"
             :style="{backgroundImage:`url(${jiangxi4.prov})`,zIndex:jiangxi4.show}"></div>
        <!--<a style="position:absolute;top:425px; left:525px; z-index:10;" href="index.html">江西</a>-->
      </div>

      <!--重庆-->
      <div class="city">
        <div class="citybg" style="top:363px; left:397px; width:70px; height:80px; display: block;"
             :style="{backgroundImage:`url(${chongqing1.prov})`,zIndex:chongqing1.show}"></div>
        <!--<a style="position:absolute;top:390px; left:420px; z-index:10;" href="index.html">重庆</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:363px; left:397px; width:70px; height:80px; display: block;"
             :style="{backgroundImage:`url(${chongqing2.prov})`,zIndex:chongqing2.show}"></div>
        <!--<a style="position:absolute;top:390px; left:420px; z-index:10;" href="index.html">重庆</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:363px; left:397px; width:70px; height:80px; display: block;"
             :style="{backgroundImage:`url(${chongqing3.prov})`,zIndex:chongqing3.show}"></div>
        <!--<a style="position:absolute;top:390px; left:420px; z-index:10;" href="index.html">重庆</a>-->
      </div>
      <div class="city">
        <div class="citybg" style="top:363px; left:397px; width:70px; height:80px; display: block;"
             :style="{backgroundImage:`url(${chongqing4.prov})`,zIndex:chongqing4.show}"></div>
        <!--<a style="position:absolute;top:390px; left:420px; z-index:10;" href="index.html">重庆</a>-->
      </div>

    </div>
    <div style="height: 1px; margin-top: -185px"></div>
  </div>
</template>

<script>
  //导入省份图片
  // import anhui from '../../assets/images/map/anhui.png'
  // import neimeng from '../../assets/images/map/neimeng.png'
  // import heilongjiang from '../../assets/images/map/heilongjiang.png'
  // import xinjiang from '../../assets/images/map/xinjiang.png'
  // import xizang from '../../assets/images/map/xizang.png'
  // import qinghai from '../../assets/images/map/qinghai.png'
  // import gansu from '../../assets/images/map/gansu.png'
  // import ningxia from '../../assets/images/map/ningxia.png'
  // import shanghai from '../../assets/images/map/shanghai.png'
  // import liaoning from '../../assets/images/map/liaoning.png'
  // import guangdong from '../../assets/images/map/guangdong.png'
  // import guangxi from '../../assets/images/map/guangxi.png'
  // import henan from '../../assets/images/map/henan.png'
  // import shanxi from '../../assets/images/map/shanxi.png'
  // import shanxi2 from '../../assets/images/map/shanxi2.png'
  // import hebei from '../../assets/images/map/hebei.png'
  // import jilin from '../../assets/images/map/jilin.png'
  // import beijing from '../../assets/images/map/beijing.png'
  // import tianjin from '../../assets/images/map/tianjin.png'
  // import shandong from '../../assets/images/map/shandong.png'
  // import jiangsu from '../../assets/images/map/jiangsu.png'
  // import hainan from '../../assets/images/map/hainan.png'
  // import hubei from '../../assets/images/map/hubei.png'
  // import yunnan from '../../assets/images/map/yunnan.png'
  // import sichuan from '../../assets/images/map/sichuan.png'
  // import guizhou from '../../assets/images/map/guizhou.png'
  // import taiwan from '../../assets/images/map/taiwan.png'
  // import fujian from '../../assets/images/map/fujian.png'
  // import hunan from '../../assets/images/map/hunan.png'
  // import zhejiang from '../../assets/images/map/zhejiang.png'
  // import jiangxi from '../../assets/images/map/jiangxi.png'
  // import chongqing from '../../assets/images/map/chongqing.png'


  import anhui1 from "../../assets/images/map1/anhui1.png"
  import neimeng1 from '../../assets/images/map1/neimeng1.png'
  import heilongjiang1 from '../../assets/images/map1/heilongjiang1.png'
  import xinjiang1 from '../../assets/images/map1/xinjiang1.png'
  import xizang1 from '../../assets/images/map1/xizang1.png'
  import qinghai1 from '../../assets/images/map1/qinghai1.png'
  import gansu1 from '../../assets/images/map1/gansu1.png'
  import ningxia1 from '../../assets/images/map1/ningxia1.png'
  import shanghai1 from '../../assets/images/map1/shanghai1.png'
  import liaoning1 from '../../assets/images/map1/liaoning1.png'
  import guangdong1 from '../../assets/images/map1/guangdong1.png'
  import guangxi1 from '../../assets/images/map1/guangxi1.png'
  import henan1 from '../../assets/images/map1/henan1.png'
  import shanxi1 from '../../assets/images/map1/shanxi1.png'
  import shanxi21 from '../../assets/images/map1/shanxi21.png'
  import hebei1 from '../../assets/images/map1/hebei1.png'
  import jilin1 from '../../assets/images/map1/jilin1.png'
  import beijing1 from '../../assets/images/map1/beijing1.png'
  import tianjin1 from '../../assets/images/map1/tianjin1.png'
  import shandong1 from '../../assets/images/map1/shandong1.png'
  import jiangsu1 from '../../assets/images/map1/jiangsu1.png'
  import hainan1 from '../../assets/images/map1/hainan1.png'
  import hubei1 from '../../assets/images/map1/hubei1.png'
  import yunnan1 from '../../assets/images/map1/yunnan1.png'
  import sichuan1 from '../../assets/images/map1/sichuan1.png'
  import guizhou1 from '../../assets/images/map1/guizhou1.png'
  import taiwan1 from '../../assets/images/map1/taiwan1.png'
  import fujian1 from '../../assets/images/map1/fujian1.png'
  import hunan1 from '../../assets/images/map1/hunan1.png'
  import zhejiang1 from '../../assets/images/map1/zhejiang1.png'
  import jiangxi1 from '../../assets/images/map1/jiangxi1.png'
  import chongqing1 from '../../assets/images/map1/chongqing1.png'


  import anhui2 from '../../assets/images/map2/anhui2.png'
  import neimeng2 from '../../assets/images/map2/neimeng2.png'
  import heilongjiang2 from '../../assets/images/map2/heilongjiang2.png'
  import xinjiang2 from '../../assets/images/map2/xinjiang2.png'
  import xizang2 from '../../assets/images/map2/xizang2.png'
  import qinghai2 from '../../assets/images/map2/qinghai2.png'
  import gansu2 from '../../assets/images/map2/gansu2.png'
  import ningxia2 from '../../assets/images/map2/ningxia2.png'
  import shanghai2 from '../../assets/images/map2/shanghai2.png'
  import liaoning2 from '../../assets/images/map2/liaoning2.png'
  import guangdong2 from '../../assets/images/map2/guangdong2.png'
  import guangxi2 from '../../assets/images/map2/guangxi2.png'
  import henan2 from '../../assets/images/map2/henan2.png'
  import shanxi2 from '../../assets/images/map2/shanxi2.png'
  import shanxi22 from '../../assets/images/map2/shanxi22.png'
  import hebei2 from '../../assets/images/map2/hebei2.png'
  import jilin2 from '../../assets/images/map2/jilin2.png'
  import beijing2 from '../../assets/images/map2/beijing2.png'
  import tianjin2 from '../../assets/images/map2/tianjin2.png'
  import shandong2 from '../../assets/images/map2/shandong2.png'
  import jiangsu2 from '../../assets/images/map2/jiangsu2.png'
  import hainan2 from '../../assets/images/map2/hainan2.png'
  import hubei2 from '../../assets/images/map2/hubei2.png'
  import yunnan2 from '../../assets/images/map2/yunnan2.png'
  import sichuan2 from '../../assets/images/map2/sichuan2.png'
  import guizhou2 from '../../assets/images/map2/guizhou2.png'
  import taiwan2 from '../../assets/images/map2/taiwan2.png'
  import fujian2 from '../../assets/images/map2/fujian2.png'
  import hunan2 from '../../assets/images/map2/hunan2.png'
  import zhejiang2 from '../../assets/images/map2/zhejiang2.png'
  import jiangxi2 from '../../assets/images/map2/jiangxi2.png'
  import chongqing2 from '../../assets/images/map2/chongqing2.png'


  import anhui3 from '../../assets/images/map3/anhui3.png'
  import neimeng3 from '../../assets/images/map3/neimeng3.png'
  import heilongjiang3 from '../../assets/images/map3/heilongjiang3.png'
  import xinjiang3 from '../../assets/images/map3/xinjiang3.png'
  import xizang3 from '../../assets/images/map3/xizang3.png'
  import qinghai3 from '../../assets/images/map3/qinghai3.png'
  import gansu3 from '../../assets/images/map3/gansu3.png'
  import ningxia3 from '../../assets/images/map3/ningxia3.png'
  import shanghai3 from '../../assets/images/map3/shanghai3.png'
  import liaoning3 from '../../assets/images/map3/liaoning3.png'
  import guangdong3 from '../../assets/images/map3/guangdong3.png'
  import guangxi3 from '../../assets/images/map3/guangxi3.png'
  import henan3 from '../../assets/images/map3/henan3.png'
  import shanxi3 from '../../assets/images/map3/shanxi3.png'
  import shanxi23 from '../../assets/images/map3/shanxi23.png'
  import hebei3 from '../../assets/images/map3/hebei3.png'
  import jilin3 from '../../assets/images/map3/jilin3.png'
  import beijing3 from '../../assets/images/map3/beijing3.png'
  import tianjin3 from '../../assets/images/map3/tianjin3.png'
  import shandong3 from '../../assets/images/map3/shandong3.png'
  import jiangsu3 from '../../assets/images/map3/jiangsu3.png'
  import hainan3 from '../../assets/images/map3/hainan3.png'
  import hubei3 from '../../assets/images/map3/hubei3.png'
  import yunnan3 from '../../assets/images/map3/yunnan3.png'
  import sichuan3 from '../../assets/images/map3/sichuan3.png'
  import guizhou3 from '../../assets/images/map3/guizhou3.png'
  import taiwan3 from '../../assets/images/map3/taiwan3.png'
  import fujian3 from '../../assets/images/map3/fujian3.png'
  import hunan3 from '../../assets/images/map3/hunan3.png'
  import zhejiang3 from '../../assets/images/map3/zhejiang3.png'
  import jiangxi3 from '../../assets/images/map3/jiangxi3.png'
  import chongqing3 from '../../assets/images/map3/chongqing3.png'

  import anhui4 from '../../assets/images/map4/anhui4.png'
  import neimeng4 from '../../assets/images/map4/neimeng4.png'
  import heilongjiang4 from '../../assets/images/map4/heilongjiang4.png'
  import xinjiang4 from '../../assets/images/map4/xinjiang4.png'
  import xizang4 from '../../assets/images/map4/xizang4.png'
  import qinghai4 from '../../assets/images/map4/qinghai4.png'
  import gansu4 from '../../assets/images/map4/gansu4.png'
  import ningxia4 from '../../assets/images/map4/ningxia4.png'
  import shanghai4 from '../../assets/images/map4/shanghai4.png'
  import liaoning4 from '../../assets/images/map4/liaoning4.png'
  import guangdong4 from '../../assets/images/map4/guangdong4.png'
  import guangxi4 from '../../assets/images/map4/guangxi4.png'
  import henan4 from '../../assets/images/map4/henan4.png'
  import shanxi4 from '../../assets/images/map4/shanxi4.png'
  import shanxi24 from '../../assets/images/map4/shanxi24.png'
  import hebei4 from '../../assets/images/map4/hebei4.png'
  import jilin4 from '../../assets/images/map4/jilin4.png'
  import beijing4 from '../../assets/images/map4/beijing4.png'
  import tianjin4 from '../../assets/images/map4/tianjin4.png'
  import shandong4 from '../../assets/images/map4/shandong4.png'
  import jiangsu4 from '../../assets/images/map4/jiangsu4.png'
  import hainan4 from '../../assets/images/map4/hainan4.png'
  import hubei4 from '../../assets/images/map4/hubei4.png'
  import yunnan4 from '../../assets/images/map4/yunnan4.png'
  import sichuan4 from '../../assets/images/map4/sichuan4.png'
  import guizhou4 from '../../assets/images/map4/guizhou4.png'
  import taiwan4 from '../../assets/images/map4/taiwan4.png'
  import fujian4 from '../../assets/images/map4/fujian4.png'
  import hunan4 from '../../assets/images/map4/hunan4.png'
  import zhejiang4 from '../../assets/images/map4/zhejiang4.png'
  import jiangxi4 from '../../assets/images/map4/jiangxi4.png'
  import chongqing4 from '../../assets/images/map4/chongqing4.png'



  export default {
    name: "UserMapCollectionTest",
    data(){
      return {
        anhui1:{prov:anhui1, show:-1},  //show为1表示显示
        neimeng1:{prov:neimeng1, show:-1},//show为-1表示隐藏
        heilongjiang1: {prov:heilongjiang1, show:-1},
        xinjiang1: {prov:xinjiang1, show:-1},
        xizang1: {prov:xizang1, show:-1},
        qinghai1: {prov:qinghai1, show:-1},
        gansu1: {prov:gansu1, show:-1},
        ningxia1: {prov:ningxia1, show:-1},
        shanghai1: {prov:shanghai1, show:-1},
        liaoning1: {prov:liaoning1, show:-1},
        guangdong1: {prov:guangdong1, show:-1},
        guangxi1: {prov:guangxi1, show:-1},
        henan1: {prov:henan1, show:-1},
        shanxi1: {prov:shanxi1, show:-1},  //陕西
        shanxi21: {prov:shanxi21, show:-1}, //山西
        hebei1: {prov:hebei1, show:-1},
        jilin1: {prov:jilin1, show:-1},
        beijing1: {prov:beijing1, show:-1},
        tianjin1: {prov:tianjin1, show:-1},
        shandong1: {prov:shandong1, show:-1},
        jiangsu1: {prov:jiangsu1, show:-1},
        hainan1: {prov:hainan1, show:-1},
        hubei1: {prov:hubei1, show:-1},
        yunnan1: {prov:yunnan1, show:-1},
        sichuan1: {prov:sichuan1, show:-1},
        guizhou1: {prov:guizhou1, show:-1},
        taiwan1: {prov:taiwan1, show:-1},
        fujian1: {prov:fujian1, show:-1},
        hunan1: {prov:hunan1, show:-1},
        zhejiang1: {prov:zhejiang1, show:-1},
        jiangxi1: {prov:jiangxi1, show:-1},
        chongqing1: {prov:chongqing1, show:-1},


        anhui2:{prov:anhui2, show:-1},  //show为1表示显示
        neimeng2:{prov:neimeng2, show:-1},//show为-1表示隐藏
        heilongjiang2: {prov:heilongjiang2, show:-1},
        xinjiang2: {prov:xinjiang2, show:-1},
        xizang2: {prov:xizang2, show:-1},
        qinghai2: {prov:qinghai2, show:-1},
        gansu2: {prov:gansu2, show:-1},
        ningxia2: {prov:ningxia2, show:-1},
        shanghai2: {prov:shanghai2, show:-1},
        liaoning2: {prov:liaoning2, show:-1},
        guangdong2: {prov:guangdong2, show:-1},
        guangxi2: {prov:guangxi2, show:-1},
        henan2: {prov:henan2, show:-1},
        shanxi2: {prov:shanxi2, show:-1},  //陕西
        shanxi22: {prov:shanxi22, show:-1}, //山西
        hebei2: {prov:hebei2, show:-1},
        jilin2: {prov:jilin2, show:-1},
        beijing2: {prov:beijing2, show:-1},
        tianjin2: {prov:tianjin2, show:-1},
        shandong2: {prov:shandong2, show:-1},
        jiangsu2: {prov:jiangsu2, show:-1},
        hainan2: {prov:hainan2, show:-1},
        hubei2: {prov:hubei2, show:-1},
        yunnan2: {prov:yunnan2, show:-1},
        sichuan2: {prov:sichuan2, show:-1},
        guizhou2: {prov:guizhou2, show:-1},
        taiwan2: {prov:taiwan2, show:-1},
        fujian2: {prov:fujian2, show:-1},
        hunan2: {prov:hunan2, show:-1},
        zhejiang2: {prov:zhejiang2, show:-1},
        jiangxi2: {prov:jiangxi2, show:-1},
        chongqing2: {prov:chongqing2, show:-1},

        anhui3:{prov:anhui3, show:-1},  //show为1表示显示
        neimeng3:{prov:neimeng3, show:-1},//show为-1表示隐藏
        heilongjiang3: {prov:heilongjiang3, show:-1},
        xinjiang3: {prov:xinjiang3, show:-1},
        xizang3: {prov:xizang3, show:-1},
        qinghai3: {prov:qinghai3, show:-1},
        gansu3: {prov:gansu3, show:-1},
        ningxia3: {prov:ningxia3, show:-1},
        shanghai3: {prov:shanghai3, show:-1},
        liaoning3: {prov:liaoning3, show:-1},
        guangdong3: {prov:guangdong3, show:-1},
        guangxi3: {prov:guangxi3, show:-1},
        henan3: {prov:henan3, show:-1},
        shanxi3: {prov:shanxi3, show:-1},  //陕西
        shanxi23: {prov:shanxi23, show:-1}, //山西
        hebei3: {prov:hebei3, show:-1},
        jilin3: {prov:jilin3, show:-1},
        beijing3: {prov:beijing3, show:-1},
        tianjin3: {prov:tianjin3, show:-1},
        shandong3: {prov:shandong3, show:-1},
        jiangsu3: {prov:jiangsu3, show:-1},
        hainan3: {prov:hainan3, show:-1},
        hubei3: {prov:hubei3, show:-1},
        yunnan3: {prov:yunnan3, show:-1},
        sichuan3: {prov:sichuan3, show:-1},
        guizhou3: {prov:guizhou3, show:-1},
        taiwan3: {prov:taiwan3, show:-1},
        fujian3: {prov:fujian3, show:-1},
        hunan3: {prov:hunan3, show:-1},
        zhejiang3: {prov:zhejiang3, show:-1},
        jiangxi3: {prov:jiangxi3, show:-1},
        chongqing3: {prov:chongqing3, show:-1},


        anhui4:{prov:anhui4, show:-1},  //show为1表示显示
        neimeng4:{prov:neimeng4, show:-1},//show为-1表示隐藏
        heilongjiang4: {prov:heilongjiang4, show:-1},
        xinjiang4: {prov:xinjiang4, show:-1},
        xizang4: {prov:xizang4, show:-1},
        qinghai4: {prov:qinghai4, show:-1},
        gansu4: {prov:gansu4, show:-1},
        ningxia4: {prov:ningxia4, show:-1},
        shanghai4: {prov:shanghai4, show:-1},
        liaoning4: {prov:liaoning4, show:-1},
        guangdong4: {prov:guangdong4, show:-1},
        guangxi4: {prov:guangxi4, show:-1},
        henan4: {prov:henan4, show:-1},
        shanxi4: {prov:shanxi4, show:-1},  //陕西
        shanxi24: {prov:shanxi24, show:-1}, //山西
        hebei4: {prov:hebei4, show:-1},
        jilin4: {prov:jilin4, show:-1},
        beijing4: {prov:beijing4, show:-1},
        tianjin4: {prov:tianjin4, show:-1},
        shandong4: {prov:shandong4, show:-1},
        jiangsu4: {prov:jiangsu4, show:-1},
        hainan4: {prov:hainan4, show:-1},
        hubei4: {prov:hubei4, show:-1},
        yunnan4: {prov:yunnan4, show:-1},
        sichuan4: {prov:sichuan4, show:-1},
        guizhou4: {prov:guizhou4, show:-1},
        taiwan4: {prov:taiwan4, show:-1},
        fujian4: {prov:fujian4, show:-1},
        hunan4: {prov:hunan4, show:-1},
        zhejiang4: {prov:zhejiang4, show:-1},
        jiangxi4: {prov:jiangxi4, show:-1},
        chongqing4: {prov:chongqing4, show:-1},
      }
    },
    methods:{
      toShowMapNo1(region) {
        switch(region) {
          case "安徽": this.anhui1.show = 1; break;
          case "内蒙": this.neimeng1.show = 1; break;
          case "黑龙江": this.heilongjiang1.show = 1; break;
          case "新疆": this.xinjiang1.show = 1; break;
          case "西藏": this.xizang1.show = 1; break;
          case "青海": this.qinghai1.show = 1; break;
          case "甘肃": this.gansu1.show = 1; break;
          case "宁夏": this.ningxia1.show = 1; break;
          case "上海": this.shanghai1.show = 1; break;
          case "辽宁": this.liaoning1.show = 1; break;
          case "广东": this.guangdong1.show = 1; break;
          case "广西": this.guangxi1.show = 1; break;
          case "河南": this.henan1.show = 1; break;
          case "陕西": this.shanxi1.show = 1; break;
          case "山西": this.shanxi21.show = 1; break;
          case "河北": this.hebei1.show = 1; break;
          case "吉林": this.jilin1.show = 1; break;
          case "北京": this.beijing1.show = 1; break;
          case "天津": this.tianjin1.show = 1; break;
          case "山东": this.shandong1.show = 1; break;
          case "江苏": this.jiangsu1.show = 1; break;
          case "海南": this.hainan1.show = 1; break;
          case "湖北": this.hubei1.show = 1; break;
          case "云南": this.yunnan1.show = 1; break;
          case "四川": this.sichuan1.show = 1; break;
          case "贵州": this.guizhou1.show = 1; break;
          case "台湾": this.taiwan1.show = 1; break;
          case "福建": this.fujian1.show = 1; break;
          case "湖南": this.hunan1.show = 1; break;
          case "浙江": this.zhejiang1.show = 1; break;
          case "江西": this.jiangxi1.show = 1; break;
          case "重庆": this.chongqing1.show = 1; break;
          default:
            break;
        }
      },

      toShowMapNo2(region) {
        switch(region) {
          case "安徽": this.anhui2.show = 1; break;
          case "内蒙": this.neimeng2.show = 1; break;
          case "黑龙江": this.heilongjiang2.show = 1; break;
          case "新疆": this.xinjiang2.show = 1; break;
          case "西藏": this.xizang2.show = 1; break;
          case "青海": this.qinghai2.show = 1; break;
          case "甘肃": this.gansu2.show = 1; break;
          case "宁夏": this.ningxia2.show = 1; break;
          case "上海": this.shanghai2.show = 1; break;
          case "辽宁": this.liaoning2.show = 1; break;
          case "广东": this.guangdong2.show = 1; break;
          case "广西": this.guangxi2.show = 1; break;
          case "河南": this.henan2.show = 1; break;
          case "陕西": this.shanxi2.show = 1; break;
          case "山西": this.shanxi22.show = 1; break;
          case "河北": this.hebei2.show = 1; break;
          case "吉林": this.jilin2.show = 1; break;
          case "北京": this.beijing2.show = 1; break;
          case "天津": this.tianjin2.show = 1; break;
          case "山东": this.shandong2.show = 1; break;
          case "江苏": this.jiangsu2.show = 1; break;
          case "海南": this.hainan2.show = 1; break;
          case "湖北": this.hubei2.show = 1; break;
          case "云南": this.yunnan2.show = 1; break;
          case "四川": this.sichuan2.show = 1; break;
          case "贵州": this.guizhou2.show = 1; break;
          case "台湾": this.taiwan2.show = 1; break;
          case "福建": this.fujian2.show = 1; break;
          case "湖南": this.hunan2.show = 1; break;
          case "浙江": this.zhejiang2.show = 1; break;
          case "江西": this.jiangxi2.show = 1; break;
          case "重庆": this.chongqing2.show = 1; break;
          default:
            break;
        }
      },

      toShowMapNo3(region) {
        switch(region) {
          case "安徽": this.anhui3.show = 1; break;
          case "内蒙": this.neimeng3.show = 1; break;
          case "黑龙江": this.heilongjiang3.show = 1; break;
          case "新疆": this.xinjiang3.show = 1; break;
          case "西藏": this.xizang3.show = 1; break;
          case "青海": this.qinghai3.show = 1; break;
          case "甘肃": this.gansu3.show = 1; break;
          case "宁夏": this.ningxia3.show = 1; break;
          case "上海": this.shanghai3.show = 1; break;
          case "辽宁": this.liaoning3.show = 1; break;
          case "广东": this.guangdong3.show = 1; break;
          case "广西": this.guangxi3.show = 1; break;
          case "河南": this.henan3.show = 1; break;
          case "陕西": this.shanxi3.show = 1; break;
          case "山西": this.shanxi23.show = 1; break;
          case "河北": this.hebei3.show = 1; break;
          case "吉林": this.jilin3.show = 1; break;
          case "北京": this.beijing3.show = 1; break;
          case "天津": this.tianjin3.show = 1; break;
          case "山东": this.shandong3.show = 1; break;
          case "江苏": this.jiangsu3.show = 1; break;
          case "海南": this.hainan3.show = 1; break;
          case "湖北": this.hubei3.show = 1; break;
          case "云南": this.yunnan3.show = 1; break;
          case "四川": this.sichuan3.show = 1; break;
          case "贵州": this.guizhou3.show = 1; break;
          case "台湾": this.taiwan3.show = 1; break;
          case "福建": this.fujian3.show = 1; break;
          case "湖南": this.hunan3.show = 1; break;
          case "浙江": this.zhejiang3.show = 1; break;
          case "江西": this.jiangxi3.show = 1; break;
          case "重庆": this.chongqing3.show = 1; break;
          default:
            break;
        }
      },

      toShowMapNo4(region) {
        switch(region) {
          case "安徽": this.anhui4.show = 1; break;
          case "内蒙": this.neimeng4.show = 1; break;
          case "黑龙江": this.heilongjiang4.show = 1; break;
          case "新疆": this.xinjiang4.show = 1; break;
          case "西藏": this.xizang4.show = 1; break;
          case "青海": this.qinghai4.show = 1; break;
          case "甘肃": this.gansu4.show = 1; break;
          case "宁夏": this.ningxia4.show = 1; break;
          case "上海": this.shanghai4.show = 1; break;
          case "辽宁": this.liaoning4.show = 1; break;
          case "广东": this.guangdong4.show = 1; break;
          case "广西": this.guangxi4.show = 1; break;
          case "河南": this.henan4.show = 1; break;
          case "陕西": this.shanxi4.show = 1; break;
          case "山西": this.shanxi24.show = 1; break;
          case "河北": this.hebei4.show = 1; break;
          case "吉林": this.jilin4.show = 1; break;
          case "北京": this.beijing4.show = 1; break;
          case "天津": this.tianjin4.show = 1; break;
          case "山东": this.shandong4.show = 1; break;
          case "江苏": this.jiangsu4.show = 1; break;
          case "海南": this.hainan4.show = 1; break;
          case "湖北": this.hubei4.show = 1; break;
          case "云南": this.yunnan4.show = 1; break;
          case "四川": this.sichuan4.show = 1; break;
          case "贵州": this.guizhou4.show = 1; break;
          case "台湾": this.taiwan4.show = 1; break;
          case "福建": this.fujian4.show = 1; break;
          case "湖南": this.hunan4.show = 1; break;
          case "浙江": this.zhejiang4.show = 1; break;
          case "江西": this.jiangxi4.show = 1; break;
          case "重庆": this.chongqing4.show = 1; break;
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
          // console.log(key);
          if (key == 0) {
            console.log("key0: " + result.data.data[key].cardSendRegion)
            _this.toShowMapNo1(result.data.data[key].cardSendRegion);
          } else if (key == 1) {
            console.log("key1: " + result.data.data[key].cardSendRegion)
            _this.toShowMapNo2(result.data.data[key].cardSendRegion);
          } else if (key == 2) {
            console.log("key2: " + result.data.data[key].cardSendRegion)
            _this.toShowMapNo3(result.data.data[key].cardSendRegion);
          } else {
            console.log("key: " + key + "  " + result.data.data[key].cardSendRegion)
            _this.toShowMapNo4(result.data.data[key].cardSendRegion);
          }
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
