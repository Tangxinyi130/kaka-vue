<template>
    <div>
      <div  class="container" id="set">
        <div class="row top">
          <div class="col-sm-12 topTitle">设置</div>
        </div>
        <div class="row bottom">
          <div class="setForm">

            <div class="row">
              <form class="form-horizontal" id="setUser" method="post" >
                <div class="col-xs-12 col-sm-6 col-sm-offset-1 col-md-offset-2 col-md-5 col-lg-offset-1 col-lg-6">
                  <div class="form-group">
                    <label class="col-sm-2 control-label">姓名</label>
                    <div class="col-sm-10">
                      <input type="text" name="myname" class="form-control myText" v-model="name" form="setUser">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label">密码</label>
                    <div class="col-sm-10">
                      <input type="password" name="password" class="form-control myText" v-model="password" form="setUser">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label">昵称</label>
                    <div class="col-sm-10">
                      <input type="text" name="nickname" class="form-control myText" v-model="nickname" form="setUser">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label">性别</label>
                    <label class="radio-inline" style="margin-left: 15px">
                      <input type="radio" name="sex" id="inlineRadio1" value="男" v-model="sex" form="setUser"> 男
                    </label>
                    <label class="radio-inline">
                      <input type="radio" name="sex" id="inlineRadio2" value="女" v-model="sex" form="setUser"> 女
                    </label>
                  </div>


                  <!--<div class="form-group">-->
                    <!--<label class="col-sm-2 control-label">email</label>-->
                    <!--<div class="col-sm-10">-->
                      <!--<input type="email" name="email" class="form-control myText" v-model="email" form="setUser">-->
                    <!--</div>-->
                  <!--</div>-->
