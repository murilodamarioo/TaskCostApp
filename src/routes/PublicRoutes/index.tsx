import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from '@/screens/Login'

export type PublicRouteParamsList = {
  Login: undefined
  Register: undefined
}

export const PublicRoutes = () => {
  const PublicStack = createNativeStackNavigator<PublicRouteParamsList>()

  return (
    <PublicStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <PublicStack.Screen name='Login' component={Login} />
    </PublicStack.Navigator>
  )
}