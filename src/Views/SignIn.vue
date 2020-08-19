<template>
  <div class="containerSignIn">
      <div class="blockSignIn">
        <h1>MPSchemas</h1>
        <p>Faça download de diversos esquemas elétricos, cadastre novos e colabore com a comunidade. </p>
        <Input placeholder="Email" type="text" v-model="credentialsDTO.email" :icon="'envelope'"/>
        <Input placeholder="Senha" type="password" v-model="credentialsDTO.password" :icon="'lock'" />
        <Button @click.native="handleLogin" :loading="loading">Entrar</Button>
            
        
        <span>━━━━ OU ━━━━</span>
        <router-link to="/cadastrar">CADASTRAR-SE</router-link>
      </div>
      <div class="triangle"></div>
  </div>
</template>

<script>
    import Input from '../components/Input';
    import Button from '../components/Button';
    import CredentialsDTO from '../models/CredentialsDTO';

    var data = {
        credentialsDTO: new CredentialsDTO("", ""),
        loading: false,
    }

    export default {
        name: 'SignIn',
        data: () => data,
        components: {
            Input,
            Button
        },
        computed: {
            loggedIn() {
                return this.$store.state.auth.status.loggedIn;
            }
        },
        created() {
            if (this.loggedIn) {
                this.$router.push('/');
            }
        },
        methods: {
            handleLogin() {
                if(this.credentialsDTO.email && this.credentialsDTO.password) {
                    this.loading = true;

                    this.$store.dispatch('auth/login', this.credentialsDTO).then(
                        () => {
                            this.$router.push('/');
                            this.loading = false;
                        },
                        () => {
                            this.loading = false
                        }
                    )
                }
            }
        }
    }
</script>

<style scoped>

    .blockSignIn {
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
        .blockSignIn {
            padding: 20px 25px;
            width: 400px;
        }
    }

    .blockSignIn h1 {
        margin-top: 20px;
        font-size: 30px;
        
    }

    .blockSignIn p {
        text-align: center;
        font-size: 12px;
        margin-top: 5px;
        margin-bottom: 60px;
        color: rgba(255, 255, 255, 0.6);
    }

    .blockSignIn span {
        text-align: center;
        margin: 20px 0;
        
    }

    .blockSignIn a {
        font-weight: 600;
        font-size: 13px;
        
    }

    .mpBtnPrimary {
        width: 100%;
        height: 60px;
        background: #374772;
        border-radius: 5px;


        font-weight: 600;
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

