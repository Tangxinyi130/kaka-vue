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
            <br>
            <p>车水马龙，静下心写一封明信片寄信向陌生的你</p>
            <br>
            <br>
            <br>
            <br>
          </div>

        </div>
        <div class="item">
          <img src="../../assets/images/home/2.jpg" alt="Second slide">
          <div class="carousel-caption">
            <h2>回归纸笔邮件</h2>
            <br>
            <p>车水马龙，静下心写一封明信片寄信向陌生的你</p>
            <br>
            <br>
          </div>
        </div>
        <div class="item">
          <img src="../../assets/images/home/3.jpg" alt="Third slide">
          <div class="carousel-caption">
            <h2>怀念</h2>
            <br>
            <p>车水马龙，静下心写一封明信片寄信向陌生的你</p>
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
    max-width: 750px;
    background-color: #fafafa;
  }
  #myCarousel{
    height: 300px;
  }
  .carousel-inner{
    height: 300px;
  }
  img{
    height: 250px;
    width: 750px;
  }
  @media  screen and (max-width: 479px) {

  }
  @media screen and (min-width: 480px) and (max-width: 767px){

  }
  @media screen and (min-width:768px) and (max-width:991px ){

  }
  @media screen and (min-width:992px) and (max-width:1199px ){

  }
  @media screen and (min-width: 1200px){

  }
</style>
