<template>
  <div>
    <app-postcardsreceiveinterface></app-postcardsreceiveinterface>
  </div>
</template>

<script>
  $('#btnModal').click(function () {
    $('#myModal').modal({
      backdrop:"static",
      show:true
    })
  })
  import PostcardsReceiveInterface from "./PostcardsReceiveInterface";
    export default {
        name: "PostcardsReceive",
        components: {
        "app-postcardsreceiveinterface":PostcardsReceiveInterface,
      },
    }
</script>

<style scoped>

</style>
