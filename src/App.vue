<template>
  <div>
   <div class="wrapper">
     <div class="cart"><button>Giỏ hàng</button></div>
     <div class="item" v-for="(article,index) in articles" :key="index">
       <div class="img-box">
         <img :src="article.thumb" alt="acticle">
       </div>
       <div class="content">
         <div class="name">Name :{{ article.name }}</div>
         <div class="price">Price: {{ article.price }}</div>
         <div class="description">description :{{ article.description }}</div>
       </div>
       <button>ADD</button>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      valueInput: "",
      url: `https://6246a3c3e3450d61b000fdf0.mockapi.io/products`,
      options: {method: 'GET'},
    }
  },
  methods: {
    send() {
      fetch(this.url, this.options).then((resolve) => {
        return resolve.json();
      }).then((data) => {
        this.articles = data;
      }).catch((err) => console.log(err));
    }
  },
  mounted() {
    this.send();
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.wrapper{
  margin: 3rem;
}

.cart{
  width: 100%;
  text-align: end;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}
.item .img-box{
  width: 500px;
  height: 500px;
  overflow: hidden;
  margin: 1rem 0;
}

.item .img-box img{
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.item .content .title{
  font-size: 36px;
}
</style>