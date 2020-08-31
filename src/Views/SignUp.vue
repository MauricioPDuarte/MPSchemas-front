<template>
    <v-container fill-height>
            <v-row 
                align="center"
                justify="center">
                <v-col cols="12" sm="4" md="4" lg="3">
                    <v-sheet class="pa-5" elevation="6">
                        <v-btn icon color="white" to="/login">
                            <v-icon>mdi-arrow-left</v-icon>
                        </v-btn>

                        <v-alert v-show="errorMsg != ''" type="error" color="red" border="left" dismissible>{{errorMsg}}</v-alert>
                        
                        <h1 class="text-center mb-5">Cadastrar-se</h1>

                        <ValidationObserver v-slot="{ invalid }">
                            <v-form >

                                <ValidationProvider name="Nome" rules="required" v-slot="{ errors }">
                                    <v-text-field
                                        v-model="user.name"
                                        hide-details="auto"
                                        :error-messages="errors"
                                        outlined
                                        label="Nome completo"
                                        class="mb-3"
                                    ></v-text-field>
                                </ValidationProvider>
                                
                                <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
                                    <v-text-field
                                        v-model="user.email"
                                        hide-details="auto"
                                        :error-messages="errors"
                                        outlined
                                        class="mb-3"
                                        label="Email"

                                    ></v-text-field>
                                </ValidationProvider>

                                <ValidationProvider name="Senha" rules="required" v-slot="{ errors }">
                                    <v-text-field
                                        v-model="user.password"
                                        hide-details="auto"
                                        :error-messages="errors"
                                        outlined
                                        label="Senha"
                                        class="mb-3"
                                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                        @click:append="showPassword = !showPassword"
                                        :type="showPassword ? 'text' : 'password'"
                                    ></v-text-field>
                                </ValidationProvider>

                                <ValidationProvider name="Confirmar Senha" rules="required|password:@Senha" v-slot="{ errors }">
                                    <v-text-field
                                        hide-details="auto"
                                        :error-messages="errors"
                                        outlined
                                        label="Confirmar senha"
                                        class="mb-3"
                                        :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                        @click:append="showConfirmPassword = !showConfirmPassword"
                                        :type="showConfirmPassword ? 'text' : 'password'"
                                        v-model="confirmation"
                                        
                                    ></v-text-field>
                                </ValidationProvider>

                                <v-btn
                                    block
                                    x-large
                                    color="primary"
                                    @click="handleRegister" :loading="loading"
                                    :disabled="invalid"
                                >
                                Cadastrar
                                </v-btn>
                            </v-form>
                        </ValidationObserver>
              


                    </v-sheet>
                </v-col>
            </v-row>
    </v-container>
</template>

<script>
    import User from '../models/User';
    import { ValidationObserver }  from 'vee-validate';
    import UserService from '../services/user.service';

    var data = {
        e1: 1,
        user: new User("", "", "", {}, {}, ""),
        loading: false,
        showConfirmPassword: false,
        showPassword: false,
        confirmation: "",
        errorMsg: ""
      
    }

    export default {
        name: 'SignUp',
        data: () => data,
        components: {
            ValidationObserver
        },
        computed: {

        },
        created() {
            if (this.loggedIn) {
                this.$router.push('/');
            }
        },
        methods: {
           handleRegister() {
               this.loading = true;
               UserService.register(this.user)
               .then(
                   (response) => {
                        console.log(response);
                        this.$router.push('/login');
                        this.loading = false;
                   },
                   (error) => {
                       this.errorMsg = error.response.data.message;
                       this.loading = false;
                   }
               )

           }
        }
            
    }
</script>

<style scoped>


</style>

