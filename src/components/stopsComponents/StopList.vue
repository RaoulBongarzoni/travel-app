<script>
import { RouterLink } from "vue-router";

export default {
  name: "StopList",
  props: {
    //mi porto l'id del viaggio a cui appartiene questa lista
    tripId: {
      type: Number,
      required: true,
    },
  },

  computed: {
    trip() {
      return this.$store.getters.getTripById(this.tripId);
    },
  },

  methods: {
    /* richiama il form aggiunta di tappa */
    addStop() {
      this.$router.push({
        name: "StopForm",
        params: { tripId: this.tripId },
      });
    },
    deleteStop(stopId) {
      this.$store.commit("deleteStop", { tripId: this.tripId, stopId });
    },
    sortStopList() {
      //funzione per ricavare la lista ordinata delle tappe (non funzionante)
      var tripStops = this.$store.getters.allTripStops(this.tripId);
      return tripStops.sort((stopA, stopB) => {
        const startA = new Date(stopA.startTime).getTime();
        const startB = new Date(stopB.startTime).getTime();

        // Confronta gli orari di inizio
        if (startA < startB) return -1;
        if (startA > startB) return 1;

        // Se gli orari di inizio sono uguali, confronta gli orari di fine
        const endA = new Date(stopA.endTime).getTime();
        const endB = new Date(stopB.endTime).getTime();

        if (endA < endB) return -1;
        if (endA > endB) return 1;

        // Se anche gli orari di fine sono uguali, lascia l'ordine invariato
        return 0;
      });
    },
  },
};
</script>

<template>
  <div class="container">
    <ul class="list-group-flush">
      <!-- richiamo le tappe di ogni viaggio -->
      <li
        class="list-group-item stop-box py-2"
        v-for="stop in sortStopList()"
        :key="stop.id"
      >
        <!-- link ai dettagli della tappa -->
        <RouterLink
          :to="{
            name: 'StopDetail',
            params: { tripId: trip.id, stopId: stop.id },
          }"
          class="d-flex justify-content-between py-2 px-4 w-100 text-decoration-none"
        >
          <!-- info generiche fermata -->
          <span>
            <strong>
              {{ stop.title }}
            </strong>
          </span>
          <span>{{ stop.startTime }}</span>
          <span>{{ stop.endTime }}</span>

          <!-- pulsanti per edit della tappa -->
          <div>
            <RouterLink
              :to="{
                name: 'StopFormEdit',
                params: {
                  tripId: trip.id,
                  stopId: stop.id,
                },
              }"
              class="btn btn-warning mx-2"
            >
              edit
            </RouterLink>
          </div>
        </RouterLink>

        <!-- pulsante per eliminare tappa -->
        <button @click="deleteStop(stop.id)" class="btn btn-danger p-0">
          delete
        </button>
      </li>
    </ul>

    <!-- pulsante per aggiungere una tappa -->
    <div class="row justify-content-center">
      <button @click="addStop" class="col-6 btn btn-secondary my-5">
        add stop
      </button>
    </div>
  </div>
</template>

<style>
.stop-box {
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem;
}
</style>
