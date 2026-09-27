import { Image, Text, TouchableOpacity } from 'react-native'
import { Fragment } from 'react'
import { useAuthContext } from '@/context/auth.context'

export const Header = () => {
  const { handleLogout } = useAuthContext()

  return (
    <Fragment>
      <Image source={require('@/assets/header-logo.png')} />

      <TouchableOpacity className='bg-white' onPress={handleLogout}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </Fragment>
  )
}