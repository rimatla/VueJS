<template>
    <div>
        <h1>Mixins</h1>
        <!-- Computed Properties -->
        <hr>
            <input v-model="filterText">
        <ul>
            <!-- adding a filter here would be a major hit for performance -->
            <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
import { fruitMixin } from "./FruitMixin";
export default {
  mixins: [fruitMixin],
  created() {
    console.log("created on List.vue");
  }
};
</script>