<template>
  <div class="container text-center" style="background-color: antiquewhite">
    <div>
      <wall-picture></wall-picture>
      <!--<router-view></router-view>-->
      <Wall-pagebtn :sumCount="sumCount" :id="id"></Wall-pagebtn>
    </div>
  </div>
</template>

<script>
  import wallpicture from './Wallpicture'
  import WallPagebtn from './WallPagebtn'
    export default {
        name: "WallPicture",
      data(){
        return {
          sumCount:0,
          city:'',
          id:{
            type:""
          }

        }
      },
      components:{
        'wall-picture':wallpicture,
        'Wall-pagebtn':WallPagebtn
      },
      watch:{
          "$route":"getPic"
      },
      created(){
        this.getPic();
      },
      methods:{
          getPic() {
            if(this.$route.params.city!=undefined){
              this.id.type=false
              console.log(this.type)
              this.city = this.$route.params.city
              console.log('我是搜索的城市:' + this.city)
              this.$ajax({
                method: 'get',
                url: `http://localhost:3000/wall/search/${this.city}`
              }).then((res) => {
                this.sumCount = res.data.data.length;
                console.log("按城市搜的数量" + this.sumCount)
              })
              }else{
              this.id.type=true
              this.$ajax({
                    method: 'get',
                    url: "http://localhost:3000/wall"
                  }).then((res) => {
                    this.sumCount = res.data.data.allPicture.length;
                    console.log("sum: " + this.sumCount)
                  })
              }
            }
          }
    }
</script>

<style scoped>


</style>
