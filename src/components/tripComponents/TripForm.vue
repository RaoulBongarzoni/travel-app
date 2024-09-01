<script>
import { RouterLink } from "vue-router";

export default {
  name: "TripForm",
  //riutilizzo il form sia per l'edit che per la creazione, se il viaggio non ha id lo crea altrimenti lo modifica
  props: {
    id: {
      type: String,
    },
  },

  data() {
    //definisco la struttura del singolo viaggio
    return {
      tripData: {
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        stops: [], //lista delle tappe per ciascun viaggio
        //status: "",  implementazione futura: viaggio / tappa completa o no
      },
    };
  },

  emits: ["saved"], //emissione di 'salvato'

  computed: {
    isEdit() {
      return !!this.id; //ha un id?
    },
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    //se ha id carico i dati precedenti
    loadTripData() {
      if (this.isEdit) {
        const trip = this.$store.getters.getTripById(this.id);

        if (trip) {
          this.tripData = { ...trip };
        }
        console.log("data di questo viaggio: " + this.trip);
      }
    },
    //invio il viaggio salvato allo store
    submitTripForm() {
      if (this.isEdit) {
        this.$store.commit("editTrip", { id: this.id, ...this.tripData });
      } else {
        this.tripData.status = true;
        this.$store.commit("addTrip", {
          ...this.tripData,
          id: Date.now(),
        });
      }
      this.$emit("saved");
      /* this.$router.push({ name: "TripList" }); */ // Dopo il salvataggio, torna alla lista viaggi
    },
  },

  mounted() {
    console.log(this.isEdit);
    this.loadTripData();
  },
};
</script>
<template>
  <h2>{{ isEdit ? "Modifica Viaggio" : "Crea Nuovo Viaggio" }}</h2>
  <div class="trip-form d-flex justify-content-center">
    <form @submit.prevent="submitTripForm">
      <div>
        <input
          type="text"
          class="form-control"
          v-model="tripData.title"
          id="titolo"
          required
          placeholder="Come Vuoi Chiamarlo"
        />
      </div>
      <div>
        <textarea
          class="form-control"
          v-model="tripData.description"
          id="descrizione"
          required
          placeholder="Aggiungi informazioni o note"
        ></textarea>
      </div>
      <div>
        <input
          class="form-control"
          type="date"
          v-model="tripData.startDate"
          id="dataInizio"
          min="2023-01-01"
          max="2050-01-01"
          required
          placeholder="Data Inizio"
        />
      </div>
      <div>
        <input
          class="form-control"
          type="date"
          v-model="tripData.endDate"
          id="dataFine"
          max="01-01-2050"
          :min="tripData.startDate"
          placeholder="Data Fine"
          required
        />
      </div>
      <div class="my-2">
        <button v-if="isEdit" @click="goBack" class="btn btn-danger">
          Back
        </button>
        <button type="submit" data-bs-dismiss="modal" class="btn btn-primary">
          {{ isEdit ? "Salva Modifiche" : "Crea Viaggio" }}
        </button>
      </div>
    </form>
  </div>
</template>
<style></style>
