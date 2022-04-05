<template>
  <div class="item">
    <h3>Component Item</h3>
    <div v-for="( productItem,productIndex ) in products" :key="productIndex">
      <div>{{productItem.name}}</div>
      <button @click="addCodeProduct(productItem.id,productIndex)" :disabled="productItem.isChecked">Add Code Product</button>
    </div>
  </div>
</template>

<script>
export default {
  name: `Item`,
  props:{
    products : {
      type: [],
      required: true
    }
  },
  methods:{
    addCodeProduct(id,index){
      this.$emit('code-product', [id,index])
    }
  },
  mounted() {
    console.log("thong bao");

  }
}
</script>

<style scoped>

</style>