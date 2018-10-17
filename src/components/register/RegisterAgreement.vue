<template>
    <div>
      <div style="width:100%;height:590px;background-color:#ebf6df">
            <div class="container" style=" height: 500px;background-color:lightgoldenrodyellow">
          <div class="row" style="height:53px;background-color:#528970">
              <div class="col-sm-12" style="width:200px;height:53px;line-height: 52px;font-size: 18px;color: white">注册</div>
          </div>

          <div class="row" style="height:447px;">
            <div>
            <app-registeragreementcontent></app-registeragreementcontent>
            </div>
            <div>
            <app-registernumber></app-registernumber>
            </div>
            <div>
              <app-registerpassword></app-registerpassword>
            </div>
            <div>
              <app-registersuccess></app-registersuccess>
            </div>
          </div>

        </div>

      </div>
    </div>

</template>

<script>
  import  RegisterAgreementContent from "./RegisterAgreementContent";
  import  RegisterNumber from "./RegisterNumber";
  import  RegisterPassword from "./RegisterPassword";
  import  RegisterSuccess from "./RegisterSuccess";
  export default {
    name: "RegisterAgreement",
    components: {
      "app-registeragreementcontent": RegisterAgreementContent,
      "app-registernumber":RegisterNumber,
      "app-registerpassword":RegisterPassword,
      "app-registersuccess":RegisterSuccess,
    },
  }

</script>

<style scoped>

</style>
