import Vue from 'vue';
import Router from 'vue-router';

import ListSchemas from "../Views/ListSchemas";

Vue.use(Router);

const routes = [
    {
        name: "Lista Esquemas",
        path: "",
        component: ListSchemas
    },
]

export default new Router({ routes });
