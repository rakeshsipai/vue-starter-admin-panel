<template>
  <v-container style="height:100%">
    <v-row justify="center" align-content="center" style="height:100%">
      <v-col cols="12" sm="8" lg="6" xl="4">
        <v-form ref="form" @submit.prevent="signin">
          <v-card class="pb-4">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  class="header--text headline text-center font-weight-bold"
                >Welcome to Admin Panel</v-list-item-title>
                <v-list-item-subtitle class="title text-center">Please Login</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-text>
              <v-text-field
                label="Username / Email Id"
                :rules="[rules.required, rules.minName]"
                v-model="usernameOrEmail"
              />
              <v-text-field
                :type="viewPassword?'text':'password'"
                label="Password"
                v-model="password"
                :rules="[rules.required, rules.minPass]"
                :append-icon="viewPassword?'mdi-eye-off':'mdi-eye'"
                @click:append="switchViewPassword"
              />
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="black" dark type="submit">Sign in</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      viewPassword: false,
      usernameOrEmail: 'test',
      password: 'test',
      rules: {
        required: v => !!v || 'Required',
        minName: v => (v && v.length >= 3) || 'Minimum 3 characters',
        minPass: v => (v && v.length >= 3) || 'Minimum 3 characters',
      }
    }
  },
  mounted() {
    this.storeSpinner(false)
  },
  methods: {
    switchViewPassword() {
      this.viewPassword = !this.viewPassword
    },
    signin() {
      //this.storeSpinner(true)
      this.$router.push({ name: 'Dashboard' })
    },
    ...mapActions({
      storeSpinner: 'spinner/storeSpinner',
    })
  }
}
</script>