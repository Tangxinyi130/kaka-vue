<template>
  <div id="homeActivity">
    <div class="activity-nav"><span class="activity-text">近期活动</span></div>
    <div id="blog-body">
      <div  class="blog-slider">
        <swiper :options="swiperOption" class="blog-slider__wrp swiper-wrapper">
          <swiper-slide class="blog-slider__item swiper-slide">
            <div class="blog-slider__img"> <img :src="activityData1.activityImage" alt=""></div>
            <div class="blog-slider__content">
              <span class="blog-slider__code">{{activityData1.activityStartDate}}</span>
              <div class="blog-slider__title">{{activityData1.activityName}}</div>
              <div class="blog-slider__text" v-html="activityData1.activityDetails"></div>
              <a :href="'/activitydetail/' + activityData1.activityId" class="blog-slider__button">详情</a>
            </div>
          </swiper-slide>
          <swiper-slide class="blog-slider__item swiper-slide">
            <div class="blog-slider__img"> <img :src="activityData2.activityImage" alt=""></div>
            <div class="blog-slider__content">
              <span class="blog-slider__code">{{activityData2.activityStartDate}}</span>
              <div class="blog-slider__title">{{activityData2.activityName}}</div>
              <div class="blog-slider__text" v-html="activityData2.activityDetails"></div>
              <a :href="'/activitydetail/' + activityData2.activityId" class="blog-slider__button">详情</a>
            </div>
          </swiper-slide>
          <swiper-slide class="blog-slider__item swiper-slide">
            <div class="blog-slider__img"> <img :src="activityData3.activityImage" alt=""></div>
            <div class="blog-slider__content">
              <span class="blog-slider__code">{{activityData3.activityStartDate}}</span>
              <div class="blog-slider__title">{{activityData3.activityName}}</div>
              <div class="blog-slider__text" v-html="activityData3.activityDetails"></div>
              <a :href="'/activitydetail/' + activityData3.activityId" class="blog-slider__button">详情</a>
            </div>
          </swiper-slide>
        </swiper>
        <!--<div class="blog-slider__pagination"></div>-->
      </div>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper,swiperSlide} from 'vue-awesome-swiper'
    export default {
        name: "HomeActivity",
      components:{
        swiper,
        swiperSlide,
      },
      data(){
        return{
          activityData1:{},
          activityData2:{},
          activityData3:{},
          swiperOption:{
            spaceBetween: 30,
            effect: 'fade',
            speed:1000,
            autoplay : {
              delay:4000
            },
            mousewheel: {
              invert: false,
            },
            // autoHeight: true,
            pagination: {
              el: '.blog-slider__pagination',
              clickable: true,
            }
          },
        }
      },
      methods:{
        changeTime(date){
          date = new Date(date);
          var y = date.getFullYear();
          var m = date.getMonth() + 1;
          m = m < 10 ? '0' + m : m;
          var d = date.getDate();
          d = d < 10 ? ('0' + d) : d;
          var h = date.getHours();
          h = h < 10 ? ('0' + h) : h;
          var mm = date.getMinutes();
          mm = mm < 10 ? ('0' + mm) : mm;
          var s = date.getSeconds();
          s = s < 10 ? ('0' + s) : s;
          return y + '年' + m + '月' + d + "日";
        },
        getRecentActivity(){
          this.$ajax({
            method:'get',
            url:`${axios.defaults.baseURL}/activity`
          }).then(res=>{
            this.activityData1 = res.data.data.allData[0];
            this.activityData2 = res.data.data.allData[1];
            this.activityData3 = res.data.data.allData[2];
            this.activityData1.activityImage = `${axios.defaults.baseURL}${this.activityData1.activityImage}`;
            this.activityData2.activityImage = `${axios.defaults.baseURL}${this.activityData2.activityImage}`;
            this.activityData3.activityImage = `${axios.defaults.baseURL}${this.activityData3.activityImage}`;
            this.activityData1.activityStartDate = this.changeTime(this.activityData1.activityStartDate);
            this.activityData2.activityStartDate = this.changeTime(this.activityData2.activityStartDate);
            this.activityData3.activityStartDate = this.changeTime(this.activityData3.activityStartDate);
            this.activityData1.activityDetails=this.activityData1.activityDetails.replace(/<[^<>]+>/gi,"")
            this.activityData2.activityDetails=this.activityData2.activityDetails.replace(/<[^<>]+>/gi,"")
            this.activityData3.activityDetails=this.activityData3.activityDetails.replace(/<[^<>]+>/gi,"")
          })
        }
      },
      created(){
          this.getRecentActivity();
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #homeActivity{
    margin-top: 15px;
    height: 320px;
    background-color: #fafafa;
  }
  .activity-nav{
    max-width: 1140px;
    height: 45px;
    line-height: 45px;
    background-color: #91bfbf;
    border-radius: 5px 5px 0px 0px;
  }
  .activity-nav .activity-text{
    font-size: 18px;
    color: whitesmoke;
    display: inline-block;
    padding-left: 15px;
  }
  * {
    box-sizing: border-box;
  }
  /*body {*/
    /*margin:0;*/
    /*background-color: #FFE53B;*/
    /*background-image: linear-gradient(147deg, #FFE53B 0%, #fd3838 74%);*/
    /*min-height: 100vh;*/
    /*font-family: 'Fira Sans', sans-serif;*/
    /*display: flex;*/
  /*}*/
  .blog-slider {
    width: 100%;
    position: relative;
    max-width: 800px;
    margin: auto;
    background: #fafafa;
    padding: 25px;
    height: 265px;
    transition: all .3s;
  }
  @media screen and (max-width: 992px) {
    .blog-slider {
      max-width: 680px;
      height: 265px;
    }
  }
  @media screen and (max-width: 768px) {
    .blog-slider {
      /*min-height: 500px;*/
      /*height: auto;*/
      /*margin: 180px auto;*/
    }
  }
  @media screen and (max-height: 500px) and (min-width: 992px) {
    .blog-slider {
      height: 270px;
    }
  }
  .blog-slider__item {
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    .blog-slider__item {
      flex-direction: column;
    }
  }
  .blog-slider__item.swiper-slide-active .blog-slider__img img {
    opacity: 1;
    transition-delay: .3s;
  }
  .blog-slider__item.swiper-slide-active .blog-slider__content > * {
    opacity: 1;
    transform: none;
  }
  .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(1) {
    transition-delay: 0.3s;
  }
  .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(2) {
    transition-delay: 0.4s;
  }
  .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(3) {
    transition-delay: 0.5s;
  }
  .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(4) {
    transition-delay: 0.6s;
  }
  .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(5) {
    transition-delay: 0.7s;
  }
  .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(6) {
    transition-delay: 0.8s;
  }
  .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(7) {
    transition-delay: 0.9s;
  }
  .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(8) {
    transition-delay: 1s;
  }
  .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(9) {
    transition-delay: 1.1s;
  }
  .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(10) {
    transition-delay: 1.2s;
  }
  .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(11) {
    transition-delay: 1.3s;
  }
  .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(12) {
    transition-delay: 1.4s;
  }
  .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(13) {
    transition-delay: 1.5s;
  }
  .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(14) {
    transition-delay: 1.6s;
  }
  .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(15) {
    transition-delay: 1.7s;
  }
  .blog-slider__img {
    width: 300px;
    flex-shrink: 0;
    height: 300px;
    background-image: linear-gradient(147deg, #f5ede7 0%, #eddede 74%);
    box-shadow: 4px 13px 30px 1px rgba(143, 188, 188, 0.08);
    border-radius: 20px;
    -webkit-transform: translateX(-80px);
    transform: translateX(-80px);
    overflow: hidden;
  }
  /*.blog-slider__img:after {*/
    /*content: '';*/
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*background-image: linear-gradient(147deg, #90bebe4d 0%, #8ebbbc 74%);*/
    /*border-radius: 20px;*/
    /*opacity: 0.8;*/
  /*}*/
  .blog-slider__img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    opacity: 0;
    border-radius: 20px;
    transition: all .3s;
  }
  @media screen and (max-width: 768px) {
    .blog-slider__img {
      transform: translateY(-50%);
      width: 90%;
    }
  }
  @media screen and (max-width: 576px) {
    .blog-slider__img {
      width: 95%;
    }
  }
  @media screen and (max-height: 500px) and (min-width: 992px) {
    .blog-slider__img {
      height: 270px;
    }
  }
  .blog-slider__content {
    padding-right: 8px;
  }
  @media screen and (max-width: 768px) {
    .blog-slider__content {
      margin-top: -105px;
      text-align: center;
      padding: 0 30px;
    }
    .blog-slider__code{
      color: #7b7992;
      margin-bottom: 5px;
      display: block;
      font-weight: 500;
    }
  }
  @media screen and (max-width: 576px) {
    .blog-slider__content {
      padding: 0;
    }
  }
  .blog-slider__content > * {
    opacity: 0;
    transform: translateY(25px);
    transition: all .4s;
  }
  .blog-slider__code {
    color: #7b7992;
    margin-bottom: 5px;
    display: block;
    font-weight: 500;
  }
  .blog-slider__title {
    font-size: 20px;
    font-weight: 700;
    color: #0d0925;
    margin-bottom: 5px;
  }
  .blog-slider__text {
    color: #4e4a67;
    margin-bottom: 10px;
    line-height: 1.5em;
    overflow: hidden;
    height: 80px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    word-break: break-all;
  }
  .blog-slider__button {
    display: -ms-inline-flexbox;
    display: inline-flex;
    background-image: linear-gradient(147deg, #bad4aa 0%, #bad4aa 74%);
    padding: 10px 30px;
    border-radius: 50px;
    color: #fff;
    -webkit-box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
    box-shadow: 0px 14px 80px rgba(207, 236, 252, 0.49);
    text-decoration: none;
    font-weight: 500;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 1px;
  }
  @media screen and (max-width: 576px) {
    .blog-slider__button {
      width: 100%;
    }
  }
  .blog-slider .swiper-container-horizontal > .swiper-pagination-bullets, .blog-slider .swiper-pagination-custom, .blog-slider .swiper-pagination-fraction {
    bottom: 10px;
    left: 0;
    width: 100%;
  }
  .blog-slider__pagination {
    position: absolute;
    z-index: 21;
    right: 20px;
    width: 11px !important;
    text-align: center;
    left: auto !important;
    top: 50%;
    bottom: auto !important;
    transform: translateY(-50%);
  }
  @media screen and (max-width: 768px) {
    .blog-slider__pagination {
      transform: translateX(-50%);
      left: 50% !important;
      top: 205px;
      width: 100% !important;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .blog-slider__pagination.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 8px 0;
  }
  @media screen and (max-width: 768px) {
    .blog-slider__pagination.swiper-pagination-bullets .swiper-pagination-bullet {
      margin: 0 5px;
    }
  }
  .blog-slider__pagination .swiper-pagination-bullet {
    width: 11px;
    height: 11px;
    display: block;
    border-radius: 10px;
    background: #062744;
    opacity: 0.2;
    transition: all .3s;
  }
  .blog-slider__pagination .swiper-pagination-bullet-active {
    opacity: 1;
    background: #fd3838;
    height: 30px;
    box-shadow: 0px 0px 20px rgba(252, 56, 56, 0.3);
  }
  @media screen and (max-width: 768px) {
    .blog-slider__pagination .swiper-pagination-bullet-active {
      height: 11px;
      width: 30px;
    }
  }


  @media  screen and (max-width: 479px) {
    #homeActivity{
      height: 440px;
    }
    .blog-slider__text {
      color: #4e4a67;
      margin-bottom: 10px;
      line-height: 1.5em;
      overflow: hidden;
      height: 40px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
    }
    .blog-slider {
      min-height: 390px;
      /*height: auto;*/
      /*margin: 180px auto;*/
    }
  }
  @media screen and (min-width: 480px) and (max-width: 767px){

    #homeActivity{
      height: 440px;
    }
    .blog-slider {
      min-height: 390px;
      /*height: auto;*/
      /*margin: 180px auto;*/
    }
    .blog-slider__text {
      color: #4e4a67;
      margin-bottom: 10px;
      line-height: 1.5em;
      overflow: hidden;
      height: 40px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
    }
  }
  @media screen and (min-width:768px) and (max-width:991px ){
    .blog-slider {
      max-width: 680px;
      height: 250px;
    }
    .blog-slider__img{
      display: none;
    }
    .blog-slider__text {
      color: #4e4a67;
      margin-bottom: 10px;
      line-height: 1.5em;
      overflow: hidden;
      height: 80px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      word-break: break-all;
    }
    #homeActivity{
      height: 305px;
    }
  }
  @media screen and (min-width:992px) and (max-width:1199px ){
    .blog-slider__title{
      font-size: 18px;
      font-weight: 600;
      color: #0d0925;
      margin-bottom: 5px;
    }
    .blog-slider__code{
      color: #7b7992;
      margin-bottom: 8px;
      display: block;
      font-weight: 500;
    }
    .blog-slider__text {
      color: #4e4a67;
      margin-bottom: 10px;
      line-height: 1.5em;
      overflow: hidden;
      height: 80px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      word-break: break-all;

    }
    .blog-slider__button{
      display: inline-flex;
      background-image: linear-gradient(147deg, #a6f5f5c4 0%, #56fabd 74%);
      padding: 9px 30px;
      border-radius: 50px;
      color: #fff;
      box-shadow: 0px 14px 80px rgba(207, 236, 252, 0.49);
      text-decoration: none;
      font-weight: 500;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
      letter-spacing: 1px;
    }
  }
  @media screen and (min-width: 1200px){
    .blog-slider__text{
      color: #4e4a67;
      margin-bottom: 10px;
      line-height: 1.5em;
      overflow: hidden;
      height: 80px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      word-break: break-all;
    }
  }
</style>
