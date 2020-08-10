<template>
  <div class="container">

    <input placeholder="Digite o modelo da placa mãe" />
    <button>PESQUISAR</button>

  </div>
</template>

<script>
  export default {
    name: "SearchBar",
    props: {

    },

    computed: {
    }
  }
</script>

<style scoped>
  .container {
    margin: 0 0 30px 0;
    width: 60%;
    background: rgba(255, 255, 255, 0.09);
    border-radius: 5px;
    height: 72px;

    display: flex;
    justify-content: space-between;
  }

  .container button {
    background: #374772;
    width: 250px;
    border-radius: 0 5px 5px 0;

    font-weight: 600;
    font-size: 15px;
  }

  
  .container input {
    width: 100%;
    padding: 0 15px;
    
  }
  
  
</style>