import { Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { format } from 'date-fns'

import { colors } from '@/shared/colors'
import { ActivityListItem } from '@/shared/interfaces/https/activity/activity-list-response'
import { FC } from 'react'

type ActivityCardProps = {
  activity: ActivityListItem
}

export const ActivityCard: FC<ActivityCardProps> = ({ activity }) => {
  const participantLabel =
    (activity.participantsAmount === 1) ?
      'pessoa'
      :
      'pessoas'
  const expenseLabel =
    (activity.expensesAmount === 0 || activity.expensesAmount > 1) ?
      'despesas'
      :
      'despesa'

  return (
    <View className='w-full bg-gray-700 rounded-[10px] p-4 mt-4'>
      <View className='flex-row justify-between items-center mb-3'>
        <Text className='text-base font-semibold text-gray-100'>
          {activity.name}
        </Text>
        <Text className='text-sm font-semibold text-gray-200'>
          R$ {(activity.totalAmountInCents / 100).toFixed(2).replace('.', ',')}
        </Text>
      </View>
      <View className='flex-row justify-between items-center border-t-2 border-gray-600 pt-4'>
        <View className='flex-row items-center gap-1'>
          <MaterialIcons name='calendar-today' size={16} color={colors.gray[400]} />
          <Text className='text-sm text-gray-400'>
            {format(new Date(activity.activityDate), 'dd/MM/yyyy')}
          </Text>
        </View>
        <View className='flex-row items-center gap-1'>
          <MaterialIcons name='person' size={16} color={colors.gray[400]} />
          <Text className='text-sm text-gray-400'>
            {activity.participantsAmount} {participantLabel}
          </Text>
        </View>
        <View className='flex-row items-center gap-1'>
          <MaterialIcons name='monetization-on' size={16} color={colors.gray[400]} />
          <Text className='text-sm text-gray-400'>
            {activity.expensesAmount} {expenseLabel}
          </Text>
        </View>
      </View>
    </View>
  )
}