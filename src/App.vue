<template>
  <div class="app">
    <h1 style="text-align:center">Product Card</h1>

    <div class="product" v-for="(product,index) in products" :key="index">
      <div class="product">
        <img :src="product.image" alt="Denim Jeans">
        <div class="id">id: {{ product.id }}</div>
        <div class="name">name: {{ product.name }}</div>
        <p class="price">giá: {{ product.price|formatMoney }}</p>
        <p class="relaese-date" >ngày phát hành: {{product.releaseDate|formatDate}}</p>
        <p class="selling">bán chạy hay không: {{ product.selling }}</p> <span v-show="product.selling=='Bán chạy'">Badge</span>
        <div class="brand">Nhà phát hành: {{ product.brand }}</div>
        <p class="description">Mô tả : {{ product.description }}</p>
        <div class="color">
          Màu sắc:
          <div v-for="(item,index) in product.color" :key="index">
            {{ item }}
          </div>
        </div>
        <p>
          <button @click="addProduct(product)" :disabled="product.color.length==0">Add to Cart</button>
        </p>
      </div>
    </div>
    {{cart}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart:[],
      products: [
        {
          id: 1,
          name: "quần áo",
          price: "100000",
          releaseDate: "20-2-2031",
          selling: "Bán chạy",
          brand: "guchi",
          description: "quần áo phù hợp cho mọi lứa tuổi",
          image: require("./assets/ban-quan-ao-tre-em-online.jpg"),
          color: ["red", "green", "yellow", "violet"],
        },
        {
          id: 2,
          name: "quần áo",
          price: "100000",
          releaseDate: "20-2-2031",
          selling: "Bán không chạy",
          brand: "guchi",
          description: "quần áo phù hợp cho mọi lứa tuổi",
          image: require("./assets/ban-quan-ao-tre-em-online.jpg"),
          color: [],
        },
      ],
    }
  },
  methods:{
    addProduct(product){
      const cartLenght = this.cart.length;

    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}


</style>