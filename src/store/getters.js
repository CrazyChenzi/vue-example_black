const getters = {
  token: state => state.user.token,
  roles: state => state.user.roles,
  addRouters: state => state.permission.addRouters,
  qinuToken: state => state.upload.qinuToken
}

export default getters