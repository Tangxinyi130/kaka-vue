<template>
  <div>
    <!--收藏-->
    <div v-for="data in myActData1" class="mypic">
      <a :href="'/postcards/' + data.cardId">
        <img :src="data.cardPic" alt="" class="myimg">
        <div class="myspan">
          <span>ID:  {{data.cardId}}</span>
        </div>
      </a>
    </div>

    <div class="block text-right">
      <span class="demonstration"></span>
      <el-pagination ref="elpage"
                     @current-change="change()"
                     :current-page.sync="pageIndex"
                     layout="prev, pager, next"
                     :total="pageCount"
                     :page-size = "pagesize"
      >
      </el-pagination>
    </div>

  </div>
</template>

<script>
    export default {
        name: "UserWallCollection",
      data() {
        return {
          pics: [],
          pageIndex: 1,
          pagesize: 12,
          pageCount:0,
          activitys: [],
          myActData: []
        }
      },
      computed: {
        myActData1() {
          return this.activitys
        }
      },
      mounted() {
        let _this=this
        this.$ajax.get(`${axios.defaults.baseURL}/users/userWallCollection/${this.$route.params.id}`
        ).then((result) =>{
          _this.myActData= result.data.data;
          for(var i in _this.myActData) {
            _this.myActData[i].cardPic = `${axios.defaults.baseURL}${_this.myActData[i].cardPic}`;
          }
          _this.pageCount=_this.myActData.length;
          _this.loadData();
        })
      },
      methods: {
        loadData() {
          this.activitys = [];
          let start = (this.pageIndex - 1) * this.pagesize;
          let end = start + this.pagesize;
          if(end>=this.pageCount){
            end=this.pageCount
          }
          for (var i = start; i < end; i++) {
            this.activitys.push(this.myActData[i])
          }
        },
        change() {
          this.loadData();
        },
      },
    }
</script>

<style scoped>
  .mypic {
    width: 192px;
    height: 122px;
    display: inline-block;
    margin-right: 30px;
  }
  .myimg {
    width: 190px;
    height: 120px;
    border: 1px solid #797979;
    border-radius: 3px;
  }
  .myspan {
    text-align: center;
    color: #5E5E5E;
    margin-top: 5px;
  }

</style>
