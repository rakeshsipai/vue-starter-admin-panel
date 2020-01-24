<template>
  <v-content>
    <app-header></app-header>
    <left-nav></left-nav>
    <router-view />
    <app-footer></app-footer>
  </v-content>
</template>

<script>
export default {
  name: 'Layout',

  data: () => ({
    //
  }),
  beforeMount() {
    if (this.$router.history.current.path == '/')
      this.$router.push({ name: 'Dashboard' })
  }
};
</script>