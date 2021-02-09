import api from '../../api/imgur';
import { router } from '../../main';

const state = {
  images: []
};

const getters = {
  allImages: state => state.images
};

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    commit('setImages', response.data.data);
  },
  async uploadImages ({ rootState } ,images) {
    // get the access token
    const { token } = rootState.auth;
    // call the api module to do the upload
    await api.uploadImages(images, token);
    // redirect user to the ImageList component
    router.push('/');
  }
};

const mutations = {
  setImages: (state, images) => {
    state.images = images; 
  }
};

export default{
  state,
  getters,
  mutations,
  actions
};