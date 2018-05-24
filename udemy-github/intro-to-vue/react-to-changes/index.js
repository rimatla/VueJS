const app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        secondCounter: 0
    },
    //computed properties analises the code and only reacts to nodes that are being sent/requested
    computed: {
        output: function () {
            console.log('computed');
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    },
    //specify what you'd like to watch, this enables runnig tasks asynchronously which computed does not
    watch: {
        counter: function(value) {
            var vm = this;
            setTimeout(() => {
                vm.counter = 100;
            }, 3000);
        }
    },
    methods: {
        // increase: function () {
        //     this.counter++;
        //     this.result = this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        // },
        // decrease: function () {
        //     this.counter--;
        //     this.result = this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        // },

        //result will get called everytime
        result: function () {
            console.log('method');
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    }
});

//everything stored in computed : {} can be used just like a property used inside data: {}
