<template>
    <button v-bind="$attrs" type="button">
        <slot></slot>
    </button>
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
    button {
        width: 100%;
        height: 60px;
        background: #374772;
        border-radius: 5px;
        font-weight: 600;
    }


</style>