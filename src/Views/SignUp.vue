<template>
    <v-container >
            <v-row 
                align="center"
                justify="center">
                <v-col cols="12" sm="4" md="4" lg="3">
                    <v-sheet class="pa-5" elevation="6">
                        <v-btn icon color="white" to="/login">
                            <v-icon>mdi-arrow-left</v-icon>
                        </v-btn>

                        <h1 class="text-center mb-5">Cadastrar-se</h1>

                        <v-stepper alt-labels v-model="e1">

                            <v-stepper-header>
                                <v-stepper-step :complete="e1 > 1" step="1" editable>Dados Pessoais</v-stepper-step>
                                <v-divider></v-divider>
                                <v-stepper-step :complete="e1 > 2" step="2" editable>Endereço</v-stepper-step>
                            </v-stepper-header>

                            <v-stepper-items>

                                <v-stepper-content step="1" >
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
                                                    label="Email"

                                                ></v-text-field>
                                            </ValidationProvider>
                                            <v-row>
                                                <v-col cols="3">

                                                    <ValidationProvider name="DDD" rules="required|min:2" v-slot="{ errors }">
                                                        <v-text-field
                                                            v-model="user.phone.ddd"
                                                            hide-details
                                                            :error-messages="errors"
                                                            outlined
                                                            label="DDD"
                                                            maxlength="2"
                                                        ></v-text-field>
                                                    </ValidationProvider>
                                                </v-col>
                                                <v-col >
                                                    <ValidationProvider name="Número" rules="required|min:9" v-slot="{ errors }">
                                                        <v-text-field
                                                            v-model="user.phone.number"
                                                            hide-details="auto"
                                                            :error-messages="errors"
                                                            outlined
                                                            label="Celular"
                                                            maxlength="9"
                                                            
                                                        ></v-text-field>
                                                    </ValidationProvider>
                                                </v-col>
                                            </v-row>

                                            <ValidationProvider name="CPF" rules="required|min:14" v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="user.cpf"
                                                    hide-details="auto"
                                                    :error-messages="errors"
                                                    outlined
                                                    label="CPF"
                                                    class="mb-3"
                                                    v-mask="'###.###.###-##'"
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
                                                @click="e1 = 2"
                                                :disabled="invalid"
                                            >
                                            Continuar
                                            </v-btn>
                                        </v-form>
                                    </ValidationObserver>
                                </v-stepper-content>

                                <v-stepper-content step="2">
                                    <ValidationObserver v-slot="{ invalid }">
                                        <v-form>

                                            <ValidationProvider name="Cep" rules="required|min:9" v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="user.address.zipcode"
                                                    hide-details="auto"
                                                    :error-messages="errors"
                                                    outlined
                                                    label="CEP"
                                                    class="mb-3"
                                                    v-mask="'#####-###'"
                                                ></v-text-field>
                                            </ValidationProvider>

                                            <ValidationProvider name="Rua" rules="required" v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="user.address.street"
                                                    hide-details="auto"
                                                    :error-messages="errors"
                                                    outlined
                                                    label="Rua"
                                                    class="mb-3"
                                                ></v-text-field>
                                            </ValidationProvider>

                                            <ValidationProvider name="Bairro" rules="required" v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="user.address.neighborhood"
                                                    hide-details="auto"
                                                    :error-messages="errors"
                                                    outlined
                                                    label="Bairro"
                                                    class="mb-3"
                                                ></v-text-field>
                                            </ValidationProvider>

                                            <ValidationProvider name="Complemento" rules="" v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="user.address.complement"
                                                    hide-details="auto"
                                                    :error-messages="errors"
                                                    outlined
                                                    label="Complemento"
                                                    class="mb-3"
                                                ></v-text-field>
                                            </ValidationProvider>

                                            <ValidationProvider name="Numero" rules="required" v-slot="{ errors }">
                                                <v-text-field
                                                    v-model="user.address.number"
                                                    hide-details="auto"
                                                    :error-messages="errors"
                                                    outlined
                                                    label="Número"
                                                    type="number"
                                                ></v-text-field>
                                            </ValidationProvider>

                                            <v-row>
                                                <v-col>

                                                    <ValidationProvider name="Cidade" rules="required" v-slot="{ errors }">
                                                        <v-text-field
                                                            v-model="user.address.city"
                                                            hide-details="auto"
                                                            :error-messages="errors"
                                                            outlined
                                                            label="Cidade"
                                                        ></v-text-field>
                                                    </ValidationProvider>

                                                </v-col>
                                                <v-col cols="3">

                                                    <ValidationProvider name="UF" rules="required|min:2" v-slot="{ errors }">
                                                        <v-text-field
                                                            v-model="user.address.state"
                                                            hide-details
                                                            :error-messages="errors"
                                                            outlined
                                                            label="UF"
                                                            maxlength="2"
                                                        ></v-text-field>
                                                    </ValidationProvider>

                                                </v-col>
                                            </v-row>

                                            <v-btn
                                                outlined 
                                                block
                                                x-large
                                                color="primary"
                                                class="mb-3"
                                            >
                                            Voltar
                                            </v-btn>

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
                                </v-stepper-content>

                            </v-stepper-items>
                        </v-stepper>
                    </v-sheet>
                </v-col>
            </v-row>
    </v-container>
</template>

<script>
    import User from '../models/User';
    import { ValidationObserver }  from 'vee-validate';


    var data = {
        e1: 1,
        user: new User("", "", "", {}, {}, ""),
        loading: false,
        showConfirmPassword: false,
        showPassword: false,
        confirmation: "",
      
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
               
           }
        }
            
    }
</script>

<style scoped>


</style>

