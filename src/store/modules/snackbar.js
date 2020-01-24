export default {
    namespaced: true,
    state: {
        status: false,
        message: "",
        timeout: 2000
    },
    getters: {
        getStoredStatus: state => state.status,
        getStoredMessage: state => state.message,
        getStoredTimeout: state => state.timeout
    },
    mutations: {
        status(state, data) {
            state.status = data;
        },
        message(state, data) {
            state.message = data;
        },
        timeout(state, data) {
            state.timeout = data;
        }
    },
    actions: {
        storeStatus({ commit }, data) {
            commit("status", data);
        },
        storeMessage({ commit }, data) {
            commit("status", true);
            commit("message", data);
        },
        storeSnackbar({ commit }, status, message, timeout) {
            commit("status", status);
            commit("message", message);
            commit("timeout", timeout);
        }
    }
};
