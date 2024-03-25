import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useBarraStore = defineStore("barra", () => {
  const data = ref([
    {
      icon: "",
      name: "Inventario",
      to: "/inventario",
    },
    {
      icon: "",
      name: "Buscar producto",
      to: "/busqueda-producto",
    },
    {
      icon: "",
      name: "Agregar producto",
      to: "/agregar-producto",
    },
    {
      icon: "",
      name: "Modificar producto",
      to: "/modificar-producto",
    },
    {
      icon: "",
      name: "Gestion de categorias",
      to: "/gestion-de-categorias",
    },
    {
      icon: "",
      name: "Estadisticas",
      to: "/estadisticas",
    },
    {
      icon: "",
      name: "Exportar/Importar",
      to: "/importar-exportar",
    },
  ]);
  return {
    data,
  };
});
