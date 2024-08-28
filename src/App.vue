<script setup>
import { RouterLink, RouterView } from "vue-router";

import HelloWorld from "./components/HelloWorld.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
</script>

<template>
  <div class="bg-warning vh-100 vw-100">
    <div class="container">
      <p>Current route path: {{ $route.fullPath }}</p>
      <RouterLink to="/"> Home </RouterLink>
    </div>
    <RouterView></RouterView>
  </div>
</template>

<style scoped></style>
