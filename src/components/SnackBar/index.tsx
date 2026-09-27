import { useSnackBarContext } from '@/context/snackbar.context'
import { Fragment } from 'react'
import { Text, View } from 'react-native'

export const Snackbar = () => {
  const { message, type } = useSnackBarContext()

  if (!message || !type) {
    return <Fragment></Fragment>
  }

  const bgColor = `${type === 'SUCCESS'
    ? 'bg-green-base'
    : 'bg-danger-light'
    }`

  return (
    <View className={`absolute bottom-14 self-center w-[90%] h-[50px] rounded-xl ${bgColor} justify-center p-2 z-10`}>
      <Text className='text-white text-base font-bold'>
        {message}
      </Text>
    </View>
  )
}