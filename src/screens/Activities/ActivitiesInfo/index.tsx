import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { Fragment, useState } from 'react'

import { useActivityContext } from '@/context/activity.context'

import { ActivityModal } from '@/components/ActivityModal'
import { AppButton } from '@/components/AppButton'

import { colors } from '@/shared/colors'
import { ActivityCard } from '@/components/ActivityCard'
import { ActivityEmpty } from '../ActivityEmpty'

export const ActivitiesInfo = () => {
  const [showActivityModal, setShowActivityModal] = useState(false)

  const { activities, loading } = useActivityContext()

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
          className='flex-1'
          data={activities}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ActivityCard activity={item} />}
          refreshing={loading}
          contentContainerStyle={{ flexGrow: 1 }}
          ListEmptyComponent={
            loading ? (
              <View className='flex-1 justify-center items-center'>
                <ActivityIndicator color={colors.white} size='large' />
              </View>
            ) : (
              <ActivityEmpty />
            )
          }
        />
        {!loading && activities.length === 0 && (
          <AppButton
            iconName='add-circle-outline'
            iconSide='left'
            fullWidth={false}
            className='absolute bottom-[-32] right-0 z-10 w-[110px]'
            onPress={() => setShowActivityModal(true)}
          >
            Criar
          </AppButton>
        )}
      </View>
      <ActivityModal
        visible={showActivityModal}
        onClose={() => setShowActivityModal(false)}
      />
    </Fragment>
  )
}