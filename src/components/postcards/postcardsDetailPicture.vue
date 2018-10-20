<template>
  <div>
    <div class="row">
      <div class="col-md-8">
        <img src="../../assets/picture.jpg" width="100%" height="400px" alt="">
      </div>
      <div class="col-md-4 text-center comment">
        <router-link to=""><button class="btn btn-default btn-lg">评论</button></router-link>
        <button class="btn btn-default btn-lg">收藏</button>
      </div>
    </div>
    <div >
      <postcards-comment></postcards-comment>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h3>全部评论：</h3>
        <dl>
          <dt>某个小可爱：</dt>
          <dd>哇，好漂亮的明信片哇，好漂亮的明信片哇，好漂亮的明信片哇，好漂亮的明信片哇，好漂亮的明信片</dd>
        </dl>
      </div>
    </div>
  </div>

</template>

<script>
  import postcardsComment from './postcardsComment'
    export default {
        name: "postcardsDetailPicture",
        components:{
           'postcards-comment':postcardsComment
        }
    }
</script>

<style scoped>

</style>
