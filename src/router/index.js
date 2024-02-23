import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/inventario",
      name: "inventario",
      component: () => import("../views/Inventario.vue"),
    },
    {
      path: "/busqueda-producto",
      name: "busqueda-producto",
      component: () => import("../views/BuscarProducto.vue"),
    },
    {
      path: "/agregar-producto",
      name: "agregar-producto",
      component: () => import("../views/AgregarProducto.vue"),
    },
    {
      path: "/modificar-producto",
      name: "modificar-producto",
      component: () => import("../views/ModificarProducto.vue"),
    },
    {
      path: "/gestion-de-categorias",
      name: "gestion-de-categorias",
      component: () => import("../views/GestionCategorias.vue"),
    },
    {
      path: "/estadisticas",
      name: "estadisticas",
      component: () => import("../views/Estadisticas.vue"),
    },
    {
      path: "/importar-exportar",
      name: "importar-exportar",
      component: () => import("../views/ImportarExportar.vue"),
    },
  ],
});

export default router;
