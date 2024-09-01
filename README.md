# Vue 3 + Vite

## Nota Dallo Sviluppatore

**L'applicazione è in fase di demo, non tutte le funzioni che ho prefissato di aggiungere sono state aggiunte**

## Travel App è un'applicazione web che permette la gestione dei propri viaggi e le relative fermate,

L'applicazione è costruita tramite **Vue 3 + Vite**
-utilizza **Vuex** per la gestione dello store (salvando su LocalStorage)
-utilizza **Vue Router** per la gestione delle rotte

## Caratteristiche

- **Creazione e Modifica Viaggi**: Gli utenti possono creare nuovi viaggi e modificarli in qualsiasi momento.
- **Gestione Fermate**: Ogni viaggio può avere una lista di fermate associate. È possibile aggiungere, modificare e cancellare fermate per ogni viaggio.
- **Modale per la Creazione**: Utilizzo di modali per la creazione e modifica di viaggi e fermate.

## Requisiti

- Node.js (v14 o successivo)
- npm (v6 o successivo)

## Installazione

1. **Clona il repository**:

2. **Installa le dipendenze**:

3. **Avvia l'applicazione in modalità di sviluppo**:

4. **Compila il progetto per la produzione**:

## Struttura del Progetto

- **src/**: Contiene il codice sorgente dell'applicazione.
  - **components/**: Contiene i componenti Vue dell'applicazione, divisi in `tripComponents` e `stopsComponents`.
  - **router/**: Contiene le definizioni delle rotte utilizzate da Vue Router.
  - **store/**: Contiene i file Vuex per la gestione dello stato dell'applicazione.

## Utilizzo

### Creazione di un Nuovo Viaggio

1. Nella pagina principale, fai clic sul pulsante `Crea Nuovo Viaggio`.
2. Compila il modulo con i dettagli del viaggio e fai clic su `Crea Viaggio`.
3. Il nuovo viaggio verrà aggiunto alla lista.

### Modifica di un Viaggio Esistente

1. Dalla lista dei viaggi, fai clic sul viaggio che desideri modificare.
2. Nella pagina dei dettagli del viaggio, fai clic sul pulsante `Modifica Viaggio`.
3. Apporta le modifiche necessarie e fai clic su `Salva Modifiche`.

### Gestione delle Fermate

1. Accedi ai dettagli di un viaggio.
2. Nella sezione delle fermate, puoi aggiungere una nuova fermata, modificarne una esistente, o eliminarla.

## Dipendenze Principali

- [Vue.js](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Bootstrap](https://getbootstrap.com/)

## Prossimi Step:

1. Aggiunta API maps per avere una visuale dinamica delle tappe
2. Ordinamento per orario e data dei viaggi e delle tappe
3. Status dei viaggi e delle tappe ( Non sarebbe un vero Planner se non so cosa ho fatto / devo fare )
4. Miglioramenti generali alla UI, per ora fin troppo semplice
