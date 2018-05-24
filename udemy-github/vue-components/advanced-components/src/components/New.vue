<template>
<div>
 <h3>New Quote</h3>
 <button @click="counter++">Increse</button>
 <p>{{counter}}</p>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0
    };
  },
  //licycle hooks
  destroyed() {
    console.log("New cpm Destroyed");
  },
  deactivated() {
    console.log("New cpm Deactivated");
  },
  activated() {
    console.log("New cpm Activated");
  }
};
</script>

<style scoped>

</style>


