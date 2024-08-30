<script>
export default {
  name: "StopForm",
  props: {
    tripId: {
      type: String,
      required: true,
    },
    stopId: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      stopData: {
        title: "",
        description: "",
        date: "",
        startTime: "",
        endTime: "",

        curiosities: "",
        //position: ["", ""],
      },
    };
  },
  computed: {
    trip() {
      return this.$store.getters.getTripById(this.tripId);
    },
    isEditing() {
      return this.stopId != null;
    },
  },
  created() {
    if (this.isEditing) {
      const stop = this.trip.stops.find((stop) => stop.id == this.stopId);
      if (stop) {
        this.stopData = { ...stop };
      }
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    submitStopForm() {
      if (this.isEditing) {
        this.$store.commit("editStop", {
          tripId: this.tripId,
          editedStop: { ...this.stopData, id: this.stopId },
        });
      } else {
        const newStop = {
          ...this.stopData,
          id: Date.now(),
        };
        this.$store.commit("addStop", { tripId: this.tripId, newStop });

        console.log(this.$store.getters.getTripById(this.tripId).stops);
      }
      this.$router.push({ name: "TripComponent", params: { id: this.tripId } });
    },
  },
};
</script>

<template>
  <h2>{{ isEditing ? "Modifica Fermata" : "Crea Nuova Fermata" }}</h2>
  <form @submit.prevent="submitStopForm">
    <div>
      <label for="titolo">Titolo</label>
      <input type="text" v-model="stopData.title" id="titolo" required />
    </div>
    <div>
      <label for="descrizione">Descrizione</label>
      <textarea
        v-model="stopData.description"
        id="descrizione"
        required
      ></textarea>
    </div>
    <div>
      <label for="data">Data </label>
      <input type="date" v-model="stopData.Date" id="data" required />
    </div>
    <div>
      <label for="oraInizio">Data Fine</label>
      <input type="time" v-model="stopData.startTime" id="oraInizio" required />
    </div>
    <div>
      <label for="oraFine">Data Fine</label>
      <input type="time" v-model="stopData.endTime" id="oraFine" required />
    </div>
    <div>
      <label for="Note">Curiosità</label>
      <textarea
        v-model="stopData.curiosities"
        id="curiosita"
        required
      ></textarea>
    </div>

    <button @click="goBack">go back</button>

    <button type="submit">
      {{ isEditing ? "Salva Modifiche" : "Crea Tappa" }}
    </button>
  </form>
</template>
