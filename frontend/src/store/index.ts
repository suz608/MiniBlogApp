import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      userLoggedIn: false,
      errorMessage: '', 
    };
  },
  mutations: {
    setUserLoggedIn(state, status: boolean) {
      state.userLoggedIn = status;
    },
    setErrorMessage(state, errorMessage: string) {
      state.errorMessage = errorMessage; 
    },
  },
  actions: {
    login({ commit }) {
      commit('setUserLoggedIn', true);
    },
    logout({ commit }) {
      commit('setUserLoggedIn', false);
    },
    setErrorMessage({ commit }, errorMessage: string) {
      commit('setErrorMessage', errorMessage); 
    },
  },
  getters: {
    isUserLoggedIn(state) {
      return state.userLoggedIn;
    },
    errorMessage(state) {
      return state.errorMessage; 
    },
  },
});

export default store;