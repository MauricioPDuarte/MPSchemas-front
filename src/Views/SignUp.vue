<template>
  <div class="containerSignUp">
      <div class="blockSignUp">
          <h1>Cadastrar-se</h1>

          <div class="bar">
            <div class="circle" v-on:click="handleChangeScreen(screens.person)">
                <div class="circleActive"></div> <!-- DESATIVAR SE NAO CHEGOU AQUI -->
            </div>
            <div class="circle" v-on:click="handleChangeScreen(screens.address)">
                <div class="circleActive"></div> <!-- DESATIVAR SE NAO CHEGOU AQUI -->
            </div>
            <div class="circle">
                <div class="circleActive" ></div> <!-- DESATIVAR SE NAO CHEGOU AQUI -->
            </div>

            <div class="barProgress" :style="progess"></div>
          </div>

          <div class="block" id="person" v-show="screens.person.active">
            <Input placeholder="Email" type="text" :icon="'envelope'" />
            <Input placeholder="Email" type="text" :icon="'envelope'"/>
            <Input placeholder="Email" type="text" :icon="'envelope'"/>
            <Input placeholder="Email" type="text" :icon="'envelope'"/>
            <Input placeholder="Email" type="text" :icon="'envelope'"/>
            <Input placeholder="Email" type="text" :icon="'envelope'"/>
          </div>
          <div class="block" id="address" v-show="screens.address.active">
              ENDERECO
          </div>
          <div class="block" id="result" v-show="screens.result.active">

          </div>
          <Button @click.native="handleLogin">Entrar</Button>
      </div>
      <div class="triangle"></div>
  </div>
</template>

<script>
    import Input from '../components/Input';
    import Button from '../components/Button';
    //import User from '../models/User';

    let screens = {
        person: { active: false, name: "person" },
        address: { active: false, name: "address" },
        result: { active: false, name: "result" },
    }

    var data = {
        screens
    }


    export default {
        name: 'SignUp',
        data: () => data,
        components: {
            Input,
            Button,
        },
        computed: {
            loggedIn: function () {
                return this.$store.state.auth.status.loggedIn;
            },

            progess: function () {
                return `width: ${this.progessLevel}%`;
            }

        },
        created() {
            if (this.loggedIn) {
                this.$router.push('/');
            }

        },
        methods: {
            handleChangeScreen: function (screenChange) {
                Object.values(this.screens).forEach(screen => {
                    if(screenChange.name == screen.name) {
                        screen.active = true;
                    }else {
                        screen.active = false;
                    }
                });
            }
        }
            
    }
</script>

<style scoped>
    .blockSignUp {
        position: fixed;
        left: 0%;
        right: 0;
        margin: 70px auto 0 auto;
        width: 350px;
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.06)), #121212;
        padding: 10px 15px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    @media(min-width: 600px){
        .blockSignUp {
            padding: 20px 25px;
            width: 400px;
        }
    }

    
    .blockSignUp h1 {
        margin-bottom: 15px;
        font-size: 30px;
    }

    .block {
        width: 100%;
    }

    /* ==== PROGRESS ==== */
    .circle {
        width: 50px;
        height: 50px;
        background: #363636;
        border-radius: 100%;
        padding: 8px;
    }

    .circleActive {
        background: #374772;
        width: 100%;
        height: 100%;
        border-radius: 100%;
    }

 
    .bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #363636;
        height: 20px;
        width: 100%;
        border-radius: 10px;
        margin-bottom: 40px;
    }

    .barProgress {
        position: absolute;
        /*width: 40%; /* ALTERAR ISSO AQUI */
        background: #374772;
        height: 20px;
        border-radius: 10px;
        left: 40px;

    }

    .triangle {
        width: 100%;
        height: 100vh;
        background-color: rgba(255, 255, 255, 0.02);
        clip-path: polygon(100% 100%, 0 100%, 100% 0);
        z-index: -9999;
        position: absolute;
    }

</style>

