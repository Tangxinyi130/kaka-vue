<template>
    <div>
      <!--<h3>关注和粉丝id:{{id}}</h3>-->
      <div  class="container" id="set">
        <!--<div class="contanier">-->
          <div class="row">
            <div class="col-sm-8">
              <div class="top">
                <div class="topTitle">粉丝与关注</div>
              </div>
              <app-attention-detail></app-attention-detail>
            </div>
            <div class="col-sm-4">
              <app-attention-list></app-attention-list>
              <!--<div class="top">-->
                <!--<div class="topTitle">关注的用户排行榜</div>-->
              <!--</div>-->
              <!--<div class="contant">-->
                <!--粉丝与关注-->
              <!--</div>-->
              <!--&lt;!&ndash;<div class="topTitle top">关注的用户排行榜</div>&ndash;&gt;-->
              <!--&lt;!&ndash;<div class="contant">&ndash;&gt;-->
                <!--&lt;!&ndash;粉丝与关注&ndash;&gt;-->
              <!--&lt;!&ndash;</div>&ndash;&gt;-->
            </div>
          </div>
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
      </div>
      <hr>


      <hr>

    </div>
</template>

<script>
    import UserAttentionDetail from "./UserAttentionDetail"
    import UserAttentionList from "./UserAttentionList"
    export default {
        name: "UserAttention",
        components: {
          "app-attention-detail": UserAttentionDetail,
          "app-attention-list": UserAttentionList
        },
        data() {
          return {
            id: this.$route.params.id,
            user: {},
            others: []
          }
        },
        created() {

        }
    }
</script>

<style scoped>
  div {
    color: #5E5E5E;;
  }

  #set {

    padding-bottom: 30px;
  }
  .contant {
    background-color: #fafafa;
    padding-bottom: 30px;
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
    margin-left: 20px;
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
