<template>
  <div class="containerSignUp">
      <div class="blockSignUp">
        <div class="iconBackPage">
        <a><font-awesome-icon icon="arrow-left" /></a>
        </div>
        <h1>Cadastrar-se</h1>
    
            <Steps>
                <Step />
                <StepDivider />
                <Step />
                <StepDivider />
                <Step />
            </Steps>

          <div class="block" id="person" v-show="screens.person.blockForm">
            <Input placeholder="Nome" type="text" :icon="'user'" />
            <Input placeholder="Email" type="text" :icon="'envelope'"/>
            <div class="phone">
                <div class="dddPhone"><Input placeholder="DDD" type="text" :icon="'phone'"/></div>
                <Input placeholder="Celular" type="text" />
            </div>
            <Input placeholder="CPF" type="text" :icon="'envelope'"/>
            <Input placeholder="Senha" type="text" :icon="'lock'"/>
            <Input placeholder="Confirmar Senha" type="text" :icon="'lock'"/>

            <Button @click.native="handleChangeScreen(screens.address)">Próximo</Button>
          </div>
          <div class="block" id="address" v-show="screens.address.blockForm">
            <Input placeholder="CEP" type="text" :icon="'envelope'"/>
            <Input placeholder="Rua" type="text" :icon="'lock'"/>
            <Input placeholder="Bairro" type="text" :icon="'lock'"/>
            <Input placeholder="Complemento" type="text" :icon="'lock'"/>
            <Input placeholder="Número" type="text" :icon="'lock'"/>
            <Input placeholder="Cidade" type="text" :icon="'lock'"/>

            <Button>Cadastrar</Button>
          </div>
          <div class="block" id="result" v-show="screens.result.blockForm">

          </div>
          
      </div>

  </div>
</template>

<script>
    import Input from '../components/Input';
    import Button from '../components/Button';
    import Steps from '../components/Steps';
    import Step from '../components/Step';
    import StepDivider from '../components/StepDivider';
    //import User from '../models/User';

    let screens = {
        person: { active: false, blockForm: false, name: "person", progess: 0 },
        address: { active: false, blockForm: false, name: "address", progess: 6 },
        result: { active: false, blockForm: false, name: "result", progess: 80 },
    }

    var data = {
        screens,
        progessLevel: 0
    }


    export default {
        name: 'SignUp',
        data: () => data,
        components: {
            Input,
            Button,
            Steps,
            Step,
            StepDivider
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

        this.handleChangeScreen(screens.person);

        },
        methods: {
            handleChangeScreen: function (screenChange) {
                switch(screenChange.name) {
                    case screens.person.name:
                        screens.address.active = false;
                        screens.address.blockForm = false;

                        screens.person.active = true;
                        screens.person.blockForm = true;

                        this.progessLevel = screens.person.progess;
                        break;

                    case screens.address.name:
                        screens.address.active = true;
                        screens.address.blockForm = true;

                        screens.person.blockForm = false;

                        this.progessLevel = screens.address.progess;
                        break;
                }
            }
        }
            
    }
</script>

<style scoped>

    .blockSignUp {
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
        margin-bottom: 35px;
        font-size: 30px;
    }

    .block {
        width: 100%;
    }

    .phone {
        display: flex;
    }

    .dddPhone {
        width: 60%;
        margin-right: 10px;
    }

    .iconBackPage {
        width: 100%;
        float: left;
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
        background: #374772;
        height: 20px;
        right: 1000px;
        border-radius: 10px;

    }
</style>

