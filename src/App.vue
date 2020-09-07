<template>
  <v-app>
    <Snackbar></Snackbar>
    <router-view />
  </v-app>
</template>

<script>
  import Snackbar from './components/Snackbar';

  export default {
    name: 'App',
    components: {
      Snackbar
    }
  }
</script>
                                         
<style>


</style>
