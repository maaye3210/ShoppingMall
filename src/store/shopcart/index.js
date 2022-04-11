import { reqCartList, reqAddToCart, reqDeleteGoods, reqUpdateChecked } from "@/api";
const state = {
  cartList: {}
}
const mutations = {
  GETCARTLIST(stata, cartList) {
    stata.cartList = cartList
  }
}
const actions = {
  async getCartList({ commit }) {
    let res = await reqCartList()
    if (res.code == 200) {
      commit("GETCARTLIST", res.data)
    }
  },
  async changeNum({ commit }, { skuId, skuNum }) {
    let res = await reqAddToCart(skuId, skuNum)
    if (res.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  async deleteGoods({ commit }, skuId) {
    let res = await reqDeleteGoods(skuId)
    if (res.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  async updateChecked({ commit }, { skuId, isChecked }) {
    let res = await reqUpdateChecked(skuId, isChecked)
    if (res.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  }
}
const getters = {
  cartList(stata) {
    return stata.cartList[0] || []
  },
  // cartInfoList(stata){
  //   return stata.cartList[0]||[]
  // },
}

export default {
  state,
  mutations,
  actions,
  getters
}