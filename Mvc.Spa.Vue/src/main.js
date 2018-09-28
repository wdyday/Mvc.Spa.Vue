import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.js';

Vue.use(VueRouter);
console.log(__dirname);
const router = new VueRouter({
  mode: 'history',
  //linkActiveClass: 'nav-active',
  base: __dirname,
  //base: window.VueRouterUrl,
  routes: routes
});

const app = new Vue({
  router
}).$mount('#app');
