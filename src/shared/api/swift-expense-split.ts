import { Platform } from 'react-native'
import axios from 'axios'

import { addTokenToRequest } from '../helpers/axios.helper'
import { AppError } from '../helpers/AppError'

const baseURL = Platform.select({
  ios: 'http://localhost:8080/api/v1',
  android: 'http://10.0.2.2:8080/api/v1'
})

export const api = axios.create({
  baseURL
})

addTokenToRequest(api)

api.interceptors.response.use(
  (config) => config,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(
        new AppError(error.response.data.message ?? 'Falha na requisição')
      )
    } else {
      return Promise.reject(new AppError('Falha na requisição'))
    }
  }
)