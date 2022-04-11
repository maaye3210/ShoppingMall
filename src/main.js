import Vue from 'vue'
import { Button, MessageBox } from 'element-ui';
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import store from '@/store'
// 图片懒加载
import VueLazyload from 'vue-lazyload'
import '@/mock/mockServe.js'
import 'swiper/css/swiper.css'
import * as API from '@/api/index.js';
import '@/plugins/validate.js';
Vue.config.productionTip = false
// 全局组件，第一个参数组件名，第二个参数组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)

// 注册懒加载
Vue.use(VueLazyload, {
  loading: '../public/images/1.gif'
})

// element按需引入
Vue.component(Button.name, Button);
// element有两种注册方式，记得区分
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
new Vue({
  render: h => h(App),
  // 全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
    // 全局接口
    Vue.prototype.$API = API
  },
  // 注册路由
  router,
  store
}).$mount('#app')
