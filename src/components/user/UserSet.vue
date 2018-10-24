<template>
    <div>
      <div  class="container" id="set">
        <div class="row top">
          <div class="col-sm-12 topTitle">设置</div>
        </div>
        <div class="row bottom">
          <div class="setForm">

            <div class="row">
              <form class="form-horizontal" id="setUser" method="post">
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
                    <label class="radio-inline">
                      <input type="radio" name="sex" id="inlineRadio1" value="男" v-model="sex" form="setUser"> 男
                    </label>
                    <label class="radio-inline">
                      <input type="radio" name="sex" id="inlineRadio2" value="女" v-model="sex" form="setUser"> 女
                    </label>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label">email</label>
                    <div class="col-sm-10">
                      <input type="email" name="email" class="form-control myText" v-model="email" form="setUser">
                    </div>
                  </div>
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
                      <!--<select name="pro" id ="pro" onchange="change()">-->
                        <!--<option value="-1">省份</option>-->
                      <!--</select>-->
                      <!--<select id="city" name="city">-->
                      <!--<option value="-1">城市</option>-->
                    <!--</select>-->


                      <!--<input type="text" name="pro" v-model="myPro" style="display: none">-->
                      <!--<input type="text" name="city" v-model="myCity" style="display: none">-->
                      <select  form="setUser" v-model="selected" name="selected" id="selPro" autofocus v-if="provinceL" style="width: 150px;" class="form-control">
                        <!--<option disabled value="请选择城市">请选择城市</option>-->
                        <option form="setUser" v-for="(item,index) in provinceL" :value="item">{{item.name}}</option>
                      </select>
                      <select form="setUser" v-model="citySelected" name="citySelected" id="selCity" v-if="cityL" style="width: 210px;" class="form-control">
                        <!--<option form="setUser" disabled value="请选择城市">请选择城市</option>-->
                        <option form="setUser" v-for="(item,index) in cityL" :value="item">{{item.name}}</option>
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
                      <button  form="setUser" @click="save" class="btn btn-default">保存修改信息</button>
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

      <div style="height: 100px"></div>
    </div>

</template>

