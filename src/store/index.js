import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// state:仓库储存数据的地方
import home from './home';
import user from './user';
import search from "./search";
import detail from './detail';
import shopcart from './shopcart'
import register from './register'
import trade from './Trade'

export default new Vuex.Store({
  modules: {
    home,
    user,
    search,
    detail,
    shopcart,
    register,
    trade
  }
})