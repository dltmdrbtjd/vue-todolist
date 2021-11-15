const home = {
    state: {
        list: [
            {
                title: '첫 번째 게시물',
                author: '승규'
            },
            {
                title: '두 번째 게시물',
                author: '탄이'
            },
            {
                title: '세 번째 게시물',
                author: '캔디'
            }
        ]
    },
    getters: {
        getPostList: (state) => state.list
    },
    mutations: {
        loadPostList: (state, payload) => {
            state.list = payload
        }
    },
    actions: {
        loadPostList: ({ commit }, payload ) => {
            commit('loadPostList', payload)
        }
    }
}

export default home