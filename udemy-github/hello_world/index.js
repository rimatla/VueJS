const app = new Vue({
    el: '#app',
    data: {
        message: 'Oh Hello World!'
    }
});

//bind elements
const app2 = new Vue({
    el: '#app2',
    data: {
        message: `You loaded this page on ${new Date().toLocaleString()}`
    }
})

//Conditionals 
const app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    }
})

//loops: v-for directive can be used for displaying a list of items using the data from an Array:
const app4 = new Vue({
    el: '#app4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
})
