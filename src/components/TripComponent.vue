<script>
export default {
  name: "tripComponent",

  computed: {
    trips() {
      return this.$store.getters.getTripById(this.$route.params.id);
    },
  },
  methods: {
    deleteTrip() {
      this.$store.commit("deletetrip", this.trip.id);
      this.$router.push({ name: "TripList" });
    },
  },
};
</script>

<template>
  <div class="trip-details">
    <h2>{{ trip.name }}</h2>
    <p>{{ trip.description }}</p>
    <p><strong>Data Inizio:</strong> {{ trip.startDate }}</p>
    <p><strong>Data Fine:</strong> {{ trip.endDate }}</p>

    <router-link :to="{ name: 'TripForm', params: { id: trip.id } }">
      <button>Modifica Viaggio</button>
    </router-link>
    <button @click="deleteTrip">Elimina Viaggio</button>
  </div>
</template>

<style></style>
