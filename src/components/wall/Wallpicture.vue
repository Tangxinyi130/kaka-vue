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
              city:'',
            }
        },
      watch:{
        "$route":"getPicture"
      },
      methods:{
          picsrc(wallPic){
            for(let i in wallPic){
              wallPic[i].cardPic = `${axios.defaults.baseURL}${wallPic[i].cardPic}`
            }
          },
          getPicture(){
            console.log(this.$route)
            if(JSON.stringify(this.$route.params)==='{}'){
              this.$ajax({
                method:'get',
                url: `${axios.defaults.baseURL}/wall/walls/1`
              }).then((res)=>{
                this.allPic=res.data.data;
                this.picsrc(this.allPic);
              })
            }else if(this.$route.params.page != undefined && this.$route.path.indexOf('search') === -1 ){
              console.log("类型"+this.$route.params.page)
              this.page=this.$route.params.page
              console.log(this.page)
              this.$ajax({
                method:'get',
                url: `${axios.defaults.baseURL}/wall/walls/${this.page}`
              }).then((res)=>{
                this.allPic=res.data.data;
                this.picsrc(this.allPic);
                console.log(this.allPic);
              })
            }else{
              this.city=this.$route.params.city
              console.log('搜索城市:'+this.city)
              this.$ajax({
                method:'get',
                url: `${axios.defaults.baseURL}/wall/search/${this.city}/${this.page}`
              //  http://localhost:3000/wall/search/${this.city} 这是搜索城市
              //  http://localhost:3000/wall/search/${this.city}/1 城市的第一页,这样就行了啊
              }).then((res)=>{
                this.allPic=res.data.data;
                this.picsrc(this.allPic);
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
