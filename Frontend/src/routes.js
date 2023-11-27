import Vue from 'vue'
import Router from 'vue-router'
import login from './screens/login.vue'
import dashboard from './screens/Dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', name: 'login', component: login },
    { path: '/dashboard', name: 'dashboard', component: dashboard }
  ]
});