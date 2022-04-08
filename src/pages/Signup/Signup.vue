<template>
  <div class=" flex justify-center items-center pt-8">
    <div class="lg:w-2/5 md:w-1/2 w-2/3">
      <form class="bg-white p-10 rounded-lg shadow-lg min-w-full" @submit.prevent="submitForm()">
        <h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Đăng ký</h1>
        <div>
          <label class="text-gray-800 font-semibold block my-3 text-md" for="username">Tên đầy đủ</label>
          <input v-model="fullName" class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="username" id="username" placeholder="username" />
          <span v-if="!$v.fullName.required && $v.fullName.$dirty" class="text-red-500">Tên không được để trống!</span>
        </div>
        <div>
          <label class="text-gray-800 font-semibold block my-3 text-md" for="email">Email</label>
          <input v-model="email" class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="email" name="email" id="email" placeholder="@email" />
          <span
              v-if="(!$v.email.required || !$v.email.email) && $v.email.$dirty"
              class="text-red-500"
          >Email không được để trống!</span>
        </div>
        <div>
          <label class="text-gray-800 font-semibold block my-3 text-md" for="email">Số điện thoại</label>
          <input v-model="phone" class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="email" id="phone" placeholder="@phone" />
          <span v-if="!$v.phone.required && $v.phone.$dirty" class="text-red-500">Số điện thoại không được để trống!</span>
          <span v-if="!$v.phone.numeric && $v.phone.$dirty" class="text-red-500">Phải là số!</span>
        </div>
        <div>
          <label  class="text-gray-800 font-semibold block my-3 text-md" for="password">Mật khẩu</label>
          <input v-model="password" class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="password" name="password" id="password" placeholder="password" />
          <span
              v-if="!$v.password.required && $v.password.$dirty"
              class="text-red-500"
          >Mật khẩu không được để trống!</span>
          <span
              v-if="(!$v.password.minLength || !$v.password.maxLength) && $v.password.$dirty"
              class="text-red-500"
          >Password must be between {{ $v.password.$params.minLength.min}} and {{ $v.password.$params.maxLength.max}} characters!</span>
        </div>
        <div>
          <label class="text-gray-800 font-semibold block my-3 text-md" for="confirm">Nhập lại mật khẩu</label>
          <input v-model="confirmPassword" class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="password" name="confirm" id="confirm" placeholder="confirm password" />
          <span
              v-if="!$v.confirmPassword.required && $v.confirmPassword.$dirty"
              class="text-red-500"
          >Mật khẩu không được để trống!</span>
          <span
              v-if="!$v.confirmPassword.sameAsPassword && $v.confirmPassword.$dirty && $v.confirmPassword.required"
              class="text-red-500"
          >Mật khẩu không khớp!</span>
        </div>
        <button type="submit" class="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Đăng ký</button>
        <router-link :to="{path:'/login'}" type="submit" class="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans text-center">Login</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  email,
  numeric,
  sameAs
} from "vuelidate/lib/validators";
import {accountService} from "@/services/accountService";

export default {
  name: "Signup",
  data: () => ({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword:""
  }),
  validations: {
    fullName: {
      required,
    },
    email: {
      required,
      email
    },
    phone: {
      required,
      numeric
    },
    password: {
      required,
      maxLength: maxLength(12),
      minLength: minLength(6)
    },
    confirmPassword:{
      required,
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    async submitForm() {
       this.$v.$touch();
      if(!this.$v.fullName.$invalid && !this.$v.email.$invalid && !this.$v.phone.$invalid && !this.$v.password.$invalid && !this.$v.confirmPassword.$invalid){
        try {
          const resp = await accountService.signUp({
            full_name: this.fullName,
            email: this.email,
            phone: this.phone,
            password: this.password
          });
          alert("Đăng ký thành công");
          await this.$router.replace({name: "login"});
          return;
        }catch (e) {
          alert("Đăng ký thất bại" + e.response.data.message);
        }
      }
    },
  }
};
</script>

<style scoped>

</style>