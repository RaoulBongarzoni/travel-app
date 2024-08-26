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
    },
    //modifica un viaggio
    editTrip(state, editedTrip) {
      const index = state.trips.findIndex((v) => v.id === editedTrip.id);
      if (index !== -1) {
        state.trips.splice(index, 1, editedTrip);
      }
    },

    //cancella un viaggio
    deleteTrip(state, id) {
      state.trips = state.trips.filter((v) => v.id !== id);
    },
  },
  actions: {},
  getters: {
    getTripById: (state) => (id) => {
      return state.trips.find((v) => v.id === id);
    },
  },
});

export default store;
