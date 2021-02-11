import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex, createPersistedState)

import tasks from './tasks';

export default new Vuex.Store({
    modules: {
        tasks
    },
    plugins: [createPersistedState()],
    mutations: {
        getTasks () {
            
        }
    }
})
