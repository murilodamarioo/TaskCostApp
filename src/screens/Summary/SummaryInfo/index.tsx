import { Text, View } from 'react-native'
import { Fragment, useState } from 'react'

import MaterialIcons from '@expo/vector-icons/FontAwesome'

import { AppButton } from '@/components/AppButton'

import { colors } from '@/shared/colors'
import { ActivityModal } from '@/components/ActivityModal'

export const SummaryInfo = () => {
  const [showActivityModal, setShowActivityModal] = useState(false)

  return (
    <Fragment>
      <View className='gap-1'>
        <Text className='text-lg text-gray-100 font-bold'>
          Resumo
        </Text>
        <Text className='text-base text-gray-300'>
          Acompanhe as informações principais sobre
          suas atividades
        </Text>
      </View>
      <View className='flex-1 justify-center items-center gap-4'>
        <MaterialIcons name='pie-chart' size={24} color={colors.gray[400]} />
        <View className='w-[200]'>
          <Text className='text-sm text-gray-400 text-center mb-4 leading-6'>
            Para começar a acompanhar,
            crie uma atividade
          </Text>
          <AppButton
            iconName='add-circle-outline'
            iconSide='left'
            onPress={() => setShowActivityModal(true)}
          >
            Criar Atividade
          </AppButton>
        </View>
        <ActivityModal
          visible={showActivityModal}
          onClose={() => setShowActivityModal(false)}
        />
      </View>
    </Fragment>
  )
}