<template>
  <div>
    <!--收到-->
    <div v-for="data in pics" class="mypic">
      <a :href="'/postcards/' + data.cardId">
        <img :src="data.cardPic" alt="" class="myimg">
        <div class="myspan">
          <span>ID:  {{data.cardId}}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "UserWallReceive",
        data() {
          return {
            pics: [],
          }
        },
        created() {
          let _this = this;
          this.$ajax.get(`http://localhost:3000/users/userWallReceived/${this.$store.state.userId}`
          ).then(function (result) {
            _this.pics = result.data.data;
            console.log(_this.pics);
          }, function (err) {
            console.log(err);
          });
        }
    }
</script>

<style scoped>
  .mypic {
    width: 192px;
    height: 122px;
    display: inline-block;
    margin-right: 20px;
    /*border: 1px solid #797979;*/
    /*border-radius: 3px;*/
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
