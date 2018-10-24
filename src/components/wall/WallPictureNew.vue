<template>
  <div id="fh5co-main">
    <div class="container">
      <div class="row">
        <div id="fh5co-board">
          <div class="item" >
            <div class="animate-box">
              <a href="../../assets/picture.jpg" class="image-popup fh5co-board-img" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?"><img src="../../assets/picture.jpg" alt="Free HTML5 Bootstrap template"></a>
            </div>
            <div class="fh5co-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?</div>
          </div>
          <div class="item">
            <div class="animate-box">
              <a href="../../assets/picture.jpg" class="image-popup fh5co-board-img"><img src="../../assets/picture.jpg" alt="Free HTML5 Bootstrap template"></a>
              <div class="fh5co-desc">Veniam voluptatum voluptas tempora debitis harum totam vitae hic quos.</div>
            </div>
          </div>
          <div class="item">
            <div class="animate-box">
              <a href="../../assets/picture.jpg" class="image-popup fh5co-board-img"><img src="../../assets/picture.jpg" alt="Free HTML5 Bootstrap template"></a>
              <div class="fh5co-desc">Optio commodi quod vitae, vel, officiis similique quaerat odit dicta.</div>
            </div>
          </div>
          <div class="item">
            <div class="animate-box">
              <a href="../../assets/picture.jpg" class="image-popup fh5co-board-img"><img src="../../assets/picture.jpg" alt="Free HTML5 Bootstrap template"></a>
              <div class="fh5co-desc">Dolore itaque deserunt sit, at exercitationem delectus, consequuntur quaerat sapiente.</div>
            </div>
          </div>
          <div class="item">
            <div class="animate-box">
              <a href="../../assets/picture.jpg" class="image-popup fh5co-board-img"><img src="../../assets/picture.jpg" alt="Free HTML5 Bootstrap template"></a>
              <div class="fh5co-desc">Tempora distinctio inventore, nisi excepturi pariatur tempore sit quasi animi.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Wallpicture",
    data(){
      return {
        allPic:{},
        page:1,
        sumPage:0,
        city:'',
      }
    },
    watch:{
      "$route":"getPicture"
    },
    methods:{
      getPicture(){
        console.log(this.$route)
        if(JSON.stringify(this.$route.params)==='{}'){
          this.$ajax({
            method:'get',
            url: "http://localhost:3000/wall/walls/1"
          }).then((res)=>{
            this.allPic=res.data.data;
          })
        }else if(this.$route.params.page != undefined && this.$route.path.indexOf('search') === -1 ){
          console.log("类型"+this.$route.params.page)
          this.page=this.$route.params.page
          console.log(this.page)
          this.$ajax({
            method:'get',
            url: `http://localhost:3000/wall/walls/${this.page}`
          }).then((res)=>{
            this.allPic=res.data.data;
            console.log(this.allPic)
          })
        }else{
          this.city=this.$route.params.city
          console.log('搜索城市:'+this.city)
          this.$ajax({
            method:'get',
            url: `http://localhost:3000/wall/search/${this.city}/${this.page}`
            //  http://localhost:3000/wall/search/${this.city} 这是搜索城市
            //  http://localhost:3000/wall/search/${this.city}/1 城市的第一页,这样就行了啊
          }).then((res)=>{
            this.allPic=res.data.data;
            console.log(this.allPic)
          })
        }
      }
    },
    created(){
      this.getPicture();
    },
  }
</script>

<style scoped>

</style>
