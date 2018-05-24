<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <!-- this was passed down as a prop -->
        <button @click="resetFn()">Reset Name ()</button>
    </div>
</template>

<script>
import { eventBus } from '../main';
export default {
  //set props
  /*props: ["name"],*/

  //you can also validate props enforcing types
  props: {
      name: {
          type: String,
          required: true
      },
      resetFn: {
          type: Function
      },
      userAge: {
          type: Number
      }
  },
  methods: {
    //reverse name
    switchName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
        this.name = 'Jaxson';
        //emit a custom event
        this.$emit('nameWasReset', this.name);
    }
  },
  //lifecycle event
  created() {
      eventBus.$on('ageWasEdited', (age) => {
          this.userAge = age;
      });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
