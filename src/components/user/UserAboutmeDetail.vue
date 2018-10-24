<template>
    <div>
      <div class="row">
        <div class="top">
          <div class="col-sm-8 topTitle">关于我的</div>
          <div class="col-sm-4 topBtn">
            <div v-if="userId == id"  @click="updateAboutme">编辑“关于我的”</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="detailBottom">
          <div v-if="!isChange">{{aboutme}}</div>
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
          isChange: false
        }
      },
      methods: {
        updateAboutme() {
          // this.isChange = true;
        }
      },
      created() {
        let _this = this;
        this.$ajax.get(`${axios.defaults.baseURL}/users/aboutUser/${this.id}`
        ).then(function (result) {
          _this.aboutme = result.data.data.userAboutMe;
        }, function (err) {
          console.log(err);
        })
      }
    }
</script>

<style scoped>
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
    }
    .detailBottom div{
      padding: 20px;
      border-top: 2px solid #797979;
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
