<template>
  <div class="container mx-auto flex items-end lg:flex-row flex-col w-full justify-center ">
    <div
        class="lg:w-3/5  w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white overflow-y-auto overflow-x-hidden lg:h-screen h-auto rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl"
        id="scroll">
      <div class="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="16" height="16"
             viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
             stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <polyline points="15 6 9 12 15 18"/>
        </svg>
        <p class="text-sm pl-2 leading-none">Back</p>
      </div>
      <p class="lg:text-4xl text-3xl font-black leading-10 text-gray-800 pt-3">Bag</p>
      <div class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50"
           v-for="( carItem,cartIndex ) in cart"
           :key="cartIndex">
        <div class="md:w-4/12 2xl:w-1/4 w-full">
          <img :src="carItem.productItem.image.full_image_path" alt="Black Leather shoe"
               class="h-52 md:h-full w-full object-center object-cover "/>
        </div>
        <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
          <div class="flex items-center justify-between w-full pt-1">
            <p class="text-base font-black leading-none text-gray-800">{{ carItem.productItem.name }}</p>
            <div class="flex justify-center gap-4">
              <button @click="decreaseProduct(carItem.productItem,cartIndex)">-</button>
              <div>{{ carItem.quantity }}</div>
              <button @click="increaseProduct(carItem.productItem)">+</button>
            </div>
          </div>
          <p class="text-xs leading-3 text-gray-600 pt-2">Trong kho: {{ carItem.productItem.quantity }}</p>
          <p class="text-xs leading-3 text-gray-600 pt-2">Gia: {{ carItem.productItem.price }}</p>
          <div class="flex items-center justify-between pt-5">
            <div class="items-center">
              <p class="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                 @click="deleteProduct(carItem.productItem,cartIndex)">Xóa</p>
            </div>
            <p class="text-base font-black leading-none text-gray-800">
              {{ carItem.productItem.price * carItem.quantity }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:w-2/5 w-full bg-gray-100 h-full rounded-b-2xl lg:rounded-bl-none lg:rounded-r-2xl">
      <div
          class="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
        <div>
          <p class="lg:text-4xl text-3xl font-black leading-9 text-gray-800">Summary</p>
          <div class="flex items-center justify-between pt-16">
            <p class="text-base leading-none text-gray-800">Tổng phụ</p>
            <p class="text-base leading-none text-gray-800">{{ subtotal }}</p>
          </div>
          <div class="flex items-center justify-between pt-5">
            <p class="text-base leading-none text-gray-800">Tiền Ship</p>
            <p class="text-base leading-none text-gray-800">{{ shipping }}</p>
          </div>
          <div class="flex items-center justify-between pt-5">
            <p class="text-base leading-none text-gray-800">Thuế</p>
            <p class="text-base leading-none text-gray-800">{{ tax }}</p>
          </div>
        </div>
        <div>
          <div class="flex items-center pb-6 justify-between lg:pt-5 pt-20">
            <p class="text-2xl leading-normal text-gray-800">Total</p>
            <p class="text-2xl font-bold leading-normal text-right text-gray-800">{{ total }}</p>
          </div>
          <router-link :to="{name:'order'}" type="button"
                  class="text-center text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
            Thanh toán
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {handleProduct} from "@/constants/handleProduct";

export default {
  name: "component",
  data() {
    return {
      show: false,
      text: "Sort by",
      cart: [],
      subtotal: 0,
      shipping: 0,
      tax: 0,
      total: 0,
    }
  },
  methods: {
    increaseProduct(product) {
      let cart = handleProduct.increaseProduct(product);
      let subtotal = 0;
      let shipping = 0;
      let tax = 0;
      let total = 0;
      cart.forEach((item,index)=>{
        subtotal += item.productItem.price * item.quantity;
      })
      shipping = subtotal > 200 ? 0 : 20;
      tax = subtotal * 5 / 100;
      total = subtotal + shipping + tax;
      this.cart = cart;
      this.subtotal = subtotal;
      this.shipping = shipping;
      this.tax = tax;
      this.total = total;
    },
    decreaseProduct(product, index) {
      let cart = handleProduct.decreaseProduct(product, index);
      let subtotal = 0;
      let shipping = 0;
      let tax = 0;
      let total = 0;
      cart.forEach((item,index)=>{
        subtotal += item.productItem.price * item.quantity;
      })
      shipping = subtotal > 200 ? 0 : 20;
      tax = subtotal * 5 / 100;
      total = subtotal + shipping + tax;
      this.cart = cart;
      this.subtotal = subtotal;
      this.shipping = shipping;
      this.tax = tax;
      this.total = total;
    },
    deleteProduct(product, index) {
      let cart = localStorage.getItem('cart');
      let subtotal = 0;
      let shipping = 0;
      let tax = 0;
      let total = 0;
      if (!cart) {
        alert("không có sản phẩm nào trong giỏ");
      } else {
        cart = JSON.parse(cart);
        cart.splice(index, 1);
        alert("Xóa sản phẩm thành công");
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      this.cart = cart;

      cart.forEach((item,index)=>{
        subtotal += item.productItem.price * item.quantity;
      })
      shipping = subtotal > 200 ? 0 : 20;
      tax = subtotal * 5 / 100;
      total = subtotal + shipping + tax;
      this.subtotal = subtotal;
      this.shipping = shipping;
      this.tax = tax;
      this.total = total;
    },
  },
  mounted() {
    try {
      this.cart = JSON.parse(localStorage.getItem('cart'));
    } catch (e) {
      this.cart = [];
    }

    this.cart.forEach((item,index)=>{
      this.subtotal += item.productItem.price * item.quantity;
    })
    this.shipping = this.subtotal > 200 ? 0 : 20;
    this.tax = this.subtotal * 5 / 100;
    this.total = this.subtotal + this.shipping + this.tax
  },
};


</script>

<style scoped>
/* width */

#scroll::-webkit-scrollbar {
  width: 1px;
}

/* Track */

#scroll::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */

#scroll::-webkit-scrollbar-thumb {
  background: rgb(133, 132, 132);
}
</style>
