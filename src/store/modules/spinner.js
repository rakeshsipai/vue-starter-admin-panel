export default {
    namespaced: true,
    state: {
        status: false
    },
    getters: {
        getStoredSpinner: state => state.status
    },
    mutations: {
        status(state, data) {
            state.status = data;
        }
    },
    actions: {
        storeSpinner({ commit }, data) {
            commit("status", data);
        }
    }
}