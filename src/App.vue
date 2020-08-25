<template>
  <v-app>
    <v-container fluid fill-height>
      <router-view />
    </v-container>
  </v-app>
</template>

<script>

  export default {
    name: 'App',
    components: {
    }
  }
</script>
                                         
<style>
  /* SCROLL */ 
::-webkit-scrollbar {
  width: 10px;
  background: rgba(255, 255, 255, 0.09);
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
}
/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
  
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #121212; 
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.09);
}

</style>
