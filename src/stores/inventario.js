import { ref, onMounted, watch } from "vue";
import { defineStore } from "pinia";
import InventarioApi from "@/api/InventarioAPI.js";

export const useInventarioStore = defineStore("inventario", () => {
  const datos = ref([]);
  const headers = ref([
    {
      key: "idInterno",
      sortable: true,
      title: "Id",
    },
    {
      key: "nombreProducto",
      sortable: true,
      title: "Nombre",
    },
    {
      key: "submarca",
      sortable: true,
      title: "Submarca",
    },
    {
      key: "numeroInterno",
      sortable: true,
      title: "Numero Interno",
    },
    {
      key: "zona",
      sortable: true,
      title: "Zona",
    },
    {
      key: "fechaAlta",
      sortable: true,
      title: "Fecha de Alta",
    },
    {
      key: "acciones",
      sortable: true,
      title: "Acciones",
    },
  ]);
  const dialog = ref(false);
  const items = ref({
    idInterno: "",
    nombreProducto: "",
    submarca: "",
    numeroInterno: "",
    zona: "",
    fechaAlta: "",
  });
  const isNuevo = ref(true);

  const getData = async () => {
    await InventarioApi.findAllProducto()
      .then(({ data }) => {
        // console.log(data);
        datos.value = data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const abrirDialog = (item) => {
    if (item) {
      dialog.value = true;
      items.value = item;
      isNuevo.value = false;
    } else {
      dialog.value = true;
      isNuevo.value = true;
    }
  };
  const cerrarDialog = () => {
    dialog.value = false;
    items.value = {};
    getData();
  };
  const enviar = async (item) => {
    if (!isNuevo.value) {
      // console.log(item._id, item);
      await InventarioApi.updateProducto(item._id, item)
        .then((result) => {
          console.log(result);
          cerrarDialog();
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("editar");
    } else {
      await InventarioApi.createProducto(item)
        .then((result) => {
          console.log(result);
          cerrarDialog();
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("crear");
    }
  };
  const eliminar = (item) => {
    InventarioApi.deleteProducto(item)
      .then((result) => {
        console.log(result);
        cerrarDialog();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onMounted(() => {
    getData();
  });
  return {
    datos,
    headers,
    dialog,
    items,
    abrirDialog,
    cerrarDialog,
    enviar,
    eliminar,
  };
});
