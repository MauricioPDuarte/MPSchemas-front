<template>
    <button v-bind:class="[{ 'disabled' : disabled}, { 'disabled' : loading }]" class="button">
      <slot class="slot" v-if="!loading"></slot>
      <DotLoading :size="18" v-show="loading" />
    </button>
</template>

<script>
  import DotLoading from '../components/DotLoading';

  const data = {

  }

  export default {
    name: "Button",
    inheritAttrs: false,
    data: () => data,
    props: {
      loading: {
        type: Boolean,
        required: false,
        default: false,
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false,
      }
    },
    computed: {
    },
    components: {
      DotLoading
    }
  }
</script>

<style scoped>
  .disabled {
    cursor: not-allowed;
    background: #42588E;
  }

  button {
    width: 100%;
    height: 60px;
    background: #374772;
    border-radius: 5px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    transition: all .3s ease-in;
  }

  button:hover {
    background: #42588E;
  }
</style>