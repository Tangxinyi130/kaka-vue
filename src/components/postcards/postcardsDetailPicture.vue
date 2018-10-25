<template>
  <div>
    <div class="row">
      <div class="col-md-8">
        <img :src="postcardPic.cardPic" width="100%"  alt="">
      </div>
      <div class="col-md-4 text-center comment">
        <span class="btn btn-default glyphicon glyphicon-thumbs-up" style="font-size: 30px"></span>
        <span class="btn btn-default glyphicon glyphicon-heart-empty" style="font-size: 30px"></span>
      </div>
    </div>
    <div>
      <postcards-comment></postcards-comment>
    </div>
    <div class="row">
      <div class="allCommentTitle">
        <p>全部评论</p>
      </div>
    </div>
    <div id="allComment">
      <div class="row" v-for="content in cardComment">
        <div class="commentHead">
          <img :src="content.userHeadPic" alt="" class="headPic">
        </div>
        <div class="commentNickname">{{content.userNickname}}</div>
        <div>{{content.commentTime}}</div>
        <div class="commentDetail">
          <div v-html="content.commentContent">
            <p contenteditable="true" id="input_conta">
              {{content.commentContent}}
            </p>
          </div>
        </div>


        <!--<h3 style="color: #5E5E5E">全部评论</h3>-->
        <!--<div v-for="content in cardComment" class="commentDiv">-->
        <!--<div class="commentUserInfo">-->
        <!--<div>-->
        <!--<img :src="content.commentUserHead" alt="" class="headPic" style="z-index: 999">-->
        <!--</div>-->
        <!--<div>ID：{{content.commentUserId}}</div>-->
        <!--<div>昵称：{{content.commentUserNickname}}</div>-->
        <!--</div>-->
        <!--<div v-html="content.commentContent" class="commentDetail">-->
        <!--<p contenteditable="true" id="input_conta">-->
        <!--{{content.commentContent}}-->
        <!--</p>-->
        <!--</div>-->
        <!--<div>{{content.commentTime}}</div>-->
        <!--<div style="clear: both"></div>-->
        <!--</div>-->
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
              postcardPic:{},
              userComment:{}
            }
        },
        components:{
           'postcards-comment':postcardsComment
        },
        created(){
          this.$ajax({
            method:'get',
            url:`${axios.defaults.baseURL}/postcards/`+this.cardId
          }).then((res)=>{
            this.postcardPic = res.data.data.cardInformation[0];
            this.postcardPic.cardPic = `${axios.defaults.baseURL}${this.postcardPic.cardPic}`;
            console.log(this.postcardPic);
            this.cardComment = res.data.data.cardComment;
            console.log("cardComment： " + JSON.stringify(this.cardComment));
            for (var i in this.cardComment) {
              this.cardComment[i].commentTime = this.changeTime(this.cardComment[i].commentTime);
              this.cardComment[i].userHeadPic = `${axios.defaults.baseURL}${this.cardComment[i].userHeadPic}`
            }

            console.log(this.cardComment.length);
            // for(let i=0;i<this.cardComment.length;i++){
            //   this.$ajax({
            //     method:'get',
            //     url:`${axios.defaults.baseURL}/users/` + this.cardComment[i].commentUserId
            //   }).then((res) => {
            //     this.userComment = res.data.data;
            //     for (var i in this.userComment) {
            //       this.userComment[i].userHeadPic = `${axios.defaults.baseURL}${res.data.data.userHeadPic}`;
            //     }
            //     console.log(this.userComment);
            //     // this.cardComment[i].commentUserId = res.data.data.userId;
            //     // this.cardComment[i].commentUserNickname = res.data.data.userNickname;
            //     // // console.log("头像： " + res.data.data.userHeadPic);
            //     // // console.log("路径： " + axios.defaults.baseURL);
            //     // this.cardComment[i].commentUserHead = `${axios.defaults.baseURL}${res.data.data.userHeadPic}`;
            //   })
            // }
          })
      },
        methods: {
          //修改数据库取出的时间格式
          changeTime(date){
            date = new Date(date);
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            m = m < 10 ? '0' + m : m;
            var d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            var h = date.getHours();
            h = h < 10 ? ('0' + h) : h;
            var mm = date.getMinutes();
            mm = mm < 10 ? ('0' + mm) : mm;
            var s = date.getSeconds();
            s = s < 10 ? ('0' + s) : s;
            return y + '-' + m + '-' + d + " " + h + ":" + mm + ":" + s;
          },
        }
    }
</script>

<style scoped>
  .commentNickname {
    float: left;
    margin-right: 20px;
    margin-left: 35px;
  }
  .allCommentTitle {
    font-size: 20px;
    font-weight: bold;
    margin-top: 15px;
    margin-left: 20px;
    margin-right: 20px;
    border-bottom: 2px solid #797979;
  }
  .allCommentTitle p {
    margin-left: 5px;
    color: #5e5e5e;
  }

  #allComment {
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 20px;
    /*height: 300px;*/
  }
  .commentHead {
    float: left;
  }
  .commentDetail {
    margin-left: 20px;
    /*background-color: lightsalmon;*/
    /*background-image: url("../../assets/images/comment.png");*/
    /*background-repeat: no-repeat;*/
    /*border: 1px solid #797979;*/
    /*width: 50px;*/
    padding: 20px;
    display: inline-block;
    margin-bottom: 30px;
    border-style: solid;
    border-image: url("../../assets/images/comment.png") 51/20px round;
  }
  .commentID {
    float: left;
    margin-right: 20px;
  }

  .headPic {
    width: 85px;
    height: 85px;
    border-radius: 85px;
    border: 1px solid #797979;
  }
</style>
