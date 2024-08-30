<script>
import { RouterLink } from "vue-router";

export default {
  name: "TripForm",
  props: {
    id: {
      type: String,
    },
  },

  data() {
    return {
      tripData: {
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        stops: [],
      },
    };
  },

  computed: {
    isEdit() {
      return !!this.id;
    },
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    loadTripData() {
      if (this.isEdit) {
        const trip = this.$store.getters.getTripById(this.id);

        if (trip) {
          this.tripData = { ...trip };
        }
        console.log("data di questo viaggio: " + this.trip);
      }
    },
    submitTripForm() {
      if (this.isEdit) {
        this.$store.commit("editTrip", { id: this.id, ...this.tripData });
      } else {
        this.$store.commit("addTrip", {
          ...this.tripData,
          id: Date.now(),
        });
      }
      this.$router.push({ name: "TripList" }); // Dopo il salvataggio, torna alla lista viaggi
    },
  },

  mounted() {
    console.log(this.isEdit);
    this.loadTripData();
  },
};
</script>
<template>
  <div class="trip-form">
    <h2>{{ isEdit ? "Modifica Viaggio" : "Crea Nuovo Viaggio" }}</h2>
    <form @submit.prevent="submitTripForm">
      <div>
        <label for="titolo">Titolo</label>
        <input type="text" v-model="tripData.title" id="titolo" required />
      </div>
      <div>
        <label for="descrizione">Descrizione</label>
        <textarea
          v-model="tripData.description"
          id="descrizione"
          required
        ></textarea>
      </div>
      <div>
        <label for="dataInizio">Data Inizio</label>
        <input
          type="date"
          v-model="tripData.startDate"
          id="dataInizio"
          required
        />
      </div>
      <div>
        <label for="dataFine">Data Fine</label>
        <input type="date" v-model="tripData.endDate" id="dataFine" required />
      </div>

      <button class="btn-danger" @click="goBack">back</button>

      <button type="submit">
        {{ isEdit ? "Salva Modifiche" : "Crea Viaggio" }}
      </button>
    </form>
  </div>
</template>
<style></style>
