<template>
  <div id="app" class="">
    <nav-bar></nav-bar>

    <div class="containerApp">
      <search-bar></search-bar>

        <div class="list">
          <schema-card color-category="#CF412E"></schema-card>
          <schema-card color-category="#D4D73B"></schema-card>
          <schema-card color-category="#1586C6"></schema-card>
          <schema-card color-category="#40A91B;"></schema-card>
          <schema-card color-category="#CF412E"></schema-card>
          <schema-card color-category="#40A91B;"></schema-card>
          <schema-card color-category="#1586C6"></schema-card>
          <schema-card color-category="#D4D73B"></schema-card>
          <schema-card color-category="#CF412E"></schema-card>
          <schema-card color-category="#1586C6"></schema-card>
          <schema-card color-category="#CF412E"></schema-card>
          <schema-card color-category="#D4D73B"></schema-card>
          <schema-card color-category="#1586C6"></schema-card>
          <schema-card color-category="#40A91B;"></schema-card>
          <schema-card color-category="#CF412E"></schema-card>
          <schema-card color-category="#40A91B;"></schema-card>
          <schema-card color-category="#1586C6"></schema-card>
          <schema-card color-category="#D4D73B"></schema-card>
          <schema-card color-category="#CF412E"></schema-card>
          <schema-card color-category="#1586C6"></schema-card>
          <schema-card color-category="#CF412E"></schema-card>
          <schema-card color-category="#D4D73B"></schema-card>
          <schema-card color-category="#1586C6"></schema-card>
          <schema-card color-category="#40A91B;"></schema-card>
          <schema-card color-category="#CF412E"></schema-card>
        </div>
    </div>
  

  </div>
</template>

<script>
import SchemaCard from './components/SchemaCard';
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    SchemaCard,
    SearchBar,
    NavBar
  }
}
</script>

<style>
  #app {
    height: 100%;
  }

  .containerApp {
    max-width: 1650px;
    margin: 0 auto;
    padding: 10px 15px;

    display: flex;
    flex-direction: column;
  }

  .list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 322px);
    grid-gap: 12px;
    justify-content: center;
    overflow: auto;

  }

* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  background: none;
  color: rgba(255, 255, 255, 0.87);
  outline: none;
}

html, body {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #121212;
  height: 100%;
 
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

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  
}


</style>
