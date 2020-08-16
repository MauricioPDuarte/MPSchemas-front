<template>
  <div class="container">
    <input v-bind="$attrs" />

  </div>
</template>

<script>
  export default {
    name: "Input",
    inheritAttrs: false,
    data: () => {

    },
    props: {
        icon: {
            type: String,
            required: false
        }
    },
    computed: {

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