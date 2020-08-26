<template>
    <v-container fluid>
            <v-row 
                align="center"
                justify="center">
                <v-col cols="12" sm="4" md="4" xl="2">
                    <v-sheet class="pa-5">
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
                                    <v-form >
                                        <v-text-field
                                            v-model="user.name"
                                            hide-details="auto"
                                            :rules="nameRules"
                                            outlined
                                            label="Nome completo"
                                            required
                                            class="mb-3"
                                        ></v-text-field>
                                        <v-text-field
                                            v-model="user.email"
                                            hide-details="auto"
                                            :rules="emailRules"
                                            outlined
                                            label="Email"
                                            required
                                        ></v-text-field>
                                        <v-row>
                                            <v-col cols="3">
                                                <v-text-field
                                                    v-model="user.phone.ddd"
                                                    hide-details
                                                    outlined
                                                    label="DDD"
                                                    maxlength="2"
                                                    required
                                                ></v-text-field>
                                            </v-col>
                                            <v-col >
                                                <v-text-field
                                                    v-model="user.phone.number"
                                                    hide-details
                                                    outlined
                                                    label="Celular"
                                                    maxlength="9"
                                                    required
                                                    
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-text-field
                                            v-model="user.cpf"
                                            hide-details
                                            outlined
                                            label="CPF"
                                            required
                                            class="mb-3"
                                        ></v-text-field>
                                        <v-text-field
                                            v-model="user.password"
                                            hide-details
                                            outlined
                                            label="Senha"
                                            required
                                            class="mb-3"
                                        ></v-text-field>
                                        <v-text-field
                                            hide-details
                                            outlined
                                            label="Confirmar senha"
                                            required
                                            class="mb-3"
                                        ></v-text-field>
                                        <v-btn
                                            block
                                            x-large
                                            color="primary"
                                            @click="e1 = 2"
                                        >
                                        Continuar
                                        </v-btn>
                                    </v-form>
                                </v-stepper-content>

                                <v-stepper-content step="2">
                                    <v-form>
                                        <v-text-field
                                            v-model="user.address.zipcode"
                                            hide-details
                                            outlined
                                            label="CEP"
                                            required
                                            class="mb-3"
                                        ></v-text-field>
                                        <v-text-field
                                            v-model="user.address.street"
                                            hide-details
                                            outlined
                                            label="Rua"
                                            required
                                            class="mb-3"
                                        ></v-text-field>
                                        <v-text-field
                                            v-model="user.address.neighborhood"
                                            hide-details
                                            outlined
                                            label="Bairro"
                                            required
                                            class="mb-3"
                                        ></v-text-field>
                                        <v-text-field
                                            v-model="user.address.complement"
                                            hide-details
                                            outlined
                                            label="Complemento"
                                            required
                                            class="mb-3"
                                        ></v-text-field>
                                        <v-text-field
                                            v-model="user.address.number"
                                            hide-details
                                            outlined
                                            label="Número"
                                            required
                                        ></v-text-field>
                                        <v-row>
                                            <v-col>
                                                <v-text-field
                                                    v-model="user.address.city"
                                                    hide-details
                                                    outlined
                                                    label="Cidade"
                                                    required
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="3">
                                                <v-text-field
                                                    v-model="user.address.state"
                                                    hide-details
                                                    outlined
                                                    label="UF"
                                                    required
                                                ></v-text-field>
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
                                        >
                                        Cadastrar
                                        </v-btn>

                                    </v-form>
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

    var data = {
        e1: 1,
        user: new User("", "", "", {}, {}, ""),
        loading: false,
        nameRules: [
            v => !!v || "Nome é obrigatório!",
        ],
        emailRules: [
            v => !!v || "Email é obrigatório!",
            v => /.+@.+\..+/.test(v) || 'Digite um email válido!'
        ]
    }

    export default {
        name: 'SignUp',
        data: () => data,
        components: {

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

