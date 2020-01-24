<template>
  <v-navigation-drawer dark app v-model="navbar" color="red darken-4">
    <v-list dense nav class="py-0 mt-3">
      <v-list-item two-line>
        <v-list-item-avatar color="blue">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Welcome Guest</v-list-item-title>
          <v-list-item-subtitle style="cursor:pointer">Update Profile</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item
        active-class
        v-for="item in navigation"
        :key="item.title"
        @click="changeNav(item)"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      navigation: [],
      current_nav: {}
    }
  },
  mounted() {
    const dis = this;
    this.$router.options.routes.forEach((route) => {
      if (route.meta.nav.addToNav === true) {
        dis.navigation.push({
          title: route.meta.nav.navText,
          path: route.path,
          icon: route.meta.nav.navIcon,
          name: route.name
        });
      }
      // Check if we have childrens
      if (route.children) {
        route.children.forEach(function (childRoute) {
          if (childRoute.meta.nav.addToNav === true) {
            dis.navigation.push({
              title: childRoute.meta.nav.navText,
              path: childRoute.path,
              icon: childRoute.meta.nav.navIcon,
              name: childRoute.name
            });
          }
        })
      }
    })
  },
  computed: {
    navbar: {
      get() {
        return this.getStoredNav
      },
      set() {

      }
    },
    ...mapGetters({
      getStoredNav: 'nav/getStoredNav'
    })
  },
  methods: {
    changeNav(item) {
      this.current_nav = item
      if (this.$router.history.current.name != item.name)
        this.$router.push({ name: item.name })
    },
  }
}
</script>