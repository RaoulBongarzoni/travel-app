import { createRouter, createWebHistory } from "vue-router";

import TripList from "../components/tripComponents/TripList.vue";
import TripForm from "../components/tripComponents/TripForm.vue";
import TripComponent from "../components/tripComponents/TripComponent.vue";
import StopForm from "../components/stopsComponents/StopForm.vue";
import StopDetail from "../components/stopsComponents/StopDetail.vue";
import StopList from "../components/stopsComponents/StopList.vue";

const routes = [
  //path per la lista dei viaggi

  //path per la visualizzazione del viaggio singolo
  { path: "/", name: "TripList", component: TripList },
  { path: "/create", name: "TripForm", component: TripForm, props: true },
  { path: "/edit/:id", name: "TripEditForm", component: TripForm, props: true },
  {
    path: "/details/:id",
    name: "TripComponent",
    component: TripComponent,
    props: true,
  },

  //path per la visualizzazione delle info per la tappa del viaggio singolo
  {
    path: "/trips/:tripId/stops/:stopId",
    name: "StopDetail",
    component: StopDetail,
    props: true,
  },

  {
    path: "/trips/:tripId/stops",
    name: "StopList",
    component: StopList,
    props: true,
  },

  {
    path: "/trips/:tripId/stops/new",
    name: "StopForm",
    component: StopForm,
    props: true,
  },
  {
    path: "/trips/:tripId/stops/:stopId/edit",
    name: "StopFormEdit",
    component: StopForm,
    props: true,
  },
  //path per la mappa
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
