<template>
    <div class="row">
      <div class="col-sm-offset-1 col-sm-10" style="background-color: lightblue">
        <h5>关于我的</h5>
        <button v-if="userId == id">编辑</button>
      </div>
    </div>

</template>

<script>
  import {mapGetters} from "vuex"
    export default {
        name: "UserAboutmeDetail",
        computed: mapGetters([
        "isLogin",
        "userId"
        ]),
      data() {
        return {
          id: this.$route.params.id
        }
      }
    }
</script>

<style scoped>

</style>
