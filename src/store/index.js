import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import homeStore from './modules/home'

const store = new Vuex.Store({
    modules: {
        home: homeStore
    }
})

export default store