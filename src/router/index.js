import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   redirect:'/welcome',
  // },
  {
    path:'/',
    name:"home",
    redirect:'/welcome',
    children:[
      {
        path:'/welcome',
        name:'welcome',
        component:()=>import('../views/main/Welcome.vue'),
      },
      {
        path:'/upload',
        name:'upload',
        component:()=>import('../views/AboutView.vue'),
      }
          ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
