import { Text, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/FontAwesome'

import { colors } from '@/shared/colors'
import { AppButton } from '@/components/AppButton'

export const ExpenseListEmptyState = () => {

  return (
    <View className='flex-1 self-center justify-center items-center gap-4 w-52'>
      <MaterialIcons name='pie-chart' size={24} color={colors.gray[400]} />
      <Text className='text-sm text-gray-400 text-center'>
        Para começar a dividir,
        registre uma despesa
      </Text>
      <AppButton iconSide='right' iconName='add-circle-outline'>
        Nova Despesa
      </AppButton>
    </View>
  )
}