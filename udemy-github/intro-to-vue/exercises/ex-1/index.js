const ex1 = new Vue({
    el: '#exercise',
    data: {
        name: 'Joe',
        lastName: 'Doe',
        age: 100,
        image: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg"
    },
    methods: {
        random: function () {
            return Math.random().toFixed(2);
        }
    }


})
