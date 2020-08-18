<template>
  <div class="containerListSchemas">
    <div class="containerSearch">
      <SearchBar />
    </div>

    <div class="listSchemas">
      <SchemaCard color-category="#CF412E"/>
      <SchemaCard color-category="#D4D73B"/>
      <SchemaCard color-category="#1586C6"/>
      <SchemaCard color-category="#CF412E"/>
      <SchemaCard color-category="#1586C6"/>
      <SchemaCard color-category="#D4D73B"/>
      <SchemaCard color-category="#CF412E"/>
      <SchemaCard color-category="#D4D73B"/>
      <SchemaCard color-category="#1586C6"/>
      <SchemaCard color-category="#CF412E"/>
      <SchemaCard color-category="#1586C6"/>
      <SchemaCard color-category="#D4D73B"/>
      <SchemaCard color-category="#CF412E"/>
      <SchemaCard color-category="#D4D73B"/>
      <SchemaCard color-category="#1586C6"/>
      <SchemaCard color-category="#CF412E"/>
      <SchemaCard color-category="#1586C6"/>
      <SchemaCard color-category="#D4D73B"/>
      <SchemaCard color-category="#CF412E"/>
      <SchemaCard color-category="#D4D73B"/>
      <SchemaCard color-category="#1586C6"/>
      <SchemaCard color-category="#CF412E"/>
      <SchemaCard color-category="#1586C6"/>
      <SchemaCard color-category="#D4D73B"/>
      <SchemaCard color-category="#CF412E"/>
      <SchemaCard color-category="#D4D73B"/>
      <SchemaCard color-category="#1586C6"/>
      <SchemaCard color-category="#CF412E"/>
      <SchemaCard color-category="#1586C6"/>
      <SchemaCard color-category="#D4D73B"/>
      <SchemaCard color-category="#CF412E"/>
      <SchemaCard color-category="#D4D73B"/>
      <SchemaCard color-category="#1586C6"/>
      <SchemaCard color-category="#CF412E"/>
      <SchemaCard color-category="#1586C6"/>
      <SchemaCard color-category="#D4D73B"/>
    </div>

    <a class="btnBackTop" href="#list"><i class="fas fa-arrow-up"></i></a>
  </div>
</template>

<script>
  import SchemaCard from '../components/SchemaCard';
  import SearchBar from '../components/SearchBar';
  import SchemaSevice from '../services/schema.service';

  export default {
    name: 'ListSchemas',
    created(){
      SchemaSevice.getSchemas().then((response) => console.log(response));
    },
    components: {
      SchemaCard,
      SearchBar
    }
  }
</script>

<style scoped>
  .containerListSchemas{
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 0 25px;
  }

  .containerSearch {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
  }

  .listSchemas {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    grid-gap: 16px;
  }

  .btnBackTop {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.03)), rgba(66, 88, 142, 0.8);
    box-shadow: 0px 0px 3px #121212;
    width: 50px;
    height: 50px;
    z-index: 5000;
    bottom: 20px;
    right: 20px;
    border-radius: 100%;
    cursor: pointer;
    font-size: 20px;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s ease-in;
  }

  .btnBackTop:hover {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.03)), rgba(66, 88, 142, 1);
  }


</style>

