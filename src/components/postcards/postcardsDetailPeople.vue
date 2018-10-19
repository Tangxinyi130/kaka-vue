<template>
    <div >
      <div class="row">
        <div class="top">详情</div>
      </div>
      <div class="row twoPeople" >
        <div class="col-md-6 ">
          <ul class="cont-list list-unstyled">
            <li class="am-gallery-item">
                <div class="img_box col-md-3">
                  <a href="">
                    <img src="../../assets/picture.jpg">
                  </a>
                </div>
                <div class="intro col-md-3">
                  <h3>
                    <a href="/">
                     ID
                    </a>
                  </h3>
                 <p>昵称：小可爱</p><div class="iconCon">
                  <button>+关注</button>
                </div>
                </div>
            </li>
            <li class="am-gallery-item">
              <div class="img_box col-md-3">
                <a href="">
                  <img src="../../assets/picture.jpg">
                </a>
              </div>
              <div class="intro col-md-3">
                <h3>
                  <a href="/">
                    ID
                  </a>
                </h3>
                <p>昵称：小可爱</p>
                <button>+关注</button>
              </div>

            </li>
          </ul>
        </div>
        <div class="col-md-6">
            <div class="twoPeopleMap">
              地图
            </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "cardDetail"
    }
</script>

<style scoped>
  .twoPeople{
    margin-top: 30px;
  }
.top{
  height: 52px;
  font-size: 20px;
  line-height: 52px;
  text-align: center;
  color: white;
  background-color: rgb(82,137,112);
  }
img{
  width: 122px;
  height: 122px;
  border-radius: 122px;

}
 .send-text>p,.receive>p{
   text-align: center;
   margin-left: -45px;
   margin-top: 15px;
 }
  .send-text>button,.receive>button{
    margin-left: 50px;
  }
  .twoPeopleMap{
    width: 100%;
    height: 400px;
    background-color: blue;
  }

</style>
