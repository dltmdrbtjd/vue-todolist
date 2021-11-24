import axios from 'axios';

const home = {
  state: {
    list: [
      {
        title: '역전할머니',
        location: '서울특별시 서울대입구역 샤로수길',
        explain: '역전할머니 생맥주와 떡볶이 조합이라면 끝장납니다.',
        key: 0,
      },
      {
        title: '왕돈까스 왕냉면',
        location: '서울특별시 낙성대역 4번 출구',
        explain: '세트메뉴 조합이 굉장히 다양하고 특히 냉면이 정말 맛있어요',
        key: 1,
      },
      {
        title: '쟝블랑제리',
        location: '서울특별시 낙성대역 4번 출구',
        explain:
          '서울에서 유명한 빵집중 한 곳이고 특히 어느 시간대에 가더라도 줄을 서야해요',
        key: 2,
      },
    ],
    apiTestList: [],
  },
  getters: {
    listLength(state) {
      return state.list.length;
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
        state.list.find((item) => item.key === payload.key),
        payload
      );
      // state.list.$set(1, payload)
    },
    deletePost(state, payload) {
      const idx = state.list.findIndex((item) => item.key === payload);
      state.list.splice(idx, 1);
    },
    loadPost(state, payload) {
      state.apiTestList.push(payload);
    },
  },
  actions: {
    createPost: ({ commit }, payload) => {
      commit('createPost', payload);
    },
    editPost: ({ commit }, payload) => {
      commit('editPost', payload);
    },
    getLoadPost: ({ commit }) => {
      axios.get('http://localhost:4444/books').then((res) => {
        console.log(res.data);
        commit('loadPost', res.data);
      });
    },
  },
};

export default home;
