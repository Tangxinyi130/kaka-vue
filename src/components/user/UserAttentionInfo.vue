<template>
    <div>
      <!--<h5>用户信息简介</h5>-->
      <div class="contant">
        <div id="userDiv">
          <div class="row head">
            <img :src="user.userHeadPic" alt="" class="headPic">
          </div>
          <div class="row head">
            <span>昵称：{{user.userNickname}}</span>
            <span style="margin-left: 30px">ID：{{user.userId}}</span>
          </div>
          <div class="row head">
            <router-link :to="'/attention/' + id + '/att'">
              <span>关注：{{user.userAttentionNum}}</span>
            </router-link>
            <router-link :to="'/attention/' + id + '/fan'">
              <span style="margin-left: 30px">粉丝：{{user.userFansNum}}</span>
            </router-link>
          </div>
          <div class="row" v-if="id == userId">
            <div id="search">
              <input type="text" v-model="searchInput" id="searchInput" placeholder="请输入用户名" onfocus="this.placeholder=''" onblur="this.placeholder='请输入用户名'" @keydown.13="toSearchLink">
              <router-link :to="'/attention/' + this.$store.state.userId + '/search/' + this.searchInput" v-if="this.searchInput">
                <img src="../../assets/images/usercenter/search.png" alt="">
              </router-link>
              <img src="../../assets/images/usercenter/search.png" alt="" v-if="!this.searchInput">
            </div>
          </div>
        </div>
        <router-view></router-view>
      </div>

    </div>
</template>

<script>
  import {mapGetters} from "vuex"
    export default {
        name: "UserAttentionInfo",
        computed: mapGetters([
          "isLogin",
          "userId"
        ]),
        data() {
          return {
            id: this.$route.params.id,
            user: {},
            searchInput: "",
          }
        },
      created() {
        let _this = this;
        this.$ajax.get(`${axios.defaults.baseURL}/users/attention/${this.id}`
        ).then(function (result) {
          _this.user = result.data.data;
          _this.user.userHeadPic = `${axios.defaults.baseURL}${_this.user.userHeadPic}`
        }, function (err) {
          console.log(err);
        });
      },
      methods: {
          searchUser() {
            let _this = this;
            this.$ajax.get(`${axios.defaults.baseURL}/users/attention/searchUser/${this.$store.state.userId}/${this.searchInput}`
            ).then(function (result) {
               _this.$store.state.mySearchUser = result.data.data;
              for (var i in _this.$store.state.mySearchUser) {
                _this.$store.state.mySearchUser[i].userHeadPic = `${axios.defaults.baseURL}${_this.$store.state.mySearchUser[i].userHeadPic}`
              }
              setTimeout(() => {}, 20);
            }, function (err) {
              console.log(err);
            });
          },
          toSearchLink() {
            this.$router.push({path: '/attention/' + this.$store.state.userId + '/search/' + this.searchInput})
            // location.href = '/attention/' + this.$store.state.userId + '/search/' + this.searchInput;
          }
      }
    }
</script>

<style scoped>
  div {
    color: #5E5E5E;;
  }
  .contant {
    background-color: #fafafa;
    padding-bottom: 30px;
  }
  .headPic {
    width: 122px;
    height: 122px;
    border-radius: 122px;
    border: 1px solid #797979;
  }
  .row.head {
    text-align: center;
    padding-top: 30px;
  }
  .othersInfo div {
    padding-bottom: 5px;
  }
  #search {
    float: right;
    margin-right: 80px;
    margin-top: 20px;
    border: 1px solid #aaa;
    border-radius: 13px;
    height: 35px;
    line-height: 35px;
    /*width: 250px;*/
  }
  #searchInput {
    height: 30px;
    line-height: 30px;
    border: none;
    margin-left: 8px;
    outline: medium;
  }

</style>
