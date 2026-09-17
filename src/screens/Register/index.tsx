import { View } from 'react-native'

import { DismissKeyboardView } from '@/components/DissmissKeyboardView'
import { AuthHeader } from '@/components/AuthHeader'
import { RegisterForm } from './RegisterForm'

export const Register = () => {
  return (
    <DismissKeyboardView scrollEnabled={false}>
      <View className='flex-1'>
        <AuthHeader />
        <View className='py-10 px-8 bg-gray-700 rounded-t-2xl'>
          <RegisterForm />
        </View>
      </View>
    </DismissKeyboardView>
  )
}