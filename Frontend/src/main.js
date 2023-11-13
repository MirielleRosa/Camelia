import Vue from "vue";
import PaginaInicial from "./screens/PaginaInicial.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(PaginaInicial)
}).$mount("#app");