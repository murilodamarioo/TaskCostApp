import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@/screens/Home'

export type PrivateStackParamsList = {
  Home: undefined
}

export const PrivateRoutes = () => {
  const PrivateStack = createNativeStackNavigator<PrivateStackParamsList>()

  return (
    <PrivateStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <PrivateStack.Screen name='Home' component={Home} />
    </PrivateStack.Navigator>
  )
}