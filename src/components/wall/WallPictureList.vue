<template>
  <div class="container text-center" style="background-color: antiquewhite">
    <div>
      <wall-picture></wall-picture>
      <!--<router-view></router-view>-->
      <!--<wall-picturenew></wall-picturenew>-->
      <!--<my-test></my-test>-->
      <wall-pagebtn :sumCount="sumCount" :id="id"></wall-pagebtn>
    </div>
  </div>
</template>

<script>
  import wallpicture from './Wallpicture'
  import WallPictureNew from './WallPictureNew'
  import test from './test'
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
        'wall-pagebtn':WallPagebtn,
        'wall-picturenew':WallPictureNew,
        'my-test':test
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
                url: `${axios.defaults.baseURL}/wall/search/${this.city}`
              }).then((res) => {
                this.sumCount = res.data.data.length;
                console.log("按城市搜的数量" + this.sumCount)
              })
              }else{
              this.id.type=true
              this.$ajax({
                    method: 'get',
                    url: `${axios.defaults.baseURL}/wall`
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
