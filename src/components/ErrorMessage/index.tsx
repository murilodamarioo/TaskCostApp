import { MaterialIcons } from '@expo/vector-icons'
import { FC, PropsWithChildren } from 'react'
import { Text, View } from 'react-native'

import { colors } from '@/shared/colors'

export const ErrorMessage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View className='flex-row items-center mt-1'>
      <MaterialIcons
        name='error-outline'
        size={16}
        color={colors['danger-light']}
        className='mr-1'
      />

      <Text className='text-danger-light'>
        {children}
      </Text>
    </View>
  )
}