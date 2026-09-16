import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { useForm } from 'react-hook-form'
import { Fragment } from 'react'

import { AppButton } from '@/components/AppButton'
import { AppInput } from '@/components/AppInput'

import { PublicStackParamsList } from '@/routes/PublicRoutes'

export interface FormLoginParams {
  email: string
  password: string
}

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<FormLoginParams>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const navigation = useNavigation<NavigationProp<PublicStackParamsList>>()

  return (
    <Fragment>
      <Text className='self-center text-xl text-gray-100 font-bold mb-8'>
        Entre no app
      </Text>

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
        <AppButton>
          Entrar
        </AppButton>

        <View className='border-t-[1px] border-gray-600 items-center pt-8'>
          <Text className='text-sm text-gray-200 mb-4'>
            Ainda não tem cadastro?
          </Text>
          <AppButton mode='secondary' onPress={() => navigation.navigate('Register')}>
            Criar conta
          </AppButton>
        </View>
      </View>
    </Fragment>
  )
}