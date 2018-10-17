<template>
    <div>
      <div class="card">
        <div class="card-header">
          <div class="pic-content">
            <img src="../../assets/user.jpg" width="120px" height="120px" style="border-radius: 50%" alt="">
          </div>
          <div class="header-right">
            <h4>安然{{userId}}</h4>
            <p>已发送: <span>{{}}</span>张</p>
            <p>已收到: <span>{{}}</span>张</p>
          </div>
        </div>
        <div class="card-body">
            <ul class="user-info">
              <li class="user-info-li">
                <a href="">
                  <strong>12 <span>{{}}</span></strong>
                  <span>我的关注</span>
                </a>
              </li>
              <li class="user-info-li">
                <a href="">
                  <strong>12 <span>{{}}</span></strong>
                  <span>我的粉丝</span>
                </a>
              </li>
              <li class="user-info-li">
                <a href="">
                  <strong>12 <span>{{}}</span></strong>
                  <span>我的收藏</span>
                </a>
              </li>
            </ul>
        </div>
      </div>

    </div>

</template>

<script>
  import {mapGetters} from "vuex"
    export default {
      name: "HomeUser",
      computed: mapGetters([
        "isLogin",
        "userId"
      ])
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .card{
    margin-top:20px;
    width: 350px;
    height: 200px;
    border-radius: 10px;
    background-color: white;
  }
  .card-header{
    width: 350px;
    height: 140px;
    /*background-color: aquamarine;*/
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: url('../../assets/box.jpeg') center no-repeat ;
    background-size: 350px 140px;
    position: relative;
  }
  .pic-content{
    width: 120px;
    height: 120px;
    position: relative;
    left: 15px;
    top: 10px;
    float: left;
    border-radius: 50%;
    background-color: aliceblue;
  }
  .header-right{
    width: 180px;
    height: 140px;
    color: white;
    position: absolute;
    top: 40px;
    right: 10px;
  }

  .card-body{
    text-align: center;
  }
  .user-info{
    list-style: none;
  }
  .user-info .user-info-li{
    float: left;
    width: 115px;
    height: 50px;
    border-right: solid 1px #ccc;
  }
  .user-info .user-info-li:last-child{
    border-right: none;
  }
</style>
