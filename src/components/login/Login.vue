<template>
  <div>
    <div style="width:100%;height:590px;background-color:#fafafa">
      <div class="container" style=" height: 500px;background-color:#ebf6df">
        <div class="row" style="height:53px;background-color:#528970">
          <div class="col-sm-12" style="width:200px;height:53px;line-height: 52px;font-size: 18px;color: white">发送明信片
          </div>
        </div>
        <div class="row" style="height:447px;">
          <div class="container col-sm-10 col-sm-offset-1" style="  height:400px;background-color:#fafafa">
            <div class="row" style="font-size: 18px;margin-top: 30px;height: 300px">
              <div class="col-sm-3 col-sm-offset-1"style="height: 200px;margin-top:50px;"><app-loginslogan></app-loginslogan></div>
              <div class="col-sm-4 col-sm-offset-4"style="height: 300px;background-color:lavender;opacity: 0.9"><app-loginlist></app-loginlist></div>
            </div>


          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import LoginList from "./LoginList";
  import LoginSlogan from "./LoginSlogan";
    export default {
        name: "Login",
      components: {
        "app-loginslogan":LoginSlogan,
        "app-loginlist": LoginList,
      },
    }
</script>

<style scoped>

</style>
