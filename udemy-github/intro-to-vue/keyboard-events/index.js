const events = new Vue({
    el: '#app',
    data: {

    },
    methods: {
        log: function (e) {
            console.log(e.target.value);
        }
    }
})