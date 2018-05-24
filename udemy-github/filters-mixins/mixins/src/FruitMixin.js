export const fruitMixin = {
    data() {
        return {
            fruits: ["Apple", "Banana", "Mango", "Melon"],
            filterText: ""
        };
    },
    //often computed properties are better alternatives to filters. Computed properties will only calculate changes IF and WHEN they occur
    computed: {
        //computed properties are functions
        filteredFruits() {
            return this.fruits.filter(element => {
                //filter array helper
                return element.match(this.filterText);
            });
        }
    },
    created() {
        console.log('created');
    }
}