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
  <div v-if="trip" class="trip-details">
    <h2>{{ trip.title }}</h2>
    <p>{{ trip.description }}</p>
    <p><strong>Data Inizio:</strong> {{ trip.startDate }}</p>
    <p><strong>Data Fine:</strong> {{ trip.endDate }}</p>

    <StopList :tripId="this.trip.id" />

    <RouterLink :to="{ name: 'TripEditForm', params: { tripId: trip.id } }">
      <button>Modifica Viaggio</button>
    </RouterLink>
    <button @click="goBack"></button>
    <button @click="deleteTrip">Elimina Viaggio</button>
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
