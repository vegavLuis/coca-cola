import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useBarraStore = defineStore("barra", () => {
  const data = ref([
    {
      icon: "",
      name: "Home",
      to: "/",
    },
    {
      icon: "",
      name: "Inventario",
      to: "/inventario",
    },
    {
      icon: "",
      name: "Usuarios",
      to: "/usuarios",
    },
  ]);
  return {
    data,
  };
});
