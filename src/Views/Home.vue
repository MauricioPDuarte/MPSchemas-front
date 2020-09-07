<template>
  <div>
    <v-app-bar class="mb-5" elevation-10>
      <v-container class="d-flex align-center">
        <v-toolbar-title>MPSchemas</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn color="primary" small class="mr-5 d-none d-sm-flex" to="/esquema">
          MEUS ESQUEMAS
        </v-btn>

        <v-badge
          overlap
          content="0"
          class="mr-2 ml-3"
        >
          <v-icon>mdi-bell</v-icon>
        </v-badge>

        <v-menu
          transition="slide-y-transition"
          bottom
          left
          offset-y
        >
         <template v-slot:activator="{ on, attrs }">
            <v-btn 
              text 
              :ripple="false" 
              depressed 
              rounded 
              class="no-background-hover"
              v-bind="attrs"
              v-on="on"
              height="50px"

              
            >
              <v-badge
                bordered
                color="primary"
                bottom
                icon="mdi-dots-vertical"
                offset-x="15"
                offset-y="15"

              >
                <v-avatar size="40">
                  <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                </v-avatar>
              </v-badge>
            </v-btn>
         </template>
          <v-list>
            <v-list-item @click="alert('sass')">
              <v-list-item-title>
                <v-icon class="mr-7">mdi-plus</v-icon>
                Novo
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="alert('sass')">
              <v-list-item-title>
                <v-icon class="mr-7">mdi-file-multiple</v-icon>
                Esquemas
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="alert('sass')">
              <v-list-item-title>
                <v-icon class="mr-7">mdi-logout</v-icon>
                Sair
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

      </v-container>
    </v-app-bar>

    <router-view></router-view>
</div>
</template>

<script>

export default {
  name: "Home",
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  }
}
</script>

<style scoped>
  .no-background-hover::before {
    background-color: transparent !important;
  }
</style>