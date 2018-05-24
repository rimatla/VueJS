<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Mixins</h1>
                <!-- Computed Properties -->
                <hr>
                <!-- each component gets a fresh and unchanged copy of a mixin -->
                <button @click.once="fruits.push('Berries')">Add New Item</button>
                <br>
                  <input v-model="filterText">
                <ul>
                    <!-- adding a filter here would be a major hit for performance -->
                    <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
                </ul>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
import List from "./List.vue";
import { fruitMixin } from "./FruitMixin";

export default {
  components: {
    appList: List
  },
  //each component gets a fresh and unchanged copy of a mixin 
  mixins: [fruitMixin]
};
</script>

<style>

</style>
