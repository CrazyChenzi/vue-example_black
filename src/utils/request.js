import axios from 'axios'
import store from '@/store'
import { Message } from 'iview'
import qs from 'qs'

let axiosIns = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000, // request timeout
  headers: {
    'Content-Type': 'multipart/form-data'
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Credentials': 'true',
    // 'Access-Control-Allow-Methods': '*',
    // 'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    // 'Access-Control-Expose-Headers': '*'
  }
})

// axiosIns.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
// axiosIns.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest'
axiosIns.defaults.responseType = 'json'
axiosIns.defaults.transformRequest = [function (data) { return qs.stringify(data) }]
axiosIns.defaults.validateStatus = function (status) { return true }
axiosIns.interceptors.request.use(function (config) {
  //配置config
  config.headers.Accept = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/json'
  // let token = Vue.localStorage.get('token')
  // if(token){
  //     config.headers.Token = token
  // }
  return config;
})
axiosIns.interceptors.response.use((response) => {
  let data = response.data;
  let status = response.status;
  if (status === 200) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
}, (err) => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '错误请求'
        break;
      case 401:
        err.message = '未授权，请重新登录'
        break;
      case 403:
        err.message = '拒绝访问'
        break;
      case 404:
        err.message = '请求错误,未找到该资源'
        break;
      case 405:
        err.message = '请求方法未允许'
        break;
      case 408:
        err.message = '请求超时'
        break;
      case 500:
        err.message = '服务器端出错'
        break;
      case 501:
        err.message = '网络未实现'
        break;
      case 502:
        err.message = '网络错误'
        break;
      case 503:
        err.message = '服务不可用'
        break;
      case 504:
        err.message = '网络超时'
        break;
      case 505:
        err.message = 'http版本不支持该请求'
        break;
      default:
        err.message = `连接错误${err.response.status}`
    }
  } else {
    err.message = "连接到服务器失败"
  }
  return Promise.resolve(err.response)
})

let ajaxMethod = ['get', 'post']
let request = {}

ajaxMethod.forEach((method)=> {
  //数组取值的两种方式
  request[method] = function (url, data) {
    return new Promise(function (resolve, reject) {
      axiosIns[method](url, data).then((response)=> {
        // if (response.data.StatusCode) {
        // } else {
        //   resolve(response);
        // }
        resolve(response)
      }).catch((err)=> {
        reject(err)
      })
    })
  }
})

export default request
