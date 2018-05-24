<template>
<div>
  <p>Server status: {{ status }}</p>
  <button @click="changeStatus">Change Status</button>
    <hr>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      status: "Critical"
    };
  },
  //ES6!
  methods: {
    changeStatus() {
      this.status = "Jazz";
    }
  }
};
</script>

