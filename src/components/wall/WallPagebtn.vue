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
  <div>
    <button v-for="i in totalPage"><router-link :to="'/wall/'+i">{{i}}</router-link></button>
  </div>
</template>

<script>
    export default {
        name: "WallPagebtn",
      data(){
          return {
            num:6,
            limit:3
          }
      },
      props:['sumCount'],
      computed:{
          totalPage(){
            return Math.ceil(this.sumCount/this.limit)
          }
      }
    }
</script>

<style scoped>

</style>
