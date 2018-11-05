<template>
  <div>
    <div class="row">
      <div class="col-md-8">
        <img :src="postcardPic.cardPic" width="100%"  alt="">
      </div>
      <div class="col-md-4 text-center comment">
        <span class="btn glyphicon glyphicon-thumbs-up" @click="myNum" style="font-size: 30px;"></span><span style="font-size:18px;padding-top: 30px;display: inline-block;" >{{likeNum}}</span>
        <span v-if="flag" class="t-font"><span class="btn glyphicon glyphicon-heart-empty" style="font-size: 30px" @click="myCollection" ></span>收藏</span>
        <span v-else class="t-font"><span class="btn glyphicon glyphicon-heart" style="font-size: 30px" @click="unCollection" ></span>已收藏</span>
      </div>
    </div>
    <!--发表评论-->
    <div>
      <postcards-comment @all-comment="updataComment"></postcards-comment>
    </div>
    <!--全部评论-->
    <div class="row">
      <div class="allCommentTitle">
        <p>全部评论</p>
      </div>
    </div>
    <div id="allComment">
      <div class="row" v-for="(content,i) in cardComment" v-if="i<n">
        <div class="commentHead">
          <img :src="content.userHeadPic" alt="" class="headPic">
        </div>
        <div class="commentNickname">{{content.userNickname}}</div>
        <div>{{content.commentTime}}</div>
        <div class="commentDetail">
          <div v-html="content.commentContent" style="font-size:16px;">
            <!--<p contenteditable="true" id="input_conta">-->
              <!--{{content.commentContent}}-->
            <!--</p>-->
          </div>
        </div>
      </div>
      <div v-if="cardComment.length==0" class="text-center comment-text" >暂无评论</div>
      <div v-else-if="cardComment.length<=n"></div>
      <div @click="onload" v-else-if="show" class="lot text-center comment-text1 t-font" ><span class="glyphicon glyphicon-refresh"></span>加载更多</div>
      <div @click="hidden" v-if="unshow" class="unlot text-center comment-text1 t-font" ><span class="glyphicon glyphicon-menu-up"></span>收起</div>
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
              userComment:{},
              flag:true,
              show:true,
              unshow:false,
              n:3,
              likeNum:1
            }
        },
      components:{
           'postcards-comment':postcardsComment
        },
      watch:{
          "$route":"getDetail"
      },
      created(){
          this.getDetail();
          console.log(this.$route.path)
          localStorage.setItem("route",this.$route.path)
          this.$ajax({
            method:'get',
            url:`${axios.defaults.baseURL}/postcards/collection/`+this.cardId
          }).then((res)=>{
            console.log("点赞数"+res.data.data.likeNum[0].cardLike)
            this.likeNum=res.data.data.likeNum[0].cardLike;
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
          getDetail(){
            this.$ajax({
              method:'get',
              url:`${axios.defaults.baseURL}/postcards/`+this.cardId
            }).then((res)=>{
              this.postcardPic = res.data.data.cardInformation[0];
              this.postcardPic.cardPic = `${axios.defaults.baseURL}${this.postcardPic.cardPic}`;
              this.cardComment = res.data.data.cardComment;
              for (var i in this.cardComment) {
                this.cardComment[i].commentTime = this.changeTime(this.cardComment[i].commentTime);
                this.cardComment[i].userHeadPic = `${axios.defaults.baseURL}${this.cardComment[i].userHeadPic}`
              }
              this.$ajax({
                method:'get',
                url:`${axios.defaults.baseURL}/postcards/getcollection/${this.cardId}/${this.$store.state.userId}`
              }).then((res)=>{
                if(res.data.data.length==0){
                  this.flag=true
                }else{
                  this.flag=false
                }
              })

            })
          },
          myCollection(){
            console.log(this.$store.state.userId)
            if(this.$store.state.userId){
            this.$ajax({
              method:'get',
              url:`${axios.defaults.baseURL}/postcards/collect/${this.cardId}/${this.$store.state.userId}`
            }).then((res)=>{
              console.log("收藏")
              this.flag=false
            })
            }else{
              alert("请先登入！")
            }
          },
          unCollection(){
            console.log(this.$store.state.userId)
            this.$ajax({
              method:'get',
              url:`${axios.defaults.baseURL}/postcards/uncollect/${this.cardId}/${this.$store.state.userId}`
            }).then((res)=>{
              console.log("不收藏")
              this.flag=true
            })
          },
          updataComment(data){
            for (var i in data) {
              data[i].commentTime = this.changeTime(data[i].commentTime);
              data[i].userHeadPic = `${axios.defaults.baseURL}${data[i].userHeadPic}`
            }
            this.cardComment=data;

          },
          onload(){
            if(this.n<this.cardComment.length){
              if(this.n+3>=this.cardComment.length){
                this.n+=3;
                this.show=false;
                this.unshow=true;
              }else{
                this.n+=3;
              }
            }else{
              this.show=false
            }
          },
          hidden(){
            this.n=3;
            this.show=true;
            this.unshow=false;
          },
          myNum(){
            console.log('插入点赞数')
            if(this.$store.state.userId){
            this.$ajax({
              method:'get',
              url:`${axios.defaults.baseURL}/postcards/like/`+this.cardId
            }).then((res)=>{
              this.$ajax({
                method:'get',
                url:`${axios.defaults.baseURL}/postcards/collection/`+this.cardId
              }).then((res)=>{
                console.log("新的点赞数："+res.data.data.likeNum[0].cardLike)
                this.likeNum=res.data.data.likeNum[0].cardLike;
              })
            })
          }else{
              alert("请先登入！")
            }}
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
    color: #5e5e5e;
  }
  .commentHead {
    float: left;
  }
  .commentDetail {
    margin-left: 20px;
    padding: 20px;
    display: inline-block;
    margin-bottom: 30px;
    border-style: solid;
    border-image: url("../../assets/images/comment.png") 51/20px round;
  }
  .headPic {
    width: 85px;
    height: 85px;
    border-radius: 85px;
    border: 1px solid #797979;
  }
  .btn{
    box-shadow:none;
  }
  .comment-text{
    padding-bottom: 10px;
    color:#cccccc;
    cursor: pointer;
  }
.comment-text1{
  padding-bottom: 10px;
  cursor: pointer;
}
  .t-font{
    color:#5e5e5e;
  }
</style>
