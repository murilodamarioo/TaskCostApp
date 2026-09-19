import { Platform } from 'react-native'
import axios from 'axios'

const baseURL = Platform.select({
  ios: 'http://localhost:8080',
  android: 'http://10.0.2.2:8080'
})

export const api = axios.create({
  baseURL
})