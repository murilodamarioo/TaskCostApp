import { SafeAreaView } from 'react-native-safe-area-context'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

import { ActivityExpenseListHeader } from './ActivityExpenseListHeader'
import { ExpenseListEmptyState } from './ExpenseListEmptyState'
import type { ActivityStackParamList } from '@/routes/PrivateRoutes/ActivityStackNavigator'

type ActivityExpenseListProps = NativeStackScreenProps<
  ActivityStackParamList,
  'ActivityExpenseList'
>

export const ActivityExpenseList = ({
  navigation
}: ActivityExpenseListProps) => {

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      className='flex-1 bg-gray-800 pt-10 pb-6 px-6'
    >
      <ActivityExpenseListHeader onBack={() => navigation.goBack()} />
      <ExpenseListEmptyState />
    </SafeAreaView>
  )
}