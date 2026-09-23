import { Image } from 'react-native'
import { Fragment } from 'react'

export const Header = () => {
  return (
    <Fragment>
      <Image source={require('@/assets/header-logo.png')} />
    </Fragment>
  )
}