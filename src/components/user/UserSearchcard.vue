<template>
  <div style="width:100%;height:590px;background-color:#ebf6df">
    <div class="container" style="">
      <div class="row" style="height:53px;background-color:#528970;">
        <div class="col-sm-12" style="width:200px;height:53px;line-height: 52px;font-size: 18px;color: white">查询明信片
        </div>
      </div>
      <div class="row" style="height:447px;background-color:lightgoldenrodyellow">
        <div class="container col-sm-8 col-sm-offset-2">
          <div class="row"style="margin-top:60px;">
             <div class="col-sm-2 col-sm-offset-9">
             <select id="opt">
                 <option>请选择地区:</option>
               <option v-for="city in allCityName">{{city}}</option>
               </select>
               <button @click="dosearch">点击搜索</button>
               </div>
          </div>
          <div class="row" style="height:300px;margin-top:20px;background-color:#fafafa">

          </div>

        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
    <!--<h3>查询明信片</h3>-->
</template>

<script>
    export default {
      methods: {
        dosearch:function () {
          this.$store.state.city= $("#opt").val();
          console.log(this.$store.state.city);
          console.log(localStorage.userId)
          // *******************
          let _this =this;
          axios.post("http://localhost:3000/users/searchMyPostcards",
            {
              userId:localStorage.userId,
              province:this.$store.state.city
            }).then(function (result) {
             console.log(result.data.data[0])
          }, function (err) {
            console.log(err);
          })
          // *****************
        }
      },
      name: "UserSearchcard",
      data(){
        return {
          allCityId:[],
          allCityName:[],
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
        });
           console.log(this.$store.state.city)
      },

    }
</script>

<style scoped>

</style>
