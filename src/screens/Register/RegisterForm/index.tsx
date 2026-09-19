import { Fragment } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { schema } from '../schema'

import { useAuthContext } from '@/context/auth.context'

import { PublicStackParamsList } from '@/routes/PublicRoutes'

import { AppInput } from '@/components/AppInput'
import { AppButton } from '@/components/AppButton'

import { colors } from '@/shared/colors'

export interface FormRegisterParams {
  name: string
  email: string
  password: string
}

export const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<FormRegisterParams>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })

  const { handleRegister } = useAuthContext()

  const navigation = useNavigation<NavigationProp<PublicStackParamsList>>()

  const onSubmit = async (userData: FormRegisterParams) => {
    await handleRegister(userData)
  }

  return (
    <Fragment>
      <Text className='self-center text-xl text-gray-100 font-bold mb-8'>
        Crie sua conta
      </Text>

      <AppInput
        control={control}
        name='name'
        placeholder='Nome'
        leftIconName='person'
      />

      <AppInput
        control={control}
        name='email'
        placeholder='E-mail'
        leftIconName='email'
      />

      <AppInput
        control={control}
        name='password'
        placeholder='Senha'
        leftIconName='password'
        secureTextEntry
      />

      <View className='mt-8 gap-8'>
        <AppButton onPress={handleSubmit(onSubmit)}>
          {isSubmitting ? (<ActivityIndicator color={colors.white} />
          ) : (
            'Cadastrar'
          )}
        </AppButton>

        <View className='items-center pt-8 border-t-[1px] border-gray-600'>
          <Text className='text-sm text-gray-200 mb-4'>
            Já tem cadastro?
          </Text>
          <AppButton mode='secondary' onPress={() => navigation.navigate('Login')}>
            Entrar na conta
          </AppButton>
        </View>
      </View>
    </Fragment>
  )
}