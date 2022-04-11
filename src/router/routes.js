import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade';
import Pay from '@/pages/Pay';
import Center from '@/pages/Center';
import PaySuccess from '@/pages/PaySuccess';
import MyOrder from '@/pages/Center/myOrder';
import groupOrder from '@/pages/Center/groupOrder';
export default [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home, meta: { showFooter: true } },
  { path: '/login', component: Login, meta: { showFooter: false } },
  { path: '/register', component: Register, meta: { showFooter: false } },
  { path: '/detail/:skuid', component: Detail, meta: { showFooter: true } },
  { path: '/addcartsuccess/', component: AddCartSuccess, meta: { showFooter: true }, name: 'addcartsuccess' },
  { path: '/shopcart', component: ShopCart, meta: { showFooter: true } },
  {
    path: '/trade', component: Trade, meta: { showFooter: true }, beforeEnter: (to, from, next) => {
      if (from.path == '/shopcart') {
        next()
      } else {
        next(false)
      }
    }
  },
  { path: '/pay', component: Pay, meta: { showFooter: true } },
  {
    path: '/center', component: Center, meta: { showFooter: true }, children: [
      { path: 'myorder', component: MyOrder },
      { path: 'grouporder', component: groupOrder },
      { path: '/center', redirect: "/center/myorder" },
    ]
  },

  { path: '/paySuccess', component: PaySuccess, meta: { showFooter: true } },
  { path: '/search/:keyword?', component: Search, meta: { showFooter: true }, name: 'search' }
]