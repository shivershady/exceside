<template>
  <div class="app">
    <List></List>
  </div>
</template>

<script>

import List from "@/components/List";
export default {
  components: {List},
  methods:{
    changeChecked(code){
      alert("test");
      this.products[code].isChecked = true;
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}


</style>