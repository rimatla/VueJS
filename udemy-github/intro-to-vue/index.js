new Vue({
    el: '#app',
    data: {
        title: 'what sup fellas',
        fruit: 'apple',
        link: 'http://google.com',
        finishedLink: '<a href="http://facebook.com" target="blank">Facebook</a>'
    },
    methods: {
        changeTitle: function (e) {
            this.title = e.target.value;
        },
        greeting: function () {
            return 'oya como va'
        },
        //call a property within data object
        myFruit: function () {
            return this.fruit
        }
    }
})