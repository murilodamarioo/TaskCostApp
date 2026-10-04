import {
  ActivityIndicator,
  Modal,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import { FC, Fragment, useState } from 'react'
import { cssInterop } from 'nativewind'
import * as Yup from 'yup'
import { format } from 'date-fns'

import { BlurView } from 'expo-blur'
import { MaterialIcons } from '@expo/vector-icons'

import { activitySchema } from './schema'

import { AppButton } from '../AppButton'
import { ErrorMessage } from '../ErrorMessage'

import { useActivityContext } from '@/context/activity.context'

import { colors } from '@/shared/colors'
import { formatDateInput, parseDateInput } from '@/shared/helpers/date-input'
import { ActivityRequest } from '@/shared/interfaces/https/activity/activity-request'
import { useErrorHandler } from '@/shared/hooks/useErrorHandler'


cssInterop(BlurView, { className: 'style' })

type ActivityForm = Omit<ActivityRequest, 'activityDate'> & {
  activityDate: string
}

type ValidationErrorsTypes = Partial<Record<keyof ActivityRequest, string>>

interface Props {
  title?: string
  date?: Date
  isNew?: boolean
  visible: boolean
  onClose: () => void
}

export const ActivityModal: FC<Props> = ({
  title,
  date,
  isNew = true,
  visible,
  onClose
}) => {
  const [loading, setLoading] = useState(false)
  const [validationErrors, setValidationErrors] = useState<ValidationErrorsTypes>()
  const [activity, setActivity] = useState<ActivityForm>({
    title: title ?? '',
    activityDate: date ? format(date, 'dd/MM/yyyy') : ''
  })

  const { createActivity } = useActivityContext()
  const { handleError } = useErrorHandler()

  const handleClose = () => {
    setActivity({
      title: '',
      activityDate: ''
    })
    setValidationErrors(undefined)
    onClose()
  }

  const handleCreateActivity = async () => {
    try {
      setLoading(true)

      const validatedActivity = await activitySchema.validate(activity, {
        abortEarly: false
      })

      const activityDate = parseDateInput(validatedActivity.activityDate)
      if (!activityDate) {
        setValidationErrors({
          activityDate: 'Formato esperado: dd/mm/aaaa'
        })
        return
      }

      await createActivity({
        ...validatedActivity,
        activityDate
      })
      handleClose()
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors: ValidationErrorsTypes = {}

        error.inner.forEach((err) => {
          if (err.path) {
            errors[err.path as keyof ActivityRequest] = err.message
          }
        })

        setValidationErrors(errors)
      } else {
        handleError(error, 'Falha ao criar transação')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal visible={visible} animationType='slide' transparent>
      <TouchableWithoutFeedback onPress={handleClose}>
        <View className='flex-1 justify-center items-center bg-black/50'>
          <BlurView
            className='absolute inset-0'
            intensity={20}
            tint='dark'
            pointerEvents='none'
          />

          <TouchableWithoutFeedback onPress={(event) => event.stopPropagation()}>
            <View className='bg-gray-700 w-[90%] rounded-xl p-6 gap-6'>
              <View className='flex-row justify-between items-center'>
                <Text className='text-white text-lg'>
                  {isNew ? 'Nova atividade' : 'Editar atividade'}
                </Text>

                <MaterialIcons
                  name='close'
                  color={colors.gray[300]}
                  size={20}
                  onPress={handleClose}
                />
              </View>

              <View className='justify-center gap-2'>
                {validationErrors?.title && (
                  <ErrorMessage>{validationErrors.title}</ErrorMessage>
                )}

                <TextInput
                  className='bg-gray-800 py-3 px-4 rounded-lg h-[48px] text-base text-white'
                  placeholderTextColor={colors.gray[400]}
                  placeholder='Título'
                  value={activity.title}
                  onChangeText={(value) =>
                    setActivity((previous) => ({ ...previous, title: value }))
                  }
                />

                {validationErrors?.activityDate && (
                  <ErrorMessage>{validationErrors.activityDate}</ErrorMessage>
                )}

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
                    value={activity.activityDate}
                    onChangeText={(value) =>
                      setActivity((previous) => ({
                        ...previous,
                        activityDate: formatDateInput(value)
                      }))
                    }
                    keyboardType='numeric'
                    maxLength={10}
                  />
                </View>
              </View>

              <View className='flex-row justify-between items-center'>
                {isNew ? (
                  <Fragment />
                ) : (
                  <AppButton
                    iconSide='right'
                    iconOnly
                    iconName='delete-outline'
                    mode='danger'
                  />
                )}

                <AppButton
                  onPress={handleCreateActivity}
                  className={!isNew ? 'w-[100px]' : undefined}
                >
                  {loading ? (
                    <ActivityIndicator color={colors.white} />
                  ) : (
                    'Salvar'
                  )}
                </AppButton>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}