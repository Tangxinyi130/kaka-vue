<template>
    <div>
      <div style="width:100%;height:590px;background-color:#fafafa">
        <div class="container" style=" height: 500px;background-color:#ebf6df">
          <div class="row" style="height:53px;background-color:#528970">
            <div class="col-sm-12" style="width:200px;height:53px;line-height: 52px;font-size: 18px;color: white">发送明信片
            </div>
          </div>
          <div class="row" style="height:447px;">
            <div class="container col-sm-10 col-sm-offset-1" style="height:380px;background-color:#fafafa">
              <div class="row"style="margin-top: 30px">
                <div class="col-sm-10 col-sm-offset-1 text-center"
                     style="border: 1px solid black;height:35px;margin-top: 10px;height:330px;background-color:#d5d5ab;">
                  您已经发送了一张明信片
                </div>
              </div>
              <h3>注册阅读并同意条款</h3>
              <router-link to="/registernumber">注册阅读并同意条款</router-link>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "RegisterAgreement"
    }
</script>

<style scoped>

</style>
