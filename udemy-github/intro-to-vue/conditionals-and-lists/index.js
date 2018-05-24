new Vue({
    el: '#app',
    data: {
        ingredients: ['meat', 'fruit', 'cookies', 'wheat'],
    },
    methods: {
        log: function () {
            console.log(this.ingredients);
        },
        push: function () {
            this.ingredients.push('spices')
        },

        handleBothMethods: function () {
            this.log();
            this.push();
        }
    }
});
