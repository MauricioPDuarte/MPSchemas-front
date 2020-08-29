<template>
  <v-container>

    <v-sheet class="d-flex searchbar" >
      <v-text-field
        placeholder="Digite o modelo da placa mãe"
        solo
        hide-details
        height="80px"
        
      ></v-text-field>
      <v-btn color="primary" height="auto" width="250px">PESQUISAR</v-btn>
    </v-sheet>

    <div class="grid mt-5">

      <v-card elevation="2" v-for="schema in schemas" :key="schema.id" :style="'border-left: 7px solid ' + schema.category.color" class="d-flex flex-row justify-space-between">
        <div>
          <v-card-title>{{schema.name}}</v-card-title>
          <v-card-subtitle class="font-weight-light text--secondary">{{schema.category.name}}</v-card-subtitle>

          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>

            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="caption">{{ schema.user.name }}</v-list-item-title>
              <v-list-item-subtitle class="caption">{{ schema.user.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

        </div>
        <div class="d-flex flex-column align-center justify-center mr-2">
            <v-btn icon x-small class="mb-3">
              <v-icon color="red">mdi-alert-outline</v-icon>
            </v-btn>

            <v-btn icon color="primary" x-small class="mb-3">
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            
            <v-btn icon x-small>
              <v-icon>mdi-download</v-icon>
            </v-btn>
        </div>

      </v-card>

    </div>

  </v-container>
</template>

<script>
  import SchemaSevice from '../services/schema.service';


  var data = {
    schemas: [
      {
        id: 0,
        name: "ASUS GAMER G7UUIDFA",
        url: "",
        category: {
          id: 0,
          name: "Notebook",
          color: "#CF412E"
        },
        user: {
          id: 0,
          name: "Mauricio Pruss Duarte",
          email: "prussdev@gmail.com",
          avatar: "",
        }
      },
      {
        id: 0,
        name: "ASUS GAMER G7UUIDFA",
        url: "",
        category: {
          id: 2,
          name: "Notebook",
          color: "#5C45B8"
        },
        user: {
          id: 1,
          name: "Mauricio Pruss Duarte",
          email: "prussdev@gmail.com",
          avatar: "",
        }
      },
      {
        id: 0,
        name: "ASUS GAMER G7UUIDFA",
        url: "",
        category: {
          id: 2,
          name: "Notebook",
          color: "#D4D73B"
        },
        user: {
          id: 1,
          name: "Mauricio Pruss Duarte",
          email: "prussdev@gmail.com",
          avatar: "",
        }
      },
      {
        id: 0,
        name: "ASUS GAMER G7UUIDFA",
        url: "",
        category: {
          id: 2,
          name: "Notebook",
          color: "#40A91B"
        },
        user: {
          id: 1,
          name: "Mauricio Pruss Duarte",
          email: "prussdev@gmail.com",
          avatar: "",
        }
      },
      {
        id: 0,
        name: "ASUS GAMER G7UUIDFA",
        url: "",
        category: {
          id: 2,
          name: "Notebook",
          color: "#D4D73B"
        },
        user: {
          id: 1,
          name: "Mauricio Pruss Duarte",
          email: "prussdev@gmail.com",
          avatar: "",
        }
      },
      {
        id: 0,
        name: "ASUS GAMER G7UUIDFA",
        url: "",
        category: {
          id: 2,
          name: "Notebook",
          color: "#5C45B8"
        },
        user: {
          id: 1,
          name: "Mauricio Pruss Duarte",
          email: "prussdev@gmail.com",
          avatar: "",
        }
      },
      {
        id: 0,
        name: "ASUS GAMER G7UUIDFA",
        url: "",
        category: {
          id: 2,
          name: "Notebook",
          color: "#5C45B8"
        },
        user: {
          id: 1,
          name: "Mauricio Pruss Duarte",
          email: "prussdev@gmail.com",
          avatar: "",
        }
      },
      {
        id: 0,
        name: "ASUS GAMER G7UUIDFA",
        url: "",
        category: {
          id: 2,
          name: "Notebook",
          color: "#CF412E"
        },
        user: {
          id: 1,
          name: "Mauricio Pruss Duarte",
          email: "prussdev@gmail.com",
          avatar: "",
        }
      },
      {
        id: 0,
        name: "ASUS GAMER G7UUIDFA",
        url: "",
        category: {
          id: 2,
          name: "Notebook",
          color: "#D4D73B"
        },
        user: {
          id: 1,
          name: "Mauricio Pruss Duarte",
          email: "prussdev@gmail.com",
          avatar: "",
        }
      },
      {
        id: 0,
        name: "ASUS GAMER G7UUIDFA",
        url: "",
        category: {
          id: 2,
          name: "Notebook",
          color: "#CF412E"
        },
        user: {
          id: 1,
          name: "Mauricio Pruss Duarte",
          email: "prussdev@gmail.com",
          avatar: "",
        }
      },
      {
        id: 0,
        name: "ASUS GAMER G7UUIDFA",
        url: "",
        category: {
          id: 2,
          name: "Notebook",
          color: "#40A91B"
        },
        user: {
          id: 1,
          name: "Mauricio Pruss Duarte",
          email: "prussdev@gmail.com",
          avatar: "",
        }
      },
      {
        id: 0,
        name: "ASUS GAMER G7UUIDFA",
        url: "",
        category: {
          id: 2,
          name: "Notebook",
          color: "#CF412E"
        },
        user: {
          id: 1,
          name: "Mauricio Pruss Duarte",
          email: "prussdev@gmail.com",
          avatar: "",
        }
      },
      {
        id: 0,
        name: "ASUS GAMER G7UUIDFA",
        url: "",
        category: {
          id: 2,
          name: "Notebook",
          color: "#40A91B"
        },
        user: {
          id: 1,
          name: "Mauricio Pruss Duarte",
          email: "prussdev@gmail.com",
          avatar: "",
        }
      },
      {
        id: 0,
        name: "ASUS GAMER G7UUIDFA",
        url: "",
        category: {
          id: 2,
          name: "Notebook",
          color: "#D4D73B"
        },
        user: {
          id: 1,
          name: "Mauricio Pruss Duarte",
          email: "prussdev@gmail.com",
          avatar: "",
        }
      },
      {
        id: 0,
        name: "ASUS GAMER G7UUIDFA",
        url: "",
        category: {
          id: 2,
          name: "Notebook",
          color: "#5C45B8"
        },
        user: {
          id: 1,
          name: "Mauricio Pruss Duarte",
          email: "prussdev@gmail.com",
          avatar: "",
        }
      },
      {
        id: 0,
        name: "ASUS GAMER G7UUIDFA",
        url: "",
        category: {
          id: 2,
          name: "Notebook",
          color: "#5C45B8"
        },
        user: {
          id: 1,
          name: "Mauricio Pruss Duarte",
          email: "prussdev@gmail.com",
          avatar: "",
        }
      },
      {
        id: 0,
        name: "ASUS GAMER G7UUIDFA",
        url: "",
        category: {
          id: 2,
          name: "Notebook",
          color: "#CF412E"
        },
        user: {
          id: 1,
          name: "Mauricio Pruss Duarte",
          email: "prussdev@gmail.com",
          avatar: "",
        }
      },
      {
        id: 0,
        name: "ASUS GAMER G7UUIDFA",
        url: "",
        category: {
          id: 2,
          name: "Notebook",
          color: "#D4D73B"
        },
        user: {
          id: 1,
          name: "Mauricio Pruss Duarte",
          email: "prussdev@gmail.com",
          avatar: "",
        }
      },
      {
        id: 0,
        name: "ASUS GAMER G7UUIDFA",
        url: "",
        category: {
          id: 2,
          name: "Notebook",
          color: "#CF412E"
        },
        user: {
          id: 1,
          name: "Mauricio Pruss Duarte",
          email: "prussdev@gmail.com",
          avatar: "",
        }
      },
      {
        id: 0,
        name: "ASUS GAMER G7UUIDFA",
        url: "",
        category: {
          id: 2,
          name: "Notebook",
          color: "#40A91B"
        },
        user: {
          id: 1,
          name: "Mauricio Pruss Duarte",
          email: "prussdev@gmail.com",
          avatar: "",
        }
      },
      {
        id: 0,
        name: "ASUS GAMER G7UUIDFA",
        url: "",
        category: {
          id: 2,
          name: "Notebook",
          color: "#CF412E"
        },
        user: {
          id: 1,
          name: "Mauricio Pruss Duarte",
          email: "prussdev@gmail.com",
          avatar: "",
        }
      },
      {
        id: 0,
        name: "ASUS GAMER G7UUIDFA",
        url: "",
        category: {
          id: 2,
          name: "Notebook",
          color: "#CF412E"
        },
        user: {
          id: 1,
          name: "Mauricio Pruss Duarte",
          email: "prussdev@gmail.com",
          avatar: "",
        }
      },
      {
        id: 0,
        name: "ASUS GAMER G7UUIDFA",
        url: "",
        category: {
          id: 2,
          name: "Notebook",
          color: "#CF412E"
        },
        user: {
          id: 1,
          name: "Mauricio Pruss Duarte",
          email: "prussdev@gmail.com",
          avatar: "",
        }
      },
      {
        id: 0,
        name: "ASUS GAMER G7UUIDFA",
        url: "",
        category: {
          id: 2,
          name: "Notebook",
          color: "#CF412E"
        },
        user: {
          id: 1,
          name: "Mauricio Pruss Duarte",
          email: "prussdev@gmail.com",
          avatar: "",
        }
      },
    ]
  };

  export default {
    name: 'ListSchemas',
    data: () => data,

    created(){
      SchemaSevice.getSchemas().then((response) => console.log(response));
    },

    components: {
      
    },

    computed: {
      borderColorCard(color) {
        return `border-left: 7px solid ${color}`;
      }
    }

  }
</script>

<style scoped>


  .grid {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 16px;
  }

  .searchbar {
    border-radius: 5px 0 0 5px;
  }

  .searchbar button {
    border-radius: 0 5px 5px 0;
  }

</style>

