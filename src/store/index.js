import Vue from 'vue';
import Vuex from 'vuex';
import api from '../http-client/httpClient';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    isLoading: false,
    socket: {
      isConnected: false,
      barDataset: '',
      reconnectError: false
    }
  },
  getters: {
    barDataset: state => {
      return state.socket.barDataset;
    }
  },
  mutations: {
    updatePosts (state, posts) {
      state.posts = posts;
    },
    setLoader (state, loaderStatus) {
      state.isLoading = loaderStatus;
    },
    updateBars: (state, payload) => {
      state.socket.barDataset.shift();
      state.socket.barDataset.push(payload);
    },
    SOCKET_ONOPEN (state, event) {
      Vue.prototype.$socket = event.currentTarget;
      state.socket.isConnected = true;
    },
    SOCKET_ONCLOSE (state, event) {
      state.socket.isConnected = false;
    },
    SOCKET_ONERROR (state, event) {
      console.error(state, event);
    },
    // default handler called for all methods
    SOCKET_ONMESSAGE (state, message) {
      state.socket.barDataset = message.dataArray;
    },
    // mutations for reconnect methods
    SOCKET_RECONNECT (state, count) {
      console.info(state, count);
    },
    SOCKET_RECONNECT_ERROR (state) {
      state.socket.reconnectError = true;
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
    },
    fetchBars: function ({ commit }) {
      commit('updateBars', Math.floor(Math.random() * (50 + 10 - 1) + 10));
    }
  }
});
