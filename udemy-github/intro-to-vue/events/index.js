const events = new Vue({
    el: '#app',
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        increment: function (num, event) {
            //this.counter++;
            this.counter += num;
        },
        updateCoordinates: function (e) {
            //client = default properties of JS event object
            this.x = e.clientX;
            this.y = e.clientY;

        },
        killMe: function (e) {
            e.stopPropagation(); //stop the event 
        }
    }
})