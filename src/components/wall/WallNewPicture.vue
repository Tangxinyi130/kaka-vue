<template>
  <div class="example" style="margin-top: 20px;">
    <Waterfall :gutterWidth="10" :minCol="1" :maxCol="4" :gutterHeight="10" ref="waterfall" :fixWidth="0">
      <WaterfallItem v-for="(src, index) in dataArr" :key="index" :width="270" class="item animated fadeIn">
        <div style="background-color: white;border:7px solid white" id="pic">
         <router-link :to="'/postcards/'+src.cardId"><img :src="src.cardPic"></router-link>
        </div>
      </WaterfallItem>
    </Waterfall>
  </div>
</template>

<script>
  import {Waterfall, WaterfallItem} from 'vue2-waterfall';
  export default {
    name: 'app',
    data() {
      return {
        dataArr:[],
        items: [],
        page: 0,
        allPic:[]
      }
    },
    watch:{
      "$route":"getPicture"
    },
    mounted() {
      this.getPicture();
    },
    components: {
      Waterfall,
      WaterfallItem
    },
    methods: {
      picsrc(wallPic){
        for(let i in wallPic){
          wallPic[i].cardPic = `${axios.defaults.baseURL}${wallPic[i].cardPic}`
        }
      },
      getPicture(){
        var that = this
        console.log("测试："+this.$route.params.city)
        if(this.$route.params.city!=undefined){
          this.city=this.$route.params.city
          console.log('搜索城市:'+this.city)
          this.$ajax({
            method:'get',
            url: `${axios.defaults.baseURL}/wall/search/${this.city}`
          }).then((res)=>{
            this.allPic=res.data.data;
            this.picsrc(this.allPic);
            this.items = this.allPic
            console.log("哈哈2" + this.items)
            var count = 7
            console.log(this.items.slice(count * this.page, count * (this.page + 1)))
            this.dataArr = [];
            this.dataArr = this.dataArr.concat(this.items.slice(count * this.page, count * (this.page + 1)))
            this.page += 1;
            window.addEventListener('scroll', function () {
              var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
              if (scrollTop + window.innerHeight >= document.body.clientHeight) {
                console.log(that.items.slice(count * that.page, count * (that.page + 1)))
                that.dataArr = that.dataArr.concat(that.items.slice(count * that.page, count * (that.page + 1)))
                that.page += 1;
              }
            })
          })
        }else{
          this.$ajax({
                method: 'get',
                url: `${axios.defaults.baseURL}/wall`
              })
                .then((res) => {
                  this.allPic = res.data.data.allPicture;
                  console.log(`${axios.defaults.baseURL}${this.allPic[0].cardPic}`)
                  this.picsrc(this.allPic);
                  this.items = this.allPic
                  console.log("哈哈1" + this.items)
                  var count = 7
                  console.log(this.items.slice(count * this.page, count * (this.page + 1)))
                  this.dataArr = [];
                  this.dataArr = this.dataArr.concat(this.items.slice(count * this.page, count * (this.page + 1)))
                  this.page += 1;
                  window.addEventListener('scroll', function () {
                    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                    if (scrollTop + window.innerHeight >= document.body.clientHeight) {
                      console.log(that.items.slice(count * that.page, count * (that.page + 1)))
                      that.dataArr = that.dataArr.concat(that.items.slice(count * that.page, count * (that.page + 1)))
                      that.page += 1;
                    }
                  })
                })
        }
      }
    },

  }
</script>

<style scoped>
  html,
  body,
  #app {
    -ms-overflow-style: none;
    width: calc(100vw + 18px);
    overflow: auto;
  }

</style>
<style>
  * {
    padding: 0;
    margin: 0;
  }
  .item img {

    width: 100%;
    display: block;
  }
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .fadeIn {
    -webkit-animation-name: zoomIn;
    animation-name: zoomIn;
  }
  #pic:hover{
    box-shadow: 5px 5px 5px #888888;
  }
  #pic{
     border-radius: 5px;
  }
</style>
