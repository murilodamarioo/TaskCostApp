import { NavigationContainer } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import { SystemBars } from 'react-native-edge-to-edge'

import { PublicRoutes } from './PublicRoutes'
import { PrivateRoutes } from './PrivateRoutes'

import { useAuthContext } from '@/context/auth.context'
import { Loading } from '@/screens/Loading'

export const NavigationRoutes = () => {
  const { userId, token } = useAuthContext()

  const [loading, setLoding] = useState(true)

  const Routes = useCallback(() => {
    if (loading) {
      return <Loading setLoading={setLoding} />
    }

    return (!userId || !token) ? <PublicRoutes /> : <PrivateRoutes />
  }, [userId, token, loading])

  return (
    <NavigationContainer>
      <SystemBars style={'light'} />
      <Routes />
    </NavigationContainer>
  )
}