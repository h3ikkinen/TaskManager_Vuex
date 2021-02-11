export default {
    state: {
        TaskList: [
        ]
    },
    mutations: {
        addTask(state, payload) {
            state.TaskList.push(payload)
        },
        deleteTask (state, payload) {
            state.TaskList.splice(payload, 1);
        },
        editTitleTask (state, payload) {
            state.TaskList[payload.id].name = payload.val;
        }
    },
    actions: {
        addTask ({commit}, payload) {
            commit('addTask', payload)
        },
        deleteTask({commit}, payload) {
            commit('deleteTask', payload)
        },
        editTitleTask({commit}, payload) {
            commit('editTitleTask', payload)
        }
    },
    getters: {
        getTaskList (state) {
            return state.TaskList
        }
    }
}