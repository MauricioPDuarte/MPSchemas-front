<template>
    <v-container fill-height>
        <v-row align="center"
            justify="center">
            <v-col cols="12" sm="4" md="4" lg="3" >
                <v-sheet class="pa-10" elevation="6">
                    <v-alert v-show="errorMsg != ''" type="error" color="red" border="left" dismissible>{{errorMsg}}</v-alert>
                    <h1 class="text-center">MPShemas</h1>
                    <p class="text-center text--secondary mb-10">Faça download de diversos esquemas elétricos, cadastre novos e colabore com a comunidade.</p>
                    <v-text-field
                        label="Email"
                        outlined
                        hide-details
                        class="mb-3"
                        v-model="credentialsDTO.email"
                        :error="errorMsg != ''"
                        >
                    </v-text-field>
                     <v-text-field
                        label="Senha"
                        outlined
                        hide-details
                        class="mb-3"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                         @click:append="showPassword = !showPassword"
                         :type="showPassword ? 'text' : 'password'"
                         v-model="credentialsDTO.password"
                         :error="errorMsg != ''"
                        >
                    </v-text-field>
                    
                    <p class="body-2 text-right mb-3" :to="'/cadastrar'">Esqueceu sua senha?</p>

                    <v-btn x-large block color="primary" @click="handleLogin" :loading="loading">Entrar</v-btn>

                    <v-btn class="mt-10" to="/cadastrar" text block depressed>Cadastrar-se</v-btn>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import CredentialsDTO from '../models/CredentialsDTO';

    var data = {
        credentialsDTO: new CredentialsDTO("", ""),
        loading: false,
        showPassword: false,
        errorMsg: "",
    }

    export default {
        name: 'SignIn',
        data: () => data,
        components: {
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
                        (response) => {

                            console.log(response);
                            this.$router.push('/');
                            this.loading = false;
                        },
                        (error) => {
                            console.log(error.response)
                            this.errorMsg = error.response.data.message;
                            this.loading = false
                        }
                    )
                }
            },

            handleClickBtnPassword() {
                this.data = !this.data;
            }
        }
    }
</script>

<style scoped>
   .esqueceuSenha{
       margin-top: -10px!important;
   }
</style>

