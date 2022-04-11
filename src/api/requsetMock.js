import axios from "axios";
import nprogress from 'nprogress'
// 引入进度效果
import 'nprogress/nprogress.css'
// console.log(nprogress);

// 对axios进行二次封装
// 用axios对象的方法create创建一个axios实例
const requests = axios.create({
  // 配置对象
  baseURL: '/mock',
  timeout: 5000
})
requests.interceptors.request.use((config) => {
  // config:配置对象，对象里有一个属性很重要，headers请求头
  nprogress.start()
  return config
})
requests.interceptors.response.use((res) => {
  nprogress.done()
  return res.data
}, () => {
  return Promise.reject(new Error('fail'))
})
export default requests