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
    addStop() {
      this.$router.push({
        name: "StopForm",
        params: { tripId: this.tripId },
      });
    },
    deleteStop(stopId) {
      this.$store.commit("deleteStop", { tripId: this.tripId, stopId });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12" v-for="stop in trip.stops" :key="stop.id">
        <RouterLink
          :to="{
            name: 'StopDetail',
            params: { tripId: trip.id, stopId: stop.id },
          }"
        >
          {{ stop.title }}
        </RouterLink>
        <div class="col-2">
          <RouterLink
            :to="{
              name: 'StopFormEdit',
              params: {
                tripId: trip.id,
                stopId: stop.id,
              },
            }"
          >
            edit
          </RouterLink>
        </div>
        <button @click="deleteStop(stop.id)">delete</button>
      </div>
    </div>
    <div class="row">
      <button @click="addStop">add stop</button>
    </div>
  </div>
</template>
