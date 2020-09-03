<template>
  <v-container>
    <v-row>
      <v-col cols="12" xl="4">

      </v-col>
    </v-row>
    <v-row>
        <!--
      <v-col cols="12" xl="4" md="5">
        <v-sheet class="pa-7" elevation="5">
          <h4>Novo esquema</h4>
          <v-alert v-show="errorInsertSchemaMsg != ''" type="error" color="red" border="left" dismissible>{{errorInsertSchemaMsg}}</v-alert>
          <ValidationObserver v-slot="{ invalid }" ref="form">
            <v-form>
              <ValidationProvider name="Descrição" rules="required" v-slot="{ errors }">
                <v-text-field
                  label="Descrição"
                  required
                  v-model="schemaDTO.name"
                  :error-messages="errors"
                ></v-text-field>
              </ValidationProvider>
              <ValidationProvider name="Categoria" rules="required" v-slot="{ errors }">
                <v-select 
                  label="Categoria"
                  :items="categories"
                  item-text="name"
                  item-value="id"
                  :error-messages="errors"
                  v-model="schemaDTO.categoryId"
                ></v-select>
              </ValidationProvider>
              <ValidationProvider name="Esquema" rules="required" v-slot="{ errors }">
                <v-file-input
                  label="Esquema (PDF)"
                  v-model="file"
                  :error-messages="errors"
                ></v-file-input>
              </ValidationProvider>
              <v-btn 
                @click="handleSave" 
                x-large block 
                color="primary" 
                :loading="loadingForm"
                :disabled="invalid">SALVAR
              </v-btn>
            </v-form>
          </ValidationObserver>
        </v-sheet>
      </v-col>
        -->
      <v-col>
        <v-sheet class="pa-7" elevation="5">
          <v-row align="center">
            <v-col cols="12" xl="3" sm="8" xs="12">
              <v-text-field
                 prepend-inner-icon="mdi-magnify"
                label="Descrição"
                single-line
                hide-details
                class="pa-0"
              ></v-text-field>
              
            </v-col>
            <v-col class="text-right">
              <v-btn fab color="green darken-2" small class="mr-2" >
                <v-icon small>mdi-refresh</v-icon>
              </v-btn>
              <v-btn fab color="primary" small class="mr-2" >
                <v-icon small>mdi-plus</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-data-table 
                :headers="headers" 
                :items="schemas" 
                loading-text="Carregando" 
                no-data-text="Nenhum esquema cadastrado" 
                no-results-text="Nenhum esquema encontrado"
                :loading="loadingList"
                
              >
                <template v-slot:[`item.category.name`]="{ item }">
                  <v-chip  small :color="item.category.color">{{ item.category.name }}</v-chip>
                </template>

                <template v-slot:[`item.url`]="{ item }">
                  <v-btn :href="item.url" color="primary" small><v-icon small>mdi-arrow-down</v-icon></v-btn>
                </template>

                <template v-slot:[`item.acoes`]="{ item }">
                  <v-btn @click="handleDeleteSchema(item.id)" color="" icon small><v-icon small >mdi-pencil</v-icon></v-btn>
                  <v-btn @click="handleDeleteSchema(item.id)" color="" icon small><v-icon small >mdi-delete</v-icon></v-btn>
                </template>
              </v-data-table>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  import SchemaService from '../services/schema.service';
  import CategoryService from '../services/category.service';
  import SchemaDTO from '../models/SchemaDTO';
  //import { ValidationObserver }  from 'vee-validate';

  var data = {
    headers: [
      { text: '#', value: 'id' },
      {
        text: 'Descrição (Esquema)',
        align: 'start',
        sortable: true,
        value: 'name',
      },
      { text: 'Categoria', value: 'category.name' },
      { text: 'PDF', value: 'url' },
      { text: 'Ações', value: 'acoes' },
    ],
    schemas: [],
    categories: [],
    schemaDTO: new SchemaDTO('', ''),
    file: '',
    loadingList: false,
    loadingForm: false,
    errorInsertSchemaMsg: '',
  };

  export default {
    name: "UserSchemas",
    data: () => data,
    components: {
      //ValidationObserver
    },
    mounted() {
      this.handleListSchemas();
      this.handleListCategories();

    },
    methods: {
      handleSave() {
        this.loadingForm = true;
        
        var data = new FormData();
        data.append('stringJson', JSON.stringify(this.schemaDTO));
        data.append('file', this.file);

        SchemaService.insert(data)
          .then(() => {
            this.loadingForm = false;
            this.schemaDTO = new SchemaDTO('', '');
            this.file = '';
            this.$refs.form.reset();

            this.handleListSchemas();
          })
          .catch((error) => {
            this.loadingForm = false;
            this.errorInsertSchemaMsg = error.response.data.message;
          })
      },

      handleListSchemas() {
        this.loadingList = true;

        SchemaService.getByUser()
          .then(reponse => {
            this.schemas = reponse.data
            this.loadingList = false;
          })
          .catch(() => {
            this.loadingList = false;
          })
      },

      handleListCategories() {
        CategoryService.get()
          .then(response => {
              this.categories = response.data
        });
      },

      handleDeleteSchema(id) {
        SchemaService.delete(id)
          .then(() => {
              this.handleListSchemas();
          })
          .catch(() => {
            
          })
      }
    }
  }
</script>

<style scoped>
  .blockAvatar {
    border: 5px solid #0D47A1;
    border-radius: 50%; 
    padding: 8px;
  }
</style>
