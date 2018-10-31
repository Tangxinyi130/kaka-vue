<template>
  <div id="homeSynopsis">
    <div id="myCarousel" class="carousel slide">
      <!-- 轮播（Carousel）指标 -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <!-- 轮播（Carousel）项目 -->
      <div class="carousel-inner">
        <div class="item active">
          <img src="../../assets/images/home/1.jpg" alt="First slide">
          <div class="carousel-caption">
            <h2>拾笺</h2>
            <p>车水马龙，静下心写一封明信片寄信向陌生的你</p>
          </div>

        </div>
        <div class="item">
          <img src="../../assets/images/home/2.jpg" alt="Second slide">
          <div class="carousel-caption">
            <h2>回归纸笔邮件</h2>
            <p>车水马龙，静下心写一封明信片寄信向陌生的你</p>
            <br>
          </div>
        </div>
        <div class="item">
          <img src="../../assets/images/home/3.jpg" alt="Third slide">
          <div class="carousel-caption">
            <h2>怀念</h2>
            <p>车水马龙，静下心写一封明信片寄信向陌生的你</p>
            <br>
          </div>
        </div>
      </div>
      <!-- 轮播（Carousel）导航 -->
      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>

</template>

<script>
    export default {
        name: "HomeSynopsis"
    }
</script>

<style scoped>
  #homeSynopsis{
    height: 300px;
    /*min-width: 750px;*/
    background-color: #fafafa;
  }
  #myCarousel{
    height: 300px;
  }
  .carousel-inner{
    height: 300px;
  }
  .carousel-inner .item img {
    min-height: 250px;
    width: 100%;
  }
  @media  screen and (max-width: 479px) {
    #homeSynopsis{
      height: 180px;
      background-color: #fafafa;
    }
    #myCarousel{
      height: 180px;
    }
    .carousel-inner{
      height: 180px;
    }
    .carousel-inner .item img{
      min-height: 180px;
      /*min-width: 750px;*/
      width: 100%;
    }
    .carousel-inner .carousel-caption {
      right: 20%;
      left: 20%;
      top:15%;
    }
    .carousel-inner .carousel-caption h2{
      font-size: 20px;
    }
    .carousel-inner .carousel-caption p{
      font-size: 12px;
    }
  }
  @media screen and (min-width: 480px) and (max-width: 767px){
    #homeSynopsis{
      height: 220px;
      background-color: #fafafa;
    }
    #myCarousel{
      height: 220px;
    }
    .carousel-inner{
      height: 220px;
    }
    .carousel-inner .item img{
      min-height: 200px;
      /*min-width: 750px;*/
      width: 100%;
    }
    .carousel-inner .carousel-caption {
      right: 20%;
      left: 20%;
      top:15%;
    }
    .carousel-inner .carousel-caption h2{
      font-size: 24px;
    }
    .carousel-inner .carousel-caption p{
      font-size: 14px;
    }
  }
  @media screen and (min-width:768px) and (max-width:991px ){
    #homeSynopsis{
      height: 260px;
      background-color: #fafafa;
    }
    #myCarousel{
      height: 260px;
    }
    .carousel-inner{
      height: 260px;
    }
    .carousel-inner .item img{
      height: 250px;
      /*min-width: 750px;*/
      width: 100%;
    }
    .carousel-inner .carousel-caption {
      right: 20%;
      left: 20%;
      top: 15%;
    }
    .carousel-inner .carousel-caption h2{
      font-size: 26px;
    }
    .carousel-inner .carousel-caption p{
      font-size: 17px;
    }
  }
  @media screen and (min-width:992px) and (max-width:1199px ){
    .carousel-inner .carousel-caption {
      right: 20%;
      left: 20%;
      top:16%;
    }
    .carousel-inner .carousel-caption h2{
      font-size: 28px;
    }
    .carousel-inner .carousel-caption p{
      font-size: 18px;
    }
  }
  @media screen and (min-width: 1200px){
    .carousel-inner .carousel-caption {
      right: 20%;
      left: 20%;
      top:20%;
    }
    .carousel-inner .carousel-caption h2{
      font-size: 28px;
    }
    .carousel-inner .carousel-caption p{
      font-size: 18px;
    }
  }
</style>
