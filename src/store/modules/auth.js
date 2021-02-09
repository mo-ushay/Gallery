import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';

const state = {
  token: window.localStorage.getItem('imgur_token')
};

const getters = {
  isLoggedin: state => !!state.token
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

const actions = {
  login: () => {
    api.login();
  },
  finalizeLogin({ commit }, hash) {
    const query =  qs.parse(hash.replace('#',''));

    commit('setToken', query.access_token);
    window.localStorage.setItem('imgur_token',query.access_token);

    router.push('/');
  },
  logout: ({ commit }) => {  //we never directly call a mutation (mutations.setToken!! bad)
    commit('setToken', null);
    window.localStorage.removeItem('imgur_token');
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};