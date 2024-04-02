<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth.js";
const store = useAuthStore();
const items = ref({
  email: "",
  password: "",
});
</script>
<template>
  <v-card class="d-flex justify-center align-center" height="100vh">
    <v-form @submit.prevent="store.handleSubmit(items)">
      <h1 class="mb-6">Iniciar Sesion</h1>
      <v-card width="600px" color="transparent" elevation="0">
        <v-text-field
          label="Email"
          class="mb-8"
          v-model="items.email"
        ></v-text-field>
        <v-text-field label="Password" v-model="items.password"></v-text-field>
        <v-btn block color="green" type="password">Ingresar</v-btn>
      </v-card>
    </v-form>
  </v-card>
</template>
