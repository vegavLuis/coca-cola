<script setup>
import { ref } from "vue";
import { useUsuariosStore } from "@/stores/usuarios.js";
import Nuevo from "./Nuevo.vue";
const store = useUsuariosStore();
const search = ref("");
</script>
<template>
  <h2 class="ma-4">Usuarios</h2>
  <v-card color="transparent">
    <v-card-title class="d-flex">
      <Nuevo
        :dialog="store.dialog"
        @abrir-dialog="store.abrirDialog"
        @cerrar-dialog="store.cerrarDialog"
        @enviar="store.enviar"
        :items="store.items"
      ></Nuevo>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        density="compact"
        label="Buscar"
        variant="solo-filled"
        flat
        hide-details
        single-line
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="store.headers"
      :items="store.datos"
      :search="search"
    >
      <template v-slot:item.isActivo="{ item }">
        <p v-if="item.isActivo == true">Activo</p>
        <p v-else>Inactivo</p>
      </template>
      <template v-slot:item.acciones="{ item }">
        <v-btn
          size="small"
          class="ma-1"
          color="green"
          @click="store.abrirDialog(item)"
          >editar</v-btn
        >
        <v-btn
          size="small"
          class="ma-1"
          color="red"
          @click="store.eliminar(item._id)"
          >eliminar</v-btn
        >
      </template>
    </v-data-table>
  </v-card>
</template>
