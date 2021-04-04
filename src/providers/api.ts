import axios from 'axios'
import { StorageConstant } from '../constants/storage.constant'
import { StorageHelper } from '../helpers'

const baseURL = process.env.REACT_APP || 'http://localhost:3333'

export const api = axios.create({ baseURL })

api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const key = StorageConstant.TOKEN
    const token = StorageHelper.getItem(key)

    config.headers['Authorization'] = `Bearer ${token}`
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)
