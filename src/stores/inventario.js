import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useInventarioStore = defineStore("inventario", () => {
  const data = ref([
    {
      Producto: "Coca-cola",
      Submarca: "Zero",
      Id: "154205",
      Zona: "Floresta",
      Alta: "15/02/2024",
    },
    {
      Producto: "Santa Clara",
      Submarca: "Leche Entera",
      Id: "812481",
      Zona: "Los Reyes",
      Alta: "15/01/2024",
    },
    {
      Producto: "Tequila",
      Submarca: "Don Julio",
      Id: "8123457",
      Zona: "Chimalhuacan",
      Alta: "13/05/2023",
    },
    {
      Producto: "Whisky Johnnie Walker",
      Submarca: "Red Label 700 ml",
      Id: "813566",
      Zona: "Chapultepec",
      Alta: "25/12/2020",
    },
    {
      Producto: "Jugos",
      Submarca: "Bebida Del Valle Frut con jugo Sabor Cítricos 2 L",
      Id: "863112",
      Zona: "La Paz",
      Alta: "30/11/2015",
    },
  ]);
  return { data };
});
