import Vue from 'vue'
import App from './App.vue'

//Global Mixin
Vue.mixin({
  created() {
    console.log('Global Mixin Created');
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
