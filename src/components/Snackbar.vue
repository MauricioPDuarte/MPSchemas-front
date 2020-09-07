<template>
  <v-snackbar v-model="show" :color="color" timeout="4000">
    {{ message }}
    <v-btn text @click="show = false">Fechar</v-btn>
  </v-snackbar>
</template>

<script>
  export default {
    data () {
      return {
        show: false,
        message: '',
        color: ''
      }
    },

    created () {
      this.$store.subscribe((mutation, state) => {
        if (mutation.type === 'snackbar/showMessage') {
          this.message = state.snackbar.content
          this.color = state.snackbar.color
          this.show = true
        }
      })
    }
  }
</script>