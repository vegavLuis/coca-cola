<script setup>
import { ref } from "vue";
const activo = ref(["Activo", "Inactivo"]);
defineProps({
  dialog: {
    type: Boolean,
  },
  items: {
    type: Object,
  },
});
defineEmits(["abrir-dialog", "cerrar-dialog", "enviar"]);
</script>
<template>
  <v-btn color="primary" @click="$emit('abrir-dialog')">Agregar </v-btn>
  <v-dialog :model-value="dialog" max-width="900" persistent>
    <v-card>
      <v-card class="d-flex" elevation="0" color="transparent">
        <v-spacer></v-spacer>
        <v-btn @click="$emit('cerrar-dialog')" variant="text" color="red">
          cerrar
        </v-btn>
      </v-card>
      <v-container>
        <h2 class="mb-4">Nuevo Usuario</h2>
        <v-form @submit.prevent="$emit('enviar', items)">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                label="Nombre"
                v-model="items.nombre"
                hide-details
                variant="outlined"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Apellido Paterno"
                v-model="items.apellidoPaterno"
                hide-details
                variant="outlined"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Apellido Materno"
                v-model="items.apellidoMaterno"
                hide-details
                variant="outlined"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Email"
                v-model="items.email"
                hide-details
                variant="outlined"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Id Interno"
                v-model="items.idInterno"
                type="Number"
                hide-details
                variant="outlined"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                label="¿Esta Activo?"
                v-model="items.isActivo"
                :items="activo"
                hide-details
                variant="outlined"
                required
              ></v-select>
            </v-col>
          </v-row>
          <v-card class="d-flex mt-4" elevation="0" color="transparent">
            <v-spacer></v-spacer>
            <v-btn class="mr-2" color="red" @click="$emit('cerrar-dialog')"
              >Cancelar</v-btn
            >
            <v-btn color="green" type="submit">Guardar</v-btn>
          </v-card>
        </v-form>
      </v-container>
    </v-card>
  </v-dialog>
</template>
