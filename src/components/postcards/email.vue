<template>
    <div>
      成功
    </div>
</template>

<script>
    export default {
        name: "email",
      created(){
        this.$ajax({
          method:'get',
          url:'http://localhost:3000/send/sendEmail'
        }).then((res)=>{
       console.log("成功")
        })
      }

    }
</script>

<style scoped>

</style>
