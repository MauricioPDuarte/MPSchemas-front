import Vue from 'vue';
import VueRouter from 'vue-router';

import ListSchemas from "../views/ListSchemas";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import Home from "../views/Home";
import UserSchemas from "../views/UserSchemas";
import EditSchema from "../views/EditSchema";

Vue.use(VueRouter);

const routes = [
    {
      path: "/",
      name:"Home",
      component: Home,
      children: [
        {
          path: '',
          component: ListSchemas
        },
        {
          path: '/esquema',
          component: UserSchemas
        },
        {
          path: 'esquema/novo',
          component: EditSchema
        }
      ]
    },
    {
      path: "/login",
      name:"SignIn",
      component: SignIn
    },
    {
      path: "/cadastrar",
      name:"SignUp",
      component: SignUp
  },
]


const router = new VueRouter({ 
    routes,
    mode: 'history',
    base: process.env.BASE_URL
 });

 router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/cadastrar'];
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