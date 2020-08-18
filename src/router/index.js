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


const router = new VueRouter({ 
    routes,
    mode: 'history',
    base: process.env.BASE_URL
 });

 router.beforeEach((to, from, next) => {
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
  
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
      next('/login');
    } else {
      next();
    }
  });

  export default router;