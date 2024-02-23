<script setup>
import { ref } from "vue";
import { useInventarioStore } from "@/stores/inventario.js";
const store = useInventarioStore();
</script>
<template>
  <h2 class="ma-4">Inventario</h2>
  <v-data-table :items="store.data"></v-data-table>
</template>
<style></style>
