<script>
export default {
  name: "StopDetail",
  props: {
    tripId: {
      type: String,
      required: true,
    },
    stopId: {
      type: String,
      required: true,
    },
  },
  computed: {
    trip() {
      return this.$store.getters.getTripById(this.tripId);
    },
    stop() {
      return this.$store.getters.getStopById(this.tripId, this.stopId);
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    deleteStop() {
      this.$store.commit("deleteStop", {
        tripId: this.tripId,
        stopId: this.stopId,
      });
      this.$router.push({ name: "TripComponent", params: { id: this.tripId } });
    },
  },
};
</script>

<template>
  <div>
    <h3>{{ stop.title }}</h3>
    <p>{{ stop.description }}</p>
    <!--     <p><strong>Date:</strong> {{ stop.date }}</p>
    <p><strong>Food:</strong> {{ stop.food }}</p>
    <p><strong>Curiosities:</strong> {{ stop.curiosities }}</p> -->

    <RouterLink
      :to="{
        name: 'StopFormEdit',
        params: { tripId: trip.id, stopId: stop.id },
      }"
    >
      <p>Edit Stop</p>
    </RouterLink>
    <button @click="goBack">indietro</button>
    <button @click="deleteStop">Delete Stop</button>
  </div>
</template>
