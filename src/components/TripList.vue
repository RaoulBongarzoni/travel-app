<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "TripList",
  computed: {
    trips() {
      return this.$store.state.trips || [];
    },
  },
};
</script>

<template>
  <div class="container">
    <h1>I tuoi viaggi</h1>
    <ul>
      <li v-for="trip in trips" :key="trip.id">
        <RouterLink :to="{ name: 'TripComponent', params: { id: trip.id } }">
          {{ trip.title }}
        </RouterLink>
      </li>
    </ul>
    <RouterLink :to="{ name: 'TripForm' }">
      <button class="create-trip-button">Crea Nuovo Viaggio</button>
    </RouterLink>
    <RouterView></RouterView>
  </div>
</template>
<style></style>
