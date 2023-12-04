import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import PaginaInicial from "./pages/PaginaInicial.vue";
import Sobre from "./pages/Sobre.vue";
import LoginCliente from "./pages/LoginCliente.vue";
import Servios from "./pages/Servios.vue";
import Servios3 from "./pages/Servios3.vue";
import Servios2 from "./pages/Servios2.vue";
import Servios1 from "./pages/Servios1.vue";
import MeuPerfil from "./pages/MeuPerfil.vue";
import MeusDados from "./pages/MeusDados.vue";
import CadastroDeProfissional from "./pages/CadastroDeProfissional.vue";
import CadastroDeCliente from "./pages/CadastroDeCliente.vue";
import DashboardProfissionalConfigu from "./pages/DashboardProfissionalConfigu.vue";
import DashboardProfissionalConfigu1 from "./pages/DashboardProfissionalConfigu1.vue";
import DashboardProfissionalChat from "./pages/DashboardProfissionalChat.vue";
import DashboardProfissionalPedidos from "./pages/DashboardProfissionalPedidos.vue";
import DashboardProfissional from "./pages/DashboardProfissional.vue";
import PaginaInicialCliente from "./pages/PaginaInicialCliente.vue";
import TelaInicialCliente from "./pages/TelaInicialCliente.vue";
import "./global.css";

const routes = [
  {
    path: "/",
    name: "PaginaInicial",
    component: PaginaInicial,
  },
  {
    path: "/sobre",
    name: "Sobre",
    component: Sobre,
  },
  {
    path: "/logincliente",
    name: "LoginCliente",
    component: LoginCliente,
  },
  {
    path: "/servios",
    name: "Servios",
    component: Servios,
  },
  {
    path: "/-servios-3",
    name: "Servios3",
    component: Servios3,
  },
  {
    path: "/-servios-2",
    name: "Servios2",
    component: Servios2,
  },
  {
    path: "/servios1",
    name: "Servios1",
    component: Servios1,
  },
  {
    path: "/meu-perfil",
    name: "MeuPerfil",
    component: MeuPerfil,
  },
  {
    path: "/meus-dados",
    name: "MeusDados",
    component: MeusDados,
  },
  {
    path: "/cadastro-de-profissional",
    name: "CadastroDeProfissional",
    component: CadastroDeProfissional,
  },
  {
    path: "/cadastro-de-cliente",
    name: "CadastroDeCliente",
    component: CadastroDeCliente,
  },
  {
    path: "/dashboard-profissional-configuraes1",
    name: "DashboardProfissionalConfigu",
    component: DashboardProfissionalConfigu,
  },
  {
    path: "/dashboard-profissional-configuraes",
    name: "DashboardProfissionalConfigu1",
    component: DashboardProfissionalConfigu1,
  },
  {
    path: "/dashboard-profissional-chat",
    name: "DashboardProfissionalChat",
    component: DashboardProfissionalChat,
  },
  {
    path: "/dashboard-profissional-pedidos",
    name: "DashboardProfissionalPedidos",
    component: DashboardProfissionalPedidos,
  },
  {
    path: "/dashboard-profissional",
    name: "DashboardProfissional",
    component: DashboardProfissional,
  },
  {
    path: "/pagina-inicial-cliente",
    name: "PaginaInicialCliente",
    component: PaginaInicialCliente,
  },
  {
    path: "/tela-inicial-cliente",
    name: "TelaInicialCliente",
    component: TelaInicialCliente,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
  const documentTitle =
    toRoute?.meta && toRoute?.meta?.title ? toRoute?.meta?.title : "camelia";
  window.document.title = documentTitle;
  if (toRoute?.meta?.description) {
    addMetaTag(toRoute?.meta?.description);
  }
  next();
});

const addMetaTag = (value) => {
  let element = document.querySelector(`meta[name='description']`);

  if (element) {
    element.setAttribute("content", value);
  } else {
    element = `<meta name="description" content="${value}" />`;
    document.head.insertAdjacentHTML("beforeend", element);
  }
};

createApp(App).use(router).mount("#app");

export default router;
