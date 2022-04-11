import { reqLogin, reqUserInfo, reqLogout } from "@/api";
import { setToken, getToken, removeToken } from '@/utils/token.js';
const state = {
  nickName: '',
  name: '',
  // token: '',
  userId: ''
}
// mutations:修改state的唯一手段
const mutations = {
  LOGIN(stata, data) {
    let { nickName, name, token, userId } = data
    stata.nickName = nickName
    stata.name = name
    // stata.token = token
    stata.userId = userId
  },
  LOGOUT(stata) {
    stata.nickName = ''
    stata.name = ''
    // stata.token = ''
    stata.userId = ''
  }
}
// action:处理action，也可以书写自己的业务逻辑，也可以处理异步
const actions = {
  async login({ commit }, data) {
    let res = await reqLogin(data)
    console.log(res);
    if (res.code == 200) {

      setToken(res.data.token)
      commit("LOGIN", res.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  async logout({ commit }) {
    let res = await reqLogout()
    console.log("退出登录：", res);
    removeToken()
    commit('LOGOUT')

  },
  async getUserInfo({ commit }) {
    let res = await reqUserInfo()
    console.log("获取用户信息：", res);
    if (res.code == 200) {
      commit("LOGIN", res.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('faile to get userinfo'))
    }
  }
}
// getters:理解为计算属性，用于简化仓库数据。让组件获取仓库数据更加方便
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}