import { Fragment } from 'react'
import { useRoute } from '@react-navigation/native'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import { useAuthContext } from '@/context/auth.context'

import { colors } from '@/shared/colors'

export const Header = () => {
  const { handleLogout } = useAuthContext()

  const route = useRoute()

  return (
    <View className='flex-row justify-between items-center'>
      <Image source={require('@/assets/header-logo.png')} />

      {route.name === 'Summary' ?
        (
          <TouchableOpacity
            className='flex-row justify-center items-center gap-1'
            onPress={handleLogout}
          >
            <MaterialIcons name='exit-to-app' size={24} color={colors.gray[400]} />
            <Text className='text-base text-gray-400'>
              Sair
            </Text>
          </TouchableOpacity>
        )
        : (<Fragment></Fragment>)
      }
    </View>
  )
}