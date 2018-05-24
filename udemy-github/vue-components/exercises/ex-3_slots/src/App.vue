<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedComponent= 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedComponent= 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedComponent= 'appRed'">Load Red Template</button>
                <hr>
                <!-- Dynamic -->
                <component :is="selectedComponent">
                    <p>This is the {{selectedComponent}}</p>
                </component>

                <!-- <app-blue>This is the Blue Content</app-blue>
                <app-green>This is the Green Content</app-green>
                <app-red>This is the Red Content</app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  data: function() {
    return {
      selectedComponent: "appBlue"
    };
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
};
</script>

<style>

</style>
