<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="12" xl="4" >
        <v-sheet class="pa-7">
          <v-form >
            <v-text-field
              label="Descrição"
              required
            ></v-text-field>
            <v-select 
              label="Categoria"

            ></v-select>
            <v-file-input
              label="Esquema (PDF)"
            ></v-file-input>
            <v-btn x-large block color="primary">SALVAR</v-btn>
          </v-form>
        </v-sheet>
      </v-col>
      <v-col>
          <v-sheet class="mb-3 pa-3">

            <v-row>
              <v-col cols="12" xl="3">
                <v-text-field
                  class="pa-0"
                  label="Descrição"
                  hide-details
                >
                </v-text-field>
              </v-col>
              <v-col class="mt-1">
                <v-btn color="primary">
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-col>
            </v-row>

          </v-sheet>
          <v-sheet class="pa-7">
            <v-data-table 
              :headers="headers" 
              :items="schemas" 
              loading-text="Carregando" 
              no-data-text="Nenhum esquema cadastrado" 
              no-results-text="Nenhum esquema encontrado"
              
            >
              <template v-slot:[`item.category.name`]="{ item }">
                <v-chip  small :color="item.category.color">{{ item.category.name }}</v-chip>
              </template>

              <template v-slot:[`item.url`]="{ item }">
                <v-btn :href="item.url" color="primary" small><v-icon small>mdi-arrow-down</v-icon></v-btn>
              </template>

              <template v-slot:[`item.acoes`]="{ item }">
                <v-btn @click="console.log(item.id)" color="" icon small><v-icon small >mdi-pencil</v-icon></v-btn>
                <v-btn @click="console.log(item.id)" color="" icon small><v-icon small >mdi-delete</v-icon></v-btn>
              </template>
            </v-data-table>
          </v-sheet>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  import Schemas from '../data-temp/schemas';

  var data = {
    headers: [
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
    schemas: Schemas
  };

  export default {
    name: "EditSchema",
    data: () => data,
  }
</script>

<style scoped>
</style>
