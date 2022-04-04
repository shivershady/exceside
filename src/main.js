import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.filter('formatDate', function (value) {
  //20-09-2029
  const newArr = value.split("-");
  newArr[0] = "ngày " + newArr[0];
  newArr[1] = " tháng " + newArr[1];
  newArr[2] = " năm " + newArr[2];
  return newArr.join("");
});
Vue.filter('formatMoney', function (value) {
    let formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'jpy',
    });
    return formatter.format(value);
})