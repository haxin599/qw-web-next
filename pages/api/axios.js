// ~utils/axios.js
import axios from 'axios'
 
const instance = axios.create({
  baseURL: 'http://ddzstest.wechat.szzh.vip/prod-api',
  timeout: 10000,
})
 
// 拦截器
instance.interceptors.response.use((response) => {

    let code = response.data.code;

    // 获取错误信息
    let msg = response.data.msg || errorCode[code] || errorCode['default'];
    if (code === 401) {
    } else if (code !== 200) {
      return Promise.reject('error');
    } else {
      return Promise.resolve(response.data);
    }
}, (error) => {
  return Promise.reject(error)
})
instance.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})
 
export default instance