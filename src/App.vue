<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import logo1 from "./assets/logo.png";
import { useBarraStore } from "./stores/barra.js";
import { useAuthStore } from "./stores/auth";

const store = useBarraStore();
const authStore = useAuthStore();
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar>
      <v-card color="transparent" width="10%" height="90%" elevation="0">
        <v-img :src="logo1" icon cover width="100%" height="100%"></v-img>
      </v-card>
    </v-app-bar>
    <v-navigation-drawer v-if="authStore.isAuthenticated">
      <v-list v-for="item in store.data" :key="item.id">
        <router-link
          class="router-link-exact-active"
          :to="item.to"
          style="text-decoration: none"
        >
          <v-list-item class="it">
            {{ item.name }}
          </v-list-item>
        </router-link>
      </v-list>
      <!-- Botón de Cerrar Sesión (Solo visible cuando está autenticado) -->
      <v-btn @click="authStore.logout" color="red" block> Cerrar sesión </v-btn>
    </v-navigation-drawer>

    <v-main>
      <RouterView />
    </v-main>
  </v-layout>
</template>

<style>
a.router-link-active > .it {
  color: #fe001a;
  background-color: rgba(254, 0, 26, 0.15);
}

a {
  color: black;
}
</style>
