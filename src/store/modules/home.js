import axios from 'axios';

const home = {
  state: {
    list: [],
  },
  getters: {
    listLength(state) {
      return state.list.length;
    },
    loadPostData(state) {
      return state.list;
    },
  },
  mutations: {
    createPost: (state, payload) => {
      state.list.push(payload);
    },
    editPost: (state, payload) => {
      // const idx = state.list.findIndex((item) => item.key === payload.key)
      // state.list[idx] = payload
      // state.list.splice(idx, 1, payload)
      Object.assign(
        state.list.find((item) => item.id === payload.id),
        payload
      );
      // state.list.$set(1, payload)
    },
    deletePost(state, payload) {
      const idx = state.list.findIndex((item) => item.id === payload);
      state.list.splice(idx, 1);
    },
    loadPost(state, payload) {
      state.list.push(...payload);
    },
  },
  actions: {
    createPost: ({ commit }, payload) => {
      axios.post('http://localhost:4444/books', payload).then((res) => {
        commit('createPost', res.data.data);
      });
    },
    editPost: ({ commit }, payload) => {
      axios
        .patch(`http://localhost:4444/books/${payload.id}`, payload)
        .then(() => {
          commit('editPost', payload);
        });
    },
    getLoadPost: ({ commit }) => {
      axios.get('http://localhost:4444/books').then((res) => {
        commit('loadPost', res.data.data);
      });
    },
    deletePost: ({ commit }, payload) => {
      axios.delete(`http://localhost:4444/books/${payload}`).then(() => {
        commit('deletePost', payload);
      });
    },
  },
};

export default home;
