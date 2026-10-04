import { Text, View } from 'react-native'
import { Fragment, useState } from 'react'

import MaterialIcons from '@expo/vector-icons/FontAwesome'

import { ActivityModal } from '@/components/ActivityModal'
import { AppButton } from '@/components/AppButton'

import { colors } from '@/shared/colors'

export const ActivitiesInfo = () => {
  const [showActivityModal, setShowActivityModal] = useState(false)

  return (
    <Fragment>
      <View className='gap-1'>
        <Text className='text-lg text-gray-100 font-bold'>
          Atividades
        </Text>
        <Text className='text-base text-gray-300'>
          Organize suas despesas divididas
        </Text>
      </View>
      <View className='flex-1 justify-center items-center gap-4'>
        <MaterialIcons name='list' size={24} color={colors.gray[400]} />
        <View className='w-[150]'>
          <Text className='text-sm text-gray-400 text-center mb-4 leading-6'>
            Você ainda não tem atividades criadas
          </Text>

        </View>
        <AppButton
          iconName='add-circle-outline'
          iconSide='left'
          fullWidth={false}
          className='w-[110px] absolute bottom-[-24px] right-0 z-10'
          onPress={() => setShowActivityModal(true)}
        >
          Criar
        </AppButton>
      </View>
      <ActivityModal
        visible={showActivityModal}
        onClose={() => setShowActivityModal(false)}
      />
    </Fragment>
  )
}