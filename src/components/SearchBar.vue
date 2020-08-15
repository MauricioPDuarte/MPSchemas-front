<template>
  <div class="container">
    <input placeholder="Digite o modelo da placa mãe" />

  
    <button><i class="fas fa-search iconBtnFind"></i><span class="textBtnFind">PESQUISAR</span></button>



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

<style le scoped>
.container {
    width: 100%;
    background: rgba(255, 255, 255, 0.09);
    border-radius: 5px;
    height: 72px;

    display: flex;
    justify-content: space-between;
  }

  .container input {
    width: 100%;
    padding: 10px 15px;
  }

  .container button {
    width: 90px;
    background: #374772;
    border-radius: 0 5px 5px 0;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all .3s ease-in;
  }

  .container button:hover {
    background: #42588E;
  }

  .textBtnFind {
    display: none;

    font-weight: 700;
  }


  @media(min-width: 600px) {
    .container button {
      width: 250px;
      background: #374772;
      border-radius: 0 5px 5px 0;
    }

    .textBtnFind {
      display: block;
    }

    .iconBtnFind {
      display: none;
    }
  }
  
  
</style>
  
  
  
