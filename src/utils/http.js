import axios from 'axios'
const http = axios.create()

http.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://m.maizuo.com/' : 'https://m.maizuo.com/'

http.defaults.timeout = 10000

http.interceptors.response.use(response => {
  return response.data
})

export default http
