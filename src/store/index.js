import { createStore } from "vuex";
//import TripModel from '../models/tripModel'

//IMPORTANTE: AGGIUNGERE FUNZIONALITA PER INTERAGGIRE CON LOCALSTORAGE

const store = createStore({
  state() {
    return {
      //stato iniziale
      trips: JSON.parse(localStorage.getItem("trips")) || [],
    };
  },

  mutations: {
    //mutations for trips
    //aggiunge un viaggio
    addTrip(state, newTrip) {
      state.trips.push(newTrip);
      saveInLocalStorage(state.trips);
      console.log("Trips after add:", state.trips); // Aggiungi questo log
    },
    //modifica un viaggio
    editTrip(state, editedTrip) {
      const index = state.trips.findIndex((v) => v.id == editedTrip.id);
      if (index !== -1) {
        state.trips.splice(index, 1, editedTrip);
        saveInLocalStorage(state.trips);
      } else {
        console.log("id viaggio non trovato, impossibile modificare");
      }
    },

    //cancella un viaggio
    deleteTrip(state, id) {
      state.trips = state.trips.filter((v) => v.id !== id);
      saveInLocalStorage(state.trips);
    },

    //**** Crud delle fermate *****/

    //add
    addStop(state, { tripId, newStop }) {
      const trip = state.trips.find((trip) => trip.id == tripId);
      if (trip) {
        trip.stops.push(newStop);
        saveInLocalStorage(state.trips);
      } else {
        console.log("id viaggio non trovato, impossibile aggiungere fermata");
      }
    },

    //edit

    editStop(state, { tripId, editedStop }) {
      const trip = state.trips.find((trip) => trip.id == tripId);
      if (trip) {
        const index = trip.stops.findIndex((stop) => stop.id == editedStop.id);
        if (index !== -1) {
          trip.stops.splice(index, 1, editedStop);
          saveInLocalStorage(state.trips);
        } else {
          console.log("id fermata non trovato, impossibile modificare");
        }
      } else {
        console.log("id viaggio non trovato, impossibile modificare");
      }
    },

    //del

    deleteStop(state, { tripId, stopId }) {
      const trip = state.trips.find((trip) => trip.id == tripId);
      if (trip) {
        trip.stops = trip.stops.filter((stop) => stop.id !== stopId);
        saveInLocalStorage(state.trips);
      }
    },

    initializeTrips(state, trips) {
      state.trips = trips;
    },
  },

  actions: {
    loadTrips({ commit }) {
      const trips = JSON.parse(localStorage.getItem("trips")) || [];
      commit("initializeTrips", trips);
    },
    addTrip({ commit }, newTrip) {
      commit("addTrip", newTrip);
    },
    editTrip({ commit }, editedTrip) {
      commit("editTrip", editedTrip);
    },
    deleteTrip({ commit }, id) {
      commit("deleteTrip", id);
    },

    /* *********** */
    addStop({ commit }, { tripId, newStop }) {
      commit("addStop", { tripId, newStop });
    },
    editStop({ commit }, { tripId, editedStop }) {
      commit("editStop", { tripId, editedStop });
    },
    deleteStop({ commit }, { tripId, stopId }) {
      commit("deleteStop", { tripId, stopId });
    },
  },

  getters: {
    getTripById: (state) => (id) => {
      console.log("Getting trip for ID:", id);
      console.log("lista dei viaggi", state.trips);
      return state.trips.find((trip) => trip.id == id) || null;
    },
    getStopById: (state) => (tripId, stopId) => {
      const trip = state.trips.find((trip) => trip.id == tripId);
      if (trip) {
        return trip.stops.find((stop) => stop.id == stopId);
      }
      return null;
    },
    allTrips: (state) => state.trips,
  },
});

function saveInLocalStorage(trips) {
  localStorage.setItem("trips", JSON.stringify(trips));
}

store.dispatch("loadTrips");

export default store;
