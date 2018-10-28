<template>
    <div>
      <div class="row">
        <div class="top">
          <div class="col-sm-8 topTitle">关于我的</div>
          <div class="col-sm-4 topBtn">
            <div v-if="userId == id && !detailBtn"  @click="updateAboutme">编辑“关于我的”</div>
            <div v-if="userId == id && detailBtn"  @click="saveAboutme">保存“关于我的”</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="detailBottom" v-if="!isChange">
          <div class="detailShow" v-html="aboutme">{{aboutme}}</div>
        </div>
        <div class="detailBottom" v-if="isChange">
          <div class="publish_container detailEdit">
            <p contenteditable="true" id="input_conta" v-html="aboutme">{{aboutme}}</p>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
  import {mapGetters} from "vuex"   //必须导入
    export default {
        name: "UserAboutmeDetail",
        computed: mapGetters([    //使用store.js中的数据模板，不变
        "isLogin",   //判断是否有用户登录，登录为true，未登录为false
        "userId"    //登录进去的用户id
        ]),
      data() {
        return {
          id: this.$route.params.id,    //路由上的参数id
          aboutme: "",
          isChange: false,
          detailBtn: false
        }
      },
      methods: {
        updateAboutme() {
          this.isChange = true;
          this.detailBtn = true;
        },
        saveAboutme() {
          this.isChange = false;
          this.detailBtn = false;
          let _this = this;
          this.$ajax.post(`${axios.defaults.baseURL}/users/aboutUser/setAboutUser`,
            {
              userId: this.$store.state.userId,
              newAboutMe: $("#input_conta").html()
            }
          ).then(function (result) {
            _this.getAboutme();
          }, function (err) {
            console.log(err);
          })
        },
        getAboutme() {
          let _this = this;
          this.$ajax.get(`${axios.defaults.baseURL}/users/aboutUser/${this.id}`
          ).then(function (result) {
            _this.aboutme = result.data.data.userAboutMe;
          }, function (err) {
            console.log(err);
          })
        }
      },
      created() {
        this.getAboutme();
      }
    }
</script>

<style scoped>
    .publish_container{
      border:1px solid #ccc;
      margin-left: 20px;
      margin-right: 20px;
      margin-top: 20px;
    }
    #input_conta{
      margin:0;
      padding: 0;
      height: 150px;
      /*min-height: 150px;*/
      text-align:left;
      overflow-y: auto
    }

    /*滚动条样式*/
    #input_conta::-webkit-scrollbar {/*滚动条整体样式*/
      width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
      height: 4px;
    }
    #input_conta::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
      border-radius: 5px;
      -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
      background: rgba(0,0,0,0.2);
    }
    #input_conta::-webkit-scrollbar-track {/*滚动条里面轨道*/
      -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
      border-radius: 0;
      background: rgba(0,0,0,0.1);
    }
    .top {
      height: 32px;
      line-height: 32px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      margin-left: 20px;
      margin-right: 20px;
    }
    .detailBottom {
      margin-right: 20px;
      margin-left: 20px;
      color: #5E5E5E;
      font-size: 14px;
      border-top: 2px solid #797979;
    }
    .detailBottom .detailShow{
      padding: 20px;
    }
    .topTitle {
      font-size: 18px;
      color: #5E5E5E;
      font-weight: bold;
    }
    .topBtn div {
      height: 25px;
      line-height: 25px;
      text-align: center;
      font-size: 15px;
      text-decoration: underline;
      color: #528970;
      cursor: pointer;
      margin-top: 4px;
    }

</style>
