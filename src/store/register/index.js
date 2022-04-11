import { reqGetCode, reqRegister } from "@/api";
const state = {
  code: ''
}
const mutations = {
  GETCODE(stata, code) {
    stata.code = code
  }
}
const actions = {
  async getCode({ commit }, phone) {
    let res = await reqGetCode(phone)
    if (res.code == 200) {
      commit('GETCODE', res.data)
    } else {
      return Promise.reject(new Error('faile to get code'))
    }
  },
  async register({ commit }, data) {
    let res = await reqRegister(data)
    console.log(res);

    if (res.code == 200) {
      return 'ok'
    } else {

      return Promise.reject(new Error('faile to register'))
    }
  }
}
const getters = {
}

export default {
  state,
  mutations,
  actions,
  getters
}