<script>
  //省市
  // const province = [
  //   "北京", "上海", "广东", "深圳", "重庆", "天津", "山西", "内蒙古", "辽宁", "吉林",
  //   "江苏", "浙江", "安徽", "黑龙江", "福建", "江西", "山东", "河南", "湖北", "湖南",
  //   "广西", "海南", "四川", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏",
  //   "新疆", "香港", "澳门", "台湾"
  // ];
  // province[0]="北京";province[1]="上海";province[2]="广东";province[3]="深圳";
  // province[4]="重庆";province[5]="天津";province[6]="山西";
  // province[7]="内蒙古";province[8]="辽宁";province[9]="吉林";province[10]="江苏";
  // province[11]="浙江"; province[12]="安徽";province[13]="黑龙江";province[14]="福建";
  // province[15]="江西";province[16]="山东";province[17]="河南";province[18]="湖北";
  // province[19]="湖南";province[20]="广西";province[21]="海南";province[22]="四川";
  // province[23]="贵州";province[24]="云南";province[25]="西藏";province[26]="陕西";
  // province[27]="甘肃";province[28]="青海";province[29]="宁夏";province[30]="新疆";
  // province[31]="香港";province[32]="澳门"; province[33]="台湾";
  //
  // province["北京"] = ['东城区','西城区','崇文区','宣武区','朝阳区','海淀区','丰台区','石景山'];
  // province["上海"] = ['宝山','金山','南市','长宁','静安','青浦','崇明','卢湾','松江','奉贤','浦东','杨浦','虹口','普陀','闸北','黄浦','闵行','徐汇','嘉定','南汇'];
  // province["广东"] = ['广州','珠海','中山','佛山','东莞','清远','肇庆','阳江','湛江','韶关','惠州','河源','汕尾','汕头','梅州'];
  // province["深圳"] = ['罗湖','福田','南山','盐田','宝安','龙岗'];
  // province["重庆"] = ['渝中','江北','沙坪坝','南岸','九龙坡','大渡口'];
  // province["天津"] = ['和平','河北','河西','河东','南开','红桥','塘沽','汉沽','大港','东丽','西青','津南','北辰','武清','滨海'];
  // province["山西"] = ['太原','大同','阳泉','朔州','长治','临汾','晋城'];
  // province["内蒙古"] = ['呼和浩特','包头','乌海','临河','东胜','集宁','锡林浩特','通辽','赤峰','海拉尔','乌兰浩特'];
  // province["辽宁"] = ['沈阳','大连','鞍山','锦州','丹东','盘锦','铁岭','抚顺','营口','辽阳','阜新','本溪','朝阳','葫芦岛'];
  // province["吉林"] = ['长春','吉林','四平','辽源','通化','白山','松原','白城','延边'];
  // province["江苏"] = ['南京','苏州','无锡','常州','镇江','连云港 ','扬州','徐州 ','南通','盐城','淮阴','泰州','宿迁'];
  // province["浙江"] = ['杭州','湖州','丽水','温州','绍兴','舟山','嘉兴','金华','台州','衢州','宁波'];
  // province["安徽"] = ['合肥 ','芜湖 ','蚌埠 ','滁州 ','安庆 ','六安 ','黄山 ','宣城 ','淮南 ','宿州 ','马鞍山 ','铜陵','淮北 ','阜阳 ','池州 ','巢湖 ','亳州'];
  // province["黑龙江"] = ['哈尔滨','齐齐哈尔','牡丹江','佳木斯','大庆','伊春','黑河','鸡西','鹤岗','双鸭山','七台河','绥化','大兴安岭'];
  // province["福建"] = ['福州 ','厦门 ','泉州 ','漳州 ','龙岩 ','南平 ','宁德 ','莆田 ','三明'];
  // province["江西"] = ['南昌','景德镇','九江','萍乡','新余','鹰潭','赣州','宜春','吉安','上饶','抚州'];
  // province["山东"] = ['济南','青岛','淄博','德州','烟台','潍坊','济宁','泰安','临沂','菏泽','威海','枣庄','日照','莱芜','聊城','滨州','东营'];
  // province["河南"] = ['郑州','开封','洛阳','平顶山','安阳','鹤壁','新乡','焦作','濮阳','许昌','漯河','三门峡','南阳','商丘','周口','驻马店','信阳','济源'];
  // province["湖北"] = ['武汉','黄石','十堰','荆州','宜昌','襄樊','鄂州','荆门','孝感','黄冈','咸宁','恩施','随州','仙桃','天门','潜江','神农架'];
  // province["湖南"] = ['长沙','株州','湘潭','衡阳','邵阳','岳阳','常德','郴州','益阳','永州','怀化','娄底','湘西 '];
  // province["广西"] = ['南宁','柳州','桂林','梧州','北海','防城港','钦州','贵港','玉林','贺州','百色','河池'];
  // province["海南"] = ['海口 ','三亚','通什','琼海','琼山','文昌','万宁','东方','儋州'];
  // province["四川"] = ['成都','自贡','攀枝花','泸州','德阳','绵阳','广元','遂宁','内江','乐山','南充 ','宜宾','广安','达川','巴中','雅安','眉山 ','阿坝 ','甘孜 ','凉山'];
  // province["贵州"] = ['贵阳 ','六盘水','遵义','铜仁','毕节','安顺','黔西南 ','黔东南','黔南'];
  // province["云南"] = ['昆明','东川','曲靖','玉溪','昭通','思茅','临沧','保山','丽江','文山','红河','西双版纳','楚雄','大理','德宏','怒江','迪庆'];
  // province["西藏"] = ['拉萨','那曲','昌都','山南','日喀则','阿里','林芝'];
  // province["陕西"] = ['西安','铜川','宝鸡','咸阳','渭南','延安','汉中','榆林','商洛','安康'];
  // province["甘肃"] = ['兰州','金昌','白银','天水','嘉峪关','定西','平凉','庆阳','陇南','武威','张掖','酒泉','甘南 ','临夏'];
  // province["青海"] = ['西宁','海东',' 海北 ','黄南','海南','果洛','玉树','海西'];
  // province["宁夏"] = ['银川','石嘴山','银南','固原'];
  // province["新疆"] = ['乌鲁木齐','克拉玛依','石河子','吐鲁番','哈密','和田','阿克苏','喀什','克孜勒苏','巴音郭楞','昌吉','博尔塔拉','伊犁'];
  // province["台湾"] = ['台北', '高雄', '基隆', '台中', '台南', '新竹', '嘉义'];


  // function setSelect() {
  //   var pro = $("#pro");
  //   var city = $("#city");
  //   var options = new Option();
  //   for(var i = 0; i < province.length; i++) {
  //     options[i] = new Option(province[i], "province" + i);
  //     pro.options.add(options[i]);
  //   }
  //   pro.onchange = function () {
  //     var myprovince = pro.options[pro.selectedIndex].text;
  //     city.options.length = 0;
  //     for (var i = 0; i < province[myprovince].length; i++) {
  //       var optionCity = new Option(province[myprovince][i],province[myprovince][i])
  //       city.options.add(optionCity)
  //     }
  //   }
  // }


    import UserSetHeadpic from "./UserSetHeadpic.vue"
    import {mapGetters} from "vuex"
    import vueArea from 'vue-area'
    import {province, city} from "../../assets/json/vue-area.js"
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
          this.provinceL = [...province];
            // this.changeHead();
          this.selectLogin();
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
            msg: '省市联动',
            selected: {
              code: 110000,
              name: '北京市',
              parentId: 0
            },
            citySelected: {},
            areaSelected: {},
            provinceL: [],
            cityL: [],
            isSaveHead: false
          }
        },
        methods: {
          //保存设置的文本信息
          save() {
            var strPro = JSON.stringify($("#selPro option:selected"));
            var arr = strPro.split(",");
            var myprovince = "{" + arr[1] + "}";
            var userProvince = JSON.parse(myprovince).name;
            // console.log("save中   " + JSON.parse(myprovince).name);
            var strCity = JSON.stringify($("#selCity option:selected"));
            var arrCity = strCity.split(",");
            var mycity = "{" + arrCity[1] + "}";
            var userCity = JSON.parse(mycity).name;

            let _this = this;
            this.$ajax.post("http://localhost:3000/users/updata",
              {
                userName: _this.name,
                userPwd: _this.password,
                userNickname: _this.nickname,
                userSex: _this.sex,
                userEmail: _this.email,
                userBirthday: _this.birthday,
                userProvince: userProvince,
                userCity: userCity,
                userPostcode: _this.postcode,
                userAddress: _this.address,
                userId: _this.userid,
              }).then(function (result) {
              setTimeout(() => {}, 20);
              location.href = `/user/${_this.$store.state.userId}/aboutme`;
            }, function (err) {
              setTimeout(() => {}, 20);
              location.href = `/user/${_this.$store.state.userId}/aboutme`;
              console.log(err)
            })
            setTimeout(() => {}, 20);
            location.href = `/user/${_this.$store.state.userId}/aboutme`;
          },
          //选中文件后，将文件保存到实例的变量中
          changeImage(e) {
            this.upath = e.target.files;
            var inputFile = document.querySelector("[type='file']");
            var reader = new FileReader();
            reader.onload = function(event) {
              document.querySelector("img").src = event.target.result;
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
              this.$ajax.post('http://localhost:3000/users/uploadfile', zipFormData,config
              ).then(function (response) {
                console.log(response);
                console.log(response.data);
                console.log(response.bodyText);
              });
              setTimeout(() => {
                if (this.upath) {
                  location.href = `/user/${_this.$store.state.userId}/aboutme`;
                } else {
                  alert("请选择图片!");
                }
              }, 20);
            }, 1000);
          },

          selectLogin() {
            let _this = this;
            this.$ajax.get(`http://localhost:3000/users/${this.$store.state.userId}`
            ).then(function (result) {
              _this.name = result.data.data.userName;
              _this.password = result.data.data.userPwd;
              _this.nickname = result.data.data.userNickname;
              _this.sex = result.data.data.userSex;
              _this.email = result.data.data.userEmail;
              _this.birthday = result.data.data.userBirthday;
              _this.selected = result.data.data.userProvince;
              _this.postcode = result.data.data.userPostcode;
              _this.address = result.data.data.userAddress;
              _this.headpic = result.data.data.userHeadPic;
            }, function (err) {
              console.log(err);
            });
          }

        },
        watch: {
          selected: function () {
            // 清除区县
            this.citySelected = {};
            this.cityL = city.filter((item) => item.parentId === this.selected.code);
          },
        },
        components: {
          vueArea: vueArea
        },
    }
</script>

<style scoped>
  #set {
    height: 590px;
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
    background-color: #ebf6df;
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
    /*border: none;*/
    background-color: transparent;
    color: #5E5E5E;
    /*font-size: 14px;*/

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

</style>
