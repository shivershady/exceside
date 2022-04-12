<template>
  <div class="h-full">

    <div class="border-b-2 block md:flex">

      <div class="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
        <div class="flex justify-between">
          <span class="text-xl font-semibold block">Hồ sơ</span>
        </div>

        <span class="text-gray-600">Thông tin của bạn</span>
        <div class="w-full p-8 mx-2 flex justify-center">
          <img id="showImage" class="max-w-xs w-32 items-center border" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200" alt="">
        </div>
      </div>

      <div class="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
        <div class="rounded  shadow p-6">
          <div class="pb-6">
            <label for="username" class="font-semibold text-gray-700 block pb-1">Tên</label>
            <div class="flex">
              <input id="username" class="border-1  rounded-r px-4 py-2 w-full" type="text" v-model="user.full_name" />
            </div>
          </div>
          <div class="pb-6">
            <label for="email" class="font-semibold text-gray-700 block pb-1">Email</label>
            <div class="flex">
              <input id="email" class="border-1  rounded-r px-4 py-2 w-full" type="text" v-model="user.email" />
            </div>
          </div>
          <div class="pb-6">
            <label for="phone" class="font-semibold text-gray-700 block pb-1">Số điện thoại</label>
            <div class="flex">
              <input id="phone" class="border-1  rounded-r px-4 py-2 w-full" type="text" v-model="user.phone" />
            </div>
          </div>
          <button @click="editProfile()" class="-mt-2 text-md font-bold text-white bg-blue-700 rounded-full px-5 py-2 hover:bg-gray-800">Lưu</button>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import {accountService} from "@/services/accountService";

export default {
  name: "Profile",
  data() {
    return {
      user: [],
    }
  },
  methods:{
    async editProfile(){
      try {
        const resp = await accountService.editProfile({
          email: this.user.email,
          phone: this.user.phone,
          full_name: this.user.full_name,
        })
        alert(resp.data.message)
      }catch (e) {
        alert(e.response.data.message)
      }
    }
  },
  async mounted(){
    const token = localStorage.getItem("token");
    try {
      const resp = await accountService.getUser(token);
      this.user = resp.data;
    } catch (e) {
      alert(e.response.data.message);
    }
  }
}
</script>

<style scoped>

</style>