import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

//add http vue resource globally
Vue.use(VueResource);

//save url globally
Vue.http.options.root = 'https://vuejs-http-de2b2.firebaseio.com';

//intercepting requests
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == 'POST') {
    //PUT will overwrite existing saved data
    request.method = 'PUT';
  }

  //intercepting responses
  next(response => {
    response.json = () => { return { messages: response.body } }
  });
});

//Firebase
//https://console.firebase.google.com

new Vue({
  el: '#app',
  render: h => h(App)
})