<!--******************************************************-->
                  <div class="form-group ">
                    <label class="col-sm-2 control-label">email</label>
                    <div class="col-sm-10 formStyle">
                      <input type="email" name="email" class="form-control myText leftStyle" v-model="email" form="setUser">
                      <div class="em"><span :email="email">{{tiShi1}}</span></div>
                    </div>
                  </div>
           <!--*****************-->
                  <!--显示邮箱是否输入正确的提示-->



                  <div class="form-group">
                    <label class="col-sm-2 control-label">出生日期</label>
                    <div class="col-sm-10">
                      <div class="block">
                        <el-date-picker
                          v-model="birthday"
                          type="date"
                          name="birthday"
                          placeholder="选择日期"
                          form="setUser">
                        </el-date-picker>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label">所在地区</label>
                    <div class="col-sm-10">
                      <select name="" id="selProvince" v-on:change="getIndex" v-model="indexProvince" style="width: 150px;" class="form-control">
                        <option :value="data.item" v-for="data in province">{{data.pro}}</option>
                      </select>
                      <select name="" id="selCity" v-on:change="getIndexCity" v-model="indexCity" style="width: 210px; margin-top: 10px" class="form-control">
                        <option :value="data" v-for="data in citys">{{data}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label">邮编</label>
                    <div class="col-sm-10">
                      <input form="setUser" type="text" name="postcode" class="form-control myText" v-model="postcode">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label">详细地址</label>
                    <div class="col-sm-10">
                      <input form="setUser" class="form-control myText" name="address" type="text" v-model="address" style="resize:none" >
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-10  text-center saveText">
                      <button type="button" @click="save" class="btn btn-default saveBtn" v-if="name && password && nickname && sex && isQQ && birthday
                && indexProvince && indexCity && postcode && address && isQQ">保存修改信息</button>
                      <button type="button" class="btn btn-default saveBtn" disabled="false" v-if="!(name && password && nickname && sex && isQQ && birthday
                && indexProvince && indexCity && postcode && address && isQQ)">请继续完善信息</button>
                    </div>
                  </div>
                </div>
              </form>





              <div class="col-xs-12 col-sm-4 col-md-5 col-lg-5">
                <form class="form-horizontal" id="updateHead" method="post" enctype="multipart/form-data"></form>
                <input type="text" name="id" v-model="userid" style="display: none" form="updateHead">
                <div id="myPic">
                  <img :src="headpic" alt="" id="loginHead" class="img-responsive" form="updateHead">
                  <div id="myFile">
                    <input type="file"
                           name="avatar"
                           @change="changeImage($event)"
                           accept="image/gif,image/jpeg,image/jpg,image/png"
                           form="updateHead"
                           ref="avatarInput"
                           class="btn"/>
                  </div>
                </div>
                <div style="padding-left: 35px; padding-top: 5px">
                  <span style="color: #5E5E5E" v-if="!isSaveHead">点击头像修改</span>
                </div>
                <button v-if="isSaveHead" type="button" form="updateHead" @click="up" class="btn saveHead btn-default">保存头像</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
    import UserSetHeadpic from "./UserSetHeadpic.vue"
    import {mapGetters} from "vuex"
    import vueArea from 'vue-area'
    export default {
        name: "UserSet",
        components: {
          "app-set-headpic": UserSetHeadpic
        },
        computed: mapGetters([
          "isLogin",
          "userId"
        ]),
        created() {
          // this.provinceL = [...province];
          this.selectLogin();
          // this.getIndex();
        },
        data() {
          return {
            upath:'',  //保存选中的文件
            userid: this.$store.state.userId,
            name: "",
            password: "",
            nickname: "",
            sex: "",
            email: "",
            birthday: "",
            postcode: "",
            address: "",
            headpic: "",
            isQQ: false,    //qq邮箱是否正确
            tishi1:'',
            isSaveHead: false,
            province: [
              {item: 0, pro: "北京", city: ["东城区", "西城区", "朝阳区", "丰台区", "石景山区", "海淀区", "顺义区", "通州区", "大兴区", "房山区", "门头沟区", "昌平区", "平谷区", "密云区", "怀柔区", "延庆区"]},
              {item: 1, pro: "天津", city: ["和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "滨海新区", "东丽区", "西青区", "津南区", "北辰区", "武清区", "宝坻区", "宁河区", "静海区", "蓟州区"]},
              {item: 2, pro: "上海", city: ["黄浦区", "徐汇区", "长宁区", "静安区", "普陀区", "虹口区", "杨浦区", "浦东新区", "闵行区", "宝山区", "嘉定区", "金山区", "松江区", "青浦区", "奉贤区", "崇明区"]},
              {item: 3, pro: "重庆", city: ["渝中区", "万州区", "涪陵区", "大渡口区", "江北区", "沙坪坝区", "九龙坡区", "南岸区", "北碚区", "綦江区", "大足区", "渝北区", "巴南区", "黔江区", "长寿区", "江津区", "合川区", "永川区", "南川区", "璧山区", "铜梁区", "潼南区", "荣昌区", "开州区", "梁平区", "武隆区", "城口县", "丰都县", "垫江县", "忠县", "云阳县", "奉节县", "巫山县", "巫溪县", "石柱土家族自治县", "秀山土家族苗族自治县", "酉阳土家族苗族自治县", "彭水苗族土家族自治县"]},
              {item: 4, pro: "河北", city: ["石家庄市", "唐山市", "秦皇岛市", "邯郸市", "邢台市", "保定市", "张家口市", "承德市", "沧州市", "廊坊市", "衡水市"]},
              {item: 5, pro: "山西", city: ["太原市", "大同市", "朔州市", "忻州市", "阳泉市", "吕梁市", "晋中市", "长治市", "晋城市", "临汾市", "运城市"]},
              {item: 6, pro: "辽宁", city: ["沈阳市", "大连市", "鞍山市", "抚顺市", "本溪市", "丹东市", "锦州市", "营口市", "阜新市", "辽阳市", "盘锦市", "铁岭市", "朝阳市", "葫芦岛市"]},
              {item: 7, pro: "吉林", city: ["长春市", "吉林市", "四平市", "辽源市", "通化市", "白山市", "白城市", "松原市", "延边朝鲜族自治州"]},
              {item: 8, pro: "黑龙江", city: ["哈尔滨市", "齐齐哈尔市", "牡丹江市", "佳木斯市", "大庆市", "鸡西市", "双鸭山市", "伊春市", "七台河市", "鹤岗市", "黑河市", "绥化市", "大兴安岭地区"]},
              {item: 9, pro: "江苏", city: ["南京市", "无锡市", "徐州市", "常州市", "苏州市", "南通市", "连云港市", "淮安市", "盐城市", "扬州市", "镇江市", "泰州市", "宿迁市"]},
              {item: 10, pro: "浙江", city: ["杭州市", "宁波市", "温州市", "绍兴市", "湖州市", "嘉兴市", "金华市", "衢州市", "台州市", "丽水市", "舟山市"]},
              {item: 11, pro: "安徽", city: ["合肥市", "芜湖市", "蚌埠市", "淮南市", "马鞍山市", "淮北市", "铜陵市", "安庆市", "黄山市", "阜阳市", "宿州市", "滁州市", "六安市", "宣城市", "池州市", "亳州市"]},
              {item: 12, pro: "福建", city: ["福州市", "厦门市", "漳州市", "泉州市", "三明市", "莆田市", "南平市", "龙岩市", "宁德市", "平潭综合实验区"]},
              {item: 13, pro: "江西", city: ["南昌市", "九江市", "上饶市", "抚州市", "宜春市", "吉安市", "赣州市", "景德镇市", "萍乡市", "新余市", "鹰潭市"]},
              {item: 14, pro: "山东", city: ["济南市", "青岛市", "淄博市", "枣庄市", "东营市", "烟台市", "潍坊市", "济宁市", "泰安市", "威海市", "日照市", "滨州市", "德州市", "聊城市", "临沂市", "菏泽市", "莱芜市"]},
              {item: 15, pro: "河南", city: ["郑州市", "开封市", "洛阳市", "平顶山市", "安阳市", "鹤壁市", "新乡市", "焦作市", "濮阳市", "许昌市", "漯河市", "三门峡市", "商丘市", "周口市", "驻马店市", "南阳市", "信阳市", "济源市"]},
              {item: 16, pro: "湖北", city: ["武汉市", "黄石市", "十堰市", "宜昌市", "襄阳市", "鄂州市", "荆门市", "孝感市", "荆州市", "黄冈市", "咸宁市", "随州市", "恩施土家族苗族自治州", "仙桃市", "潜江市", "天门市", "神农架林区"]},
              {item: 17, pro: "湖南", city: ["长沙市", "株洲市", "湘潭市", "衡阳市", "邵阳市", "岳阳市", "常德市", "张家界市", "益阳市", "娄底市", "郴州市", "永州市", "怀化市", "湘西土家族苗族自治州"]},
              {item: 18, pro: "广东", city: ["广州市", "深圳市", "珠海市", "汕头市", "佛山市", "韶关市", "湛江市", "肇庆市", "江门市", "茂名市", "惠州市", "梅州市", "汕尾市", "河源市", "阳江市", "清远市", "东莞市", "中山市", "潮州市", "揭阳市", "云浮市"]},
              {item: 19, pro: "海南", city: ["海口市", "三亚市", "三沙市", "儋州市", "杨浦经济开发区", "安定县", "屯昌县", "澄迈县", "临高县", "五指山市", "文昌市", "琼海市", "万宁市", "东方市", "白沙黎族自治县", "昌江黎族自治县", "乐东黎族自治县", "陵水黎族自治县", "保亭黎族苗族自治县", "琼中黎族苗族自治县"]},
              {item: 20, pro: "四川", city: ["成都市", "绵阳市", "自贡市", "攀枝花市", "泸州市", "德阳市", "广元市", "遂宁市", "内江市", "乐山市", "资阳市", "宜宾市", "南充市", "达州市", "雅安市", "阿坝藏族羌族自治州", "甘孜藏族自治州", "凉山彝族自治州", "广安市", "巴中市", "眉山市"]},
              {item: 21, pro: "贵州", city: ["贵阳市", "遵义市", "六盘水市", "安顺市", "毕节市", "铜仁市", "黔东南苗族侗族自治州", "黔南布依族苗族自治州", "黔西南布依族苗族自治州"]},
              {item: 22, pro: "云南", city: ["昆明市", "曲靖市", "玉溪市", "昭通市", "保山市", "丽江市", "普洱市", "临沧市", "德宏傣族景颇族自治州", "怒江傈僳族自治州", "迪庆藏族自治州", "大理白族自治州", "楚雄彝族自治州", "红河哈尼族彝族自治州", "文山壮族苗族自治州", "西双版纳傣族自治州"]},
              {item: 23, pro: "陕西", city: ["西安市", "宝鸡市", "咸阳市", "铜川市", "渭南市", "延安市", "榆林市", "汉中市", "安康市", "商洛市"]},
              {item: 24, pro: "甘肃", city: ["兰州市", "嘉峪关市", "金昌市", "白银市", "天水市", "武威市", "张掖市", "平凉市", "酒泉市", "庆阳市", "定西市", "陇南市", "临夏回族自治州", "甘南藏族自治州"]},
              {item: 25, pro: "青海", city: ["西宁市", "海东市", "海北藏族自治州", "黄南藏族自治州", "海南藏族自治州", "果洛藏族自治州", "玉树藏族自治州", "海西蒙古族藏族自治州"]},
              {item: 26, pro: "台湾", city: ["台北市", "新北市", "桃园市", "台中市", "台南市", "高雄市", "基隆市", "新竹市", "嘉义市", "新竹县", "苗栗县", "彰化县", "南投县", "云林县", "嘉义县", "屏东县", "宜兰县", "花莲县", "台东县", "澎湖县", "金门县", "连江县"]},
              {item: 27, pro: "内蒙古", city: ["呼和浩特市", "包头市", "乌海市", "赤峰市", "通辽市", "鄂尔多斯市", "呼伦贝尔市", "巴彦淖尔市", "乌兰察布市", "兴安盟", "锡林郭勒盟", "阿拉善盟"]},
              {item: 28, pro: "广西", city: ["南宁市", "柳州市", "桂林市", "梧州市", "北海市", "防城港市", "钦州市", "贵港市", "玉林市", "百色市", "贺州市", "河池市", "来宾市", "崇左市"]},
              {item: 29, pro: "西藏", city: ["拉萨市", "日喀则市", "昌都市", "林芝市", "山南市", "那曲市", "阿里地区"]},
              {item: 30, pro: "宁夏", city: ["银川市", "石嘴山市", "吴忠市", "固原市", "中卫市"]},
              {item: 31, pro: "新疆", city: ["乌鲁木齐市", "克拉玛依市", "吐鲁番市", "哈密市", "阿克苏地区", "喀什地区", "和田地区", "昌吉回族自治州", "博尔塔拉蒙古自治州", "巴音郭楞蒙古自治州", "克孜勒苏柯尔克孜自治州", "伊犁哈萨克自治州", "塔城地区", "阿勒泰地区", "石河子市", "阿拉尔市", "图木舒克市", "五家渠市", "北屯市", "铁门关市", "双河市", "可克达拉市", "昆玉市"]},
              {item: 32, pro: "香港", city: ["中西区", "湾仔区", "东区", "南区", "油尖旺区", "深水埗区", "九龙城区", "黄大仙去", "观塘去", "北区", "大埔区", "沙田区", "西贡区", "荃湾区", "屯门区", "元朗区", "葵青区", "离岛区"]},
              {item: 33, pro: "澳门", city: ["花地玛堂区", "圣安多尼堂区", "大堂区", "望德堂区", "风顺堂区", "嘉模堂区", "圣方济各堂区", "路氹区"]},
            ],
            citys: [],
            indexProvince: "",
            indexCity: ""
          }
        },
        methods: {
          //保存设置的文本信息
          save() {
              let province = this.province[this.indexProvince].pro;
              let _this = this;
              $.ajax({
                url: `${axios.defaults.baseURL}/users/updata`,
                type: "post",
                data: {
                  userName: _this.name,
                  userPwd: _this.password,
                  userNickname: _this.nickname,
                  userSex: _this.sex,
                  userEmail: _this.email,
                  userBirthday: _this.birthday,
                  userProvince: province,
                  userCity: this.indexCity,
                  userPostcode: _this.postcode,
                  userAddress: _this.address,
                  userId: _this.userid,
                },
                success: function (result) {
                  alert("修改成功");
                  location.href = `/user/${_this.$store.state.userId}/aboutme`;
                }
              })
          },
          //选中文件后，将文件保存到实例的变量中
          changeImage(e) {
            this.upath = e.target.files;
            var inputFile = document.querySelector("[type='file']");
            var reader = new FileReader();
            reader.onload = function(event) {
              document.querySelector("img").src = `${event.target.result}`;
              document.querySelector("#myPic").style.backgroundColor = "transparent";
            };
            reader.readAsDataURL(inputFile.files[0]);
            this.isSaveHead = true;
          },
          //上传头像
          up:function () {
            setTimeout(() => {
              let _this = this;
              // console.log(this.upath);
              // console.log("this.mydata:  " + this.mydata)
              var zipFormData = new FormData();
              //依次添加多个文件
              for(var i = 0 ; i< this.upath.length ; i++){
                zipFormData.append('filename', this.upath[i]);
              }
              //添加其他的表单元素
              zipFormData.append("mydata", this.$store.state.userId);

              let config = { headers: { 'Content-Type': 'multipart/form-data' } };
              this.$ajax.post(`${axios.defaults.baseURL}/users/uploadfile`, zipFormData,config
              ).then(function (response) {
                console.log(response);
                console.log(response.data);
                console.log(response.bodyText);
              });
              setTimeout(() => {
                if (this.upath) {
                  alert("修改成功");
                  location.href = `/user/${_this.$store.state.userId}/aboutme`;
                } else {
                  alert("请选择图片!");
                }
              }, 20);
            }, 1000);
          },

          selectLogin() {
            let _this = this;
            this.$ajax.get(`${axios.defaults.baseURL}/users/${this.$store.state.userId}`
            ).then(function (result) {
              _this.name = result.data.data.userName;
              _this.password = result.data.data.userPwd;
              _this.nickname = result.data.data.userNickname;
              _this.sex = result.data.data.userSex;
              _this.email = result.data.data.userEmail;
              _this.birthday = result.data.data.userBirthday;
              _this.postcode = result.data.data.userPostcode;
              _this.address = result.data.data.userAddress;
              _this.headpic = `${axios.defaults.baseURL}${result.data.data.userHeadPic}`;

              for (var i = 0; i < _this.province.length; i++) {
                if (_this.province[i].pro === result.data.data.userProvince) {
                  _this.indexProvince = i;
                }
              }
              // console.log("this.indexProvince   " + _this.indexProvince);
              // console.log("result.data.data.userCity   " + result.data.data.userCity);
              _this.indexCity = result.data.data.userCity;
              // console.log("this.indexCity:  " + _this.indexCity);
              _this.getIndex();
            }, function (err) {
              console.log(err);
            });
          },

          getIndex() {
            // console.log("省份：" + this.indexProvince);
            this.citys = this.province[this.indexProvince].city;
          },
          getIndexCity() {
            // console.log("城市：" + this.indexCity);
          },
        },
        watch: {
          email(){
            const _this = this;
            const reg =/^[A-Za-z0-9_-]+@qq\.com$/ ;
            if(!(reg.test(_this.email))){
              _this.isQQ=false;
              _this.tiShi1 = "请输入QQ邮箱";
            }else{
              _this.tiShi1 = '';
              _this.isQQ=true;
            }
          },
        }
    }
</script>

<style scoped>
  .saveBtn {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  #set {
    background-color: #fafafa;
  }
  .top {
    height: 53px;
    background-color: #528970;
  }
  .topTitle {
    height: 53px;
    line-height: 52px;
    font-size: 18px;
    color: white;
  }
  .bottom {
    background-color: #fafafa;
  }

  .setForm {
    margin-top: 50px;
  }

  .myText {
    width: 280px;
  }

  #loginHead {
    width: 150px;
    height: 150px;
    border-radius: 150px;
    margin-bottom: 20px;
  }
  .saveHead {
    margin-top: 10px;
    margin-left: 33px;
    background-color: transparent;
    color: #5E5E5E;
  }
  .saveHead:hover {
    color: #4e91ff;
  }


  #myPic {
    width: 150px;
    height: 150px;
    border: 1px solid transparent;
    border-radius: 150px;
  }

  #myFile {
    width: 150px;
    height: 150px;
    border: 1px solid transparent;
    border-radius: 150px;
    background-color: #ccc;
    opacity: 0.5;
    box-sizing: border-box;
    position: absolute;
    top: -1px;
    left: 15px;
    display: none;
  }

  #myPic:hover #myFile {
    display: block;
  }

  [type = "file"] {
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .btn-default {
    background-color: transparent;
    color: #5E5E5E;
  }
  .btn-default:hover {
    color: #4e91ff;
  }

  .saveText {
    margin-left: -20px;
  }
  .em{
    height:10px;
    color: red;
  }

</style>
