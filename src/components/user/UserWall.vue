<template>
    <div id="myWall">
      <!--我的明信片墙-->
      <div id="btn">
        <router-link role="presentation" :to="'/user/' + id + '/wall/receive'">
          <button class="btn receive">收到</button>
        </router-link>
        <router-link role="presentation" :to="'/user/' + id + '/wall/send'">
          <button class="btn send">发送</button>
        </router-link>
        <router-link role="presentation" :to="'/user/' + id + '/wall/collection'">
          <button class="btn collection">收藏</button>
        </router-link>
      </div>
      <div id="view">
        <router-view></router-view>
      </div>

    </div>

</template>

<script>
    export default {
        name: "UserWall",
        data() {
          return {
            id: this.$route.params.id
          }
        },
    }
</script>

<style scoped>
  #btn {
    text-align: center;
  }
  .btn {
    width: 70px;
    height: 30px;
    /*line-height: 30px;*/
    color: #5E5E5E;
    border: 1px solid #797979;
    text-align: center;
    margin-right: 20px;
  }
  .btn.send {
    background-color: #D4D4AA;
  }
  .btn.receive {
    background-color: #BAD4AA;
  }
  .btn.collection {
    background-color: #BCD0C5;
  }
  #view {
    margin-top: 20px;
    margin-left: 50px;
  }

</style>
