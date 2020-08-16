<template>
  <div id="app">
    <!--<NavBar /> -->
    <router-view />
  </div>
</template>

<script>
//- import NavBar from './components/NavBar';

  export default {
    name: 'App',
    components: {
      //NavBar
    }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  background: none;
  color: rgba(255, 255, 255, 0.87);
  outline: none;
}

body {
  background: #121212;
  height: 100%;
}

html * {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
}

button, a {
  cursor: pointer;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

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
