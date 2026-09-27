import { SafeAreaView } from 'react-native-safe-area-context'

import { Header } from '@/components/Header'

import { ActivitiesInfo } from './ActivitiesInfo'

export const Activities = () => {
  return (
    <SafeAreaView className='flex-1 bg-gray-800 px-6 pt-10 pb-6 gap-4'>
      <Header />
      <ActivitiesInfo />
    </SafeAreaView>
  )
}