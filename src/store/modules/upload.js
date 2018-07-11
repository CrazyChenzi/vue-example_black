import qinuUpload from '@/utils/qinuUpload.js'

const upload = {
  state: {
    qinuToken: ''
  },
  mutations: {
    SET_QINUTOKEN: (state, qinuToken) => {
      state.qinuToken = {
        uptoken: qinuToken.uptoken,
        domain: qinuToken.domain
      }
    }
  },
  actions: {
    getQinuToken({commit}) {
      return new Promise((resolve, reject) => {
        commit('SET_QINUTOKEN', qinuUpload)
        resolve({
          uptoken: qinuUpload.uptoken,
          domain: qinuUpload.domain
        })
      })
    }
  }
}

export default upload