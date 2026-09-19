import { FC, Fragment, useEffect } from 'react'
import { ActivityIndicator, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { colors } from '@/shared/colors'
import { useAuthContext } from '@/context/auth.context'

interface Props {
  setLoading: (value: boolean) => void
}

export const Loading: FC<Props> = ({ setLoading }) => {
  const { restoreSession, handleLogout } = useAuthContext()

  useEffect(() => {
    (async () => {
      try {
        const user = await restoreSession()

        if (!user) await handleLogout()
      } catch (error) {

      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return (
    <SafeAreaView className='bg-gray-800 items-center justify-center flex-1'>
      <Fragment>
        <Image source={require('@/assets/LoadingLogo.png')} />
        <ActivityIndicator color={colors.white} className='mt-20' />
      </Fragment>
    </SafeAreaView>
  )
}