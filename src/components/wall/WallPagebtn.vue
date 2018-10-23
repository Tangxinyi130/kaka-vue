<template>
  <!--<div class="page-wrap">-->
    <!--<ul v-show="prePage" class="li-page" v-tap="{methods: goPrePage}">上一页</ul>-->
    <!--<ul>-->
      <!--<li v-for="i in showPageBtn" :class="{active: i === currentPage, pointer: i, hover: i && i !== currentPage}"-->
          <!--v-tap="{methods: goPage, i: i}">-->
        <!--<a v-if="i" class="notPointer">{{i}}</a>-->
        <!--<a v-else>···</a>-->
      <!--</li>-->
    <!--</ul>-->
    <!--<ul v-show="nextPage" class="li-page" v-tap="{methods: goNextPage}">下一页</ul>-->
  <!--</div>-->
  <div class="row">
    <nav class="paging">
      <!--<ul class="pagination">-->
        <!--<li>-->
          <!--<a href="#" aria-label="Previous" title="上一页">-->
            <!--<span aria-hidden="true">«</span>-->
          <!--</a>-->
        <!--</li>-->
        <!--<li v-for="i in totalPage">-->
          <button v-for="i in totalPage" @click="go(i)">{{i}}</button>
        <!--</li>-->
        <!--<li>-->
          <!--<a href="" aria-label="Next">-->
            <!--<span aria-hidden="true">»</span>-->
          <!--</a>-->
        <!--</li>-->
      <!--</ul>-->
    </nav>
  </div>
</template>

<script>
    export default {
        name: "WallPagebtn",
      data(){
          return {
            num:6,
            limit:12,
            type1:this.id.type
          }
      },

      props:['sumCount','id'],
      computed:{
          totalPage(){
            return Math.ceil(this.sumCount/this.limit)
          }
      },

      methods:{
          go(i){
            //判断路由是否有搜索city
            console.log(this.$route.path.indexOf('search'))
            if(this.$route.path.indexOf('search') === -1 ){
              this.$router.replace({path:`/wall/${i}`})
            }else{
              console.log(this.$router)
              var url = this.$route.path
              ///wall/search/北京/1"

              this.$router.replace({path:url.substring(0,url.lastIndexOf("/"))+ '/' + i})
            }
          }
      }
    }
</script>

<style scoped>

</style>
