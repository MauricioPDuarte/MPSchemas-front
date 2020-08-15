<template>
  <div class="container">
    <div class="content">
      <div><h1><a href="#">MPSchemas</a></h1></div>
      <div class="navbarItens">
        <div class="itens">
          <ul>
            <li><a class="btnAddSchema">NOVO</a></li>
          </ul>
        </div>
        <div class="userDetails">
          <img src="https://scontent.fbnu2-1.fna.fbcdn.net/v/t1.0-9/107703838_2992659257436834_8526933876114670156_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_eui2=AeEVzoxEIBsvZP6mEX7b5KiG7zeaqY3VHaXvN5qpjdUdpdKf1Gjf4sH21Hr4XYmplD1NAkwQrhZw9OxeKvnQW-8j&_nc_ohc=gyFKE9bAU9UAX8y9aw6&_nc_ht=scontent.fbnu2-1.fna&oh=409c52fc52ac88e01c2fb0a8471fdf2a&oe=5F577DE6" />
          <i class="fas fa-caret-down"></i>
        </div>
      </div>
      


    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    props: {

    },

    computed: {
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    height: 60px;
    background: rgba(255, 255, 255, 0.09);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.19);
    margin-bottom: 40px;
  }

  .content {
    width: 100%;
    height: 100%;
    padding: 0 25px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbarItens {
    display: flex;
    align-items: center;
  }

  .itens {
    margin-right: 20px;
  }

  .btnAddSchema {
    background: #374772;
    padding: 10px 15px;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    transition: all .3s ease-in;
  }

  .btnAddSchema:hover {
    background: #42588E;
  }

  .userDetails {
     display: flex;
     align-items: center;
  }

  .userDetails img{
    width: 42px;
    height: auto;
    border-radius: 50%;
    margin-right: 6px;
  }



  
  
</style>