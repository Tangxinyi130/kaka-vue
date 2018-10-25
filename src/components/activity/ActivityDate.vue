<template>
  <div >
  <div class="rightc col-md-4">
  <div class="col-md-10 col-md-offset-2">
    <div class="row">
      <div class="col-md-5 text-center" style="height: 70px;background-color: rgba(145, 191, 191, 1);line-height: 70px;font-size: 20px">全部</div>
    </div>
    <div class="row">
      <ul class="list-group" id="my-data">
      <li class="list-group-item" v-for="(year,key) in years" @click="type=key">
        <span class="data-year"></span><span class="data-year-txt"><span style="cursor: pointer;">{{year}}</span>
          <div v-if="type==key">
            <ul>
               <li v-for="month in months[key]" class="month" >
                 <router-link role="presentation" tag="li" :to="'/activity/'+year+'/'+month.activityMonth"><span style="color:#515151; cursor: pointer;">{{month.activityMonth}}月</span></router-link>
               </li>
            </ul>
          </div>
        </span>
      </li>
      </ul>
    </div>
  </div>
  </div>

</div>
</template>

<script>
  import ActivityAllList from './ActivityAllList'
    export default {
        name: "ActivityDate",
        data(){
            return {
              years:[],
              months:{},
              type:-1,
              flag:false
            }
        },
        created(){
          this.$ajax({
            method: 'get',
            url: `${axios.defaults.baseURL}/activity`
          }).then(res => {
            for(let i=0;i<res.data.data.activityYear.length;i++){
              this.years.push(res.data.data.activityYear[i].activityYear);
            }
            this.months=res.data.data.activityMonth;
            console.log(this.months)
            console.log(this.years)
          })
        }, components:{
        'activity-alllist':ActivityAllList
      }
    }
</script>

<style scoped>
  ul{
    list-style: none;
  }

  #my-data>.list-group-item{
    padding: 0;
    vertical-align: baseline;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
  }
  .data-year{
    width: 4px;
    height: 50px;
    margin-top: 5px;
    display: inline-block;
    background-color: rgb(121,121,121);
  }
  .data-year-txt{
    margin-left: 10px;
    font-size:20px;
  }
  #my-data>.list-group-item>.data-year-txt{
    position: relative;
    top:-16px;
  }
  .month{
    /*padding: 0;*/
    margin-left: 30px;
    margin-top: 20px;
  }



</style>
