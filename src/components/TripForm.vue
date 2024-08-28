<script>
export default {
  name: "TripForm",
  props: {
    trip: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      tripData: {
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        //stops: [],
      },
    };
  },

  computed: {
    isEdit() {
      return !!this.trip;
    },
  },

  methods: {
    submitTripForm() {
      if (this.isEdit) {
        this.$store.commit("editTrip", { ...this.tripData, id: this.trip.id });
      } else {
        this.$store.commit("addTrip", { ...this.tripData, id: Date.now() });
      }
      this.$router.push({ name: "TripList" }); // Dopo il salvataggio, torna alla lista viaggi
    },
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
          v-model="tripData.desctiption"
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

      <div>aggiunta di tappe</div>
      /

      <button type="submit">
        {{ isEdit ? "Salva Modifiche" : "Crea Viaggio" }}
      </button>
    </form>
  </div>
</template>
<style></style>
