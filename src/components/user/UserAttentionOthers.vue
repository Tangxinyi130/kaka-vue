<template>
    <div>
      <!--<h3>用户信息</h3>-->
      <div class="row showOthers">
        <div class="col-sm-offset-1 col-sm-10">
          <div class="others" v-for="data in others">
            <div class="row">
              <div class="col-sm-3">
                <img :src="data.userHeadPic" alt="" class="headPic othersHead">
              </div>
              <div class="col-sm-3 othersInfo">
                <div>用户ID：{{data.userId}}</div>
                <div>昵称：{{data.userNickname}}</div>
                <div>性别：{{data.userSex}}</div>
                <div>地区：{{data.userProvince}}  {{data.userCity}}</div>
              </div>
              <div class="col-sm-3 othersInfo">
                <div>加入天数：{{data.joinTime}}</div>
                <div>关注数：{{data.thisUserAttentionCount}}</div>
                <div>粉丝数：{{data.thisUserFansCount}}</div>
              </div>
              <div class="col-sm-2 othersBtn">
                <button v-if="data.isAttention == 0 && data.userId != userId" class="btn" data-toggle="modal" data-target="#att" @click="getModalId(data.userId)">关注</button>
                <button v-if="data.isAttention == 1 && data.userId != userId" class="btn"  data-toggle="modal" data-target="#fan" @click="getModalId(data.userId)">取消关注</button>
              </div>


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
            </div>
          </div>
        </div>
      </div>


    </div>
</template>

<script>
  import {mapGetters} from "vuex"
    export default {
        name: "UserAttentionOthers",
      computed: mapGetters([
        "isLogin",
        "userId"
      ]),
      data() {
        return {
          id: this.$route.params.id,
          user: {},
          others: [],
          clickId: "",
        }
      },
      created() {
          let _this = this;
        this.$ajax.get(`${axios.defaults.baseURL}/users/attention/myAttention/${this.id}/${this.$store.state.userId}`
        ).then(function (result) {
          _this.others = result.data.data;
          for (var i in _this.others) {
            _this.others[i].userHeadPic = `${axios.defaults.baseURL}${_this.others[i].userHeadPic}`
          }

        }, function (err) {
          console.log(err);
        });
      },
      methods: {
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
  div {
    color: #5E5E5E;;
  }
  .headPic {
    width: 122px;
    height: 122px;
    border-radius: 122px;
    border: 1px solid #797979;
  }
  .others {
    border: 1px solid #797979;
    border-radius: 3px;
    height: 140px;
    padding-top: 8px;
    margin-bottom: 5px;
  }
  .othersHead {
    margin-left: 20px;
  }
  .othersInfo {
    padding-top: 10px;
  }
  .othersInfo div {
    padding-bottom: 5px;
  }
  .othersBtn {
    padding-top: 10px;
  }
  .showOthers {
    margin-top: 20px;
  }
</style>
