import { View } from 'react-native'

import { LoginForm } from './LoginForm'
import { DismissKeyboardView } from '@/components/DissmissKeyboardView'
import { AuthHeader } from '@/components/AuthHeader'

export const Login = () => {
  return (
    <DismissKeyboardView>
      <View className='flex-1'>
        <AuthHeader />
        <View className='py-10 px-8 bg-gray-700 rounded-t-2xl'>
          <LoginForm />
        </View>
      </View>
    </DismissKeyboardView>
  )
}