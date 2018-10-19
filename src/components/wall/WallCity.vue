<template>
  <div class="col-xs-12 col-md-12 allCity">
      <ul>
        <li v-for="city in allCityName">{{city}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "WallCity",
        data(){
          return {
            allCityId:[],
            allCityName:[]
          }
        },
        created() {
          this.$ajax({
            method: 'get',
            url: 'http://localhost:3000/wall'
          }).then(res => {
            for(let i=0;i<res.data.data.allCity.length;i++){
              this.allCityId.push(res.data.data.allCity[i].regionId);
              this.allCityName.push(res.data.data.allCity[i].regionName);
            }
          })
        }
    }
</script>

<style scoped>
.allCity{
  position: absolute;
  z-index: 4;
  background-color: white;
}
  ul{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  li{
    padding: 8px 0;
    float:left;
    text-align: center;
    margin-left: 6px;
    margin-right: 6px;
  }
</style>
