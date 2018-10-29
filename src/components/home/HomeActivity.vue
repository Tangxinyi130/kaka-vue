<template>
  <div id="homeActivity">
    <div class="activity-nav"><span class="activity-text">近期活动</span></div>
    <div style="margin-top: 10px; height: 240px; max-width:1220px;">
      <swiper ref="mySwiper" :options="swiperOption">
        <swiper-slide class="item">
          <div class="homeactivity">

              <img class="img-activity"  src="../../assets/images/img_3.jpg" alt="">

            <div class="activity-des" ></div>
          </div>

        </swiper-slide>
        <br><br><br>
        <swiper-slide class="item"> xiangqingSlide2</swiper-slide>
        <br><br><br>
        <swiper-slide class="item">Slide3</swiper-slide>
        <br><br><br>
        <swiper-slide class="item">Slide4</swiper-slide>
        <br><br><br>
        <swiper-slide class="item">Slide5</swiper-slide>
        <br><br><br>
        <swiper-slide class="item">Slide6</swiper-slide>
        <br><br><br>
        <swiper-slide class="item">Slide7</swiper-slide>
        <br><br><br>
        <swiper-slide class="item">Slide8</swiper-slide>
        <br><br><br>
        <swiper-slide class="item">Slide9</swiper-slide>
        <br><br><br>
        <swiper-slide class="item">Slide10</swiper-slide>
      </swiper>
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
        return {
          activityData:{},
          swiperOption: {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 2,
            speed:500,
            loop : true,
            autoplay : {
              delay:3000
            },
            autoplayDisableOnInteraction:true,
            // slidesPerView: "auto",
            coverflowEffect: {
              rotate: 15,
              stretch: -100, // slide左右距离
              depth: 400, // slide前后距离
              modifier: 0.5, //
              slideShadows: true // 滑块遮罩层

            },
            on:{
              click:()=>{
                let swiper = this.$refs.mySwiper.swiper;
                let i = swiper.activeIndex;
                let flag = this.imgList[i];
                location.href = flag.url
              }
            }
            // pagination: {
            //   el: ".swiper-pagination",
            //   type: "bullets"
            // }
          }
        }
      },
      methods:{
        getRecentActivity(){
          this.$ajax({
            method:'get',
            url:`${axios.default.baseURL}/activity`
          }).then(res=>{
            this.activityData = res.data.data;
            this.activityData.goodsPic = `${axios.default.baseURL}${this.activityData.goodsPic}`
          })
        }
      },
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #homeActivity{
    margin-top: 15px;
    height: 305px;
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
  .intro{
    margin-left: -10px;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    background: #ddd;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .homeactivity{
    background-color: yellow;
    margin: 0;
    padding: 0;
    height: 95%;
    width: 95%;
  }
  .img-activity{
    width:100%;
    height: 100%;
    position: relative;
  }
  .activity-des{
    width:100%;
    height: 100%;
    background-color: rgba(61, 192, 255, 0.2);
    position: absolute;
    display: none;
    top: 0;
  }
  .img-activity:hover.activity-des{
    display: block;
    cursor: pointer;
  }
  .activity-left{

  }
  .activity-right{

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
