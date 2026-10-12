import { ActivityIndicator, FlatList, RefreshControl, Text, View } from 'react-native'
import { Fragment, useEffect, useState } from 'react'

import { ActivityEmpty } from '../ActivityEmpty'

import { useActivityContext } from '@/context/activity.context'

import { ActivityModal } from '@/components/ActivityModal'
import { AppButton } from '@/components/AppButton'
import { ActivityCard } from '@/components/ActivityCard'

import { useErrorHandler } from '@/shared/hooks/useErrorHandler'
import { colors } from '@/shared/colors'

interface ActivitiesInfoProps {
  onSelectActivity: (activityId: string) => void
}

export const ActivitiesInfo = ({
  onSelectActivity
}: ActivitiesInfoProps) => {
  const [showActivityModal, setShowActivityModal] = useState(false)

  const {
    activities,
    loadings,
    fetchActivities,
    refreshActivities,
    handleLoadings
  } = useActivityContext()
  const { handleError } = useErrorHandler()

  const handleFetchInitialActivities = async () => {
    try {
      handleLoadings({ key: 'initial', value: true })
      await fetchActivities()
    } catch (error) {
      handleError(error, 'Falha ao buscar atividades')
    } finally {
      handleLoadings({ key: 'initial', value: false })
    }
  }

  const handleRefreshActivities = async () => {
    try {
      handleLoadings({ key: 'initial', value: true })
      await refreshActivities()
    } catch (error) {
      handleError(error, 'Falha ao recarregar as transações')
    } finally {
      handleLoadings({ key: 'refresh', value: false })
    }
  }

  useEffect(() => {
    Promise.all([
      handleFetchInitialActivities()
    ])
  }, [])

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

      <View className='relative flex-1'>
        <FlatList
          data={activities}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ActivityCard
              activity={item}
              onPress={() => onSelectActivity(item.id)}
            />
          )}
          contentContainerStyle={{ flexGrow: 1 }}
          refreshControl={
            <RefreshControl
              refreshing={loadings.refresh}
              onRefresh={handleRefreshActivities}
            />
          }
          ListEmptyComponent={
            loadings.initial ? (
              <View className='flex-1 justify-center items-center'>
                <ActivityIndicator color={colors.white} size='large' />
              </View>
            ) : (
              <ActivityEmpty />
            )
          }
        />

        <AppButton
          iconName='add-circle-outline'
          iconSide='left'
          fullWidth={false}
          className='absolute bottom-0 right-0 z-10 w-[110px]'
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