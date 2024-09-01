<script>
export default {
  name: "StopForm",
  /* utilizzo lo stesso form sia per l'edit che per la creazione, s enon è presente uno stopId allora crea la fermata */
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
        //status: "", //vero se da compiere falso se gia finita
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
    getTripStartDate() {
      return this.trip.startDate;
    },
    getTripEndDate() {
      return this.trip.endDate;
    },
  },

  created() {
    if (this.isEditing) {
      //controllo se gia esiste la tappa
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
    //submit e controllo dati sulla tappa
    submitStopForm() {
      if (this.isEditing) {
        //edita
        this.$store.commit("editStop", {
          tripId: this.tripId,
          editedStop: { ...this.stopData, id: this.stopId },
        });
      } else {
        //crea
        this.stopData.status = true;
        const newStop = {
          ...this.stopData,

          id: Date.now(),
        };
        this.$store.commit("addStop", { tripId: this.tripId, newStop }); //committa sullo store vuex

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
    <!-- form creazione/modifica tappa -->
    <div class="d-flex jutify-content-center align-items-center flex-column">
      <div>
        <input
          class="form-control"
          type="text"
          v-model="stopData.title"
          id="titolo"
          required
          placeholder="Nome Tappa"
        />
      </div>
      <div>
        <textarea
          class="form-control"
          v-model="stopData.description"
          id="descrizione"
          placeholder="Note o Commenti"
          required
        ></textarea>
      </div>
      <div>
        <input
          class="form-control"
          type="date"
          v-model="stopData.date"
          id="data"
          required
          :min="getTripStartDate"
          :max="getTripEndDate"
          placeholder="Quando"
        />
      </div>
      <div>
        <label for="oraInizio">ora Inizio</label>
        <input
          class="form-control"
          type="time"
          v-model="stopData.startTime"
          id="oraInizio"
          required
        />
      </div>
      <div>
        <label for="oraFine">ora Fine</label>
        <input
          class="form-control"
          type="time"
          v-model="stopData.endTime"
          id="oraFine"
          required
          :min="stopData.startTime"
        />
      </div>
      <div>
        <textarea
          class="form-control"
          v-model="stopData.curiosities"
          id="curiosita"
          required
          placeholder="Note Aggiuntive"
        ></textarea>
      </div>

      <div class="d-flex my-2">
        <button @click="goBack" class="btn btn-danger mx-2">go back</button>

        <button type="submit" class="btn btn-primary mx-2">
          {{ isEditing ? "Salva Modifiche" : "Crea Tappa" }}
        </button>
      </div>
    </div>
  </form>
</template>

<style>
.form-control {
  margin-top: 1rem;
}
</style>
