<template>
  <div class="container mx-auto bg-white">
    <main class="my-8">
      <div class=" p-6">
        <h3 class="text-gray-700 text-2xl font-medium">Wrist Watch</h3>
        <span class="mt-3 text-sm text-gray-500">200+ Products</span>
        <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
               v-for="( productItem,productIndex ) in products"
               :key="productIndex">
            <div class="flex items-end justify-end h-56 w-full bg-cover"
                 :style="{ backgroundImage: 'url(' + productItem.image.full_image_path + ')' }">
              <button
                  class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                     viewBox="0 0 24 24" stroke="currentColor">
                  <path
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </button>
            </div>
            <div class="px-5 py-3">
              <h3 class="text-gray-700 uppercase">{{ productItem.name }}</h3>
              <span class="text-gray-500 mt-2">{{ productItem.price }} $</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import {categoriesService, getProductByIdByPage} from "@/services/categoriesService";
import {Axios} from "@/services/Axios";

export default {
  name: "Category",
  data() {
    return {
      idParam:1,
      idPage:1,
      products: [],
      nextPage:''
    }
  },
  methods:{
    async handleScroll(){
      let isLoad = false;
      if(window.scrollY + window.innerHeight >= document.body.scrollHeight ){
        if(this.nextPage){
          isLoad = true;
          const respListOrderPage =  await Axios.get(this.nextPage);
          this.listProduct = respListOrderPage.data.data;
          this.products = [...this.products,...this.listProduct];
        }
        isLoad = false;
      }
    }
  },
  async mounted() {
    window.addEventListener("scroll",this.handleScroll);
  },
  watch: {
    '$route': {
      immediate: true,
      async handler(route) {
        this.idParam = route.params.id;
        try {
          const resp = await categoriesService.getProductById(this.idParam);
          this.products = resp.data.data;
          this.nextPage = resp.data.next_page_url;
          console.log(this.nextPage)
        } catch (e) {
          console.log(e)
        }
      }
    }
  },
}
</script>

<style scoped>

</style>