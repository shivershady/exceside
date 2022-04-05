<template>
  <div class="check">
    <h3>Check</h3>
    <div v-for="( productItem,productIndex ) in products" :key="productIndex">
      <h5>{{productItem.name}}</h5>
      <div v-show="productItem.isChecked">Đã xác nhận</div>
      <div v-show="!productItem.isChecked">Chưa xác nhận</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Check",
  props:['products'],
}
</script>

<style scoped>

</style>