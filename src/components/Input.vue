<template>
  <div class="container">
    <font-awesome-icon class="icon" :icon="[typeIcon, icon]" v-show="icon !== null" />
    <input v-bind="$attrs" type="text" v-on:input="updateInput($event)"/>
  </div>
</template>

<script>
  export default {
    name: "Input",
    inheritAttrs: false,

    props: {
      typeIcon: {
        type: String,
        required: false,
        default: "fa"
      },
      icon: {
        type: String,
        required: false,
        default: null
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

  .icon {
    margin-right: 20px;
    
  }

  .icon path {
    color: rgba(255, 255, 255, 0.2);
  }

</style>