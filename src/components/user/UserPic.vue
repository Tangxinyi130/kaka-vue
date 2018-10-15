<template>
    <div>
      <h3>查看明信片图片id:{{postcardId}}</h3>
    </div>
</template>

<script>
    export default {
        name: "UserPic",
       data() {
          return {
            postcardId: this.$route.params.postcardId
          }
       }
    }
</script>

<style scoped>

</style>
