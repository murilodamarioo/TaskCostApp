import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Activities } from '@/screens/Activities'
import { ActivityExpenseList } from '@/screens/Activities/ActivityExpenseList'

export type ActivityStackParamList = {
  ActivityList: undefined
  ActivityExpenseList: { activityId: string }
}

export const ActivityStackNavigator = () => {
  const ActivityStack = createNativeStackNavigator<ActivityStackParamList>()

  return (
    <ActivityStack.Navigator screenOptions={{ headerShown: false }}>
      <ActivityStack.Screen name='ActivityList' component={Activities} />
      <ActivityStack.Screen name='ActivityExpenseList' component={ActivityExpenseList} />
    </ActivityStack.Navigator>
  )
}
