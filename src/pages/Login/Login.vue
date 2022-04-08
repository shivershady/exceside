<template>
  <div class=" flex justify-center items-center pt-8">
    <div class="lg:w-2/5 md:w-1/2 w-2/3">
      <form class="bg-white p-10 rounded-lg shadow-lg min-w-full" @submit.prevent="submitForm()">
        <h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Đăng nhập</h1>
        <div>
          <label class="text-gray-800 font-semibold block my-3 text-md" for="email">Email</label>
          <input v-model="email" class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="email" name="email" id="email" placeholder="@email" />
          <span
              v-if="(!$v.email.required || !$v.email.email) && $v.email.$dirty"
              class="text-red-500"
          >Email không được để trống!</span>
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
          >Mật khẩu từ {{ $v.password.$params.minLength.min}} đến {{ $v.password.$params.maxLength.max}} ký tự!</span>
        </div>
        <button type="submit" class="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans">Đăng nhập</button>
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
  name: "Login",
  data: () => ({
    email: "",
    password: "",
  }),
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      maxLength: maxLength(12),
      minLength: minLength(6)
    }
  },
  methods: {
    async submitForm() {
      this.$v.$touch();
      if(!this.$v.email.$invalid && !this.$v.password.$invalid){
        try {
          const resp = await accountService.login({
            email: this.email,
            password: this.password
          });
          if(resp.data.token){
            localStorage.setItem("token", resp.data.token);
            alert("Đăng nhập thành công");
          }else{
            alert("Không tìm thấy token");
          }
          await this.$router.replace({name: "home"});
          return;
        }catch (e) {
          alert(e.response.data.message);
          await this.$router.replace({name: "signup"});
          return;
        }
      }
    },
  }
};
</script>

<style scoped>

</style>