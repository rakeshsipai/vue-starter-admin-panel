export default {
    namespaced: true,
    state: {
        status: true,
    },
    getters: {
        getStoredNav: state => state.status
    },
    mutations: {
        status(state, data) {
            state.status = data;
        },
    },
    actions: {
        storeNav({ commit }, data) {
            commit("status", data);
        }
    }
};
