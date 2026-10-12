import { MaterialIcons } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'

import { colors } from '@/shared/colors'
import { AppButton } from '@/components/AppButton'

interface ActivityExpenseListHeaderProps {
  onBack: () => void
}

export const ActivityExpenseListHeader = ({
  onBack
}: ActivityExpenseListHeaderProps) => {
  return (
    <View className='gap-3 relative'>
      <TouchableOpacity
        onPress={onBack}
        className='flex-row gap-1 items-center'
      >
        <MaterialIcons name='arrow-back' size={14} color={colors['green-light']} />
        <Text className='text-sm text-green-light'>Voltar</Text>
      </TouchableOpacity>

      <View className='gap-2'>
        <Text className='text-lg text-gray-100 font-semibold'>
          Nome da atividade
        </Text>
        <View className='flex-row'>
          <MaterialIcons name='calendar-today' size={16} color={colors.gray[300]} />
          <Text className='text-sm text-gray-300 ml-1'>
            12/09/2026
          </Text>
        </View>
      </View>

      <AppButton
        iconOnly
        iconSide='left'
        iconName='edit'
        mode='secondary'
        className='absolute right-0'
      />
    </View>
  )
}