<script>
export default {
  name: "TripList",
  computed: {
    trips() {
      return this.$store.state.trips || [];
    },
  },
  methods: {
    deleteTrip(tripId) {
      //consento di eliminare una tappa direttamente dalla lista
      if (tripId) {
        this.$store.commit("deleteTrip", tripId);
      } else {
        console.error("Viaggio non trovato");
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <h1 class="mb-5">I tuoi viaggi</h1>
    <div v-if="trips.length == 0">
      <h5>Sembra tu non abbia aggiunto ancora nessun viaggio..</h5>
    </div>

    <!-- lista dei viaggi -->
    <ul class="list-group-flush">
      <li
        class="list-group-item trip-container my-1"
        v-for="trip in trips"
        :key="trip.id"
      >
        <!-- cliccando sul viaggio porta al dettaglio (tripComponent) -->
        <RouterLink
          class="d-flex justify-content-between py-2 px-4 text-decoration-none"
          :to="{ name: 'TripComponent', params: { id: trip.id } }"
        >
          <div>
            <span
              ><strong>{{ trip.title }}</strong></span
            >
          </div>
          <span class="text-dark"
            >{{ trip.startDate }} -- {{ trip.endDate }}</span
          >
        </RouterLink>

        <!--         <div
          class="btn rounded-pill btn-outline-danger mx-3"
          @click="deleteTrip(trip.id)"
        >
          
        </div> -->
      </li>
    </ul>
  </div>
</template>
<style>
.trip-container {
  background-color: white;
  text-decoration: none;
  color: #fff;
}
</style>
