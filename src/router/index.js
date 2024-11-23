import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth"; // Importar el store de autenticación

import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: "/inventario",
      name: "inventario",
      component: () => import("../views/Inventario.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/usuarios",
      name: "usuarios",
      component: () => import("../views/Usuarios.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore(); // Obtener el estado de autenticación
  const requiresAuth = to.matched.some((route) => route.meta.requiresAuth);

  // Si la ruta requiere autenticación y el usuario no está autenticado
  if (requiresAuth && !authStore.isAuthenticated) {
    next({ name: "login" }); // Redirige al login
  }
  // Si intentan acceder al login pero ya están autenticados, redirígelos al home
  else if (to.name === "login" && authStore.isAuthenticated) {
    next({ name: "home" }); // Cambia 'home' por la ruta a la que prefieras
  } else {
    next(); // Permite la navegación
  }
});

export default router;
