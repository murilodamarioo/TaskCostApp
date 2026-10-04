import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState
} from 'react'

import { useAuthContext } from './auth.context'

import { ActivityListItem } from '@/shared/interfaces/https/activity/activity-list-response'
import { ActivityRequest } from '@/shared/interfaces/https/activity/activity-request'

import * as activityService from '@/shared/services/swift-expense-split/activity.service'

type ActivityContextType = {
  activities: ActivityListItem[]
  loading: boolean
  refreshActivities: () => Promise<void>
  fetchActivities: () => Promise<void>
  createActivity: (activity: ActivityRequest) => Promise<void>
}

export const ActivityContext = createContext(
  {} as ActivityContextType
)

export const ActivityContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [activities, setActivities] = useState<ActivityListItem[]>([])

  const { userId } = useAuthContext()

  const refreshActivities = async () => {
    setLoading(true)

    if (!userId) {
      setLoading(false)
      return
    }

    const activities = await activityService.fetchActivities(userId)

    setActivities(activities.activities)
    setLoading(false)

  }

  const fetchActivities = async () => {
    if (!userId) return

    const activities = await activityService.fetchActivities(userId)
    setActivities(activities.activities)
  }

  const createActivity = async (activity: ActivityRequest) => {
    await activityService.create(activity)
    await refreshActivities()
  }

  return (
    <ActivityContext.Provider
      value={{
        activities,
        loading,
        refreshActivities,
        fetchActivities,
        createActivity
      }}
    >
      {children}
    </ActivityContext.Provider>
  )
}

export const useActivityContext = () => {
  const context = useContext(ActivityContext)

  return context
}