<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>

                <!-- local Filters -->
                <p>{{ text | toUpperCase}}</p>

                <!-- Global Filters -->
                <p>{{ text | toLowerCase}}</p>

                <!-- Computed Properties -->
                <hr>
                  <input v-model="filterText">
                <ul>
                    <!-- adding a filter here would be a major hit for performance -->
                    <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      text: "HeLLo HuGO",
      fruits: ["Apple", "Banana", "Mango", "Melon"],
      filterText: ""
    };
  },
  //custom local filters
  filters: {
    //filters are functions
    toUpperCase(value) {
      return value.toUpperCase();
    }
  },
  //often computed properties are better alternatives to filters. Computed properties will only calculate changes IF and WHEN they occur
  computed: {
    //computed properties are functions
    filteredFruits() {
      return this.fruits.filter(element => { //filter array helper
        return element.match(this.filterText);
      });
    }
  }
};
</script>

<style>

</style>
