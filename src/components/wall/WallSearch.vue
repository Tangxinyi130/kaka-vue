<template>
  <div class="container">
    <div class="row wallCity" >
      <div class="col-xs-2 col-md-2" @click="flag=!flag">
        <div class="glyphicon glyphicon-align-justify wallpublic" ></div>
        <!--<span v-if="flag">所有城市</span>-->
        <wall-city v-if="flag" :up-show="upflag"></wall-city>
      </div>
      <div class="col-xs-8 col-md-7 text-center">
        <div class="wllTopic wallpublic">展示墙</div>
      </div>
      <div class="col-xs-2 col-md-3 ">
          <div class="input-group wallSearch-a">
            <div class="col-xs-7 col-md-9">
              <input type="text" class="form-control" @keyup="mysearch" placeholder="输入搜索省..." v-model="inputVal">
              <ul v-if="searchResult" id="show">
                <li v-for="index in result">{{index}}</li>
              </ul>
            </div>
            <div class="col-xs-5 col-md-3">
              <span class="glyphicon glyphicon-search"></span>
            </div>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
  import WallCity from './WallCity'
    export default {
        name: "WallSearch",
      data(){
        return {
          flag:false,
          city:[],
          inputVal:'',
          result:[],
          searchResult:false
        }
      },

      created(){
          this.$ajax({
            method:'get',
            url:'http://localhost:3000/wall'
          }).then((res)=>{
            this.city=res.data.data.allCity
            console.log("城市:"+this.city)
          })
      },
      methods:{
        upflag(data){
          this.flag=data
          console.log("我是flag:"+this.flag)
        },
        mysearch(){
          this.result=[];
          console.log('我是搜索')
          console.log(this.city.length)
          console.log(this.inputVal)
          for(let i=0;i<this.city.length;i++){
            var reg=new RegExp(`.*${this.inputVal}`,'gi');
            if(reg.test(this.city[i].regionName) || reg.test(this.city[i].regionId.toUpperCase())){
              this.result.push(this.city[i].regionName);
            }
          }
          if(this.result.length==0 || !this.inputVal.length){
            this.searchResult=false;
            this.result=[];

          }
          console.log(this.result)
          console.log(this.result.length)
          this.searchResult=true;
          return this.result;
        }
      },

      components:{
        'wall-city':WallCity
      },

    }
</script>

<style scoped>
  .glyphicon{
    font-size: 30px;
    color: white;
  }
  .wllTopic{
    /*line-height: 53px;*/
    font-size: 20px;
    text-align: center;
  }
  .container>.wallCity{
    height: 52px;
    background-color: rgb(82,137,112);
  }
  .wallpublic{
    line-height: 52px;
  }
  .wallSearch-a{
    margin-top: 9px;
  }
  #show{
    width: 163px;
    list-style: none;
    position: absolute;
    z-index: 999;
    background-color: white;
    top:36px;
    left:20px;
  }
  #show>li{
    height: 40px;
    line-height: 40px;
  }
  .wallpublic {
    color: white;
  }
</style>
