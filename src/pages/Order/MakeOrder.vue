<template>
  <div class="px-4 md:px-0 2xl:container 2xl:mx-auto ">
    <div
        class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
      <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
        <div
            class="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
          <p class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">Đơn hàng</p>
          <div v-for="( carItem,cartIndex ) in cart"
               :key="cartIndex"
               class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
            <div class="pb-4 md:pb-8 w-full h-full  md:h-56 md:w-80">
              <img class="w-full h-full" :src="carItem.productItem.image.full_image_path" alt="dress"/>
            </div>
            <div
                class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0 flex items-center">
              <div class="w-full h-full md:h-56 flex flex-col justify-center items-start space-y-8">
                <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                  {{ carItem.productItem.name }}</h3>
              </div>
              <div class="flex justify-between space-x-8 items-start w-full">
                <p class="text-base dark:text-white xl:text-lg leading-6">{{ carItem.productItem.price }} </p>
                <p class="text-base dark:text-white xl:text-lg leading-6 text-gray-800">{{ carItem.quantity }}</p>
                <p class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                  {{ carItem.productItem.price * carItem.quantity }}</p>
              </div>
            </div>
          </div>
        </div>
        <div
            class="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
          <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
            <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Thành tiền</h3>
            <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
              <div class="flex justify-between w-full">
                <p class="text-base dark:text-white leading-4 text-gray-800">Tổng phụ</p>
                <p class="text-base dark:text-gray-300 leading-4 text-gray-600">{{ subTotal }}</p>
              </div>
              <div class="flex justify-between items-center w-full">
                <p class="text-base dark:text-white leading-4 text-gray-800">Tiền ship</p>
                <p class="text-base dark:text-gray-300 leading-4 text-gray-600">{{ shipping }}</p>
              </div>
              <div class="flex justify-between items-center w-full">
                <p class="text-base dark:text-white leading-4 text-gray-800">Thuế</p>
                <p class="text-base dark:text-gray-300 leading-4 text-gray-600">{{ tax }}</p>
              </div>
            </div>
            <div class="flex justify-between items-center w-full">
              <p class="text-base dark:text-white font-semibold leading-4 text-gray-800">Tổng</p>
              <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">{{ total }}</p>
            </div>
          </div>
        </div>
      </div>
      <div
          class="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
        <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Thông tin của bạn</h3>
        <div
            class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
          <div class="flex flex-col justify-start items-start flex-shrink-0">
            <div
                class="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
              <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar"/>
              <div class="flex justify-start items-start flex-col space-y-2">
                <p class="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">
                  {{ user.full_name }}</p>
              </div>
            </div>

            <div
                class="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 7L12 13L21 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p class="cursor-pointer text-sm leading-5 ">{{ user.email }}</p>
            </div>
          </div>
          <div class="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
            <div
                class="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
              <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                <p class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                  Địa chỉ nhận hàng</p>
                <input
                    class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600"
                    v-model="addressUser">
              </div>
              <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                <p class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                  Ghi chú</p>
                <input
                    class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600"
                    v-model="note">
              </div>
            </div>
            <div class="flex w-full justify-center items-center md:justify-start md:items-start">
              <button @click="sendOrder()"
                      class="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {orderService} from "@/services/orderService";
import {accountService} from "@/services/accountService";

export default {
  name: "Order",
  data() {
    return {
      cart: [],
      user: [],
      subTotal: 0,
      shipping: 0,
      tax: 0,
      total: 0,
      note: "",
      addressUser: "",
      newCart:[]
    }
  },
  methods: {
    async sendOrder() {
      try {
        const resp = await orderService.makeOrder({
          sub_total: this.subTotal,
          total: this.total,
          tax: this.tax,
          note: this.note,
          address: this.addressUser,
          phone: this.user.phone,
          name: this.user.full_name,
          products: this.newCart
        });
        alert("Mua hàng thành công");
        localStorage.removeItem('cart');
        await this.$router.replace({name: "order-success"});
        return;
      } catch (e) {
        alert(e.response.data.message);
        return;
      }
    }
  },
  async mounted() {
    try {
      this.cart = JSON.parse(localStorage.getItem('cart'));
    } catch (e) {
      this.cart = [];
    }
    this.newCart = this.cart.map((product)=>{
      return {
        id: product.productItem.id,
        quantity: product.quantity,
        price:product.productItem.price,
        name: product.productItem.name
      }
    });
    const token = localStorage.getItem("token");
    try {
      const resp = await accountService.getUser(token);
      this.user = resp.data;
    } catch (e) {
      alert(e.response.data.message);
    }

    this.cart.forEach((item, index) => {
      const price = item.productItem.price;
      const quantity = item.quantity;
      const subtotal = price*quantity;
      this.subTotal += subtotal;
    })
    this.shipping = this.subTotal > 200 ? 0 : 20;
    this.tax = this.subTotal * 5 / 100;
    this.total = this.subTotal + this.shipping + this.tax;
  },
}
</script>

<style scoped>

</style>