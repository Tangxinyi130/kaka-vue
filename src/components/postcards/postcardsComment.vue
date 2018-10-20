<template>
  <div class="row" >
    <div id="publish">
    <h3>评论内容</h3>
      <!-- 发布内容输入框，利用Html5的新属性contenteditable，实现可编辑文本 ，会自动将插入的IMG标签解析-->
      <div class="publish_container">
        <p contenteditable="true" id="input_conta"></p>
      </div>
  </div>
    <!-- 表情和发送-->
    <div class="face_container">
      <!-- 表情Icon，点击触发事件，动态生成表情并显示 -->
      <span @click=make_face() class="make_face" ><img src="/static/eoim/face.png" width="32px" height="32px" alt=""></span>
      <!--<span class="send" @click=send()>选择表情</span>-->
      <span class="send btn btn-default " @click=send()>发送</span>
      <!-- 表情容器 ，包裹生成的表情，绑定点击表情事件-->
      <div id="face" style="width: 300px;height: 250px;" @click=choice_face($event)></div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex"
  import $ from 'jquery'//加载jquery，需要安装npm install jquery -S
  export default {
    name: 'HelloWorld',
    data(){
      return {
        flag:false
      }
    },
    methods:{
      make_face(){
        for(var i=1;i<=53;i++){      //根据表情文件数量决定循环次数，这里为75个表情
          $("div#face").append(`<img src="/static/eoim/${i}.png"  width="32px" height="32px" >`);

        }

      },
      choice_face(e){
        if(e.target.nodeName=="IMG"){
          var choice=e.target;
          //深度复制，复制节点下面所有的子节点 ，直接将整个表情的IMG标签复制，并添加到发布框的<p></p>里面
          var cEle = choice.cloneNode(true);
          $("p#input_conta").append(cEle);
        }
      },
      send(){
        var text=$("#input_conta").html();  //获得发布框的文本内容，表情会以整个img标签文本显示
        $("#input_conta").html("");  //清除发布框的文本内容
        $("div#face").hide();      //隐藏表情选择// 上传图片并发送给后台
        $.ajax({
          url: 'http://localhost:3000/postcards/addcomment',
          type: "post",
          data: {
            'commentUserId':this.userId,
            'commentCardId':this.$route.params.cardId,
            'commentContent':text,
          },
          success: function (data) {
            console.info(data);
          }
        });
      }
    },
    computed: mapGetters([
      "isLogin",
      "userId"
    ]),

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .publish_container{

    border:1px solid #ccc;
    padding:0;
  }
  #input_conta{
    margin:0;
    min-height: 200px;
    text-align:left;
  }
  .icon-emoji{
    height: 64px;
    width: 64px;
    display:inline-block;
    border:1px solid #ccc;
  }
  #face{
    position: absolute;
    z-index: 999;
    overflow: hidden;
  }

  .btn{
    float: right;
    width:150px;
  }
  .make_face>img,.btn{
    margin-top: 15px;

  }
</style>
