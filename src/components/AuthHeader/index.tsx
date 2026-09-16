import { Image, View } from 'react-native'

export const AuthHeader = () => {
  return (
    <View className='items-center justify-center w-full min-h-[290px] bg-gray-800'>
      <Image
        source={require('@/assets/Logo.png')}
        className='h-[95px] w-[130px]'
      />
    </View>
  )
}