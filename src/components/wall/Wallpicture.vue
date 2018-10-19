<template>
  <div class="row cardsWall">
    <div class="col-xs-6 col-md-3" v-for="pic in allPic">
      <a :href="'/postcards/'+pic.cardId" class="thumbnail">
        <img width="100%" src="../../assets/picture.jpg" alt="...">
      </a>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Wallpicture",
        data(){
            return {
              allPic:{}
            }
        },
        created(){
            this.$ajax({
              method:'get',
              url: 'http://localhost:3000/wall'
            }).then((res)=>{
                console.log(res.data.data.allPicture)
              this.allPic=res.data.data.allPicture;
                console.log(this.allPic)
            })
        }
    }
</script>

<style scoped>
.cardsWall{
  margin-top: 40px;
}


</style>
