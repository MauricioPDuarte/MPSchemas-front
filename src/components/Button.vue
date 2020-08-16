<template>
  <div class="container">
    <button v-bind="$attrs">
        <slot></slot>
    </button>

  </div>
</template>

<script>
  export default {
    name: "Button",
    inheritAttrs: false,
    props: {

    },
    computed: {

    }
  }
</script>

<style scoped>
    .container {
        width: 100%;
        height: 60px;
        background: #374772;
        border-radius: 5px;
    }

    .container button {
        width: 100%;
        height: 100%;
        font-weight: 600;
    }


</style>