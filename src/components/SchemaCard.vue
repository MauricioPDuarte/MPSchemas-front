<template>
  <div class="container" :style="style">

    <div class="infoSchema">
      <h3>ASUS GAMER U3C</h3>
      <p>Desktop</p>
    </div>

    <div class="infoUserAndDetailsSchema">
      <div class="infoUserContainer">
        <img class="avatar" src="https://scontent.fbnu2-1.fna.fbcdn.net/v/t1.0-9/107703838_2992659257436834_8526933876114670156_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_eui2=AeEVzoxEIBsvZP6mEX7b5KiG7zeaqY3VHaXvN5qpjdUdpdKf1Gjf4sH21Hr4XYmplD1NAkwQrhZw9OxeKvnQW-8j&_nc_ohc=gyFKE9bAU9UAX8y9aw6&_nc_ht=scontent.fbnu2-1.fna&oh=409c52fc52ac88e01c2fb0a8471fdf2a&oe=5F577DE6" />
        <div class="infoUser">
          <p>Mauricio Pruss Duarte</p>
          <span>prussdev@gmail.com</span>
        </div>
      </div>

      <div class="detailsSchema">
        <p>223</p>
        <i class="material-icons">cloud_download</i>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "SchemaCard",
    props: {
      colorCategory: {
        type: String,
        required: true
      }
    },

    computed: {
      style: function() {
        return "border-left: 8px solid " + this.colorCategory + ";";
      }
    }
  }
</script>

<style scoped>
  .container {
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.09);
    padding: 10px 15px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;


  }

  .infoSchema h3{
    font-size: 18px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.87);
  } 

  .infoSchema p{
    font-weight: 300;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
    margin-top: -2px;
  } 

  .infoUserContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
  }

    .infoUserContainer .avatar {
      width: 32px;
      height: 32px;
      border-radius: 100%;
      background: #fff;
      
    }

  .infoUser {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
  }

    .infoUserContainer p{
      color: rgba(255, 255, 255, 0.87);
      font-size: 11px;
      font-weight: bold;
    }

    .infoUserContainer span{
      color: rgba(255, 255, 255, 0.6);
      font-size: 11px;
      font-weight: 300;
      margin-top: -2px;
    }

    .infoUserAndDetailsSchema {
      display: flex;

      align-items: flex-end;
      justify-content: space-between;
    }

    .detailsSchema {
        display: flex;
        align-items: center;
        
    }

    .detailsSchema p {
      font-size: 12px;
    }


    .detailsSchema i {
      font-size: 19px;
      margin-left: 5px;
      
    }

  
</style>