<template>
  <v-app>
    <pulse-loader
      :loading="openSpinner"
      color="#000"
      size="15px"
      style="position: absolute; top: 40%; left: 45%; z-index: 9999;"
    ></pulse-loader>
    <v-snackbar v-model="snackbarStatus">
      {{ snackbarMessage }}
      <v-btn color="pink" text @click="closeSnackbar(false)">Close</v-btn>
    </v-snackbar>
    <router-view />
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'App',

  data: () => ({
    //
  }),
  computed: {
    snackbarStatus: {
      get() {
        return this.getStoredStatus
      },
      set(status) {
        this.storeStatus(status)
      }
    },
    ...mapGetters({
      getStoredStatus: 'snackbar/getStoredStatus',
      snackbarMessage: 'snackbar/getStoredMessage',
      openSpinner: 'spinner/getStoredSpinner'
    })
  },
  methods: {
    closeSnackbar(status) {
      this.storeStatus(status)
    },
    ...mapActions({
      storeStatus: 'snackbar/storeStatus'
    })
  }
};
</script>
