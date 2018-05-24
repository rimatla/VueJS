<template>
<div>
        <!-- <p>{{quote}}</p> -->

    <!-- add slot component -->
    <!-- you can also set up named slots -->
    <div>
        <slot name="title"></slot>
        <span style="color: #ccc"><slot name="subtitle">The Subtitle</slot></span>
    </div>
    <hr>
    <div class="title"><slot name="content"></slot></div>

</div>
</template>
<script>
export default {
  props: ["quote"]
};
</script>
<style scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 20px;
  margin: auto;
  text-align: center;
}
h2 {
  color: tomato;
}
.title {
  font-style: italic;
}
</style>


