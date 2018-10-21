<template>
  <div class="row cardsWall">
    <div class="col-xs-6 col-md-3" v-for="pic in allPic">
      <router-link :to="'/postcards/'+pic.cardId" class="thumbnail">
        <img width="100%" height="167px" :src="pic.cardPic" alt="...">
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
              sumPage:0
            }
        },
        created(){
          if(JSON.stringify(this.$route.params)==='{}'){
            this.$ajax({
              method:'get',
              url: "http://localhost:3000/wall/walls/1"
            }).then((res)=>{
              this.allPic=res.data.data;
            })
          }else{
            this.page=this.$route.params.page
            console.log(this.page)
            this.$ajax({
              method:'get',
              url: `http://localhost:3000/wall/walls/${this.page}`
            }).then((res)=>{
              this.allPic=res.data.data;
              console.log(this.allPic)
            })
          }
        }
    }
</script>

<style scoped>
.cardsWall{
  margin-top: 40px;
}


</style>
