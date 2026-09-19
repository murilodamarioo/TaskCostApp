import { FormLoginParams } from '@/screens/Login/LoginForm'
import { FormRegisterParams } from '@/screens/Register/RegisterForm'

import { api } from '@/shared/api/swift-expense-split'
import { IAuthenticateResponse } from '@/shared/interfaces/https/authenticate-response'

export const authenticate = async (
  userData: FormLoginParams
): Promise<IAuthenticateResponse> => {
  const { data } = await api.post<IAuthenticateResponse>('/users/sign-in', userData)

  return data
}

export const registerUser = async (
  userData: FormRegisterParams
): Promise<IAuthenticateResponse> => {
  const { data } = await api.post<IAuthenticateResponse>('/users/sign-up', userData)

  return data
}