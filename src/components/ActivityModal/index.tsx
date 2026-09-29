import {
  Modal,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import { FC, Fragment, useState } from 'react'
import { cssInterop } from 'nativewind'

import { BlurView } from 'expo-blur'

import { MaterialIcons } from '@expo/vector-icons'

import { colors } from '@/shared/colors'
import { AppButton } from '../AppButton'

cssInterop(BlurView, { className: 'style' })

interface Props {
  title?: string
  date?: Date
  isNew?: boolean
}

export const ActivityModal: FC<Props> = ({ title, date, isNew = true }) => {
  const [showModal, setShowModal] = useState<boolean>(true)

  const handleModal = () => setShowModal((prevState) => !prevState)

  return (
    <Modal visible={showModal} animationType='slide' transparent>
      <TouchableWithoutFeedback onPress={handleModal}>
        <View className='flex-1 justify-center items-center bg-black/50'>

          <BlurView
            className='absolute inset-0'
            intensity={20}
            tint='dark'
            pointerEvents='none'
          />

          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <View className='bg-gray-700 w-[90%] rounded-xl p-6 gap-6'>
              <View className='flex-row justify-between items-center'>
                <Text className='text-white text-lg'>
                  {isNew ? 'Nova atividade' : 'Editar atividade'}
                </Text>
                <MaterialIcons
                  name='close'
                  color={colors.gray[300]}
                  size={20}
                  onPress={handleModal}
                />
              </View>

              <View className='justify-center gap-2'>
                <TextInput
                  className='bg-gray-800 py-3 px-4 rounded-lg h-[48px] text-base text-white'
                  placeholderTextColor={colors.gray[400]}
                  placeholder='Título'
                />

                <View className='bg-gray-800 flex-row items-center rounded-lg'>
                  <MaterialIcons
                    color={colors.gray[400]}
                    name='calendar-month'
                    size={20}
                    className='ml-3'
                  />
                  <TextInput
                    className='flex-1 py-3 px-4 rounded-lg h-[48px] text-base text-white'
                    placeholderTextColor={colors.gray[400]}
                    placeholder='Data'
                  />
                </View>
              </View>

              <View className='flex-row justify-between items-center'>
                {isNew ?
                  <Fragment></Fragment>
                  :
                  <AppButton iconSide='right' iconOnly iconName='delete-outline' mode='danger' />
                }

                <AppButton className={!isNew ? 'w-[100]' : undefined}>
                  Salvar
                </AppButton>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

