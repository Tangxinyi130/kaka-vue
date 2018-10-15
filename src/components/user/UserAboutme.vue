<template>
    <div class="container" style="background-color: lightsalmon">
      <div class="row">
        <div class="col-sm-offset-1 col-sm-6" style="background-color: lightgoldenrodyellow">用户详情</div>
        <div class="col-sm-4" style="background-color: lightgreen">用户地图</div>
      </div>
      <app-detail></app-detail>
    </div>
</template>

<script>
    import UserAboutmeDetail from "@/components/user/UserAboutmeDetail"
    export default {
        name: "UserAboutme",
        components: {
          "app-detail": UserAboutmeDetail
        }
    }
</script>

<style scoped>

</style>
