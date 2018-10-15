<template>
    <div>
      <h3>设置</h3>
      <app-set-headpic></app-set-headpic>
    </div>

</template>

<script>
    import UserSetHeadpic from "./UserSetHeadpic.vue"
    export default {
        name: "UserSet",
        components: {
          "app-set-headpic": UserSetHeadpic
        }
    }
</script>

<style scoped>

</style>
