// import Vue from "vue";
// import PaginaInicial from "./screens/PaginaInicial.vue";
// import router from './routes.js';
// Vue.config.productionTip = false;

// new Vue({
//   router,
//   render: h => h(PaginaInicial)
// }).$mount("#app");

import Vue from 'vue';
import VueRouter from 'vue-router';
import PaginaInicial from "./screens/PaginaInicial.vue";
import Login from './screens/login.vue'; // Corrigi a importação para 'Login.vue'
import Dashboard from './screens/Dashboard.vue'; 

Vue.use(VueRouter);

const routes = [
  { path: '/', component: PaginaInicial },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: h => h('router-view'), // Use 'router-view' como ponto de entrada para os componentes roteados
}).$mount('#app');

