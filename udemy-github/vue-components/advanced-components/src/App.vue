<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <!-- pass in prop -->
               <!-- <app-quote quote="A wonderful quote!"></app-quote> -->

               <!-- Slots -->
               <app-quote>
                    <!-- you can also set up named slots -->
                   <h2 slot="title">{{ quoteTitle }}</h2>
                   <p slot="content">A wonderful quote</p>
               </app-quote>
               <hr>

                <h1>DYNAMICALLY DISPLAY COMPONENTS</h1>
               <!-- DYNAMICALLY DISPLAY COMPONENTS -->
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <p>{{selectedComponent}}</p>
                <!-- DYNAMIC COMPONENT -->

                <!-- maintain state/ prevent component from being destroyed /  -->
                <keep-alive>
                     <!-- bind it -->
                    <component :is="selectedComponent">
                        <p>Default Content</p>
                    </component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import Author from "./components/Author.vue";
import New from "./components/New.vue";
export default {
  data: function() {
    return {
      quoteTitle: "The Quote",
      //set default
      selectedComponent: "app-quote"
    };
  },
  components: {
    appQuote: Quote,
    AppAuthor: Author,
    appNew: New
  }
};
</script>

<style>

</style>
