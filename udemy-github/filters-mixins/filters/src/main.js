import Vue from 'vue'
import App from './App.vue'

//Global Filter
Vue.filter('toLowerCase', function (value) {
  return value.toLowerCase();
})

new Vue({
  el: '#app',
  render: h => h(App)
})
