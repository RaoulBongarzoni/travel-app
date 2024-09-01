<script setup>
import { RouterLink, RouterView } from "vue-router";
import footerComponent from "./components/FooterComponent.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
</script>

<template>
  <div class="bg-dark text-center" id="backgroundApp ">
    <div id="wrapperApp" class="p-5 rounded-5 text-light">
      <div id="mainApp" class="bg-dark h-100">
        <!-- qui mostro i componenti grazie a vue router -->
        <RouterView></RouterView>
      </div>
      <!-- qui tengo i bottoni per ritornare alla lista dei viaggi o per aggiungerne uno -->
      <footerComponent id="footer" class="rounded-bottom-5" />
    </div>
  </div>
</template>

<style scoped>
#backgroundApp {
  height: 100vh;
  overflow-y: auto;

  width: 100%;
  position: relative;
}

#wrapperApp {
  overflow-y: none;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffff;
  position: relative;
}

#footer {
  background-color: dark;
  position: absolute;
  bottom: 0%;
  right: 0%;
  width: 100%;
  height: 10%;
}

#mainApp {
  overflow-y: auto;
}
</style>
