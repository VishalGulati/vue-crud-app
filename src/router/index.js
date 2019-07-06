import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../features/HomePage/HomePage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/charts',
      name: 'charts',
      // route level code-splitting
      // this generates a separate chunk (charts.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "charts" */ '../features/Charts/Charts.vue'
        )
    }
  ]
});
