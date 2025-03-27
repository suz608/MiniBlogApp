// This is a vuex store file used to share user log in info across the app

import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      userLoggedIn:false, // Set default value for user login status to fasle
    };
  },
  mutations: {
    setUserLoggedIn(state, status: boolean) {
      state.userLoggedIn = status;
    },
  },
  actions: {
    login({ commit }) {
      commit('setUserLoggedIn', true);
    },
    logout({ commit }) {
      commit('setUserLoggedIn', false);
    },
  },
  getters: {
    isUserLoggedIn(state) {
      return state.userLoggedIn;
    },
  },
});

export default store;
