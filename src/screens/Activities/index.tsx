import { SafeAreaView } from 'react-native-safe-area-context'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

import { ActivityStackParamList } from '@/routes/PrivateRoutes/ActivityStackNavigator'

import { Header } from '@/components/Header'

import { ActivitiesInfo } from './ActivitiesInfo'

type ActivitiesProps = NativeStackScreenProps<
  ActivityStackParamList,
  'ActivityList'
>

export const Activities = ({ navigation }: ActivitiesProps) => {
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      className='flex-1 bg-gray-800 px-6 pt-10 pb-6 gap-4'
    >
      <Header />
      <ActivitiesInfo
        onSelectActivity={(activityId) =>
          navigation.navigate('ActivityExpenseList', { activityId })
        }
      />
    </SafeAreaView>
  )
}