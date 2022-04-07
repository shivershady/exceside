<template>
  <div id="app">
    <Header :imgCover="img.cover"></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default {
  name: "App",
  components: { Header, Footer},
  data() {
    return {
      img: {
        cover: require('./assets/images/cover.jpg'),
      },
    }
  }
};
</script>

<style>

</style>
