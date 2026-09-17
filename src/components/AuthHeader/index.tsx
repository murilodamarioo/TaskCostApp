import { Fragment } from 'react'
import { Image, View } from 'react-native'

import { useKeyboardVisible } from '@/shared/hooks/useKeyboardVisible'

export const AuthHeader = () => {
  const keyboardIsVisible = useKeyboardVisible()

  return keyboardIsVisible ?
    <Fragment></Fragment>
    :
    (
      <View className='flex-1 items-center justify-center w-full bg-gray-800'>
        <Image
          source={require('@/assets/Logo.png')}
          className='h-[95px] w-[130px]'
        />
      </View>
    )
}