<template>
  <div id="homePostcard">
    <img id="bgImg" src="../../assets/images/home/tree.png">
    <img id="chicken" src="../../assets/images/home/chicken7.gif"  :style="{left: chickenLeft}">
    <div class="row">
      <!--<div class="col-md-12">-->
      <div class="progress">
        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="{width:( unabsorbedNum/ transmitsNum) * 100 + '%'}">
          {{unabsorbedNum}}&nbsp;{{postcard}}&nbsp;on&nbsp;the&nbsp;way
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomePostcard1",
    data(){
      return{
        transmitsNum:5,
        unabsorbedNum:0,
        proportion:5,
        chickenLeft: "-30px",
        screenWidth:document.body.clientWidth,
        postcard:"",
      }
    },
    watch:{
      screenWidth(val){
        if(!this.timer){
          this.screenWidth=val;
          this.timer =true;
          let _this = this;
          setTimeout(function () {
            _this.init();
            _this.timer = false;
          },400);
        }
        this.screenWidth =val;
      }
    },
    methods:{
      loadMax(){
        let _this = this;
        this.$ajax.get(`${axios.defaults.baseURL}/statusBar/${this.$store.state.userId}`
        ).then(function(result){
            _this.transmitsNum = result.data.data.transmitsNum;
            _this.unabsorbedNum = result.data.data.unabsorbedNum[0].unabsorbedNum;
            _this.proportion = result.data.data.proportion;
            switch (_this.unabsorbedNum) {
              case 0: _this.chickenLeft = "-30px"; _this.postcard = "postcard"; break;
              case 1: _this.chickenLeft = "90px"; _this.postcard = "postcard"; break;
              case 2: _this.chickenLeft = "240px"; _this.postcard = "postcards"; break;
              case 3: _this.chickenLeft = "390px"; _this.postcard = "postcards"; break;
              case 4: _this.chickenLeft = "540px"; _this.postcard = "postcards"; break;
              case 5: _this.chickenLeft = "670px"; _this.postcard = "postcards"; break;
              default:
                _this.chickenLeft = "-30px"; _this.postcard = ""; break;

            }

        },function (err) {
          console.log(err);
        })
      },
    },
    mounted(){
      const _this =this;
      window.onresize=()=>{
        return (()=>{
          window.screenWidth = document.body.clientWidth;
          _this.screenWidth = window.screenWidth;
        })();
      }
      this.loadMax();
    },
  }
</script>

<style scoped>
  #homePostcard{
    height: 200px;
  }
  #homePostcard .row{
    max-width: 750px;
    margin:0 auto;
  }
  #chicken {
    width: 140px;
    height: 145px;
    position: absolute;
    top: 60px;
  }
  #bgImg{
    width: 750px;
    height: 185px;
  }

  .progress-bar{
    line-height: 15px;
    font-size: 12px;
  }
  .progress {
    height: 15px;
  }



  @media  screen and (max-width: 479px) {
    #homePostcard{
      margin-top: 10px;
      height: 145px;
    }
    #chicken {
      display: none;
      width: 120px;
      height: 125px;
      position: absolute;
      top: 20px;
    }
    #bgImg{
      width: 100%;
      height: 120px;
    }

    .progress-bar{
      line-height: 15px;
      font-size: 12px;
    }
    .progress {
      height: 15px;
      margin-bottom: 0px;
    }
  }
  @media screen and (min-width: 480px) and (max-width: 767px){
    #homePostcard{
      height: 160px;
    }
    #chicken {
      display: none;
      width: 120px;
      height: 125px;
      position: absolute;
      top: 40px;
    }
    #bgImg{
      width: 100%;
      height: 145px;
    }

    .progress-bar{
      line-height: 15px;
      font-size: 12px;
    }
    .progress {
      height: 15px;
    }
  }
  @media screen and (min-width:768px) and (max-width:991px ){
    #homePostcard{
      height: 160px;
    }
    #chicken {
      display: none;
      width: 120px;
      height: 125px;
      position: absolute;
      top: 40px;
    }
    #bgImg{
      width: 470px;
      height: 145px;
    }

    .progress-bar{
      line-height: 15px;
      font-size: 12px;
    }
    .progress {
      height: 15px;
    }
  }
  @media screen and (min-width:992px) and (max-width:1199px ){
    #chicken {
      display: none;
      width: 130px;
      height: 135px;
      position: absolute;
      top: 70px;
    }
    #bgImg{
      width: 616px;
      height: 185px;
    }
    .progress-bar{
      line-height: 15px;
      font-size: 12px;
    }
    .progress {
      height: 15px;
    }

  }
  @media screen and (min-width: 1200px){

  }
</style>
