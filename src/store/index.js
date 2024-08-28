import { createStore } from "vuex";
//import TripModel from '../models/tripModel'

//IMPORTANTE: AGGIUNGERE FUNZIONALITA PER INTERAGGIRE CON LOCALSTORAGE

const store = createStore({
  state() {
    return {
      //stato iniziale
      trips: [],
    };
  },

  mutations: {
    //mutations for trips
    //aggiunge un viaggio
    addTrip(state, newTrip) {
      state.trips.push(newTrip);
      saveInLocalStorage(state.trips);
    },
    //modifica un viaggio
    editTrip(state, editedTrip) {
      const index = state.trips.findIndex((v) => v.id === editedTrip.id);
      if (index !== -1) {
        state.trips.splice(index, 1, editedTrip);
        saveInLocalStorage(state.trips);
      }
    },

    //cancella un viaggio
    deleteTrip(state, id) {
      state.trips = state.trips.filter((v) => v.id !== id);
      saveInLocalStorage(state.trips);
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
  },
  getters: {
    getTripById: (state) => (id) => {
      return state.trips.find((v) => v.id === id);
    },
    allTrips: (state) => state.trips,
  },
});

function saveInLocalStorage(trips) {
  localStorage.setItem("trips", JSON.stringify(trips));
}

store.dispatch("loadTrips");

export default store;
