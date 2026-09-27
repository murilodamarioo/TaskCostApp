import { Text, View } from 'react-native'
import { Fragment } from 'react'

import MaterialIcons from '@expo/vector-icons/FontAwesome'

import { colors } from '@/shared/colors'

export const ParticipantsInfo = () => {
  return (
    <Fragment>
      <View className='gap-1'>
        <Text className='text-lg text-gray-100 font-bold'>
          Participantes
        </Text>
        <Text className='text-base text-gray-300'>
          Pessoas com quem você já dividiu tarefas
        </Text>
      </View>
      <View className='flex-1 justify-center items-center gap-4'>
        <MaterialIcons name='users' size={24} color={colors.gray[400]} />
        <View className='w-[200]'>
          <Text className='text-sm text-gray-400 text-center leading-6'>
            Você ainda não adicionou
            participantes em atividades
          </Text>
        </View>
      </View>
    </Fragment>
  )
}