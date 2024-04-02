import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import UsuariosAPI from "@/api/UsuariosAPI.js";
export const useUsuariosStore = defineStore("usuarios", () => {
  const datos = ref([]);
  const headers = ref([
    {
      key: "nombre",
      sortable: true,
      title: "Nombre",
    },
    {
      key: "apellidoPaterno",
      sortable: true,
      title: "Apellido Paterno",
    },
    {
      key: "apellidoMaterno",
      sortable: true,
      title: "Apellido Materno",
    },
    {
      key: "email",
      sortable: true,
      title: "Email",
    },
    {
      key: "idInterno",
      sortable: true,
      title: "Id Interno",
    },
    {
      key: "isActivo",
      sortable: true,
      title: "¿Esta Activo?",
    },
    {
      key: "acciones",
      sortable: true,
      title: "Acciones",
    },
  ]);
  const dialog = ref(false);
  const items = ref({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    email: "",
    idInterno: "",
    isActivo: "",
  });
  const isNuevo = ref(true);

  const getData = async () => {
    await UsuariosAPI.findAllUsuarios()
      .then(({ data }) => {
        datos.value = data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const abrirDialog = (item) => {
    if (item) {
      if (item.isActivo == true) {
        item.isActivo = "Activo";
      } else if (item.isActivo == false) {
        item.isActivo = "Inactivo";
      }
      items.value = item;
      dialog.value = true;
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
    if (item.isActivo == "Activo") {
      item.isActivo = true;
    } else if (item.isActivo == "Inactivo") {
      item.isActivo = false;
    }
    if (!isNuevo.value) {
      await UsuariosAPI.updateUsuarios(item._id, item)
        .then((result) => {
          console.log(result);
          cerrarDialog();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      await UsuariosAPI.createUsuarios(item)
        .then((result) => {
          console.log(result);
          cerrarDialog();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const eliminar = (item) => {
    UsuariosAPI.deleteUsuarios(item)
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
