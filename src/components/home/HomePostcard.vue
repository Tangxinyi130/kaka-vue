<template>
    <div id="homePostcard">
      <div class="row" id="dynamic-box">
        <div class="col-md-12" id="dynamic">
          <div class="progress" style="width: 80%">
            <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="{width:( unabsorbedNum/ transmitsNum) * 100 + '%'}">
              {{unabsorbedNum}}
            </div>
          </div>
        </div>
        <div class="col-md-12 dynamic-des">
          已经发送还未被确认收到的数量
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6" style="background-color: lightgreen">
          <div id="sendCard">
            <router-link role="presentation" to="/postcardssend">
              <div>
                <img  src="../../assets/images/home/send.png" alt="">
                <span>发送明信片</span>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-xs-6" style="background-color: lightsalmon">
          <div id="receiveCard" >
            <router-link to="/postcardsreceive">
              <div>
                <img src="../../assets/images/home/receive.png" alt="">
                <span>收到明信片</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "HomePostcard",
      data(){
          return{
            transmitsNum:5,
            unabsorbedNum:0,
            proportion:5,
          }
      },
      mounted(){
        let _this = this;
        this.$ajax.get(`${axios.defaults.baseURL}/statusBar/${this.$store.state.userId}`
        ).then(function(result){
          _this.transmitsNum = result.data.data.transmitsNum;
          _this.unabsorbedNum = result.data.data.unabsorbedNum[0].unabsorbedNum;
          _this.proportion = result.data.data.proportion;
        },function (err) {
          console.log(err);
        })
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
  #dynamic-box{
    height: 100px;
    background-color: #fafafa;
  }
  #dynamic{
    display: flex;
    max-width: 750px;
    height: 50px;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  }
  #dynamic .progress{
    margin-top: 50px;
  }
  .dynamic-des{
    height: 50px;
    line-height: 50px;
    width: 100%;
    text-align: center;
    color: #8cb9f5;
    font-size: 16px;
  }
  #sendCard,#receiveCard{
    height: 100px;
    text-align: center;
    line-height: 100px;
  }
  #sendCard img,#receiveCard img{
    width: 50px;
    height: 50px;
  }


  @media  screen and (max-width: 479px) {

  }
  @media screen and (min-width: 480px) and (max-width: 767px){

  }
  @media screen and (min-width:768px) and (max-width:991px ){
    #homePostcard{
      height: 160px;
    }
    #homePostcard .row{
      max-width: 750px;
      margin:0 auto;
    }
    #dynamic-box{
      height: 80px;
      background-color: #fafafa;
    }
    #dynamic{
      display: flex;
      max-width: 750px;
      height: 40px;
      width: 100%;
      margin: 0 auto;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }
    #dynamic .progress{
      margin-top: 40px;
    }
    .dynamic-des{
      height: 40px;
      line-height: 40px;
      width: 100%;
      text-align: center;
      color: #8cb9f5;
      font-size: 16px;
    }
    #sendCard,#receiveCard{
      height: 80px;
      text-align: center;
      line-height: 80px;
    }
    #sendCard img,#receiveCard img{
      width: 40px;
      height: 40px;
    }

  }
  @media screen and (min-width:992px) and (max-width:1199px ){

  }
  @media screen and (min-width: 1200px){

  }
</style>
