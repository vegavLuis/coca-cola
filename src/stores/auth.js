import { ref } from "vue";
import { defineStore } from "pinia";
import AuthAPI from "@/api/AuthAPI.js";
import { useRouter } from "vue-router";
// import { useAuthUserStore } from "./authUser";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  const isAuthenticated = ref(false);

  // Verificamos el estado de autenticación cuando se inicializa el store
  const checkAuth = () => {
    const token = localStorage.getItem("AUTH_TOKEN");
    if (token) {
      isAuthenticated.value = true;
    } else {
      isAuthenticated.value = false;
    }
  };

  // Llamada a la API para iniciar sesión
  const handleSubmit = async (item) => {
    try {
      const {
        data: { token },
      } = await AuthAPI.login(item);
      localStorage.setItem("AUTH_TOKEN", token); // Guardamos el token en localStorage
      isAuthenticated.value = true; // Actualizamos el estado de autenticación
      router.push({ name: "home" }); // Redirigimos a la página principal
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  // Logueo en la sesión de usuario
  const logout = () => {
    localStorage.removeItem("AUTH_TOKEN"); // Eliminamos el token
    isAuthenticated.value = false; // Actualizamos el estado de autenticación
    router.push({ name: "login" }); // Redirigimos al login
  };

  // Verificación en el inicio
  checkAuth();

  return {
    handleSubmit,
    isAuthenticated,
    handleSubmit,
    logout,
  };
});
