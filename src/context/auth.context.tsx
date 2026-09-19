import { createContext, FC, PropsWithChildren, useContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import * as authService from '@/shared/services/swift-expense-split/auth.service'

import { FormLoginParams } from '@/screens/Login/LoginForm'
import { FormRegisterParams } from '@/screens/Register/RegisterForm'
import { IAuthenticateResponse } from '@/shared/interfaces/https/authenticate-response'

type AuthContextType = {
  userId: string | null
  token: string | null
  handleAuthenticate: (params: FormLoginParams) => Promise<void>
  handleRegister: (params: FormRegisterParams) => Promise<void>
  restoreSession: () => Promise<string | null>
  handleLogout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
)

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null)
  const [token, setToken] = useState<string | null>(null)

  const handleAuthenticate = async (userData: FormLoginParams) => {
    const { id, token } = await authService.authenticate(userData)

    await AsyncStorage.setItem('swift-expense-split', JSON.stringify({ id, token }))

    setUserId(id)
    setToken(token)
  }

  const handleRegister = async (userData: FormRegisterParams) => {
    const { id, token } = await authService.registerUser(userData)

    await AsyncStorage.setItem('swift-expense-split', JSON.stringify({ id, token }))

    setUserId(id)
    setToken(token)
  }

  const restoreSession = async () => {
    const userData = await AsyncStorage.getItem('swift-expense-split')

    if (userData) {
      const { id, token } = JSON.parse(userData) as IAuthenticateResponse

      setUserId(id)
      setToken(token)
    }

    return userData
  }

  const handleLogout = async () => {
    await AsyncStorage.clear()

    setUserId(null)
    setToken(null)
  }

  return (
    <AuthContext.Provider
      value={{
        userId,
        token,
        handleAuthenticate,
        handleRegister,
        restoreSession,
        handleLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  return context
}