import { SafeAreaView } from 'react-native-safe-area-context'

import { Header } from '@/components/Header'

export const Summary = () => {
  return (
    <SafeAreaView className='flex-1 bg-gray-800 px-6 pt-10 pb-6'>
      <Header />
    </SafeAreaView>
  )
}