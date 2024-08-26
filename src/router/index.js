import { createRouter, createMemoryHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Trip from "../views/TripView.vue";

const routes = [
  //path per la lista dei viaggi
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  //path per la visualizzazione del viaggio singolo
  {
    path: "/trip",
    name: "Trip",
    component: Trip,
  },

  //path per la visualizzazione delle info per la tappa del viaggio singolo

  //path per la mappa
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
