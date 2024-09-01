<script>
import TripForm from "./tripComponents/TripForm.vue";

export default {
  components: {
    TripForm,
  },
};
</script>

<template>
  <div class="wrapper text-center d-flex justify-content-center">
    <div>
      <!-- MODALE PER CREAZIONE DI VIAGGIO -->
      <!-- Pulsante per aprire la modale -->
      <button
        type="button"
        class="btn btn-primary p-2"
        data-bs-toggle="modal"
        data-bs-target="#tripModal"
      >
        Aggiungi Un Viaggio
      </button>

      <!-- Modale -->
      <div
        class="modal fade text-dark"
        id="tripModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <!-- CONTROLLO SUL SALVATAGGIO (UTILE IN FASE DI SVILUPPO) -->
              <!-- E VISUALIZZAZIONE FORM (tripForm.vue) -->
              <TripForm @saved="handleSave" />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- PULSANTE PER TORNARE ALLA LISTA DEI VIAGGI -->
    <RouterLink :to="{ name: 'TripList' }" class="mx-2">
      <button class="btn btn-primary p-2">Lista dei tuoi viaggi</button>
    </RouterLink>

    <!-- visualizza mappa -->
  </div>
</template>

<style></style>
