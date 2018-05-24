import Vue from 'vue'
import App from './App.vue'

// Global Filter
Vue.filter('calculateLength', (value) => {
  return `${value} | (${value.length})`;
});

new Vue({
  el: '#app',
  render: h => h(App)
})
