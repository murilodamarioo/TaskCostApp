import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from '@/screens/Login'

export type PublicStackParamsList = {
  Login: undefined
  Register: undefined
}

export const PublicRoutes = () => {
  const PublicStack = createNativeStackNavigator<PublicStackParamsList>()

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