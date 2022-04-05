<template>
  <div>
    <Item :products="products" @code-product="codeProduct"></Item>
    <Check :products="products"></Check>
  </div>
</template>

<script>
import Item from "@/components/components-item/Item";
import Check from "@/components/components-item/Check";

let products;
export default {
  name: `List`,
  components: {Check, Item},
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'PS5',
          isChecked: false
        },
        {
          id: 2,
          name: 'PS4',
          isChecked: false
        },
        {
          id: 3,
          name: 'PS3',
          isChecked: false
        }
      ],
      checkId: null
    }
  },
  methods:{
    codeProduct(arr){
      alert("code product " + arr[0]);
      this.products[arr[1]].isChecked = true;
    }
  }
}
</script>

<style scoped>

</style>