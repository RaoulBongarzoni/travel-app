import { createRouter, createWebHistory } from "vue-router";

import TripList from "../components/TripList.vue";
import TripForm from "../components/TripForm.vue";
import TripComponent from "../components/TripComponent.vue";

const routes = [
  //path per la lista dei viaggi

  //path per la visualizzazione del viaggio singolo
  { path: "/", name: "TripList", component: TripList },
  { path: "/create", name: "TripForm", component: TripForm },
  { path: "/details/:id", name: "TripComponent", component: TripComponent },

  //path per la visualizzazione delle info per la tappa del viaggio singolo

  //path per la mappa
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
