/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
get data from a diff ecosystem
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
const data = {
  title: 'The Great VueJS Instance',
  showParagraph: false
}



/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
COMPONENTS need to be registred prior to instances
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
Vue.component('hello-component', {
  template: '<h6>Hello I\'m a COMPONENT</h6>'

});


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
vm = vue model
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
const vm1 = new Vue({
  el: '#app1',
  data,
  methods: {
    show: function () {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText = 'Test';

    },
    updateTitle: function (title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function () {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function (value) {
      console.log('Title changed, new value: ' + value);
    }
  }
});




/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
acess data across instances
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
const vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The Second VueJS Instance',
  },
  methods: {
    onChange: function () {
      vm1.title = 'Changed!';
    }
  }
});



/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 TEMPLATES
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
const vm3 = new Vue({
  template: '<h3>Hello I\'m a mounted template</h3>'
})
vm3.$mount('#app3');

// Mount
const vm4 = new Vue({
  data: {
    name: 'Joe Doe Was mounted'
  }
})
vm4.$mount('#app4');



/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
acess instances on global scope
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
setTimeout(() => {
  vm1.title = 'Changed by set time out';
}, 3000);


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
refs
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
vm1.$refs.heading.innerText = 'Changed by REF';
vm1.$refs.myButton.innerText = 'Test';


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
how to log
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
console.log('first instance', vm1);
console.log('data object', vm1.$data);
console.log('title = ', vm1.$data.title);
console.log('refs', vm1.$refs);

