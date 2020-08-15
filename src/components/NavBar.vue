<template>
  <div class="containerNavBar">
    <div class="dataNav">
      <h3>MPSchemas</h3>
    </div>

    <div class="optionsAndUser">
      <ul>
        <li class="btnMySchemas">MEUS ESQUEMAS</li>
      </ul>
      <div class="infoUserContainer">
        <img class="avatar" src="https://scontent.fbnu2-1.fna.fbcdn.net/v/t1.0-9/107703838_2992659257436834_8526933876114670156_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_eui2=AeEVzoxEIBsvZP6mEX7b5KiG7zeaqY3VHaXvN5qpjdUdpdKf1Gjf4sH21Hr4XYmplD1NAkwQrhZw9OxeKvnQW-8j&_nc_ohc=gyFKE9bAU9UAX8y9aw6&_nc_ht=scontent.fbnu2-1.fna&oh=409c52fc52ac88e01c2fb0a8471fdf2a&oe=5F577DE6" />
        <div class="infoUser">
          <p>Mauricio Pruss Duarte</p>
          <span>prussdev@gmail.com</span>
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
  .containerNavBar {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.19);
    height: 60px;
    max-width: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.09);
    margin-bottom: 40px;
    padding: 0 30px;

    display: flex;
    justify-content: space-between;
  }

  .dataNav {
    margin: 0 auto;
    width: 100%;
    max-width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .optionsAndUser {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .optionsAndUser ul {
    margin-right: 60px;
  }

  .btnMySchemas {
    background: #374772;
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 600;
  }


.infoUserContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

    .infoUserContainer .avatar {
      width: 37px;
      height: 37px;
      border-radius: 100%;
      background: #fff;
      
    }

  .infoUser {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
  }

    .infoUserContainer p{
      color: rgba(255, 255, 255, 0.87);
      font-size: 12px;
      font-weight: bold;
    }

    .infoUserContainer span{
      color: rgba(255, 255, 255, 0.6);
      font-size: 12px;
      font-weight: 300;
      margin-top: -2px;
    }

</style>