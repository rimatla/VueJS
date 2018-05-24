import Vue from 'vue'
import App from './App.vue'

//*******  custom global directives ******//
Vue.directive('highlight', {
  //hooks (there are 5 of them)
  bind(el, binding, vnode) {
    el.style.background = 'green';
  }
});

Vue.directive('highlight2', {
  bind(el, binding, vnode) {
    /** DATA BINDING */
    el.style.background = binding.value; //value passed in v-highlight
  }
});

Vue.directive('highlight3', {
  bind(el, binding, vnode) {
        /** CONDITIONAL BINDING */
    if (binding.arg == 'background') {
      el.style.background = binding.value; 
    } else {
      el.style.color = binding.value; 
    }
  }
});

Vue.directive('highlight4', {
  bind(el, binding, vnode) {
    /** MOFIFIER */
    var delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }

    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.background = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
