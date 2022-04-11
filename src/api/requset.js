import axios from "axios";
import nprogress from 'nprogress'
// 引入进度效果
import 'nprogress/nprogress.css'
// 引入仓库
import store from '@/store';
import { getToken } from '@/utils/token.js'

// 对axios进行二次封装
// 用axios对象的方法create创建一个axios实例
const requests = axios.create({
  // 配置对象
  baseURL: '/api',
  timeout: 5000
})
// 请求拦截器
requests.interceptors.request.use((config) => {
  // config:配置对象，对象里有一个属性很重要，headers请求头
  if (store.state.detail.uuid_token) {
    // 在请求头添加一个字段（userTempId），这是与后台协商好的
    config.headers.userTempId = store.state.detail.uuid_token
  }
  if (getToken()) {
    config.headers.token = getToken()
  }
  nprogress.start()
  return config
})
// 响应拦截器
requests.interceptors.response.use((res) => {
  nprogress.done()
  return res.data
}, () => {
  return Promise.reject(new Error('fail'))
})
export default requests