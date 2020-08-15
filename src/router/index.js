import Vue from 'vue';
import VueRouter from 'vue-router';

import ListSchemas from "../views/ListSchemas";
import SignIn from "../views/SignIn";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name:"Home",
        component: ListSchemas,

    },
    {
        path: "/login",
        name:"SignIn",
        component: SignIn
    },
]

export default new VueRouter({ 
    mode: "history",
    routes,
    base: process.env.BASE_URL
 });
