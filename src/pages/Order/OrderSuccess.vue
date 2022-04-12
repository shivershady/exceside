<template>
  <!-- component -->
  <div class="bg-white p-8 rounded-md w-full">
    <div class=" flex items-center justify-between pb-6">
    <div>
      <h2 class="text-gray-600 font-semibold">Products Oder</h2>
      <span class="text-xs">All products item</span>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex bg-gray-50 items-center p-2 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
             fill="currentColor">
          <path fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd" />
        </svg>
        <input class="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search...">
      </div>
      <div class="lg:ml-40 ml-10 space-x-8">
        <button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">New Report</button>
        <button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Create</button>
      </div>
    </div>
  </div>
    <div>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
            <tr>
              <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Tên người mua
              </th>
              <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Tên sản phẩm
              </th>
              <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Mã đơn
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Địa chỉ
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Số điện thoại
              </th>
              <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Created at
              </th>
              <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Tổng tiền
              </th>
              <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="( orderItem,orderIndex ) in data.data" :key="orderIndex">
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ orderItem.name }}
                  </p>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap" v-for="( productItem,productIndex ) in orderItem.products"
                   :key="productIndex">
                  {{ productItem.name }} - sl:{{productItem.quantity}}
                </p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{{ orderItem.id }}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{{ orderItem.address }}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{{ orderItem.phone }}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                  {{ orderItem.created_at }}
                </p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                  {{ orderItem.total }} $
                </p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                      class="relative inline-block px-3 py-1 font-semibold text-white leading-tight">
                                        <span aria-hidden
                                              class="absolute inset-0 opacity-50 rounded-full"
                                              :class="orderItem.status == 1? 'bg-orange-200':
                                                      orderItem.status == 2?'bg-green-600':
                                                      orderItem.status== 3?'bg-blue-500':
                                                      orderItem == 4 ? 'bg-green-300':'bg-red-400'"></span>
									<span class="relative" v-if="orderItem.status==1">Pending</span>
									<span class="relative" v-if="orderItem.status==2">Processing</span>
									<span class="relative" v-if="orderItem.status==3">Sent</span>
									<span class="relative" v-if="orderItem.status==4">Received</span>
									<span class="relative" v-if="orderItem.status==5">Cancel</span>
									</span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {orderService} from "@/services/orderService";

export default {
  name: "OrderSuccess",
  data() {
    return {
      data: [],
    }
  },
  async mounted() {
    try {
      const resp = await orderService.orderSuccess();
      console.log(resp.data);
      this.data = resp.data
    } catch (e) {
      alert(e.response.data.message);
    }
  },
}
</script>

<style scoped>

</style>