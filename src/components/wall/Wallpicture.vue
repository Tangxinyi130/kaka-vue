<template>
  <div class="row cardsWall">
    <div class="col-xs-6 col-md-3 picList" v-for="pic in allPic" >
      <router-link :to="'/postcards/'+pic.cardId" class="thumbnail">
        <img width="100%" style="height: 170px" :src="pic.cardPic" alt="..." >
      </router-link>
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
              city:''
            }
        },
      watch:{
        "$route":"getPicture"
      },
      methods:{
          getPicture(){
            if(JSON.stringify(this.$route.params)==='{}'){
              this.$ajax({
                method:'get',
                url: "http://localhost:3000/wall/walls/1"
              }).then((res)=>{
                this.allPic=res.data.data;
              })
            }else if(this.$route.params.page!=undefined){
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
                url: `http://localhost:3000/wall/search/${this.city}`
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
.cardsWall{
  margin-top: 40px;
}
.picList{
  height: 200px;
}


</style>
