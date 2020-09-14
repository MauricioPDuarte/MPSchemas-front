<template>
  <v-snackbar v-model="show" :color="color" :timeout="timeout">
    {{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn text @click="show = false"  v-bind="attrs">Fechar</v-btn>
    </template>
  </v-snackbar>
</template>

<script>

  export default {
    data () {
      return {
        show: false,
        message: '',
        color: '',
        timeout: 3500
      }
    },

    created () {
      this.$store.subscribe((mutation, state) => {
        console.log('CAIU AQUIU NO NEGOICIO ANTES DELE')
        if (mutation.type === 'snackbar/showMessage') {
          console.log('CAIU AQUIU NO NEGOICIO')
          this.message = state.snackbar.content;
          this.color = state.snackbar.color;
          this.timeout = state.timeout;
          this.show = true;
        }
      })
    },

  }
</script>