import axios from 'axios'

// 设置请求超时时长
axios.defaults.timeout = 50000
// 表单提交 post 方式
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

axios.interceptors.request.use((config) => {
  // post 提交时 将请求数据 序列化
  if (config.method.toLowerCase() === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => { // 失败时
  return Promise.reject(error)
})
