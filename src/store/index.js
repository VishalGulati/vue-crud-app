import Vue from 'vue';
import Vuex from 'vuex';
import api from '../http-client/httpClient';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    isLoading: false
  },
  mutations: {
    updatePosts (state, posts) {
      state.posts = posts;
    },
    setLoader (state, loaderStatus) {
      state.isLoading = loaderStatus;
    }
  },
  actions: {
    getPosts ({ commit }) {
      commit('setLoader', true);
      return api
        .get('/posts')
        .then(result => {
          commit('setLoader', false);
          commit('updatePosts', result.data);
        })
        .catch(errorMessage => {
          commit('setLoader', false);
          console.log(errorMessage);
        });
    }
  }
});
