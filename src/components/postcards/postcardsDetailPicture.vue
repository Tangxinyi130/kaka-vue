<template>
  <div>
    <div class="row">
      <div class="col-md-8">
        <img :src="postcardPic.cardPic" width="100%" height="400px" alt="">
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
        <dl v-for="content in cardComment">
          <dt>{{content.commentUserId}}：</dt>
          <dd v-html="content.commentContent"><p contenteditable="true" id="input_conta">{{content.commentContent}}</p></dd>
          <dd>{{content.commentTime}}</dd>
        </dl>
      </div>
    </div>
  </div>

</template>

<script>
  import postcardsComment from './postcardsComment'
    export default {
        name: "postcardsDetailPicture",
      data(){
          return {
            cardId:this.$route.params.cardId,
            cardComment:{},
            postcardPic:{}
          }
      },
        components:{
           'postcards-comment':postcardsComment
        },
      created(){
        this.$ajax({
          method:'get',
          url:'http://localhost:3000/postcards/'+this.cardId
        }).then((res)=>{
          this.postcardPic=res.data.data.cardInformation[0]
          console.log(this.postcardPic)
          this.cardComment=res.data.data.cardComment
          console.log("评论："+this.cardComment[0].commentUserId)
          console.log(this.cardComment.length)
          for(let i=0;i<this.cardComment.length;i++){
            this.$ajax({
              method:'get',
              url:'http://localhost:3000/users/'+this.cardComment[i].commentUserId
            }).then((res)=>{
              this.cardComment[i].commentUserId=res.data.data.userName
            })
          }
        })


      }

    }
</script>

<style scoped>

</style>
