// api统一管理
import requests from "./requset";
import mockRequest from "./requsetMock";
// 三级联动接口
// /api/product/getBaseCategoryList GET 
export const reqCategoryList = () => {
  return requests({ url: '/product/getBaseCategoryList', method: 'get' })
}
// 使用mock模拟的banner数据请求接口
export const reqGetBannerList = () => {
  // console.log('请求了一次数据');
  return mockRequest.get('/banner')
}
// 使用mock模拟的floor数据请求接口
export const reqGetFloorList = () => {
  return mockRequest.get('/floor')
}
// 搜索商品列表
export const reqGetSearchInfo = (param) => {
  return requests({ url: '/list', method: 'post', data: param })
}
// 获取商品详情的接口
export const reqGetGoodsInfo = (skuId) => {
  return requests({ url: `/item/${skuId}`, method: 'get' })
}
// 向服务器发起向购物车添加商品的接口，同时能够修改商品数量
export const reqAddToCart = (skuId, skuNum) => {
  return requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })
}
// 获取购物车数据接口
export const reqCartList = () => {
  return requests({ url: `/cart/cartList/`, method: 'get' })
}
// 删除商品
export const reqDeleteGoods = (skuId) => {
  return requests({ url: `/cart/deleteCart/${skuId}`, method: 'DELETE' })
}
// 修改选中状态
export const reqUpdateChecked = (skuID, isChecked) => {
  return requests({ url: `/cart/checkCart/${skuID}/${isChecked}`, method: 'get' })
}
// 获取验证码
export const reqGetCode = (phone) => {
  return requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })
}
// 用户注册
export const reqRegister = (data) => {
  return requests({ url: `/user/passport/register`, data, method: 'post' })
}
// /api/user/passport/login POST
// 登录
export const reqLogin = (data) => {
  return requests({ url: `/user/passport/login`, data, method: 'post' })
}
// /user/passport/logout
// 退出登录
export const reqLogout = () => {
  return requests({ url: `/user/passport/logout`, method: 'get' })
}
// 获取用户信息
export const reqUserInfo = () => {
  return requests({ url: `/user/passport/auth/getUserInfo`, method: 'get' })
}
// 获取地址
export const reqAddressInfo = () => {
  return requests({ url: `/user/userAddress/auth/findUserAddressList`, method: 'get' })
}
// 获取商品列表
export const reqOrderInfo = () => {
  return requests({ url: `/order/auth/trade`, method: 'get' })
}
// /order/auth/submitOrder?tradeNo={tradeNo}提交订单接口
export const reqSubmitOrder = (tradeNo, data) => {
  return requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'POST' })
}
//获取支付信息
//URL:/api/payment/weixin/createNative/{orderId}  GET
export const reqPayInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' });

//获取支付订单状态
//URL:/api/payment/weixin/queryPayStatus/{orderId}  get
export const reqPayStatus = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get' });


//获取个人中心的数据
//api/order/auth/{page}/{limit}  get 
export const reqMyOrderList = (page, limit) => requests({ url: `/order/auth/${page}/${limit}`, method: 'get' });