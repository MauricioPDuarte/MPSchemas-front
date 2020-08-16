<template>
  <div class="container">
    <input v-bind="$attrs" type="text" v-on:input="updateInput($event)"/>

  </div>
</template>

<script>
  export default {
    name: "Input",
    inheritAttrs: false,

    props: {
      icon: {
          type: String,
          required: false
      }
    },
    methods: {
      updateInput (event) {
        this.$emit('input', event.target.value);
      }
    }
  }
</script>

<style scoped>
    .container {
        width: 100%;
        height: 60px;
        padding: 10px 15px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.1);
        margin-bottom: 10px;

        display: flex;
        align-items: center;
    }

    .container input {
        width: 100%;
        height: 100%;
    }


</style>