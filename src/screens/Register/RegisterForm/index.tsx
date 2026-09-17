import { Fragment } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

import { PublicStackParamsList } from '@/routes/PublicRoutes'
import { Text, View } from 'react-native'
import { AppInput } from '@/components/AppInput'
import { AppButton } from '@/components/AppButton'

interface RegisterParams {
  name: string
  email: string
  password: string
}

export const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<RegisterParams>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const navigation = useNavigation<NavigationProp<PublicStackParamsList>>()

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
        <AppButton>
          Cadastrar
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