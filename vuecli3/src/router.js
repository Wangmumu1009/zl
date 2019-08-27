import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Mine from './views/Mine.vue';
import Zll from './views/Zll.vue';
import Test1 from './views/Test1.vue';
import Test2 from './views/Test2.vue';
import Error from './views/Error.vue';
import Movie from './views/Movie.vue';
import MovieDetail from './views/MovieDetail';
import Vuex from './views/Vuex.vue';
import ComponentA from './views/ComponentA.vue';

Vue.use(Router);

export default new Router({
  mode:'history',//hash
  base:process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
        path: '/mine',
        name:'mine',
        component: Mine,
        children:[
            {
                path:'test1',
                name:'test1',
                component:Test1
            },
            {
                path:'test2/:name/:age',
                component:Test2
            },
            {
                path:'test2',
                component:Test2
            },
            {
                path:'/home',
                redirect:'/mine'
            },
            {
                path:'/home/:name/:age',
                redirect: '/mine/test2/:name/:age'
            },
        ]

    },
    {
          path: '/zll',
          component: Zll,
          alias:'/wmm'
    },
    {
          path:'*',
          component:Error
    },
      {
          path:'/movie',
          component:Movie
      },
      {
          path:'/movieDetail/:movieId',
          component:MovieDetail
      },
      {
          path:'/vuex',
          component:Vuex
      },
      {
          path:'/componenta',
          component:ComponentA
      }
  ],
});
