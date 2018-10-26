<template>
  <div id="carousel-banner" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carousel-banner" class="active" data-slide-to="0"></li>
      <li data-target="#carousel-banner"  data-slide-to="1"></li>
      <li data-target="#carousel-banner"  data-slide-to="2"></li>
      <li data-target="#carousel-banner"  data-slide-to="3"></li>
    </ol>

    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <a target="_blank" href=""><img width="100%" style="max-height: 456px" src="../../assets/1.jpg" alt="ayinger"></a>
      </div>
      <div class="item ">
        <a target="_blank" href=""><img width="100%" style="max-height: 456px" src="../../assets/2.jpg" alt="2"></a>
      </div>
      <div class="item ">
        <a target="_blank" href=""><img width="100%" style="max-height: 456px" src="../../assets/1.jpg" alt="3"></a>
      </div>
      <div class="item ">
        <a target="_blank" href=""><img width="100%" style="max-height: 456px" src="../../assets/2.jpg" alt="2016年中国市售瓶装精酿啤酒TOP100榜单"></a>
      </div>
    </div>

    <a class="left carousel-control" href="#carousel-banner" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel-banner" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

</template>

<script>
    export default {
        name: "ActivityCarousel"
    }
</script>

<style scoped>
  .carousel-inner{
    width: 100%;
  }
  #carousel-banner{
    position:relative;
    top:-20px;
  }


</style>
