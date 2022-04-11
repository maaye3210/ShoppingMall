import { reqGetSearchInfo } from "@/api";
const state = {
  searchList: {}
}
const mutations = {
  GETSEARCHLIST(stata, searchlist) {
    stata.searchList = searchlist
  }
}
const actions = {
  async getSearchList({ commit }, params = {}) {
    let res = await reqGetSearchInfo(params)
    if (res.code == 200) {
      commit('GETSEARCHLIST', res.data)
    }
  }
}
// getters：计算属性，主要用于简化仓库中的数据
const getters = {
  goodsList(stata) {
    return stata.searchList.goodsList || []
  },
  attrsList(stata) {
    return stata.searchList.attrsList || []
  },
  trademarkList(stata) {
    return stata.searchList.trademarkList || []
  },
  total(stata) {
    return stata.searchList.total || 0
  },
}

export default {
  state,
  mutations,
  actions,
  getters
}