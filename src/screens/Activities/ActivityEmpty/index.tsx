import { Text, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/FontAwesome'

import { colors } from '@/shared/colors'

export const ActivityEmpty = () => {
  return (
    <View className='flex-1 justify-center items-center gap-4'>
      <MaterialIcons name='list' size={24} color={colors.gray[400]} />
      <View className='w-[150]'>
        <Text className='text-sm text-gray-400 text-center mb-4 leading-6'>
          Você ainda não tem atividades criadas
        </Text>
      </View>
    </View>
  )
}