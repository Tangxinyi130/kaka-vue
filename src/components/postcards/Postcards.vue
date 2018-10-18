<template>
    <div class="container">
      <postcards-detail></postcards-detail>
      <postcards-detailPic></postcards-detailPic>
      <button @click="getMsg">获取</button>
      <span id="main"></span>
    </div>
</template>

<script>
  import postcardsDetailPeople from './postcardsDetailPeople'
  import postcardsDetailPicture from './postcardsDetailPicture'
    export default {
        name: "Postcards",
        data(){
          return {
            msg:''
          }
        },
        components: {
          'postcards-detail':postcardsDetailPeople,
          'postcards-detailPic':postcardsDetailPicture
        },
      methods : {
        getMsg() {
          this.$ajax({
            method: 'get',
            url: 'http://localhost:3000/postcards/JS-00001'
          }).then(res => {
            console.log(res)
            this.msg = JSON.stringify(res.data.data);
            document.getElementById('main').innerHTML= this.msg
          })
        }
      }
    }
</script>

<style scoped>

</style>
