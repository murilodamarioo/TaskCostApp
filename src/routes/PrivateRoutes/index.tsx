import { Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialIcons from '@expo/vector-icons/FontAwesome'

import clsx from 'clsx'

import { Summary } from '@/screens/Summary'
import { Activities } from '@/screens/Activities'
import { Participants } from '@/screens/Participants'

import { colors } from '@/shared/colors'

export type PrivateStackParamsList = {
  Summary: undefined
  Activities: undefined
  Participants: undefined
}

export const PrivateRoutes = () => {
  const PrivateTab = createBottomTabNavigator<PrivateStackParamsList>()

  return (
    <PrivateTab.Navigator
      initialRouteName='Summary'
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.gray[700],
          borderTopColor: colors.gray[700],
          height: 97,
          paddingTop: 16,
        },
        tabBarActiveTintColor: colors['green-base'],
        tabBarInactiveTintColor: colors.gray[400],
        tabBarLabelStyle: {
          fontSize: 14,
        },
      }}
    >
      <PrivateTab.Screen
        name='Activities'
        component={Activities}
        options={{
          title: 'Atividades',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='list' color={color} size={24} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              className={clsx('text-sm mt-1', focused ? 'text-white' : 'text-gray-400')}
            >
              Atividades
            </Text>
          )
        }}
      />

      <PrivateTab.Screen
        name='Summary'
        component={Summary}
        options={{
          tabBarIcon: ({ color}) => (
            <MaterialIcons name='pie-chart' color={color} size={24} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              className={clsx('text-sm mt-1', focused ? 'text-white' : 'text-gray-400')}
            >
              Resumo
            </Text>
          )
        }}
      />

      <PrivateTab.Screen
        name='Participants'
        component={Participants}
        options={{
          tabBarIcon: ({ color}) => (
            <MaterialIcons name='users' color={color} size={24} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              className={clsx('text-sm mt-1', focused ? 'text-white' : 'text-gray-400')}
            >
              Participantes
            </Text>
          )
        }}
      />
    </PrivateTab.Navigator>
  )
}