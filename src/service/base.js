import axios from 'axios'

const ERR_OK = 0
const baseURL = process.env.NODE_ENV === 'production' ? 'http://101.34.48.243/' : '/'

axios.defaults.baseURL = baseURL

export function get (url, params) {
  return axios.get(url, {
    params
  }).then((res) => {
    const serverData = res.data
    if (serverData.code === ERR_OK) {
      return serverData.result
    }
  }).catch((err) => {
    console.log(err, 'err***')
  })
}
