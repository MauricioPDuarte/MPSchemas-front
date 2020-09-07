<template>
  <v-container>
    <v-row>
      <v-col cols="12" xl="5" md="5" >
        <v-sheet class="pa-10" elevation="5">
          <h1 class="mb-5">Novo esquema</h1>
          
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
                  @change="readURL()"
                  :error-messages="errors"
                   accept="application/pdf"
                ></v-file-input>
              </ValidationProvider>
              <v-btn 
                class="mt-2"
                large 
                color="primary" 
                :loading="loadingForm"
                :disabled="invalid"
                @click="handleSave"
                >
                SALVAR
                </v-btn>
            </v-form>
          </ValidationObserver>
        </v-sheet>
      </v-col>
      <v-col cols="12" md="7" xs="12">
        <v-sheet class="pa-7" elevation="5">
          <object :data="schemaDTO.urlPDFSchema ? schemaDTO.urlPDFSchema : pdfUrl" width="100%" height="700px" type="application/pdf"></object>
        </v-sheet>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import SchemaDTO from '../models/SchemaDTO';
  import { ValidationObserver }  from 'vee-validate';
  import SchemaService from '../services/schema.service';
  import CategoryService from '../services/category.service';

  var data = {
    schemaDTO: new SchemaDTO(0, '', ''),
    file: '',
    pdfUrl: null,
    categories: [],
    loadingForm: false,
  };

  export default {
    name: "EditSchema",
    data: () => data,
    components: {
      ValidationObserver,
    },

    mounted() {
      this.handleListCategories();
    },

    methods: {
      readURL() {
        this.pdfUrl = URL.createObjectURL(this.file);
      },

      handleListCategories() {
        CategoryService.get()
          .then(response => {
              this.categories = response.data;
        });
      },

      handleSave() {
        this.loadingForm = true;
        
        var data = new FormData();
        data.append('stringJson', JSON.stringify(this.schemaDTO));
        data.append('file', this.file);

        SchemaService.insert(data)
          .then(() => {
            this.loadingForm = false;
            this.schemaDTO = new SchemaDTO(0, '', '');
            this.file = '';
            this.pdfUrl = '';
            this.$refs.form.reset();

            this.$notifier.showMessage({ content: 'Salvo com sucesso!', color: 'success' });
          })
          .catch((error) => {
            console.log(error);
            this.loadingForm = false;
            this.errorInsertSchemaMsg = error.response.data.message;
          })
      },

    }
  }
</script>

<style scoped>

</style>