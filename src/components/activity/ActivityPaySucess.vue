<template>
    <div>
      <div class="ok">支付成功</div>
      <router-link to="/myactivity"><button>确认</button></router-link>
    </div>
</template>

<script>
    export default {
        name: "ActivityPaySucess"
    }
</script>

<style scoped>
.ok{
  width: 300px;
  height: 300px;
  background-color: red;
}
</style>
