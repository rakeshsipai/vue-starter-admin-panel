import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import pathParse from 'path-parse'

//add all from modules directory
let modules = {};
function importAll(allModules) {
    allModules.keys().forEach(key => {
        modules[pathParse(key).name] = allModules(key).default
    });
}
importAll(require.context('./modules/', false, /\.js$/))

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState()],
    modules: modules,
    state: {
        loggedIn: {},
    },
    getters: {
        loggedInStore: state => state.loggedIn,
    },
    mutations: {
        loggedIn(state, data) {
            state.loggedIn = data;
        },
        resetLoggedIn(state) {
            state.loggedIn = {}
        }
    },
    actions: {
        setLoggedInStore({ commit }, data) {
            commit("loggedIn", data);
        },
        resetLoggedInStore({ commit }) {
            commit('resetLoggedIn')
        }
    }
})