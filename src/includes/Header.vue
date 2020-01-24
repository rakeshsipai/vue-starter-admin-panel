<template>
  <v-app-bar dark app flat class="header">
    <v-app-bar-nav-icon @click="changeDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <span v-text="title"></span>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-badge class="mr-7">
      <template v-slot:badge>20</template>
      <v-icon>mdi-bell-ring</v-icon>
    </v-badge>
    <v-badge class="mr-7">
      <template v-slot:badge>20</template>
      <v-icon>mdi-email</v-icon>
    </v-badge>

    <v-menu bottom offset-y>
      <template v-slot:activator="{ on }">
        <div class="setting" v-on="on">
          <span>Settings</span>
          <v-icon>mdi-chevron-down</v-icon>
        </div>
      </template>

      <v-list>
        <v-list-item v-for="(item, i) in options" :key="i" @click="optionClicked(item)">
          <v-list-item-title>
            <v-icon>{{item.icon}}</v-icon>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      title: 'Dashboard',
      options: [
        {
          name: 'Logout',
          title: 'Logout',
          icon: 'mdi-logout'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      getStoredNav: 'nav/getStoredNav'
    })
  },
  methods: {
    changeDrawer() {
      this.storeNav(!this.getStoredNav)
    },
    optionClicked(item) {
      if (item.name != 'Logout') {
        // for other actions if available
      } else {
        this.storeMessage("Logout successfully.")
        this.$router.push({ name: "Login" })
      }

    },
    ...mapActions({
      storeMessage: 'snackbar/storeMessage',
      storeNav: 'nav/storeNav'

    })
  }
}
</script>