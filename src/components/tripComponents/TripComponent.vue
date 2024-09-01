<script>
import StopList from "../stopsComponents/StopList.vue";

export default {
  name: "TripComponent",
  components: {
    StopList,
  },

  computed: {
    trip() {
      const trip = this.$store.getters.getTripById(this.$route.params.id);
      console.log("Fetched trip:", trip);
      return trip;
    },
  },
  methods: {
    goBack() {
      this.$router.push({ name: "TripList" });
    },
    deleteTrip() {
      if (this.trip) {
        this.$store.commit("deleteTrip", this.trip.id);
        this.$router.push({ name: "TripList" });
      } else {
        console.error("Viaggio non trovato");
      }
    },
  },
};
</script>

<template>
  <div v-if="trip" class="trip-details container">
    <h2>{{ trip.title }}</h2>
    <p>{{ trip.description }}</p>
    <p><strong>Data Inizio:</strong> {{ trip.startDate }}</p>
    <p><strong>Data Fine:</strong> {{ trip.endDate }}</p>

    <StopList :tripId="this.trip.id" />

    <div class="d-flex justify-content-center">
      <!-- porta al form per l'edit -->
      <RouterLink :to="{ name: 'TripEditForm', params: { tripId: trip.id } }">
        <button class="btn mx-2 btn-primary">Modifica Viaggio</button>
      </RouterLink>
      <!-- pulsantiera utilità -->
      <button @click="goBack" class="btn btn-danger mx-2">go back</button>
      <button @click="deleteTrip" class="btn btn-warning mx-2">
        Elimina Viaggio
      </button>
    </div>
  </div>
  <div v-else>
    <p>Dettagli del viaggio non disponibili.</p>
  </div>
</template>

<style scoped>
.trip-details {
  padding: 20px;
}
</style>
