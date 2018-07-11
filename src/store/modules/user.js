const user = {
  state: {
    token: localStorage.getItem('setToken') || '',
    roles: []
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }, 
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('SET_TOKEN', token)
    },
    GetUserInfo({commit}, roles) {
      return new Promise((resolve, reject) => {
        commit('SET_ROLES', [1])
        resolve([1])
      })
    }
  }
}

export default user