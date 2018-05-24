new Vue({
  el: '#app',
  data: {
    title: 'The VueJS instance'
  },
  /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  lifecycle methods 
  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
  beforeCreate: function() {
    console.log('beforeCreate()');
  },
  created: function () {
    console.log('created()');
  },
  beforeMount: function () {
    console.log('beforeMount()');
  },
  //attached to DOM
  mounted: function () {
    console.log('mounted()');
  },
  beforeUpdate: function () {
    console.log('beforeUpdate()');
  },
  updated: function () {
    console.log('updated()');
  },
  //destroy vue instances
  beforeDestroy: function () {
    console.log('beforeDestroy()');
  },
  destroyed: function () {
    console.log('destroyed()');
  },
  methods: {
    destroy: function() {
      this.$destroy();
    }
  }
})

