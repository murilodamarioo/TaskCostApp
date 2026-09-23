import { FC, PropsWithChildren } from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { clsx } from 'clsx'
import { MaterialIcons } from '@expo/vector-icons'

import { colors } from '@/shared/colors'

type AppButtonMode = 'primary' | 'secondary' | 'danger'
type AppButtonIconSide = 'right' | 'left'

interface AppButtonParams extends TouchableOpacityProps {
  iconOnly?: boolean
  mode?: AppButtonMode
  iconName?: keyof typeof MaterialIcons.glyphMap
  iconSide?: AppButtonIconSide
  className?: string
}

const modeStyles: Record<AppButtonMode, string> = {
  primary: 'bg-green-base',
  secondary: 'bg-gray-600',
  danger: 'bg-gray-600'
}

const textModeStyles: Record<AppButtonMode, string> = {
  primary: 'text-gray-800',
  secondary: 'text-gray-200',
  danger: 'text-danger-light'
}

const iconColors: Record<AppButtonMode, string> = {
  primary: colors.gray[800],
  secondary: colors.gray[300],
  danger: colors['danger-light']
}

export const AppButton: FC<PropsWithChildren<AppButtonParams>> = ({
  children,
  iconOnly = false,
  mode = 'primary',
  iconName,
  iconSide,
  className,
  ...rest
}) => {

  const hasIcon = Boolean(iconName)

  return (
    <TouchableOpacity
      {...rest}
      className={clsx(
        'justify-center items-center h-button flex-row',
        iconOnly ?
          'h-[48px] w-[48px] rounded-full p-0'
          :
          'w-full px-5 py-3 rounded-full',
        hasIcon && !iconOnly && 'gap-2',
        modeStyles[mode],
        className
      )}
    >
      {hasIcon && iconSide === 'left' && (
        <MaterialIcons
          name={iconName}
          size={24}
          color={iconColors[mode]}
        />
      )}

      {!iconOnly && (
        <Text className={clsx(
          'text-base font-semibold', textModeStyles[mode],
        )}>
          {children}
        </Text>
      )}

      {hasIcon && iconSide === 'right' && (
        <MaterialIcons
          name={iconName}
          size={24}
          color={iconColors[mode]}
        />
      )}
    </TouchableOpacity>
  )
}