// Let's refactor this into smaller components
<template>
    <div class="container">
        <!-- you may camel case or use dashes (-) -->
        <appHeader></appHeader>
        <hr>
        <div class="row">
            <app-servers></app-servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Servers from "./components/Servers.vue";
import ServerDetails from "./components/ServerDetails.vue";

export default {
  components: {
    //naming convention
    appHeader: Header,
    //(-) dashes needs to be within quotes
    "app-servers": Servers,
    "app-server-details": ServerDetails,
    //ES6
    Footer
  }
};
</script>

<style>

</style>
