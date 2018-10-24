<template>
  <!--<div id="fh5co-main">-->
    <!--<div class="container">-->
      <!--<div class="row">-->
        <!--<div id="fh5co-board" >-->
          <!--<div class="item" style="width: 280px">-->
            <!--<div class="animate-box">-->
              <!--<a href="../../assets/picture.jpg" class="image-popup fh5co-board-img"  title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"><img src="../../assets/picture.jpg" alt="Free HTML5 Bootstrap template"></a>-->
            <!--</div>-->
            <!--<div class="fh5co-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?</div>-->
          <!--</div>-->
          <!--<div class="item" style="width: 280px">-->
            <!--<div class="animate-box">-->
              <!--<a href="../../assets/picture.jpg" class="image-popup fh5co-board-img "><img src="../../assets/picture.jpg" alt="Free HTML5 Bootstrap template"></a>-->
              <!--<div class="fh5co-desc">Veniam voluptatum voluptas tempora debitis harum totam vitae hic quos.</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="item" style="width: 280px">-->
            <!--<div class="animate-box">-->
              <!--<a href="../../assets/picture.jpg" class="image-popup fh5co-board-img"><img src="../../assets/picture.jpg" alt="Free HTML5 Bootstrap template"></a>-->
              <!--<div class="fh5co-desc">Optio commodi quod vitae, vel, officiis similique quaerat odit dicta.</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="item" style="width: 280px">-->
            <!--<div class="animate-box">-->
              <!--<a href="images/img_4. jpg" class="image-popup fh5co-board-img"><img src="../../assets/picture.jpg" alt="Free HTML5 Bootstrap template"></a>-->
              <!--<div class="fh5co-desc">Dolore itaque deserunt sit, at exercitationem delectus, consequuntur quaerat sapiente.</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="item">-->
            <!--<div class="animate-box">-->
              <!--<a href="../../assets/picture.jpg" class="image-popup fh5co-board-img"><img src="../../assets/picture.jpg" alt="Free HTML5 Bootstrap template"></a>-->
              <!--<div class="fh5co-desc">Tempora distinctio inventore, nisi excepturi pariatur tempore sit quasi animi.</div>-->
            <!--</div>-->
          <!--</div>-->

        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
  <div class="container">
    <div class="row">
      <div id = "app" style="width: 100%; height: 600px"  >
        <vueWaterfallEasy :imgsArr="imgsarr" ></vueWaterfallEasy>
      </div>
    </div>
  </div>

</template>

<script>
  import vueWaterfallEasy from "vue-waterfall-easy";
      export default {
        name: 'app',
        data() {
          return {
            imgsarr: [],
            group: 0, // request param
          }
        },
        components: {
          vueWaterfallEasy
        },
        methods: {
          getData() {
            var image = [
              {
                "src": "../../../static/img_3.jpg",
                "href": "",
                "info": "一些图片描述文字"
              },
              {
                "src": "../../../static/images/img_12.jpg",
                "href": "/activity",
                "info": "一些图片描述文字"
              },
              {
                "src": "../../../static/images/img_13.jpg",
                "href": "/activity",
                "info": "一些图片描述文字"
              },
              {
                "src": "../../../static/img_3.jpg",
                "href": "/activity",
                "info": "一些图片描述文字"
              },
              {
                "src": "http://localhost:3000/postcardpic/a420181022091083.jpg",
                "href": "/activity",
                "info": "一些图片描述文字"
              },
              {
                "src": "http://localhost:3000/postcardpic/a420181022091083.jpg",
                "href": "/activity",
                "info": "一些图片描述文字"
              },
              {
                "src": "http://localhost:3000/postcardpic/a420181022091083.jpg",
                "href": "/activity",
                "info": "一些图片描述文字"
              },
              {
                "src": "http://localhost:3000/postcardpic/a420181022091083.jpg",
                "href": "/activity",
                "info": "一些图片描述文字"
              },
              {
                "src": "http://localhost:3000/postcardpic/a420181022091083.jpg",
                "href": "/activity",
                "info": "一些图片描述文字"
              },
              {
                "src": "http://localhost:3000/postcardpic/a420181022091083.jpg",
                "href": "/activity",
                "info": "一些图片描述文字"
              },
              {
                "src": "http://localhost:3000/postcardpic/a420181022091083.jpg",
                "href": "/activity",
                "info": "一些图片描述文字"
              },
              {
                "src": "http://localhost:3000/postcardpic/a420181022091083.jpg",
                "href": "/activity",
                "info": "一些图片描述文字"
              },
              {
                "src": "http://localhost:3000/postcardpic/a420181022091083.jpg",
                "href": "/activity",
                "info": "一些图片描述文字"
              },
              {
                "src": "http://localhost:3000/postcardpic/a420181022091083.jpg",
                "href": "/activity",
                "info": "一些图片描述文字"
              },
              {
                "src": "http://localhost:3000/postcardpic/a420181022091083.jpg",
                "href": "/activity",
                "info": "一些图片描述文字"
              },
              {
                "src": "http://localhost:3000/postcardpic/a420181022091083.jpg",
                "href": "/activity",
                "info": "一些图片描述文字"
              },
              {
                "src": "http://localhost:3000/postcardpic/a420181022091083.jpg",
                "href": "/activity",
                "info": "一些图片描述文字"
              },
              {
                "src": "http://localhost:3000/postcardpic/a420181022091083.jpg",
                "href": "/activity",
                "info": "一些图片描述文字"
              },
              {
                "src": "http://localhost:3000/postcardpic/a420181022091083.jpg",
                "href": "/activity",
                "info": "一些图片描述文字"
              },
              {
                "src": "http://localhost:3000/postcardpic/a420181022091083.jpg",
                "href": "/activity",
                "info": "一些图片描述文字"
              },
              {
                "src": "../../../static/img_3.jpg",
                "href": "/activity",
                "info": "一些图片描述文字"
              },
              {
                "src": "http://localhost:3000/postcardpic/a420181022091083.jpg",
                "href": "/activity",
                "info": "一些图片描述文字"
              },
              {
                "src": "http://localhost:3000/postcardpic/a420181022091083.jpg",
                "href": "/activity",
                "info": "一些图片描述文字"
              },
              {
                "src": "http://localhost:3000/postcardpic/a420181022091083.jpg",
                "href": "/activity",
                "info": "一些图片描述文字"
              },
              {
                "src": "http://localhost:3000/postcardpic/a420181022091083.jpg",
                "href": "/activity",
                "info": "一些图片描述文字"
              },
              {
                "src": "http://localhost:3000/postcardpic/a420181022091083.jpg",
                "href": "/activity",
                "info": "一些图片描述文字"
              },
              {
                "src": "http://localhost:3000/postcardpic/a420181022091083.jpg",
                "href": "/activity",
                "info": "一些图片描述文字"
              }]
            this.imgsarr = image
          },
        },
        created() {
          this.getData()
        }
      }

</script>

<style scoped>
  html,
  body,
  #app {
    height: 100%;
    width: 100%;
  }
</style>
