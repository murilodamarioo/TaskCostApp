import {
  Control,
  Controller,
  FieldValues,
  Path
} from 'react-hook-form'
import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useRef, useState } from 'react'

import { colors } from '@/shared/colors'
import clsx from 'clsx'

import { ErrorMessage } from '../ErrorMessage'

interface AppInputParams<T extends FieldValues> extends TextInputProps {
  control: Control<T>
  name: Path<T>
  leftIconName?: keyof typeof MaterialIcons.glyphMap
}

export const AppInput = <T extends FieldValues>({
  control,
  name,
  leftIconName,
  secureTextEntry,
  ...rest
}: AppInputParams<T>) => {
  const [showText, setShowText] = useState(secureTextEntry)
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<TextInput>(null)

  const checkFocus = () => {
    if (inputRef.current) {
      setIsFocused(inputRef.current.isFocused())
    }
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <View className='w-full mt-4'>
            <TouchableOpacity className={clsx(
              'flex-row items-center justify-between border-[1px] py-4 px-3 bg-gray-600 rounded-lg',
              isFocused ? 'border-white' : 'border-gray-600'
            )}>
              {leftIconName && (
                <MaterialIcons
                  name={leftIconName}
                  size={20}
                  color={isFocused ? colors.white : colors.gray[400]}
                  className='mr-3'
                />
              )}
              <TextInput
                value={value}
                onChangeText={onChange}
                placeholderTextColor={colors.gray[400]}
                onEndEditing={checkFocus}
                onFocus={checkFocus}
                ref={inputRef}
                className='flex-1 text-base text-white'
                {...rest}
              />

              {secureTextEntry && (
                <TouchableOpacity className='ml-3' onPress={() => setShowText((value) => !value)}>
                  <MaterialIcons
                    name={showText ? 'visibility' : 'visibility-off'}
                    size={20}
                    color={isFocused ? colors.white : colors.gray[400]}
                  />
                </TouchableOpacity>
              )}
            </TouchableOpacity>
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
          </View>
        )
      }}
    />
  )
}