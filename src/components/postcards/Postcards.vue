<template>
    <div class="container">
      <postcards-detail></postcards-detail>
      <postcards-detailPic></postcards-detailPic>
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
      created() {
        let loading = document.getElementById("Loading");
        if (loading != null) {
          document.body.removeChild(loading);
        }
      },
      methods : {
        // getMsg() {
        //   this.$ajax({
        //     method: 'get',
        //     url: `${axios.defaults.baseURL}/postcards/JS-00001`
        //   }).then(res => {
        //     console.log(res)
        //     this.msg = JSON.stringify(res.data.data);
        //     document.getElementById('main').innerHTML= this.msg
        //   })
        // }
      }
    }
</script>

<style scoped>
  .container {
    background-color: #fafafa;
  }
</style>
