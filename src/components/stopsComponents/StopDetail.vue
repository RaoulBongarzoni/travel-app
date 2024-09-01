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
    <p><strong>Date:</strong> {{ stop.date }}</p>
    <p><strong> Ora Inizio:</strong> {{ stop.startTime }}</p>
    <p><strong> Ora Fine:</strong> {{ stop.endTime }}</p>
    <p><strong>Curiosities:</strong> {{ stop.curiosities }}</p>

    <RouterLink
      :to="{
        name: 'StopFormEdit',
        params: { tripId: trip.id, stopId: stop.id },
      }"
    >
      <button class="btn btn-primary mx-2">Edit Stop</button>
    </RouterLink>
    <button @click="goBack" class="btn btn-danger mx-2">indietro</button>
    <button @click="deleteStop" class="btn btn-warning mx-2">
      Delete Stop
    </button>
  </div>
</template>
