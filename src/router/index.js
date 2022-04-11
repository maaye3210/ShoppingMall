import Vue from 'vue'
import VueRouter from 'vue-router'
// 将所有路由信息分离出去
import routes from './routes.js'
import store from '@/store';
import { getToken } from '@/utils/token.js';
// 使用插件
Vue.use(VueRouter)

let router = new VueRouter({
  // 配置路由
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { y: 0 }
  }
})
// 全局守卫：前置
router.beforeEach(async (to, from, next) => {
  let nickName = store.state.user.nickName
  // console.log("路由守卫被触发");
  if (getToken()) {
    // console.log("获取到token");
    if (to.path == '/login' || to.path == '/register') {
      next('/home')
    } else {
      if (nickName) {
        next()
      } else {
        try {
          await store.dispatch('getUserInfo')
          next()
        } catch (error) {
          // 很可能是因为token过期，这时要去登录页重新登录
          await store.dispatch('logout')
          next('/login')
        }
      }
    }
  } else {
    //未登录：不能去交易相关、不能去支付相关【pay|paysuccess】、不能去个人中心
    //未登录去上面这些路由-----登录
    let toPath = to.path;
    if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
      //把未登录的时候向去而没有去成的信息，存储于地址栏中【路由】
      next('/login?redirect=' + toPath);
    } else {
      //去的不是上面这些路由（home|search|shopCart）---放行
      next();
    }

  }
  // {
  //   if (to.path == '/addcartsuccess' || to.path == '/shopcart') {
  //     next('/login')
  //   } else {
  //     next()
  //   }
  // }

})
export default router
