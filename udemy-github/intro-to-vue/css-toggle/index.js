const events = new Vue({
    el: '#app',
    data: {
        isRed: false,
        color: 'green'
    },
    computed: {
        divClasses: function () {
            return {
                red: this.isRed,
                blue: !this.isRed,
            }
        }
    }
})