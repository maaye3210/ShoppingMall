import { reqGetGoodsInfo, reqAddToCart } from "@/api";
// 封装游客身份模块，生成一个随机字符串
import { getUUID } from '@/utils/uuid_token.js';
const state = {
  goodsInfo: {},
  uuid_token: getUUID()
}
const mutations = {
  GETGOODSINFO(stata, goodsInfo) {
    stata.goodsInfo = goodsInfo
  }
}
const actions = {
  async getGoodsInfo({ commit }, skuId) {
    let res = await reqGetGoodsInfo(skuId)
    if (res.code == 200) {
      commit('GETGOODSINFO', res.data)
    }
  },
  async addToCart({ commit }, { skuId, skuName }) {
    let res = await reqAddToCart(skuId, skuName)
    if (res.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  }
}
const getters = {
  categoryView(stata) {
    return stata.goodsInfo.categoryView || {}
  },
  skuInfo(stata) {
    return stata.goodsInfo.skuInfo || {}
  },
}

export default {
  state,
  mutations,
  actions,
  getters
}